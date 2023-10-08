import { useScene, useSceneUpdate } from "phaser-react-ui";
import React, { useEffect, useMemo, useState } from "react";

import { GameScene } from "@type/game";
import { IWorld } from "@type/world";
import { PlayerSuperskill } from "@type/world/entities/player";

import { SuperskillItem } from "./item";
import { Wrapper } from "./styles";
import { DIFFICULTY } from "@const/world/difficulty";

export const Superskills: React.FC = () => {
  const world = useScene<IWorld>(GameScene.WORLD);

  const superskills = useMemo(
    () => Object.keys(PlayerSuperskill) as PlayerSuperskill[],
    []
  );

  const [isWaveGoing, setWaveGoing] = useState(false);
  const [waveNumber, setWaveNumber] = useState(0);

  useSceneUpdate(
    world,
    () => {
      setWaveGoing(world.wave.isGoing);
      setWaveNumber(world.wave.number);
    },
    []
  );

  return isWaveGoing && waveNumber >= DIFFICULTY.SUPERSKILL_ALLOW_BY_WAVE ? (
    <Wrapper className="fade-in">
      {superskills.map((superskill) => (
        <SuperskillItem key={superskill} type={superskill} />
      ))}
    </Wrapper>
  ) : (
    <div />
  );
};
