import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_PLAYERS, GET_GAMES } from "../services/player-api";
import { useAppDispatch } from "../store/hooks";
import { addPlayers } from "../store/playerStore";
import { Query } from "../data/api-schema";
import PlayerPresentationCard from "./PlayerPresentationCard";

const Home = (): React.ReactElement => {
  const playerQuery = useQuery<Query>(GET_PLAYERS);
  const gamesQuery = useQuery<Query>(GET_GAMES);

  const dispatch = useAppDispatch();

  useEffect(() => {
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
    <div className="flex justify-center content-center h-screen !bg-gray-100">
      <div className="m-auto">
        <PlayerPresentationCard></PlayerPresentationCard>
      </div>
    </div>
  );
};

export default Home;
