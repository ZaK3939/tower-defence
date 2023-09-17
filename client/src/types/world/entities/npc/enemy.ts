import { ILive } from "@type/live";
import { IWorld } from "@type/world";
import { INPC } from "@type/world/entities/npc";
import { Vector2D } from "@type/world/level";

export interface IEnemy extends INPC {
  // /**
  //  * Variant name.
  //  */
  readonly variant: EnemyVariant;

  /**
   * Set overlaped state.
   */
  overlapTarget(): void;

  /**
   * Give target damage.
   * @param target - Target
   */
  attack(target: IEnemyTarget): void;
}

export interface IEnemyFactory {
  Name: string;
  Description: string;
  Cost: number;
  Limit?: number;
  Params: EnemyParam[];
  Texture: EnemyTexture;
  SpawnWaveRange?: number[];
  new (scene: IWorld, data: EnemyVariantData): IEnemy;
}

export interface IEnemyTarget {
  readonly live: ILive;
}

export enum EnemyTexture {
  REDCANDLE = "enemy/redCandle",
  GREENCANDLE = "enemy/greenCandle",
  NOUNSVEHICLE = "enemy/nounsVehicle",
  SONICBAT = "enemy/sonicBat",
  GNOSISTRUCK = "enemy/gnosisTruck",
  BOSS = "enemy/boss",
  BOSS2 = "enemy/boss2",
  GITCOINFIGHTER = "enemy/gitcoinFighter",
  AAVEDJ = "enemy/aaveDJ",
  BEARMONSTER = "enemy/bearMonster",
}

export enum EnemyIcon {
  ALERT = "building/icons/alert",
  UPGRADE = "building/icons/upgrade",
  HEALTH = "building/icons/params/health",
  RADIUS = "building/icons/params/radius",
  AMMO = "building/icons/params/ammo",
  HEAL = "building/icons/params/heal",
  DAMAGE = "building/icons/params/damage",
  RESOURCES = "building/icons/params/resources",
  SPEED = "building/icons/params/speed",
  DELAY = "building/icons/params/pause",
}

export enum EnemyAudio {
  SELECT = "building/select",
  UNSELECT = "building/unselect",
  BUILD = "building/build",
  UPGRADE = "building/upgrade",
  DEAD = "building/dead",
  OVER = "building/over",
  RELOAD = "building/reload",
  REPAIR = "building/repair",
  DAMAGE_1 = "building/damage_1",
  DAMAGE_2 = "building/damage_2",
}

export enum EnemyVariant {
  REDCANDLE = "REDCANDLE",
  GREENCANDLE = "GREENCANDLE",
  NOUNSVEHICLE = "NOUNSVEHICLE",
  SONICBAT = "SONICBAT",
  GNOSISTRUCK = "GNOSISTRUCK",
  BOSS = "BOSS",
  BOSS2 = "BOSS2",
  GITCOINFIGHTER = "GITCOINFIGHTER",
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

export type EnemyBuildData = {
  variant: EnemyVariant;
  positionAtMatrix: Vector2D;
};

export type EnemyVariantData = {
  positionAtMatrix: Vector2D;
};

export type EnemyData = EnemyVariantData & {
  variant: EnemyVariant;
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

export type EnemyParam = {
  label: string;
  value: string | number;
  icon: EnemyIcon;
  attention?: boolean;
};
