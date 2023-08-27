import { IWorld } from "@type/world";
import { EnemyVariantData, EnemyTexture } from "@type/world/entities/npc/enemy";

import { Enemy } from "../enemy";

export class EnemySonicBat extends Enemy {
  static SpawnWaveRange = [2, 7];

  constructor(scene: IWorld, data: EnemyVariantData) {
    super(scene, {
      ...data,
      texture: EnemyTexture.SONICBAT,
      multipliers: {
        health: 0.4,
        damage: 0.2,
        speed: 1.2,
      },
    });
  }
}
