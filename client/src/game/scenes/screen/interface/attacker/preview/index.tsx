import { useScene, useSceneUpdate } from "phaser-react-ui";
import React, { useState } from "react";

import { GameScene } from "@type/game";
import { IWorld } from "@type/world";

import { Container, Number, Preview, Image } from "./styles";
import { ENEMIES } from "@const/world/entities/enemies";
import { EnemyVariant } from "@type/world/entities/npc/enemy";

type Props = {
  number: number;
  variant: EnemyVariant;
};

export const AttackerPreview: React.FC<Props> = ({ number, variant }) => {
  const world = useScene<IWorld>(GameScene.WORLD);

  const [isDisallow, setDisallow] = useState(false);
  const [isActive, setActive] = useState(false);
  const [isUsed, setUsed] = useState(false);
  const [isUsable, setUsable] = useState(false);

  const isNewest = !isUsed && !isDisallow && !world.game.usedSave;

  const selectEnemy = () => {
    if (isDisallow) {
      return;
    }

    if (world.attacker.variant === variant) {
      world.attacker.unsetEnemyVariant();
    } else {
      world.attacker.setEnemyVariant(variant);
    }
  };

  const onHover = () => {
    if (!isDisallow) {
      setUsed(true);
    }
  };

  useSceneUpdate(
    world,
    () => {
      const currentIsActive = world.attacker.variant === variant;
      const currentIsDisallow = !world.attacker.isEnemyAllowByWave(variant);
      const currentIsUsable =
        !currentIsDisallow &&
        world.player.resources >= ENEMIES[variant].Cost &&
        !world.attacker.isEnemyLimitReached(variant);
      setActive(currentIsActive);
      setDisallow(currentIsDisallow);
      setUsable(currentIsUsable);
      if (currentIsActive) {
        setUsed(true);
      }
    },
    []
  );

  return (
    <Container
      onClick={selectEnemy}
      onMouseEnter={onHover}
      $disallow={isDisallow}
      $active={isActive}
      $newest={isNewest}
      $usable={isUsable}
    >
      <Number>{number}</Number>
      <Preview>
        <Image src={`assets/sprites/${ENEMIES[variant].Texture}.png`} />
      </Preview>
    </Container>
  );
};
