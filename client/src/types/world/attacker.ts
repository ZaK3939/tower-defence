import EventEmitter from "events";
import { IWorld } from "./world";
import { EnemyVariant, IEnemy } from "./entities/npc/enemy";

export interface IAttacker extends EventEmitter {
  readonly scene: IWorld;

  /**
   * Selected enemy variant.
   */
  readonly variant: Nullable<EnemyVariant>;

  /**
   * Destroy builder.
   */
  destroy(): void;

  /**
   * Toggle build state and update build area.
   */
  update(): void;

  /**
   * Close attacker.
   */
  close(): void;

  /**
   * Set current Enemy variant.
   */
  setEnemyVariant(variant: EnemyVariant): void;

  /**
   * Unset Enemy variant.
   */
  unsetEnemyVariant(): void;

  /**
   * Get enemy limit on current wave.
   * @param variant - Building variant
   */
  getEnemyLimit(variant: EnemyVariant): Nullable<number>;

  /**
   * Check is current wave allow building variant.
   * @param variant - Building variant
   */
  isEnemyAllowByWave(variant: EnemyVariant): boolean;

  /**
   * Get list of buildings with a specific variant.
   * @param variant - Varaint
   */
  getEnemiesByVariant<T extends IEnemy>(variant: EnemyVariant): T[];

  /**
   * Set current enemy variant.
   */
  setEnemyVariant(variant: EnemyVariant): void;

  /**
   * Check is Enemy limit reached.
   * @param variant - Enemy variant
   */
  isEnemyLimitReached(variant: EnemyVariant): boolean;
}

export enum AttackerEvents {
  UPGRADE = "upgrade",
  BUILD_START = "build_start",
  BUILD_STOP = "build_stop",
}
