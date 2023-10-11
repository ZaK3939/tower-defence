import * as Phaser from "phaser";

import { IScene } from "@type/scene";
import { IPlayer } from "@type/world/entities/player";
import { ILevel, LevelData, Vector2D } from "@type/world/level/level";
import { IWave } from "./wave";
import { IAssistant } from "./entities/npc/assistant";
import { IBuilder } from "./builder";
import { EntityType } from "./entities/entities";
import { EnemyVariant, IEnemy } from "./entities/npc/enemy";
import { ISprite } from "./entities/utils/sprite";
import { ICamera } from "./camera";
import { CrystalDataPayload } from "./entities/crystal";
import { BuildingDataPayload } from "./entities/building";
import { StorageSavePayload } from "@type/storage";
import { IAttacker } from "./attacker";
import { Wawa } from "@type/wawa";

export interface IWorld extends IScene {
  /**
   * Wave.
   */
  readonly wave: IWave;

  /**
   * Player.
   */
  readonly player: IPlayer;

  /**
   * Player assistant.
   */
  readonly assistant: Nullable<IAssistant>;

  /**
   * Level.
   */
  readonly level: ILevel;

  /**
   * Camera.
   */
  readonly camera: ICamera;

  /**
   * Builder.
   */
  readonly builder: IBuilder;

  /**
   * Attacker.
   */
  readonly attacker: IAttacker;

  /**
   * Delta time of frame update.
   */
  readonly deltaTime: number;

  /**
   * List of generated enemy spawn positions
   */
  enemySpawnPositions: Vector2D[];

  /**
   * Start world.
   */
  start(wawa?: Wawa): void;

  /**
   * join world
   */
  join(data?: StorageSavePayload): void;

  /**
   * Change Level screen.
   */
  getStair(): void;

  /**
   * Finish world.
   */
  finishWorld(): void;

  /**
   * Stop world.
   */
  stop(): void;

  /**
   * Get lifecyle time.
   */
  getTime(): number;

  /**
   * Get game lifecyle pause state.
   */
  isTimePaused(): boolean;

  /**
   * Set game lifecyle pause state.
   * @param state - Pause state
   */
  setTimePause(state: boolean): void;

  /**
   * Get count of resources generate per second.
   */
  getResourceExtractionSpeed(): number;

  /**
   * Add entity to group.
   */
  addEntity(type: EntityType, gameObject: Phaser.GameObjects.GameObject): void;

  /**
   * Get entities group.
   */
  getEntitiesGroup(type: EntityType): Phaser.GameObjects.Group;

  /**
   * Get entities list from group.
   */
  getEntities<T>(type: EntityType): T[];

  /**
   * Spawn enemy in random position.
   */
  spawnEnemy(variant: EnemyVariant): Nullable<IEnemy>;

  /**
   * Show hint on world.
   * @param hint - Hint data
   */
  showHint(hint: WorldHint): string;

  /**
   * Hide hint from world.
   * @param id - Hint id
   */
  hideHint(id?: string): void;

  /**
   * Precalculate sprite position after specified time.
   * @param sprite - Sprite
   * @param seconds - Time in seconds
   */
  getFuturePosition(sprite: ISprite, seconds: number): Vector2D;

  /**
   * Get random enemy spawn position.
   */
  getEnemySpawnPosition(): Vector2D;

  /**
   * Get world data .
   */
  getDataPayload(): WorldDataPayload;
}

export enum WorldEvents {
  SELECT_BUILDING = "select_building",
  UNSELECT_BUILDING = "unselect_building",
  SHOW_HINT = "show_hint",
  HIDE_HINT = "hide_hint",
  USE_SUPERSKILL = "use_superskill",
  PLAYER_IS_READY = "player_is_ready",
  PLAYER_IS_LEFT = "player_is_left",
  PLAYER_GAME_STATE = "player_game_state",
  PLAYER_IS_DEAD = "player_is_dead",
  WORLD_UPDATE = "world_update",
  ENEMY_ENTITY_UPDATE = "enemy_entity_update",
  ENEMY_SPAWN_INFO = "enemy_spawn_info",
  ENTITY_DESTROY_INFO = "entity_destroy_info",
  ASSISTANT_DESTROY_INFO = "assistant_destroy_info",
  CRYSTAL_SPAWN_INFO = "crystal_spawn_info",
  CRYSTAL_PICKUP_INFO = "crystal_pickup_info",
}

export type WorldHint = {
  side: "left" | "right" | "top" | "bottom";
  text: string;
  position: Vector2D;
  unique?: boolean;
};

export type WorldDataPayload = {
  time: number;
  buildings: Array<BuildingDataPayload>;
  crystals: Array<CrystalDataPayload>;
};
