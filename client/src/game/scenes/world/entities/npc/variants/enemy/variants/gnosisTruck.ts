import { DIFFICULTY } from "@const/world/difficulty";
import { progressionQuadratic } from "@lib/difficulty";
import { IWorld } from "@type/world";
import {
  EnemyVariantData,
  EnemyTexture,
  EnemyParam,
  EnemyVariant,
} from "@type/world/entities/npc/enemy";

import { Enemy } from "../enemy";

export class EnemyGnosisTruck extends Enemy {
  static Name = "GnosisTruck";

  static Description = "Basic attack of enemies";
  static Cost = 0;
  static Params: EnemyParam[] = [];
  static Texture = EnemyTexture.GNOSISTRUCK;
  static SpawnWaveRange = [7, 10];

  constructor(scene: IWorld, data: EnemyVariantData) {
    super(scene, {
      ...data,
      variant: EnemyVariant.GNOSISTRUCK,
      texture: EnemyTexture.GNOSISTRUCK,
      multipliers: {
        health: 1.0,
        damage: 0.4,
        speed: 0.8,
      },
    });

    const armour = progressionQuadratic({
      defaultValue:
        DIFFICULTY.ENEMY_ARMOUR * scene.game.getDifficultyMultiplier(),
      scale: DIFFICULTY.ENEMY_ARMOUR_GROWTH,
      level: scene.wave.number,
      retardationLevel: DIFFICULTY.ENEMY_ARMOUR_GROWTH_RETARDATION_LEVEL,
    });

    this.live.setMaxArmour(armour);
    this.live.setArmour(armour);

    this.addIndicator({
      color: 0x00d4ff,
      value: () => this.live.armour / this.live.maxArmour,
    });
  }
}
