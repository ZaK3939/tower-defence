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

  const [isFirstTime, setIsFirstTime] = useState(true); // New state variable
  const [isWaveGoing, setWaveGoing] = useState(false);
  const [waveNumber, setWaveNumber] = useState(0); // New state variable

  useSceneUpdate(world, () => {
    setWaveGoing(world.wave.isGoing);
    setWaveNumber(world.wave.number); // Update wave number
  });

  useEffect(() => {
    if (
      isWaveGoing &&
      waveNumber === DIFFICULTY.SUPERSKILL_ALLOW_BY_WAVE &&
      isFirstTime
    ) {
      setIsFirstTime(false); // Update the state after the first display
    }
  }, [isWaveGoing, waveNumber, isFirstTime]);

  return isWaveGoing && waveNumber >= DIFFICULTY.SUPERSKILL_ALLOW_BY_WAVE ? (
    <Wrapper className={isFirstTime && isWaveGoing ? "fade-in" : ""}>
      {superskills.map((superskill) => (
        <SuperskillItem key={superskill} type={superskill} />
      ))}
    </Wrapper>
  ) : (
    <div />
  );
};
