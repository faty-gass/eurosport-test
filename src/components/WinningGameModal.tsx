import React, { useEffect, useState } from "react";
import { Dialog, DialogBody, DialogHeader } from "@material-tailwind/react";
import { Match } from "../data/api-schema";
import CloseIcon from "./Icon/CloseIcon";

interface WinningGameModalProps {
  gamesList: Match[];
  isOpen: boolean;
  setIsOpen: () => void;
}
const WinningGameModal = ({
  gamesList,
  isOpen,
  setIsOpen,
}: WinningGameModalProps): React.ReactElement => {
  const [sortedGames, setSortedGames] = useState<Match[]>([]);

  useEffect(() => {
    const games = gamesList.sort(
      (a, b) =>
        new Date(a.startTime).getTime() - new Date(b.startTime).getTime(),
    );
    setSortedGames(games);
  }, [gamesList]);

  return (
    <div data-cy="games-modal-component">
      <Dialog data-cy="games-modal" open={isOpen} handler={setIsOpen}>
        <DialogHeader className="justify-between">
          Winning Games
          <CloseIcon onClick={setIsOpen} />
        </DialogHeader>
        <DialogBody className=" h-[42rem] overflow-y-scroll ">
          <ul data-cy="games-modal-list" className="text-black">
            {sortedGames.map((game) => (
              <li className=" mb-2">
                <span className="font-bold">
                  {new Date(game.startTime).toLocaleDateString("EN")}
                </span>{" "}
                -
                <span>
                  {" "}
                  {game.playerOne} vs {game.playerTwo} -{" "}
                </span>
                <span className="!text-gray-700 italic ">
                  Duration : {game.duration}
                </span>
              </li>
            ))}
          </ul>
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default WinningGameModal;
