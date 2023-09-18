import { useGame } from "phaser-react-ui";
import React from "react";

import { Button } from "@game/scenes/system/interface/button";
import { Overlay } from "@game/scenes/system/interface/overlay";
import { GameStat, IGame } from "@type/game";

import { Result } from "./result";
import { Wrapper, Label, Spacer, Container, Image, Label2 } from "./styles";
import { defaultWawa } from "@type/wawa";

type Props = {
  stat: GameStat;
  record: Nullable<GameStat>;
};

export const GameoverUI: React.FC<Props> = ({ stat, record }) => {
  const game = useGame<IGame>();
  const tokenid =
    game.world.player.wawa?.tokenId !== 0
      ? game.world.player.wawa?.tokenId
      : "Nothing";
  const shareOnTwitter = () => {
    const text = `I scored ${stat.score} points! Can you beat my score? https://crypto-defense.vercel.app/ #CryptoDefense`;
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
        {game.world.player.wawa !== defaultWawa ? (
          <Label2>TokenId: {tokenid}</Label2>
        ) : (
          <></>
        )}
        <Container>
          <Image src={game.world.player.wawa?.image.x1 || "assets/wawa.png"} />
        </Container>
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
