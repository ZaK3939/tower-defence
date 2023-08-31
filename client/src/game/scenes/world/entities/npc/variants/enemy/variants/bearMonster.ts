import { IWorld } from "@type/world";
import { EnemyVariantData, EnemyTexture } from "@type/world/entities/npc/enemy";

import { Enemy } from "../enemy";

export class EnemyBearMonster extends Enemy {
  static SpawnWaveRange = [6, 10];

  constructor(scene: IWorld, data: EnemyVariantData) {
    super(scene, {
      ...data,
      texture: EnemyTexture.BEARMONSTER,
      multipliers: {
        health: 1.8,
        damage: 1.0,
        speed: 0.9,
      },
    });
  }
}
