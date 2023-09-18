import EventEmitter from "events";

import { IWorld } from "@type/world";

export interface IWave extends EventEmitter {
  readonly scene: IWorld;

  /**
   * Mod that stops start of wave.
   * Used for test.
   */
  readonly isPeaceMode: boolean;

  /**
   * State of wave starting.
   */
  isGoing: boolean;

  /**
   * Current wave number.
   */
  number: number;

  /**
   * Current spawned enemies count.
   */
  spawnedEnemiesCount: number;

  /**
   * Timestamp of next spawn.
   */
  nextSpawnTimestamp: number;

  /**
   * Max count of enemies.
   */
  enemiesMaxCount: number;

  /**
   * complete wave.
   */
  complete(): void;

  /**
   * Destroy wave.
   */
  destroy(): void;

  /**
   * Update wave process.
   */
  update(joinGame?: boolean): void;

  /**
   * Get timeleft to next wave.
   */
  getTimeleft(): number;

  /**
   * Get count of enemies left.
   */
  getEnemiesLeft(): number;

  /**
   * Skip timeleft to next wave.
   */
  skipTimeleft(): void;

  /**
   * Get data for saving.
   */
  getDataPayload(): WaveDataPayload;

  /**
   * Load saved data.
   * @param data - Data
   */
  loadDataPayload(data: WaveDataPayload): void;
}

export enum WaveEvents {
  START = "start",
  COMPLETE = "complete",
}

export enum WaveAudio {
  START = "wave/start",
  BATTLE2 = "wave/battle2",
  BATTLE3 = "wave/battle3",
  COMPLETE = "wave/complete",
  TICK = "wave/tick",
}

export type WaveDataPayload = {
  number: number;
  timeleft: number;
};

export type WaveStartInfo = { enemiesMaxCount: number };
