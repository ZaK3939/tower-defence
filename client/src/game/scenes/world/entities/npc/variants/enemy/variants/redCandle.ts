import { IWorld } from "@type/world";
import {
  EnemyVariantData,
  EnemyTexture,
  EnemyParam,
  EnemyVariant,
} from "@type/world/entities/npc/enemy";

import { Enemy } from "../enemy";

export class EnemyRedCandle extends Enemy {
  static Name = "RedCandle";

  static Description = "Basic attack of enemies";
  static Cost = 0;

  static Params: EnemyParam[] = [];
  static Texture = EnemyTexture.REDCANDLE;

  static SpawnWaveRange = [1, 5];

  constructor(scene: IWorld, data: EnemyVariantData) {
    super(scene, {
      ...data,
      variant: EnemyVariant.REDCANDLE,
      texture: EnemyTexture.REDCANDLE,
      multipliers: {
        health: 0.35,
        damage: 0.1,
        speed: 1.0,
      },
    });
  }
}
