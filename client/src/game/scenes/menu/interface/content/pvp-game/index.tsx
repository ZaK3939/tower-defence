import React, { useState, useEffect, useMemo } from "react";
import { useAccount } from "wagmi";
import { ConnectKitButton } from "connectkit";
import { Button } from "@game/scenes/system/interface/button";
import { useGame } from "phaser-react-ui";
import { GameDifficulty, IGame } from "@type/game";
import { LevelPlanet } from "@type/world/level";
import { Wrapper, Params, ButtonWrapper } from "./styles";
import { WawaContainer } from "@game/scenes/menu/interface/styles";
import { Param } from "./param";
import { useOwnedWawas } from "@lib/wawa";
import { Wawa, defaultWawa } from "@type/wawa";

export const PvpGame: React.FC = () => {
  const game = useGame<IGame>();
  const { address } = useAccount();
  const { data: wawas, isFetched } = useOwnedWawas(address);
  const [hasAvailableRooms, setHasAvailableRooms] = useState(false);
  const [availableRoomIds, setAvailableRoomIds] = useState<string[]>([]);
  const [isJoinMode, setIsJoinMode] = useState(false); // true for join mode, false for start mode

  useEffect(() => {
    game.network.getAvailableRooms().then((rooms) => {
      setHasAvailableRooms(rooms.length > 0);
      setAvailableRoomIds(rooms.map((room) => room.name));
    });
  }, [game]);

  const planets = useMemo(() => Object.keys(LevelPlanet) as LevelPlanet[], []);
  const difficulties = useMemo(
    () => Object.keys(GameDifficulty) as GameDifficulty[],
    []
  );

  const roomNames = ["my_room", "my_room2"];

  const availableStartRoomNames = roomNames.filter(
    (name) => !availableRoomIds.includes(name)
  );

  const onChangePlanet = (planet: LevelPlanet) =>
    game.world.scene.restart({ planet });
  const onChangeDifficulty = (difficulty: GameDifficulty) =>
    (game.difficulty = difficulty);

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
            <Button
              key={wawa.tokenId}
              onClick={() =>
                game.startNewPvPGame(availableStartRoomNames[0], wawa)
              }
            >
              <img src={wawa.image.x10bg} width="100px" height="100px" />
            </Button>
          ))}
          <Button
            onClick={() =>
              game.startNewPvPGame(availableStartRoomNames[0], defaultWawa)
            }
            view="primary"
            size="medium"
          >
            Start
          </Button>
        </WawaContainer>
      ) : (
        isFetched &&
        (address ? (
          <Button
            onClick={() =>
              game.startNewPvPGame(availableStartRoomNames[0], defaultWawa)
            }
            view="primary"
            size="medium"
          >
            Start
          </Button>
        ) : (
          <ConnectKitButton />
        ))
      )}

      {hasAvailableRooms ? (
        <>
          <hr />
          <h3>Select a Room to Join</h3>
          <br />
          <ul>
            {availableRoomIds.map((name) => (
              <li key={name}>
                <Button
                  onClick={() => game.joinPvPGame(name)}
                  view="primary"
                  size="small"
                >
                  Join {name}
                </Button>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </Wrapper>
  );
};
