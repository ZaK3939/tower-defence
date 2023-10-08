import { useScene, useSceneUpdate } from "phaser-react-ui";
import React, { useState } from "react";

import { Cost } from "@scene/system/interface/cost";
import { Text } from "@scene/system/interface/text";
import { GameScene } from "@type/game";
import { IWorld } from "@type/world";

import { Alert, Head, Name, Wrapper, Body } from "./styles";
import { EnemyVariant } from "@type/world/entities/npc/enemy";
import { ENEMIES } from "@const/world/entities/enemies";
import { EnemyParams } from "@scene/system/interface/enemy-params";

type Props = {
  variant: EnemyVariant;
};

export const AttakerInfo: React.FC<Props> = ({ variant }) => {
  const world = useScene<IWorld>(GameScene.WORLD);

  const [limit, setLimit] = useState<Nullable<number>>(null);
  const [existCount, setExistCount] = useState(0);
  const [isAllowByWave, setAllowByWave] = useState(false);

  useSceneUpdate(
    world,
    () => {
      const currentLimit = world.attacker.getEnemyLimit(variant);
      const currentIsAllowByWave = world.attacker.isEnemyAllowByWave(variant);
      setAllowByWave(currentIsAllowByWave);

      setLimit(currentLimit);
      if (currentLimit) {
        setExistCount(world.attacker.getEnemiesByVariant(variant).length);
      }
    },
    []
  );

  return (
    <Wrapper>
      <Head>
        <Name>{ENEMIES[variant].Name}</Name>
        {/* <Cost type="resources" value={ENEMIES[variant].Cost} size="large" /> */}
      </Head>
      <Body>
        <Text>{ENEMIES[variant].Description}</Text>
        {isAllowByWave ? (
          !!limit && (
            <Alert $attention={existCount >= limit}>
              Current limit: {existCount}/{limit}
            </Alert>
          )
        ) : (
          <Alert $attention>
            Available from <b>{ENEMIES[variant].SpawnWaveRange?.join("-")}</b>{" "}
            wave
          </Alert>
        )}
        <EnemyParams list={ENEMIES[variant].Params} />
      </Body>
    </Wrapper>
  );
};
