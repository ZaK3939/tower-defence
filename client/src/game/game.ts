import Phaser from "phaser";

import { AUDIO_VOLUME, CONTAINER_ID, DEBUG_MODS, SETTINGS } from "@const/game";
import { Analytics } from "@lib/analytics";
import { Tutorial } from "@lib/tutorial";
import { Storage } from "@lib/storage";
import { eachEntries, registerScript } from "@lib/utils";

import {
  GameAdType,
  GameDataPayload,
  GameDifficulty,
  GameEvents,
  GameFlag,
  GameScene,
  GameSettings,
  GameStat,
  GameState,
  IGame,
} from "@type/game";
import { MenuPage } from "@type/menu";
import { IScreen } from "@type/screen";
import { IWorld, WorldEvents } from "@type/world";
import { ITutorial } from "@type/tutorial";
import { IAnalytics } from "@type/analytics";
import { shaders } from "../shaders";
import { Gameclear } from "@game/scenes/gameclear";
import { Gameover } from "@game/scenes/gameover";
import { Screen } from "@game/scenes/screen";
import { Menu } from "@game/scenes/menu";
import { System } from "@game/scenes/system";
import { World } from "@scene/world";
import { IStorage, StorageSave, StorageSavePayload } from "@type/storage";
import { INetwork } from "@type/network";
import { Network } from "@lib/network";
import { Wawa, defaultWawa } from "@type/wawa";
import { stopBattleMusic } from "@lib/music";

export class Game extends Phaser.Game implements IGame {
  readonly tutorial: ITutorial;

  readonly analytics: IAnalytics;

  readonly network: INetwork;

  readonly storage: IStorage;

  private flags: string[];

  public difficulty: GameDifficulty = GameDifficulty.EASY;

  private _state: GameState = GameState.IDLE;

  public get state() {
    return this._state;
  }

  private set state(v) {
    this._state = v;
  }

  private _screen: IScreen;

  public get screen() {
    return this._screen;
  }

  private set screen(v) {
    this._screen = v;
  }

  private _world: IWorld;

  public get world() {
    return this._world;
  }

  private set world(v) {
    this._world = v;
  }

  private _settings: Partial<Record<GameSettings, string>> = {};

  public get settings() {
    return this._settings;
  }

  private set settings(v) {
    this._settings = v;
  }

  private _usedSave: Nullable<StorageSave> = null;

  public get usedSave() {
    return this._usedSave;
  }

  private set usedSave(v) {
    this._usedSave = v;
  }

  private _isPVP: boolean = false;

  public get isPVP() {
    return this._isPVP;
  }

  private set isPVP(v) {
    this._isPVP = v;
  }

  private _joinGame: boolean = false;

  public get joinGame() {
    return this._joinGame;
  }

  private set joinGame(v) {
    this._joinGame = v;
  }

  private _address: `0x${string}` | undefined = undefined;

  public get address() {
    return this._address;
  }

  private set address(v) {
    this._address = v;
  }

  private _wawa: Wawa | undefined = undefined;

  public get wawa() {
    return this._wawa;
  }

  private set wawa(v) {
    this._wawa = v;
  }

  constructor() {
    super({
      scene: [System, World, Screen, Menu, Gameover, Gameclear],
      pixelArt: true,
      autoRound: true,
      disableContextMenu: true,
      parent: CONTAINER_ID,
      transparent: true,
      scale: {
        mode: Phaser.Scale.RESIZE,
      },
      physics: {
        default: "arcade",
        arcade: {
          debug: DEBUG_MODS.basic,
          fps: 60,
          gravity: { y: 0 },
        },
      },
    });

    this.tutorial = new Tutorial();
    this.analytics = new Analytics();
    this.storage = new Storage();
    this.network = new Network();

    this.readFlags();
    this.readSettings();

    if (this.isFlagEnabled(GameFlag.ADS)) {
      registerScript("https://sdk.crazygames.com/crazygames-sdk-v2.js");
    }

    this.events.on(Phaser.Core.Events.READY, () => {
      this.screen = <IScreen>this.scene.getScene(GameScene.SCREEN);
      this.world = <IWorld>this.scene.getScene(GameScene.WORLD);

      this.sound.setVolume(AUDIO_VOLUME);

      this.registerShaders();
    });

    this.events.on(
      `${GameEvents.UPDATE_SETTINGS}.${GameSettings.AUDIO}`,
      (value: string) => {
        this.sound.mute = value === "off";
      }
    );

    this.events.on(
      `${GameEvents.UPDATE_SETTINGS}.${GameSettings.TUTORIAL}`,
      (value: string) => {
        if (value === "on") {
          this.tutorial.enable();
        } else {
          this.tutorial.disable();
        }
      }
    );

    window.onerror = (message, path, line, column, error) => {
      if (error) {
        this.analytics.trackError(error);
      } else if (typeof message === "string") {
        this.analytics.trackError(new Error(message));
      }

      return false;
    };
  }

  public async loadPayload() {
    return this.storage.init().then(() => this.storage.load());
  }

  public pauseGame() {
    if (this.state !== GameState.STARTED) {
      return;
    }

    this.state = GameState.PAUSED;

    this.world.scene.pause();
    this.screen.scene.pause();

    this.scene.systemScene.scene.launch(GameScene.MENU, {
      defaultPage: this.device.os.desktop
        ? MenuPage.CONTROLS
        : MenuPage.ABOUT_GAME,
    });
  }

  public resumeGame() {
    if (this.state !== GameState.PAUSED) {
      return;
    }

    this.state = GameState.STARTED;

    this.scene.systemScene.scene.stop(GameScene.MENU);

    this.world.scene.resume();
    this.screen.scene.resume();
  }

  public continueGame(save: StorageSave) {
    if (this.state !== GameState.IDLE) {
      return;
    }

    this.usedSave = save;

    this.loadDataPayload(this.usedSave.payload.game);

    this.world.scene.restart(this.usedSave.payload.level);

    this.world.events.once(Phaser.Scenes.Events.CREATE, () => {
      this.startGame();
    });
  }

  public startNewGame(wawa?: Wawa, address?: `0x${string}` | undefined) {
    if (this.state !== GameState.IDLE) {
      return;
    }

    this.usedSave = null;
    this.address = address;
    this.wawa = wawa === defaultWawa ? undefined : wawa;
    this.startGame(undefined, wawa);
  }

  public startNewPvPGame(name?: string, wawa?: Wawa) {
    if (this.state !== GameState.IDLE) {
      return;
    }

    this.usedSave = null;
    this.isPVP = true;
    this.wawa = wawa === defaultWawa ? undefined : wawa;
    this.network
      .connect(this, name)
      .then(() => {
        console.log("Connected to the server successfully!");
        this.startGame(undefined, wawa);

        this.network.sendPlayerGameState(this);
      })
      .catch((error) => {
        console.error("Failed to connect to the server:", error);
      });
  }

  public joinPvPGame(name?: string) {
    if (this.state !== GameState.IDLE) {
      return;
    }

    this.usedSave = null;
    this.isPVP = true;
    this.joinGame = true;

    this.network
      .join(this, name)
      .then(() => {
        console.log("Connected to the server successfully!");
        this.events.once(
          WorldEvents.WORLD_UPDATE,
          (payload: StorageSavePayload) => {
            console.log("game data", payload);
            this.loadDataPayload(payload.game);
            this.world.scene.restart(payload.level);
            this.world.events.once(Phaser.Scenes.Events.CREATE, () => {
              this.startGame(payload, payload.player?.wawa);
            });
          }
        );
      })
      .catch((error) => {
        console.error("Failed to connect to the server:", error);
      });
  }

  private startGame(payload?: StorageSavePayload, wawa?: Wawa) {
    if (this.state !== GameState.IDLE) {
      return;
    }

    if (!this.scale.isFullscreen && !this.device.os.desktop && !IS_DEV_MODE) {
      this.scale.startFullscreen();
    }
    this.state = GameState.STARTED;

    if (!this.isSettingEnabled(GameSettings.TUTORIAL) || this.isPVP) {
      this.tutorial.disable();
    }

    this.scene.systemScene.scene.stop(GameScene.MENU);
    this.scene.systemScene.scene.launch(GameScene.SCREEN);

    if (!this.joinGame) {
      this.world.start(wawa);
    } else {
      this.world.join(payload);
    }
    if (!IS_DEV_MODE) {
      window.onbeforeunload = function confirmLeave() {
        return "Leave game?";
      };
    }
  }

  public stopGame() {
    if (this.state === GameState.IDLE) {
      return;
    }

    if (this.state === GameState.FINISHED) {
      this.scene.systemScene.scene.stop(GameScene.GAMEOVER);
    }
    if (this.isPVP) {
      this.network.leave();
    }
    this.state = GameState.IDLE;

    this.world.stop();
    this.world.scene.restart();

    stopBattleMusic(this.world);
    this.tutorial.reset();

    this.scene.systemScene.scene.stop(GameScene.SCREEN);
    this.scene.systemScene.scene.launch(GameScene.MENU, {
      defaultPage: MenuPage.NEW_GAME,
    });

    this.showAd(GameAdType.MIDGAME);

    if (!IS_DEV_MODE) {
      window.onbeforeunload = null;
    }
  }

  public finishGame() {
    if (this.state !== GameState.STARTED) {
      return;
    }
    if (this.isPVP) {
      this.network.leave();
    }
    this.state = GameState.FINISHED;

    this.events.emit(GameEvents.FINISH);

    const record = this.getRecordStat();
    const stat = this.getCurrentStat();

    if (!IS_DEV_MODE) {
      this.writeBestStat(stat, record);
    }
    stopBattleMusic(this.world);
    this.scene.systemScene.scene.stop(GameScene.SCREEN);
    this.scene.systemScene.scene.launch(GameScene.GAMEOVER, { stat, record });

    if (!this.isPVP) {
      this.analytics.trackEvent({
        world: this.world,
        address: this.address,
        wawa: this.wawa,
        stat: stat,
        success: false,
      });

      this.analytics.sendEvent({
        world: this.world,
        address: this.address,
        wawa: this.wawa,
        stat: stat,
        success: false,
      });
    }
  }

  public clearGame() {
    if (this.state !== GameState.STARTED) {
      return;
    }
    if (this.isPVP) {
      this.network.leave();
    }
    this.state = GameState.FINISHED;

    this.events.emit(GameEvents.FINISH);

    const record = this.getRecordStat();
    const stat = this.getCurrentStat();

    if (!IS_DEV_MODE) {
      this.writeBestStat(stat, record);
    }
    stopBattleMusic(this.world);

    this.scene.systemScene.scene.stop(GameScene.SCREEN);
    this.scene.systemScene.scene.launch(GameScene.GAMECLEAR, { stat, record });

    if (!this.isPVP) {
      this.analytics.trackEvent({
        world: this.world,
        address: this.address,
        wawa: this.wawa,
        stat: stat,
        success: true,
      });

      this.analytics.sendEvent({
        world: this.world,
        address: this.address,
        wawa: this.wawa,
        stat: stat,
        success: true,
      });
    }
  }

  public getDifficultyMultiplier() {
    switch (this.difficulty) {
      case GameDifficulty.EASY:
        return 0.8;
      case GameDifficulty.HARD:
        return 1.3;
      default:
        return 1.0;
    }
  }

  public updateSetting(key: GameSettings, value: string) {
    this.settings[key] = value;
    localStorage.setItem(`SETTINGS.${key}`, value);

    this.events.emit(`${GameEvents.UPDATE_SETTINGS}.${key}`, value);
  }

  public isSettingEnabled(key: GameSettings) {
    return this.settings[key] === "on";
  }

  private readSettings() {
    eachEntries(GameSettings, (key) => {
      this.settings[key] =
        localStorage.getItem(`SETTINGS.${key}`) ?? SETTINGS[key].default;
    });
  }

  public isFlagEnabled(key: GameFlag) {
    return this.flags.includes(key);
  }

  private readFlags() {
    const query = new URLSearchParams(window.location.search);
    const rawFlags = query.get("flags");

    this.flags = rawFlags?.toUpperCase().split(",") ?? [];
  }

  public showAd(type: GameAdType, callback?: () => void) {
    if (!this.isFlagEnabled(GameFlag.ADS)) {
      return;
    }

    // @ts-ignore
    window.CrazyGames?.SDK?.ad?.requestAd(type, {
      adStarted: () => {
        this.pause();
      },
      adFinished: () => {
        this.resume();
        callback?.();
      },
      adError: (error: any) => {
        console.warn(`Error ${type} ad:`, error);
      },
    });
  }

  private getRecordStat(): Nullable<GameStat> {
    try {
      const recordValue = localStorage.getItem(`BEST_STAT.${this.difficulty}`);

      return recordValue && JSON.parse(recordValue);
    } catch (error) {
      return null;
    }
  }

  private writeBestStat(stat: GameStat, record: Nullable<GameStat>) {
    const params = Object.keys(stat) as (keyof GameStat)[];
    const betterStat = params.reduce(
      (curr, param) => ({
        ...curr,
        [param]: Math.max(stat[param], record?.[param] ?? 0),
      }),
      {}
    );

    localStorage.setItem(
      `BEST_STAT.${this.difficulty}`,
      JSON.stringify(betterStat)
    );
  }

  private getCurrentStat(): GameStat {
    return {
      score: this.world.player.score,
      waves: this.world.wave.number - 1,
      kills: this.world.player.kills,
      lived: this.world.getTime() / 1000 / 60,
    };
  }

  public getDataPayload(): GameDataPayload {
    return {
      difficulty: this.difficulty,
      tutorial: this.tutorial.progress,
    };
  }

  private loadDataPayload(data: GameDataPayload) {
    this.difficulty = data.difficulty;
    this.tutorial.progress = data.tutorial;
  }

  private registerShaders() {
    const renderer = this.renderer as Phaser.Renderer.WebGL.WebGLRenderer;

    eachEntries(shaders, (name, Shader) => {
      renderer.pipelines.addPostPipeline(name, Shader);
    });
  }
}
