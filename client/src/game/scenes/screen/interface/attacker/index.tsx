import { useGame, useScene, useSceneUpdate } from "phaser-react-ui";
import React, { useEffect, useState } from "react";

import { Hint } from "@scene/system/interface/hint";
import { IGame } from "@type/game";
import { AttackerTutorialStep } from "@type/tutorial";

import { AttakerInfo } from "./info";
import { AttackerPreview } from "./preview";
import { Variant, Info, Wrapper } from "./styles";
import { GameScene } from "@type/game";
import { IWorld } from "@type/world";
import { EnemyVariant } from "@type/world/entities/npc/enemy";
import { PlayerHUD } from "../player-hud";

export const Attaker: React.FC = () => {
  const game = useGame<IGame>();
  const world = useScene<IWorld>(GameScene.WORLD);

  const [hint, setHint] = useState<
    Nullable<{
      variant: EnemyVariant;
      text: string;
    }>
  >(null);

  // check for wave is Going
  const [isGoing, setIsGoing] = useState<boolean>(false);

  const showHint = (step: AttackerTutorialStep) => {
    switch (step) {
      case AttackerTutorialStep.REDCANDLE: {
        return setHint({
          variant: EnemyVariant.REDCANDLE,
          text: "Spawn beasts to battle players!",
        });
      }
      case AttackerTutorialStep.SONICBAT: {
        return setHint({
          variant: EnemyVariant.SONICBAT,
          text: "Release speedy creatures to chase players!",
        });
      }
      case AttackerTutorialStep.NOUNSVEHICLE: {
        return setHint({
          variant: EnemyVariant.NOUNSVEHICLE,
          text: "Generate regular enemies for steady combat!",
        });
      }
      case AttackerTutorialStep.GREENCANDLE: {
        return setHint({
          variant: EnemyVariant.GREENCANDLE,
          text: "Spawn common grunts to keep heroes busy!",
        });
      }
      case AttackerTutorialStep.GNOSISTRUCK: {
        return setHint({
          variant: EnemyVariant.GNOSISTRUCK,
          text: "Spawn armored beasts to test heroes' mettle!",
        });
      }
      case AttackerTutorialStep.BOSS: {
        return setHint({
          variant: EnemyVariant.BOSS,
          text: "Spawn the epic Boss for the ultimate showdown!",
        });
      }
      case AttackerTutorialStep.AAVEDJ: {
        return setHint({
          variant: EnemyVariant.AAVEDJ,
          text: "Spawn high-HP beasts to outlast heroes!",
        });
      }
      case AttackerTutorialStep.GITCOINFIGHTER: {
        return setHint({
          variant: EnemyVariant.GITCOINFIGHTER,
          text: "Spawn elusive beasts detectable only by radar!",
        });
      }
      case AttackerTutorialStep.BEARMONSTER: {
        return setHint({
          variant: EnemyVariant.BEARMONSTER,
          text: "Generate hardy enemies that refuse to go down!",
        });
      }
    }
  };

  const hideHint = (step: AttackerTutorialStep) => {
    switch (step) {
      case AttackerTutorialStep.REDCANDLE:
      case AttackerTutorialStep.SONICBAT:
      case AttackerTutorialStep.NOUNSVEHICLE:
      case AttackerTutorialStep.GREENCANDLE:
      case AttackerTutorialStep.GNOSISTRUCK:
      case AttackerTutorialStep.BOSS:
      case AttackerTutorialStep.AAVEDJ:
      case AttackerTutorialStep.GITCOINFIGHTER:
      case AttackerTutorialStep.BEARMONSTER: {
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
      const waveIsGoing = world.wave.isGoing;
      setIsGoing(waveIsGoing);
    },
    []
  );

  return (
    <Wrapper>
      {Object.values(EnemyVariant).map((variant, index) => (
        <Variant key={variant}>
          {hint?.variant === variant && <Hint side="right">{hint.text}</Hint>}
          <Info>
            <AttakerInfo variant={variant} />
          </Info>
          <AttackerPreview variant={variant} number={index + 1} />
        </Variant>
      ))}
    </Wrapper>
  );
};
