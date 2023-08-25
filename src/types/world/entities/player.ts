import { ILive } from "./utils/live";
import { Vector2D } from "@type/world/level";
import { ISprite } from "./utils/sprite";
import { IEnemyTarget } from "./npc/enemy";

export interface IPlayer extends ISprite, IEnemyTarget {
  /**
   * Total number of killed enemies.
   */
  readonly kills: number;

  /**
   * Player experience.
   */
  readonly experience: number;

  /**
   * Score amount.
   */
  readonly score: number;

  /**
   * Resourses amount.
   */
  readonly resources: number;

  /**
   * Health management.
   */
  readonly live: ILive;

  /**
   * Levels of upgrades.
   */
  readonly upgradeLevel: Record<PlayerSkill, number>;

  /**
   * Active superskills.
   */
  readonly activeSuperskills: Partial<Record<PlayerSuperskill, boolean>>;

  /**
   * Upgrade player skill.
   */
  upgrade(type: PlayerSkill): void;

  /**
   * Get experience amount need to upgrade.
   */
  getExperienceToUpgrade(type: PlayerSkill): number;

  /**
   * Inremeting number of killed enemies.
   */
  incrementKills(): void;

  /**
   * Give player score.
   * @param amount - Amount
   */
  giveScore(amount: number): void;

  /**
   * Give player experience.
   * @param amount - Amount
   */
  giveExperience(amount: number): void;

  /**
   * Give player resources.
   * @param amount - Resources amount
   */
  giveResources(amount: number): void;

  /**
   * Take player resources.
   * @param amount - Resources amount
   */
  takeResources(amount: number): void;

  /**
   * Use superskill.
   * @param type - Superskill
   */
  useSuperskill(type: PlayerSuperskill): void;

  /**
   * Get current cost of superskill.
   * @param type - Superskill
   */
  getSuperskillCost(type: PlayerSuperskill): number;
}

export enum PlayerTexture {
  PLAYER = "player",
}

export enum PlayerAudio {
  UPGRADE = "player/upgrade",
  WALK = "player/walk",
  DEAD = "player/dead",
  DAMAGE_1 = "player/damage_1",
  DAMAGE_2 = "player/damage_2",
  DAMAGE_3 = "player/damage_3",
}

export enum PlayerSkill {
  MAX_HEALTH = "MAX_HEALTH",
  SPEED = "SPEED",
  BUILD_AREA = "BUILD_AREA",
  ASSISTANT = "ASSISTANT",
}

export enum MovementDirection {
  LEFT = -1,
  RIGHT = 1,
  UP = -1,
  DOWN = 1,
  NONE = 0,
}

export type PlayerData = {
  positionAtMatrix: Vector2D;
};

export type PlayerSkillData = {
  label: string;
  description: string;
  experience: number;
  maxLevel: number;
  currentLevel?: number;
};

export enum PlayerSuperskill {
  FROST = "FROST",
  RAGE = "RAGE",
  SHIELD = "SHIELD",
  FIRE = "FIRE",
}

export type PlayerSuperskillData = {
  description: string;
  cost: number;
  duration: number;
};
