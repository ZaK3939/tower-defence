import React, { useEffect, useMemo, useRef } from "react";

import { PLAYER_SKILLS } from "@const/world/entities/player";
import { PlayerSkill } from "@type/world/entities/player";

import { UpgradesListItem } from "./item";
import { Container } from "./styles";

type Props = {
  onClose: () => void;
};

export const UpgradesList: React.FC<Props> = ({ onClose }) => {
  const refContainer = useRef<HTMLDivElement>(null);

  const upgradeTypes = useMemo(
    () => Object.keys(PLAYER_SKILLS) as PlayerSkill[],
    []
  );

  const onClickOutside = (event: MouseEvent) => {
    const isOutside = event
      .composedPath()
      .every((element) => element !== refContainer.current);

    if (isOutside) {
      onClose();
    }
  };

  const onKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
      event.stopPropagation();
    }
  };

  useEffect(() => {
    document.addEventListener("click", onClickOutside);
    document.addEventListener("keyup", onKeyPress);

    return () => {
      document.removeEventListener("click", onClickOutside);
      document.removeEventListener("keyup", onKeyPress);
    };
  }, []);

  return (
    <Container ref={refContainer}>
      {upgradeTypes.map((type) => (
        <UpgradesListItem key={type} type={type} />
      ))}
    </Container>
  );
};
