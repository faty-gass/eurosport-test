import { Avatar, Card, CardBody, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { useAppSelector } from "../store/hooks";
import WinningGameModal from "./WinningGameModal";

const PlayerPresentationCard = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentPlayer, setCurrentPlayer] = useState<string>();
  const playersData = useAppSelector((state) => state.players.value);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const onClickCard = (currentPlayerId: string) => {
    setCurrentPlayer(currentPlayerId);
    handleOpen();
  };

  return (
    <div
      data-cy="player-card-component"
      className="flex justify-center content-center space-x-20 "
    >
      {playersData &&
        playersData.map((player) => (
          <Card
            data-cy="player-card"
            className="w-96 text-slate-950 cursor-pointer"
            onClick={() => onClickCard(player.id)}
          >
            <CardBody className="grid grid-row-3 gap-2">
              <div className="m-auto">
                <Typography variant="h5" className="mb-2 ">
                  <span data-cy="player-card-name" className="mr-2">
                    {player.firstname} {player.lastname}
                  </span>
                  <Avatar
                    data-cy="player-card-flag"
                    size="xs"
                    src={player.flagUrl}
                  />
                </Typography>
              </div>
              <div className="grid grid-cols-2 ">
                <img
                  data-cy="player-card-picture"
                  className="h-40 object-center object-contain m-auto rounded"
                  src={player.pictureUrl}
                  alt="player"
                />
                <div className="space-y-2">
                  <Typography data-cy="player-card-rank">
                    Ranking: {player.rank}e
                  </Typography>
                  <Typography data-cy="player-card-points">
                    Points: <span>{player.points}</span>
                  </Typography>
                  <Typography data-cy="player-card-age">
                    Age: {player.age}
                  </Typography>
                  <Typography data-cy="player-card-height">
                    Height: {player.height}
                  </Typography>
                  <Typography data-cy="player-card-weight">
                    Weight: {player.weight}
                  </Typography>
                </div>
              </div>
              <div className="space-y-2 text-center">
                <Typography data-cy="player-card-total-played-time">
                  Total played time: {player.totalTimePlayed}
                </Typography>
                <Typography data-cy="player-card-wins">
                  WINS: {player.wins}
                </Typography>
                <Typography data-cy="player-card-losses">
                  LOSSES: {player.losses}
                </Typography>
              </div>
            </CardBody>
          </Card>
        ))}
      <WinningGameModal
        gamesList={
          playersData.find((player) => player.id === currentPlayer)
            ?.winningGames ?? []
        }
        isOpen={isOpen}
        setIsOpen={handleOpen}
      />
    </div>
  );
};

export default PlayerPresentationCard;
