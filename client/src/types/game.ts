import * as Phaser from "phaser";

import { IScreen } from "./screen";
import { ITutorial, TutorialStep, TutorialStepState } from "./tutorial";
import { IWorld } from "./world";
import { IAnalytics } from "./analytics";
import { IStorage, StorageSave } from "./storage";
import { INetwork } from "./network";
import { Wawa } from "./wawa";

export interface IGame extends Phaser.Game {
  /**
   * World scene.
   */
  readonly world: IWorld;

  /**
   * Screen scene.
   */
  readonly screen: IScreen;

  /**
   * Game is paused.
   * Game state.
   */
  readonly state: GameState;

  /**
   * Analytics manager.
   */
  readonly analytics: IAnalytics;

  /**
   * Tutorial manager.
   */
  readonly tutorial: ITutorial;

  /**
   * Data storage.
   */
  readonly storage: IStorage;

  /**
   * Network manager.
   */

  readonly network: INetwork;
  /**
   * Game settings.
   */
  readonly settings: Partial<Record<GameSettings, string>>;

  /**
   * Used save data.
   */
  readonly usedSave: Nullable<StorageSave>;

  /**
   * is game in pvp mode
   */
  readonly isPVP: boolean;

  /**
   * check if game is in join game mode
   */
  readonly joinGame: boolean;

  /**
   * Game difficulty.
   */
  difficulty: GameDifficulty;

  /**
   * Pause game.
   */
  pauseGame(): void;

  /**
   * Resume game.
   */
  resumeGame(): void;

  /**
   * Continue game.
   * @param save - Save data.
   */
  continueGame(save: StorageSave): void;

  /**
   * Start new game.
   */
  startNewGame(wawa?: Wawa, address?: string | undefined): void;

  /**
   * Start New vs game.
   */
  startNewPvPGame(name?: string, wawa?: Wawa): void;

  /**
   * Join New vs game.
   */
  joinPvPGame(name?: string): void;

  /**
   * Stop game.
   */
  stopGame(): void;

  /**
   * Finish game.
   */
  finishGame(): void;

  /**
   * Finish game.
   */
  clearGame(): void;

  /**
   * Get difficylty multiplier by settings.
   */
  getDifficultyMultiplier(): number;

  /**
   * Set game settings value.
   * @param key - Settings key
   * @param value - New value
   */
  updateSetting(key: GameSettings, value: string): void;

  /**
   * Check is setting enabled.
   * @param key - Settings key
   */
  isSettingEnabled(key: GameSettings): boolean;

  /**
   * Check is flag enabled.
   * @param key - Flag key
   */
  isFlagEnabled(key: GameFlag): boolean;

  /**
   * Show game ad.
   * @param type - Ad type
   * @param callback - Complete callback
   */
  showAd(type: GameAdType, callback?: () => void): void;

  /**
   * Get data for saving.
   */
  getDataPayload(): GameDataPayload;

  /**
   * Load saved data.
   */
  loadPayload(): Promise<void>;
}

export enum GameAdType {
  MIDGAME = "midgame",
  REWARDED = "rewarded",
}

export enum GameScene {
  SYSTEM = "SYSTEM",
  GAMEOVER = "GAMEOVER",
  WORLD = "WORLD",
  SCREEN = "SCREEN",
  MENU = "MENU",
  GAMECLEAR = "GAMECLEAR",
}

export enum GameEvents {
  START = "start",
  FINISH = "finish",
  UPDATE_SETTINGS = "update_settings",
}

export enum GameSettings {
  AUDIO = "AUDIO",
  EFFECTS = "EFFECTS",
  TUTORIAL = "TUTORIAL",
}

export enum GameDifficulty {
  EASY = "EASY",
  NORMAL = "NORMAL",
  HARD = "HARD",
}

export enum GameFlag {
  NO_BLOOD = "NO_BLOOD",
  ADS = "ADS",
}

export enum GameState {
  IDLE = "IDLE",
  STARTED = "STARTED",
  FINISHED = "FINISHED",
  PAUSED = "PAUSED",
}

export type GameSettingsData = {
  description: string;
  values: string[];
  default: string;
};

export type GameDataPayload = {
  difficulty: GameDifficulty;
  tutorial: Partial<Record<TutorialStep, TutorialStepState>>;
};

export type GameStat = {
  score: number;
  waves: number;
  kills: number;
  lived: number;
};

declare global {
  const IS_DEV_MODE: boolean;

  interface Window {
    GAME: IGame;
  }
}
