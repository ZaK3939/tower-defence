import { useGame, useScene, useSceneUpdate } from "phaser-react-ui";
import React, { useEffect, useState } from "react";

import { Button } from "@scene/system/interface/button";
import { Hint } from "@scene/system/interface/hint";
import { GameScene, IGame } from "@type/game";
import { TutorialStep } from "@type/tutorial";

import { UpgradesList } from "./list";
import { Wrapper } from "./styles";
import { IWorld } from "@type/world";

export const Skills: React.FC = () => {
  const world = useScene<IWorld>(GameScene.WORLD);
  const game = useGame<IGame>();

  const [isOpened, setOpened] = useState(false);
  const [hint, setHint] = useState(false);
  const [isjoinGame, setJoinGame] = useState<boolean>(false);

  useSceneUpdate(world, () => {
    const joinGame = world.game.joinGame;
    setJoinGame(joinGame);
  });

  const onClickButton = (event: React.MouseEvent<HTMLDivElement>) => {
    setOpened(!isOpened);
    event.stopPropagation();
  };

  const onClose = () => {
    setOpened(false);
  };

  useEffect(
    () =>
      game.tutorial.bind(TutorialStep.UPGRADE_SKILL, {
        beg: () => setHint(true),
        end: () => setHint(false),
      }),
    []
  );

  return !isjoinGame ? (
    <Wrapper>
      <Button
        onClick={onClickButton}
        view={isOpened ? "active" : undefined}
        size="fixed"
      >
        SKILLS
      </Button>
      {isOpened && <UpgradesList onClose={onClose} />}
      {hint && !isOpened && (
        <Hint side="top" align="left">
          Click to upgrade skills
        </Hint>
      )}
    </Wrapper>
  ) : null;
};
