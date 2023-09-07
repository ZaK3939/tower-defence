import Phaser from "phaser";
import { useGame } from "phaser-react-ui";
import React, { useState, useEffect, useMemo } from "react";

import { Button } from "@game/scenes/system/interface/button";
import { GameDifficulty, IGame } from "@type/game";

import { Param } from "./param";
import { Wrapper, Params } from "./styles";
import { LevelPlanet } from "@type/world/level";

export const PvpGame: React.FC = () => {
  const game = useGame<IGame>();
  const [hasAvailableRooms, setHasAvailableRooms] = useState(false);
  const [availableRoomIds, setAvailableRoomIds] = useState<string[]>([]);

  useEffect(() => {
    game.network.getAvailableRooms().then((rooms) => {
      setHasAvailableRooms(rooms.length > 0);
      setAvailableRoomIds(rooms.map((room) => room.roomId));
    });
  }, [game]);

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

  const onClickStart = () => {
    game.startNewPvPGame();
  };

  const onClickJoin = () => {
    game.joinPvPGame();
  };

  return (
    <Wrapper>
      {hasAvailableRooms ? (
        <>
          <h3>Select a Room to Join As Attacker:</h3>
          <ul>
            {availableRoomIds.map((roomId) => (
              <li key={roomId}>
                <Button
                  onClick={() => game.joinPvPGame()}
                  view="primary"
                  size="medium"
                >
                  Join Room {roomId}
                </Button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
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
          <Button onClick={onClickStart} view="primary" size="medium">
            Start
          </Button>
        </>
      )}
    </Wrapper>
  );
};
