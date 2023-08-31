import { IWorld } from "@type/world";
import { EnemyVariantData, EnemyTexture } from "@type/world/entities/npc/enemy";

import { Enemy } from "../enemy";

export class EnemyAaveDJ extends Enemy {
  static SpawnWaveRange = [3, 4];

  constructor(scene: IWorld, data: EnemyVariantData) {
    super(scene, {
      ...data,
      texture: EnemyTexture.AAVEDJ,
      multipliers: {
        health: 2.0,
        damage: 0.4,
        speed: 0.7,
      },
    });
  }
}
