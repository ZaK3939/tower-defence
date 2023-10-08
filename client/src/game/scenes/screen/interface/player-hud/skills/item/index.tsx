import {
  getModifiedObject,
  useMobilePlatform,
  useScene,
  useSceneUpdate,
} from "phaser-react-ui";
import React, { useState } from "react";

import { PLAYER_SKILLS } from "@const/world/entities/player";
import { Cost } from "@scene/system/interface/cost";
import { Text } from "@scene/system/interface/text";
import { GameScene } from "@type/game";
import { IWorld } from "@type/world";
import { PlayerSkill, PlayerSkillData } from "@type/world/entities/player";
import {
  Container,
  Info,
  Action,
  Label,
  Description,
  Level,
  Button,
  Limit,
} from "./styles";

type Props = {
  type: PlayerSkill;
};

export const UpgradesListItem: React.FC<Props> = ({ type }) => {
  const world = useScene<IWorld>(GameScene.WORLD);
  const isMobile = useMobilePlatform();
  const [data, setData] = useState<Nullable<PlayerSkillData>>(null);

  const limit = data?.currentLevel && data.maxLevel <= data.currentLevel;

  const onClick = () => {
    world.player.upgrade(type);
  };

  useSceneUpdate(
    world,
    () => {
      if (type !== PlayerSkill.ASSISTANT || world.player.wawa?.petId) {
        const newData: PlayerSkillData = {
          ...PLAYER_SKILLS[type],
          experience: world.player.getExperienceToUpgrade(type),
          currentLevel: world.player.upgradeLevel[type],
        };

        setData((current) => getModifiedObject(current, newData));
      }
    },
    []
  );

  return (
    data && (
      <Container>
        <Info>
          <Label>{data.label}</Label>
          <Description>
            <Text>{data.description}</Text>
          </Description>
          <Level>
            LEVEL <b>{data.currentLevel}</b>
          </Level>
        </Info>
        {limit ? (
          <Action>
            <Limit>
              MAX
              <br />
              LEVEL
            </Limit>
          </Action>
        ) : (
          <Action
            {...{
              [isMobile ? "onTouchEnd" : "onClick"]: onClick,
            }}
            $active
          >
            <Button>UPGRADE</Button>
            <Cost type="experience" value={data.experience} size="large" />
          </Action>
        )}
      </Container>
    )
  );
};
