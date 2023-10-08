import {
  useGame,
  useRelativeScale,
  useScene,
  useSceneUpdate,
} from "phaser-react-ui";
import React, { useEffect, useState } from "react";

import { INTERFACE_SCALE } from "@const/interface";
import { IWorld } from "@type/world";
import { AdsReward } from "./ads-reward";
import { Builder } from "./builder";
import { Debug } from "./debug";
import { GeneralHints } from "./general-hints";
import { Notices } from "./notices";
import { PlayerHUD } from "./player-hud";
import { Column, Grid, Wrapper } from "./styles";
import { Superskills } from "./superskills";
import { Wave } from "./wave";
import { GameScene } from "@type/game";
import { Attaker } from "./attacker";

export const ScreenUI: React.FC = () => {
  const world = useScene<IWorld>(GameScene.WORLD);
  const refScale = useRelativeScale<HTMLDivElement>(INTERFACE_SCALE);

  const [isjoinGame, setJoinGame] = useState<boolean>(false);

  useSceneUpdate(
    world,
    () => {
      const joinGame = world.game.joinGame;
      setJoinGame(joinGame);
    },
    []
  );

  return (
    <Wrapper ref={refScale}>
      <Grid>
        <Column $side="left">
          <PlayerHUD />
          <Debug />
        </Column>

        <Column $side="center">
          <Wave />
          <AdsReward />
          <GeneralHints />
          {isjoinGame ? null : <Superskills />}
        </Column>
        <Column $side="right">{isjoinGame ? <Attaker /> : <Builder />}</Column>
      </Grid>

      <Notices />
    </Wrapper>
  );
};

ScreenUI.displayName = "ScreenUI";
