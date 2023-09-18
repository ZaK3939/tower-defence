import { IWorld } from "@type/world";
import {
  EnemyVariantData,
  EnemyTexture,
  EnemyParam,
  EnemyVariant,
} from "@type/world/entities/npc/enemy";

import { Enemy } from "../enemy";

export class EnemyBoss extends Enemy {
  static Name = "Boss";

  static Description = "Basic attack of enemies";
  static Cost = 0;
  static SpawnWaveRange = [5, 5];
  static Params: EnemyParam[] = [];
  static Texture = EnemyTexture.BOSS;
  static Limit = 1;
  constructor(scene: IWorld, data: EnemyVariantData) {
    super(scene, {
      ...data,
      variant: EnemyVariant.BOSS,
      texture: EnemyTexture.BOSS,
      score: 50,
      multipliers: {
        health: 10.0,
        damage: 0.7,
        speed: 0.3,
      },
    });
  }
}
