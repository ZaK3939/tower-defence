import React from "react";

import {
  Icon,
  Info,
  IconContainer,
  Label,
  Param,
  Wrapper,
  Value,
} from "./styles";
import { EnemyParam } from "@type/world/entities/npc/enemy";

type Props = {
  list: EnemyParam[];
};

export const EnemyParams: React.FC<Props> = ({ list }) => (
  <Wrapper>
    {list.map((param) => (
      <Param key={param.label}>
        <IconContainer>
          <Icon src={`assets/sprites/${param.icon}.png`} />
        </IconContainer>
        <Info $attention={param.attention}>
          <Label>{param.label}</Label>
          <Value>{param.value}</Value>
        </Info>
      </Param>
    ))}
  </Wrapper>
);
