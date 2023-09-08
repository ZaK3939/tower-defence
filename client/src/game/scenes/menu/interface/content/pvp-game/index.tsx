import React, { useState, useEffect, useMemo } from "react";
import { Button } from "@game/scenes/system/interface/button";
import { useGame } from "phaser-react-ui";
import { GameDifficulty, IGame } from "@type/game";
import { LevelPlanet } from "@type/world/level";
import { Wrapper, Params, ButtonWrapper } from "./styles";
import { Param } from "./param";

export const PvpGame: React.FC = () => {
  const game = useGame<IGame>();
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
      <Button onClick={() => setIsJoinMode(!isJoinMode)}>
        {isJoinMode ? "Switch to Start Mode" : "Switch to Join Mode"}
      </Button>

      {isJoinMode ? (
        hasAvailableRooms ? (
          <>
            <h3>Select a Room to Join As a Tower Attacker:</h3>
            <br />
            <ul>
              {availableRoomIds.map((name) => (
                <li key={name}>
                  <Button
                    onClick={() => game.joinPvPGame(name)}
                    view="primary"
                    size="small"
                  >
                    Join Room {name}
                  </Button>
                </li>
              ))}
            </ul>
          </>
        ) : null
      ) : (
        <>
          <br />
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
          <ButtonWrapper>
            {availableStartRoomNames.length > 0 ? (
              <Button
                onClick={() => game.startNewPvPGame(availableStartRoomNames[0])}
                view="primary"
                size="small"
              >
                Start {availableStartRoomNames[0]}
              </Button>
            ) : (
              <span>Rooms are currently full.</span>
            )}
          </ButtonWrapper>
        </>
      )}
    </Wrapper>
  );
};
