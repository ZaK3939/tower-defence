import React from 'react';
import { useGame } from "phaser-react-ui";

import { IGame } from "@type/game";
import { Container, Image } from './styles';

export const Avatar: React.FC = () => {
  const game = useGame<IGame>();
  return (
    <Container>
      <Image src={game.world.player.wawa?.image.x10bg || "assets/sprites/hud/avatar.png"} />
    </Container>
  )
};
