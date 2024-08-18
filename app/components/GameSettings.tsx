import React from "react";
import PlayerCard from "./PlayerCard";
import { Button } from "@radix-ui/themes";

type Props = {};

const GameSettings = ({}: Props) => {
  return (
    <div className="w-full max-w-sm md:max-w-2xl h-4/6 md:h-5/6 mx-auto flex flex-col justify-center gap-6 border border-neutral-700 rounded-lg p-4 md:p-8">
      <h1 className="text-center md:text-2xl font-bold">
        CHOOSE YOUR CHARACTER
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <PlayerCard playerName="Player 1" playerType="human" />
        <PlayerCard playerName="Player 2" playerType="cpu" />
      </div>
      <Button>START GAME!</Button>
    </div>
  );
};

export default GameSettings;
