import { useScene, useSceneUpdate } from "phaser-react-ui";
import React, { useState } from "react";

import { BUILDINGS } from "@const/world/entities/buildings";
import { GameScene } from "@type/game";
import { IWorld } from "@type/world";
import { BuildingVariant } from "@type/world/entities/building";

import { Container, Number, Preview, Image } from "./styles";

type Props = {
  number: number;
  variant: BuildingVariant;
};

export const BuilderPreview: React.FC<Props> = ({ number, variant }) => {
  const world = useScene<IWorld>(GameScene.WORLD);

  const [isDisallow, setDisallow] = useState(false);
  const [isDisabled, setDisabled] = useState(false);
  const [isActive, setActive] = useState(false);
  const [isUsed, setUsed] = useState(false);
  const [isUsable, setUsable] = useState(false);

  const isNewest = !isUsed && !isDisallow && !isDisabled;

  const selectBuilding = () => {
    if (isDisallow) {
      return;
    }

    if (world.builder.variant === variant) {
      world.builder.unsetBuildingVariant();
    } else {
      world.builder.setBuildingVariant(variant);
    }
  };

  const onHover = () => {
    if (!isDisallow && !isDisabled) {
      setUsed(true);
    }
  };

  useSceneUpdate(world, () => {
    const currentIsActive = world.builder.variant === variant;
    const currentIsDisallow = !world.builder.isBuildingAllowByWave(variant);
    const currentIsDisabled = !world.builder.isBuildingAllowByTutorial(variant);
    const currentIsUsable =
      !currentIsDisallow &&
      !currentIsDisabled &&
      world.player.resources >= BUILDINGS[variant].Cost &&
      !world.builder.isBuildingLimitReached(variant);

    setActive(currentIsActive);
    setDisallow(currentIsDisallow);
    setDisabled(currentIsDisabled);
    setUsable(currentIsUsable);
    if (currentIsActive) {
      setUsed(true);
    }
  });

  return (
    <Container
      onClick={selectBuilding}
      onMouseEnter={onHover}
      $disallow={isDisallow}
      $disabled={isDisabled}
      $active={isActive}
      $newest={isNewest}
      $usable={isUsable}
    >
      <Number>{number}</Number>
      <Preview>
        <Image src={`assets/sprites/${BUILDINGS[variant].Texture}.png`} />
      </Preview>
    </Container>
  );
};
