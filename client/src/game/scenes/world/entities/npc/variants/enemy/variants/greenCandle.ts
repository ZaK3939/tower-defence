import { IWorld } from "@type/world";
import {
  EnemyVariantData,
  EnemyTexture,
  EnemyParam,
  EnemyVariant,
} from "@type/world/entities/npc/enemy";

import { Enemy } from "../enemy";

export class EnemyGreenCandle extends Enemy {
  static Name = "GreenCandle";

  static Description = "Basic attack of enemies";
  static Cost = 0;
  static Params: EnemyParam[] = [];
  static Texture = EnemyTexture.GREENCANDLE;
  static SpawnWaveRange = [4, 8];

  constructor(scene: IWorld, data: EnemyVariantData) {
    super(scene, {
      ...data,
      variant: EnemyVariant.GREENCANDLE,
      texture: EnemyTexture.GREENCANDLE,
      multipliers: {
        health: 0.7,
        damage: 0.3,
        speed: 0.8,
      },
    });
  }
}
