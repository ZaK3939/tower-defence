import { useGame, useScene, useSceneUpdate } from "phaser-react-ui";
import React, { useEffect, useRef, useState } from "react";

import { GameScene, IGame } from "@type/game";
import { TutorialStep } from "@type/tutorial";
import { IWorld } from "@type/world";
import { BuildingVariant } from "@type/world/entities/building";

import { Building } from "./building";
import { Wrapper } from "./styles";

export const Builder: React.FC = () => {
  const game = useGame<IGame>();
  const world = useScene<IWorld>(GameScene.WORLD);

  const refScroll = useRef<HTMLDivElement>(null);

  const [activeVariant, setActiveVariant] =
    useState<Nullable<BuildingVariant>>(null);
  const [hint, setHint] = useState<
    Nullable<{
      variant: BuildingVariant;
      text: string;
    }>
  >(null);

  // check for wave is Going
  const [isGoing, setIsGoing] = useState<boolean>(false);

  const showHint = (step: TutorialStep) => {
    switch (step) {
      case TutorialStep.BUILD_STAKING: {
        return setHint({
          variant: BuildingVariant.STAKING,
          text: "Build staker\nto get resources",
        });
      }
      case TutorialStep.BUILD_RADAR: {
        return setHint({
          variant: BuildingVariant.RADAR,
          text: "Build radar\nto uncover enemies",
        });
      }
      case TutorialStep.BUILD_TOWER_FIRE: {
        return setHint({
          variant: BuildingVariant.TOWER_FIRE,
          text: "Build tower\nto attack enemies",
        });
      }
      case TutorialStep.BUILD_AMMUNITION: {
        return setHint({
          variant: BuildingVariant.AMMUNITION,
          text: "Build ammunition\nto reload towers",
        });
      }
    }
  };

  const hideHint = (step: TutorialStep) => {
    switch (step) {
      case TutorialStep.BUILD_STAKING:
      case TutorialStep.BUILD_RADAR:
      case TutorialStep.BUILD_TOWER_FIRE:
      case TutorialStep.BUILD_AMMUNITION: {
        return setHint(null);
      }
    }
  };

  useEffect(
    () =>
      game.tutorial.bindAll({
        beg: showHint,
        end: hideHint,
      }),
    []
  );

  useSceneUpdate(
    world,
    () => {
      setActiveVariant(world.builder.variant);
    },
    []
  );

  useSceneUpdate(
    world,
    () => {
      const waveIsGoing = world.wave.isGoing;
      setIsGoing(waveIsGoing);
    },
    []
  );
  return !isGoing ? (
    <Wrapper ref={refScroll}>
      {Object.values(BuildingVariant).map((variant, index) => (
        <Building
          key={variant}
          variant={variant}
          number={index + 1}
          isActive={activeVariant === variant}
          hint={hint?.variant === variant ? hint.text : undefined}
          refScroll={refScroll}
        />
      ))}
    </Wrapper>
  ) : null;
};
