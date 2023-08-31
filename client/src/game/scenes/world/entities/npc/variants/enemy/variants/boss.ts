import { IWorld } from "@type/world";
import { EnemyVariantData, EnemyTexture } from "@type/world/entities/npc/enemy";

import { Enemy } from "../enemy";

export class EnemyBoss extends Enemy {
  constructor(scene: IWorld, data: EnemyVariantData) {
    super(scene, {
      ...data,
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
