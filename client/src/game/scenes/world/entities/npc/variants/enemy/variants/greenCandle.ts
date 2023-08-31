import { IWorld } from "@type/world";
import { EnemyVariantData, EnemyTexture } from "@type/world/entities/npc/enemy";

import { Enemy } from "../enemy";

export class EnemyGreenCandle extends Enemy {
  static SpawnWaveRange = [3, 5];

  constructor(scene: IWorld, data: EnemyVariantData) {
    super(scene, {
      ...data,
      texture: EnemyTexture.GREENCANDLE,
      multipliers: {
        health: 0.7,
        damage: 0.3,
        speed: 0.8,
      },
    });
  }
}
