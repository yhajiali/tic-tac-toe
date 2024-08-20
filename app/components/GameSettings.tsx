import React from "react";
import PlayerCard from "./PlayerCard";
import { Button } from "@radix-ui/themes";

type Props = {};

const GameSettings = ({}: Props) => {
  return (
    <div className="w-full max-w-xs md:max-w-2xl md:h-5/6 mx-auto flex flex-col justify-center gap-6 border border-neutral-700 rounded-3xl p-4 md:p-8 animate-fadeIn">
      <h1 className="text-center md:text-2xl font-bold">
        CHOOSE YOUR CHARACTER!
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <PlayerCard playerName="Player 1" playerType="human" />
        <PlayerCard playerName="Player 2" playerType="cpu" />
      </div>

      <Button className="hover:cursor-pointer">START GAME!</Button>
    </div>
  );
};

export default GameSettings;
