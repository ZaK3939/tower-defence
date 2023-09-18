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

export const GameclearUI: React.FC<Props> = ({ stat, record }) => {
  const game = useGame<IGame>();

  const onRestartClick = () => {
    game.stopGame();
  };

  const shareOnTwitter = () => {
    const text = `I scored ${stat.score} points! Can you beat my score? https://crypto-defense.vercel.app/ #CryptoDefense`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      text
    )}`;
    window.open(url, "_blank");
  };

  return (
    <Overlay>
      <Wrapper>
        <Label>GAME Clear</Label>
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

GameclearUI.displayName = "GameclearUI";
