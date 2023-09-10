import { useGame } from "phaser-react-ui";
import React from "react";

import { Button } from "@game/scenes/system/interface/button";
import { Overlay } from "@game/scenes/system/interface/overlay";
import { GameStat, IGame } from "@type/game";

import { Result } from "./result";
import { Wrapper, Label, Spacer } from "./styles";

type Props = {
  stat: GameStat;
  record: Nullable<GameStat>;
};

export const GameoverUI: React.FC<Props> = ({ stat, record }) => {
  const game = useGame<IGame>();

  const shareOnTwitter = () => {
    const text = `[Test] I scored ${stat.score} points! Can you beat my score?`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      text
    )}`;
    window.open(url, "_blank");
  };
  const onRestartClick = () => {
    game.stopGame();
  };

  return (
    <Overlay>
      <Wrapper>
        <Label>GAME OVER</Label>
        <Button onClick={onRestartClick} size="large" view="confirm">
          Play again
        </Button>
        <Result stat={stat} record={record} />
        <Spacer />
        <Button onClick={shareOnTwitter} size="medium" view="primary">
          Share on Twitter
        </Button>
      </Wrapper>
    </Overlay>
  );
};

GameoverUI.displayName = "GameoverUI";
