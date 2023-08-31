import { GameDataPayload, IGame } from "@type/game";
import { PlayerDataPayload } from "@type/world/entities/player";
import { LevelDataPayload } from "@type/world/level";
import { WaveDataPayload } from "@type/world/wave";

import { WorldDataPayload } from "./world";

export interface IStorage {
  /**
   * Loaded saves.
   */
  readonly saves: StorageSave[];

  /**
   * Init storage.
   */
  init(): Promise<void>;

  /**
   * Load game saves.
   */
  load(): Promise<void>;

  /**
   * Delete save data.
   * @param name - Save name
   */
  delete(name: string): Promise<void>;

  /**
   * Save game data.
   * @param game - Game data
   * @param name - Save name
   */
  save(game: IGame, name: string): Promise<StorageSave | null>;
}

export type StorageSave = {
  name: string;
  date: number;
  payload: StorageSavePayload;
};

export type StorageSavePayload = {
  game: GameDataPayload;
  world: WorldDataPayload;
  level: LevelDataPayload;
  wave: WaveDataPayload;
  player: PlayerDataPayload;
};
