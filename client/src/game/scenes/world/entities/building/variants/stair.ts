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

  static MaxLevel = 1;
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

    let hintId: Nullable<string> = null;

    const hideCurrentHint = () => {
      if (hintId) {
        this.scene.hideHint(hintId);
        hintId = null;
      }
    };
    const unbindUpgradeStep = this.scene.game.tutorial.bind(
      TutorialStep.BUILD_STAIR,
      {
        beg: () => {
          hintId = this.scene.showHint({
            side: "top",
            text: "Lets touch and go to the next floor!",
            position: this.getPositionOnGround(),
          });
        },
        end: hideCurrentHint,
      }
    );
    this.on(Phaser.GameObjects.Events.DESTROY, () => {
      hideCurrentHint();
      unbindUpgradeStep();
    });

    this.scene.game.tutorial.complete(TutorialStep.BUILD_STAIR);
  }

  public pickup() {
    this.scene.game.world.getStair();
    this.scene.sound.play(StairAudio.PICKUP);

    this.destroy();
  }
}
