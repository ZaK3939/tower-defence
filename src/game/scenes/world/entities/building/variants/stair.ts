import { DIFFICULTY } from "@const/world/difficulty";
import { TutorialStep } from "@type/tutorial";
import { IWorld } from "@type/world";
import {
  BuildingVariant,
  BuildingTexture,
  BuildingParam,
  BuildingVariantData,
  BuildingIcon,
} from "@type/world/entities/building";

import { Building } from "../building";
import { StairAudio } from "@type/world/entities/stair";

export class BuildingStair extends Building {
  static Name = "Stair";

  static Description = "Heading to the boss floor.";

  static Params: BuildingParam[] = [
    {
      label: "Health",
      value: DIFFICULTY.BUILDING_STAIR_HEALTH,
      icon: BuildingIcon.HEALTH,
    },
  ];

  static Texture = BuildingTexture.STAIR;

  static Cost = DIFFICULTY.BUILDING_STAIR_COST;

  static Health = DIFFICULTY.BUILDING_STAIR_HEALTH;

  static AllowByWave = DIFFICULTY.BUILDING_STAIR_ALLOW_BY_WAVE;

  constructor(scene: IWorld, data: BuildingVariantData) {
    super(scene, {
      ...data,
      variant: BuildingVariant.STAIR,
      health: BuildingStair.Health,
      texture: BuildingStair.Texture,
      delay: {
        default: DIFFICULTY.BUILDING_STAIR_DELAY,
        growth: DIFFICULTY.BUILDING_STAIR_DELAY_GROWTH,
      },
    });

    this.scene.game.tutorial.complete(TutorialStep.BUILD_STAIR);
  }
  public pickup() {
    this.scene.game.world.getStair();
    this.scene.sound.play(StairAudio.PICKUP);

    this.destroy();
  }
}
