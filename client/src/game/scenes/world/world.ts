import Phaser from "phaser";
import { Interface } from "phaser-react-ui";
import { v4 as uuidv4 } from "uuid";

import { DIFFICULTY } from "@const/world/difficulty";
import { ENEMIES } from "@const/world/entities/enemies";
import {
  ENEMY_SPAWN_DISTANCE_FROM_BUILDING,
  ENEMY_SPAWN_DISTANCE_FROM_PLAYER,
  ENEMY_SPAWN_POSITIONS,
  ENEMY_SPAWN_POSITIONS_GRID,
} from "@const/world/entities/enemy";
import { LEVEL_PLANETS } from "@const/world/level";
import { Crystal } from "@game/scenes/world/entities/crystal";
import { Stair } from "@game/scenes/world/entities/stair";
import { Assistant } from "@game/scenes/world/entities/npc/variants/assistant";
import { Player } from "@game/scenes/world/entities/player";
import { Scene } from "..";
import { aroundPosition, sortByDistance } from "@lib/utils";
import { Camera } from "@game/scenes/world/camera";
import { WorldUI } from "@game/scenes/world/interface";
import { Level } from "@game/scenes/world/level";

import { GameEvents, GameScene, GameState } from "@type/game";
import { LiveEvents } from "@type/live";
import { IWorld, WorldDataPayload, WorldEvents, WorldHint } from "@type/world";
import { IBuilder } from "@type/world/builder";
import { ICamera } from "@type/world/camera";
import { EntityType } from "@type/world/entities";
import { BuildingVariant, IBuilding } from "@type/world/entities/building";
import { IAssistant } from "@type/world/entities/npc/assistant";
import { EnemyVariant, IEnemy } from "@type/world/entities/npc/enemy";
import { IPlayer, PlayerSkill } from "@type/world/entities/player";
import { ISprite } from "@type/world/entities/sprite";
import {
  ILevel,
  LevelData,
  LevelPlanet,
  SpawnTarget,
  Vector2D,
} from "@type/world/level";
import { IWave, WaveEvents } from "@type/world/wave";
import { Builder } from "./builder";
import { Wave } from "./wave";
import { NoticeType } from "@type/screen";
import { ICrystal } from "@type/world/entities/crystal";

export class World extends Scene implements IWorld {
  private entityGroups: Record<EntityType, Phaser.GameObjects.Group>;

  private _player: IPlayer;

  public get player() {
    return this._player;
  }

  private set player(v) {
    this._player = v;
  }

  private _assistant: Nullable<IAssistant> = null;

  public get assistant() {
    return this._assistant;
  }

  private set assistant(v) {
    this._assistant = v;
  }

  private _level: ILevel;

  public get level() {
    return this._level;
  }

  private set level(v) {
    this._level = v;
  }

  private _wave: IWave;

  public get wave() {
    return this._wave;
  }

  private set wave(v) {
    this._wave = v;
  }

  private _builder: IBuilder;

  public get builder() {
    return this._builder;
  }

  private set builder(v) {
    this._builder = v;
  }

  private _camera: ICamera;

  public get camera() {
    return this._camera;
  }

  private set camera(v) {
    this._camera = v;
  }

  public enemySpawnPositions: Vector2D[] = [];

  private enemySpawnPositionsAnalog: Vector2D[] = [];

  private lifecyle: Phaser.Time.TimerEvent;

  private currentHintId: Nullable<string> = null;

  private _deltaTime: number = 1;

  public get deltaTime() {
    return this._deltaTime;
  }

  private set deltaTime(v) {
    this._deltaTime = v;
  }

  private _isUpStair: boolean = false;

  public get isUpStair() {
    return this._isUpStair;
  }

  private set isUpStair(v) {
    this._isUpStair = v;
  }

  private _stairNumber: number = 1;

  public get stairNumber() {
    return this._stairNumber;
  }

  private set stairNumber(v) {
    this._stairNumber = v;
  }

  constructor() {
    super(GameScene.WORLD);
  }

  public create(data: LevelData) {
    this.input.setPollAlways();

    this.lifecyle = this.time.addEvent({
      delay: Number.MAX_SAFE_INTEGER,
      loop: true,
      paused: true,
    });

    this.level = new Level(this, data);
    this.camera = new Camera(this);

    this.generateEnemySpawnPositions();
  }

  public start() {
    new Interface(this, WorldUI);

    this.camera.addZoomControl();

    this.resetTime();

    this.addWaveManager();
    this.addBuilder();

    this.addEntityGroups();
    this.addPlayer();
    this.addAssistant();
    this.addCrystals();
    this.addStair();
    if (this.game.usedSave) {
      this.loadDataPayload(this.game.usedSave.payload.world);
    }
  }

  public getStair() {
    this.game.screen.notice(NoticeType.INFO, `You have reached 2nd floor`);
    this.isUpStair = true;
  }

  public finishWorld() {
    this.game.screen.notice(
      NoticeType.INFO,
      `You have reached beta versions goal`
    );
    this.isUpStair = true;
  }

  private reCreateLevel() {
    this.level.resetProperties();
    this.level = new Level(this, {
      planet:
        this.level.planet !== LevelPlanet.CRYPTO
          ? LevelPlanet.CRYPTO
          : LevelPlanet.DUNGEONS,
    });
  }

  public stop() {
    this.wave?.destroy();
    this.builder?.destroy();
  }

  public update(time: number, delta: number) {
    if (this.game.state !== GameState.STARTED) {
      return;
    }
    this.deltaTime = delta;
    this.player.update();
    this.builder.update();
    this.wave.update();

    if (this.isUpStair) {
      this.stairNumber++;
      this.builder.removeAllBuildings();
      this.removeCrystals();
      this.removeEnemies();
      this.reCreateLevel();

      const positions = this.level.readSpawnPositions(SpawnTarget.PLAYER);
      this.player.changePosition(Phaser.Utils.Array.GetRandom(positions));
      const positionAtMatrix = aroundPosition(
        this.player.positionAtMatrix
      ).find((spawn) => {
        const biome = this.level.map.getAt(spawn);
        return biome?.solid;
      });
      this.assistant?.changePosition(positionAtMatrix!);
      this.isUpStair = false;

      this.getExtraTime();
    }
  }

  public showHint(hint: WorldHint) {
    this.currentHintId = uuidv4();
    this.events.emit(WorldEvents.SHOW_HINT, hint);

    return this.currentHintId;
  }

  public hideHint(id?: string) {
    if (!id || id === this.currentHintId) {
      this.events.emit(WorldEvents.HIDE_HINT);
      this.currentHintId = null;
    }
  }

  public getTime() {
    return Math.floor(this.lifecyle.getElapsed());
  }

  public isTimePaused() {
    return this.lifecyle.paused;
  }

  public setTimePause(state: boolean) {
    this.lifecyle.paused = state;
  }

  private getExtraTime() {
    this.lifecyle.elapsed = this.lifecyle.elapsed - 40000;
  }

  private resetTime() {
    this.setTimePause(false);
    this.lifecyle.elapsed = this.game.usedSave?.payload.world.time ?? 0;
  }

  public getResourceExtractionSpeed() {
    const generators = this.builder.getBuildingsByVariant(
      BuildingVariant.STAKING
    );
    const countPerSecond = generators.reduce(
      (current, generator) =>
        current + (1 / generator.getActionsDelay()) * 1000,
      0
    );

    return countPerSecond;
  }

  public addEntity(
    type: EntityType,
    gameObject: Phaser.GameObjects.GameObject
  ) {
    this.add.existing(gameObject);
    this.entityGroups[type].add(gameObject);
  }

  public getEntitiesGroup(type: EntityType) {
    return this.entityGroups[type];
  }

  public getEntities<T = Phaser.GameObjects.GameObject>(type: EntityType) {
    return this.entityGroups[type].getChildren() as T[];
  }

  public spawnEnemy(variant: EnemyVariant): Nullable<IEnemy> {
    const EnemyInstance = ENEMIES[variant];
    const positionAtMatrix = this.getEnemySpawnPosition();
    const enemy: IEnemy = new EnemyInstance(this, { positionAtMatrix });

    return enemy;
  }

  private removeEnemies() {
    const enemies = this.getEntities<IEnemy>(EntityType.ENEMY);
    enemies.forEach((enemy) => {
      this.entityGroups[EntityType.ENEMY].remove(enemy, true, true);
      enemy.destroy();
    });
  }

  private generateEnemySpawnPositions() {
    this.enemySpawnPositions = this.level.readSpawnPositions(
      SpawnTarget.ENEMY,
      ENEMY_SPAWN_POSITIONS_GRID
    );

    this.enemySpawnPositionsAnalog = [];
    for (let x = 0; x < this.level.map.width; x++) {
      for (let y = 0; y < this.level.map.height; y++) {
        if (
          x === 0 ||
          x === this.level.map.width - 1 ||
          y === 0 ||
          y === this.level.map.height - 1
        ) {
          this.enemySpawnPositionsAnalog.push({ x, y });
        }
      }
    }
  }

  public getEnemySpawnPosition() {
    const buildings = this.getEntities<IBuilding>(EntityType.BUILDING);
    let freePositions = this.enemySpawnPositions.filter(
      (position) =>
        Phaser.Math.Distance.BetweenPoints(
          position,
          this.player.positionAtMatrix
        ) >= ENEMY_SPAWN_DISTANCE_FROM_PLAYER &&
        buildings.every(
          (building) =>
            Phaser.Math.Distance.BetweenPoints(
              position,
              building.positionAtMatrix
            ) >= ENEMY_SPAWN_DISTANCE_FROM_BUILDING
        )
    );

    if (freePositions.length === 0) {
      freePositions = this.enemySpawnPositionsAnalog;
    }

    const closestPositions = sortByDistance(
      freePositions,
      this.player.positionAtMatrix
    ).slice(0, ENEMY_SPAWN_POSITIONS);
    const positionAtMatrix = Phaser.Utils.Array.GetRandom(closestPositions);

    return positionAtMatrix;
  }

  public getFuturePosition(sprite: ISprite, seconds: number): Vector2D {
    const fps = this.game.loop.actualFps;
    const drag = 0.3 ** (1 / fps);
    const per = 1 - drag ** (seconds * fps);
    const offset = {
      x: ((sprite.body.velocity.x / fps) * per) / (1 - drag),
      y: ((sprite.body.velocity.y / fps) * per) / (1 - drag),
    };

    return {
      x: sprite.body.center.x + offset.x,
      y: sprite.body.center.y + offset.y,
    };
  }

  public getDataPayload(): WorldDataPayload {
    return {
      time: this.getTime(),
      crystals: this.getEntities<ICrystal>(EntityType.CRYSTAL).map((crystal) =>
        crystal.getDataPayload()
      ),
      buildings: this.getEntities<IBuilding>(EntityType.BUILDING).map(
        (building) => building.getDataPayload()
      ),
    };
  }

  private loadDataPayload(data: WorldDataPayload) {
    data.buildings.forEach((buildingData) => {
      const building = this.builder.createBuilding({
        variant: buildingData.variant,
        positionAtMatrix: buildingData.position,
        instant: true,
      });

      building.loadDataPayload(buildingData);
    });
  }

  private addEntityGroups() {
    this.entityGroups = {
      [EntityType.STAIR]: this.add.group(),
      [EntityType.CRYSTAL]: this.add.group(),
      [EntityType.ENEMY]: this.add.group(),
      [EntityType.NPC]: this.add.group({
        runChildUpdate: true,
      }),
      [EntityType.BUILDING]: this.add.group({
        runChildUpdate: true,
      }),
      [EntityType.SHOT]: this.add.group({
        runChildUpdate: true,
      }),
    };
  }

  private addWaveManager() {
    this.wave = new Wave(this);

    if (this.game.usedSave) {
      this.wave.loadDataPayload(this.game.usedSave.payload.wave);
    }
    this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
      this.wave.destroy();
    });
  }

  private addBuilder() {
    this.builder = new Builder(this);

    this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
      this.builder.destroy();
    });

    this.game.events.once(GameEvents.FINISH, () => {
      this.builder.close();
    });
  }

  private addPlayer() {
    let positionAtMatrix: Vector2D;

    if (this.game.usedSave) {
      positionAtMatrix = this.game.usedSave.payload.player.position;
    } else {
      positionAtMatrix = Phaser.Utils.Array.GetRandom(
        this.level.readSpawnPositions(SpawnTarget.PLAYER)
      );
    }

    this.player = new Player(this, { positionAtMatrix });

    if (this.game.usedSave) {
      this.player.loadDataPayload(this.game.usedSave.payload.player);
    }

    this.camera.focusOn(this.player);

    this.player.live.on(LiveEvents.DEAD, () => {
      this.camera.zoomOut();
      this.game.finishGame();
    });
  }

  private addAssistant() {
    const create = () => {
      const positionAtMatrix = aroundPosition(
        this.player.positionAtMatrix
      ).find((spawn) => {
        const biome = this.level.map.getAt(spawn);

        return biome?.solid;
      });

      this.assistant = new Assistant(this, {
        owner: this.player,
        positionAtMatrix: positionAtMatrix || this.player.positionAtMatrix,
        speed: this.player.speed,
        health: this.player.live.maxHealth,
        level: this.player.upgradeLevel[PlayerSkill.ASSISTANT],
      });

      this.assistant.once(Phaser.Scenes.Events.DESTROY, () => {
        this.assistant = null;
        this.wave.once(WaveEvents.COMPLETE, () => {
          create();
        });
      });
    };

    create();
  }

  private addCrystals() {
    const getRandomPosition = () => {
      const positions = this.level.readSpawnPositions(SpawnTarget.CRYSTAL);
      const freePositions = positions.filter((position) =>
        this.level.isFreePoint({ ...position, z: 1 })
      );

      return Phaser.Utils.Array.GetRandom(freePositions);
    };
    const create = (position: Vector2D) => {
      const positions = this.level.readSpawnPositions(SpawnTarget.CRYSTAL);
      const freePositions = positions.filter((position) =>
        this.level.isFreePoint({ ...position, z: 1 })
      );
      const variants = LEVEL_PLANETS[this.level.planet].CRYSTAL_VARIANTS;

      new Crystal(this, {
        positionAtMatrix: position,
        variant: Phaser.Utils.Array.GetRandom(variants),
      });
    };

    const maxCount = Math.ceil(
      Math.floor(
        (this.level.size * DIFFICULTY.CRYSTAL_SPAWN_FACTOR) /
          this.game.getDifficultyMultiplier()
      )
    );
    if (this.game.usedSave) {
      this.game.usedSave.payload.world.crystals.forEach((crystal) => {
        create(crystal.position);
      });
    } else {
      if (this.wave.number != 1) {
        for (let i = 0; i < maxCount; i++) {
          const position = getRandomPosition();
          create(position);
        }
      }
    }
    this.wave.on(WaveEvents.COMPLETE, () => {
      const newCount =
        maxCount - this.getEntitiesGroup(EntityType.CRYSTAL).getTotalUsed();

      for (let i = 0; i < newCount; i++) {
        const position = getRandomPosition();

        create(position);
      }
    });
  }

  private removeCrystals() {
    const crystals = this.getEntities<Crystal>(EntityType.CRYSTAL);
    crystals.forEach((crystal) => {
      crystal.destroy();
    });
  }

  public addStair() {
    const create = () => {
      const positions = this.level.readSpawnPositions(SpawnTarget.STAIR);
      const freePositions = positions.filter((position) =>
        this.level.isFreePoint({ ...position, z: 1 })
      );
      const variants = LEVEL_PLANETS[this.level.planet].STAIR_VARIANTS;

      new Stair(this, {
        positionAtMatrix: Phaser.Utils.Array.GetRandom(freePositions),
        variant: Phaser.Utils.Array.GetRandom(variants),
      });
    };

    this.wave.on(WaveEvents.COMPLETE, () => {
      if (this.wave.number === 11) {
        this.game.screen.notice(
          NoticeType.INFO,
          `Congratulations! Lets find the stair to the goal`
        );
        create();
        this.setTimePause(true);
      }
    });
  }
}
