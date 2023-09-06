import { useGame, useScene, useSceneUpdate } from "phaser-react-ui";
import React, { useEffect, useState } from "react";

import { Hint } from "@scene/system/interface/hint";
import { IGame } from "@type/game";
import { TutorialStep } from "@type/tutorial";
import { BuildingVariant } from "@type/world/entities/building";

import { AttakerInfo } from "./info";
import { AttackerPreview } from "./preview";
import { Variant, Info, Wrapper } from "./styles";
import { GameScene } from "@type/game";
import { IWorld } from "@type/world";
import { EnemyVariant } from "@type/world/entities/npc/enemy";
import { PlayerHUD } from "../player-hud";

export const Attaker: React.FC = () => {
  const world = useScene<IWorld>(GameScene.WORLD);

  // check for wave is Going
  const [isGoing, setIsGoing] = useState<boolean>(false);

  useSceneUpdate(world, () => {
    const waveIsGoing = world.wave.isGoing;
    setIsGoing(waveIsGoing);
  });

  return (
    <Wrapper>
      {Object.values(EnemyVariant).map((variant, index) => (
        <Variant key={variant}>
          <Info>
            <AttakerInfo variant={variant} />
          </Info>
          <AttackerPreview variant={variant} number={index + 1} />
        </Variant>
      ))}
    </Wrapper>
  );
};
