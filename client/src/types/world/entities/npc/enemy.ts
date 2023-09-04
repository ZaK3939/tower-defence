import { ILive } from "@type/live";
import { IWorld } from "@type/world";
import { INPC } from "@type/world/entities/npc";
import { Vector2D } from "@type/world/level";

export interface IEnemy extends INPC {
  /**
   * Set overlaped state.
   */
  overlapTarget(): void;

  /**
   * Give target damage.
   * @param target - Target
   */
  attack(target: IEnemyTarget): void;

  // /**
  //  * Load saved data.
  //  * @param data - Data
  //  */
  // loadDataPayload(data: EnemyDataPayload): void;

  // /**
  //  * Get data for saving.
  //  */
  // changePosition(positionAtMatrix: Vector2D): void;
}

export interface IEnemyFactory {
  SpawnWaveRange?: number[];
  new (scene: IWorld, data: EnemyVariantData): IEnemy;
}

export interface IEnemyTarget {
  readonly live: ILive;
}

export enum EnemyTexture {
  REDCANDLE = "enemy/redCandle",
  GREENCANDLE = "enemy/greenCandle",
  LILNOUNSVEHICLE = "enemy/lilNounsVehicle",
  SONICBAT = "enemy/sonicBat",
  GNOSISTRUCK = "enemy/gnosisTruck",
  BOSS = "enemy/boss",
  GITCOINSPACEFIGHTER = "enemy/gitcoinSpacefighter",
  AAVEDJ = "enemy/aaveDJ",
  BEARMONSTER = "enemy/bearMonster",
}

export enum EnemyVariant {
  REDCANDLE = "REDCANDLE",
  GREENCANDLE = "GREENCANDLE",
  LILNOUNSVEHICLE = "LILNOUNSVEHICLE",
  SONICBAT = "SONICBAT",
  GNOSISTRUCK = "GNOSISTRUCK",
  BOSS = "BOSS",
  GITCOINSPACEFIGHTER = "GITCOINSPACEFIGHTER",
  AAVEDJ = "AAVEDJ",
  BEARMONSTER = "BEARMONSTER",
}

export type EnemyTexturesMeta = Record<
  EnemyTexture,
  {
    frameRate: number;
    size: {
      width: number;
      height: number;
      gamut: number;
    };
  }
>;

export type EnemyVariantData = {
  positionAtMatrix: Vector2D;
};

export type EnemyData = EnemyVariantData & {
  texture: EnemyTexture;
  score?: number;
  multipliers: {
    speed: number;
    damage: number;
    health: number;
  };
};

export type EnemySpawnPayload = {
  variant: EnemyVariant;
  positionAtMatrix: Vector2D;
};
