import React from "react";
import PlayerCard from "./PlayerPresentation";

const MyHome = (): React.ReactElement => {
  return (
    <div className="flex justify-center content-center">
      <div>
        <PlayerCard></PlayerCard>
      </div>
    </div>
  );
};

export default MyHome;
