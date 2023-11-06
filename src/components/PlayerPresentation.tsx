import { useQuery } from "@apollo/client";
import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect } from "react";
import { GET_PLAYERS, GET_GAMES } from "../services/player-api";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addPlayers } from "../store/playersState";
import { Query } from "../data/api-schema";

const PlayerCard = (): React.ReactElement => {
  const playerQuery = useQuery<Query>(GET_PLAYERS);
  const gamesQuery = useQuery<Query>(GET_GAMES);
  const playersData = useAppSelector((state) => state.players.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("useEffect", playerQuery.data);
    playerQuery.data &&
      gamesQuery.data &&
      dispatch(
        addPlayers({
          players: playerQuery.data.players,
          matches: gamesQuery.data.matches,
        }),
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerQuery.data, gamesQuery.data]);

  return (
    <div className="player-card flex justify-center content-center space-x-20 ">
      {playersData &&
        playersData.map((player) => (
          <Card className="flex-row w-96">
            <CardHeader shadow={false} floated={false} className="relative">
              <img
                className="h-40 w-full object-center object-contain"
                src={player.pictureUrl}
                alt="player"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" className="mb-2">
                {player.firstname} {player.lastname}
                <Avatar variant="square" size="xs" src={player.flagUrl} />
              </Typography>
              <Typography>
                {player.rank}e
                <Typography variant="small" className="italic">
                  ({player.points})
                </Typography>
              </Typography>
              <Typography>{player.age}</Typography>
              <Typography>{player.height}</Typography>
              <Typography>{player.weight}</Typography>
              <Typography>total time :{player.totalTimePlayed}</Typography>
              <Typography>win :{player.wins}</Typography>
              <Typography>loses :{player.loses}</Typography>
            </CardBody>
          </Card>
        ))}
    </div>
  );
};

export default PlayerCard;
