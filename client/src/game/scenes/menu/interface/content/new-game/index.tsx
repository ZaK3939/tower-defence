import Phaser from "phaser";
import { useGame } from "phaser-react-ui";
import React, { useMemo } from "react";
import { useAccount } from "wagmi";
import { ConnectKitButton } from "connectkit";

import { Button } from "@game/scenes/system/interface/button";
import { GameDifficulty, IGame } from "@type/game";

import { Param } from "./param";
import { Wrapper, Params } from "./styles";
import { WawaContainer } from "@game/scenes/menu/interface/styles";
import { LevelPlanet } from "@type/world/level";
import { useOwnedWawas } from "@lib/wawa";
import { Wawa, defaultWawa } from "@type/wawa";

export const NewGame: React.FC = () => {
  const game = useGame<IGame>();
  const { address } = useAccount()
  const { data: wawas, isFetched } = useOwnedWawas(address)

  const planets = useMemo(() => Object.keys(LevelPlanet) as LevelPlanet[], []);
  const difficulties = useMemo(
    () => Object.keys(GameDifficulty) as GameDifficulty[],
    []
  );

  const onChangePlanet = (planet: LevelPlanet) => {
    game.world.scene.restart({ planet });

    game.world.events.once(Phaser.Scenes.Events.CREATE, () => {
      game.world.camera.focusOnLevel();
    });
  };

  const onChangeDifficulty = (difficulty: GameDifficulty) => {
    game.difficulty = difficulty;
  };

  const onClickStart = (wawa?: Wawa) => {
    game.startNewGame(wawa);
  };

  return (
    <Wrapper>
      <Params>
        <Param
          label="Planet"
          values={planets}
          defaultValue={game.world.level.planet}
          onChange={onChangePlanet}
        />
        <Param
          label="Difficulty"
          values={difficulties}
          defaultValue={game.difficulty}
          onChange={onChangeDifficulty}
        />
      </Params>
      {wawas.length > 0 ? (
        <WawaContainer>
          {wawas.map((wawa) => (
            <Button key={wawa.tokenId} onClick={() => onClickStart(wawa)}>
              <img src={wawa.image.x10bg} width="100px" height="100px" />
            </Button>
          ))}
          <Button onClick={() => onClickStart(defaultWawa)} view="primary" size="medium">
            Start
          </Button>
        </WawaContainer>
      ) : (
        isFetched && (
          address ? (
            <Button onClick={() => onClickStart(defaultWawa)} view="primary" size="medium">
              Start
            </Button>
          ) : (
            <ConnectKitButton />
          )
        )
      )}
    </Wrapper>
  );
};
