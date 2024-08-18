"use client";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";

type Props = {
  playerName: string;
  playerType: "human" | "cpu"; // "human" or "computer"
};

const PlayerCard = ({ playerName, playerType }: Props) => {
  const [player, setPlayer] = useState(playerType);

  const handlePlayerChange = () => {
    setPlayer(player === "human" ? "cpu" : "human");
  };
  return (
    <div className="w-1/2 h-96 border rounded-xl flex flex-col justify-center items-center gap-4">
      <button>
        <QuestionMarkCircledIcon className="size-6" />
      </button>
      <div className="size-32 border rounded-xl"></div>
      <input type="text" placeholder={playerName} className="p-2 rounded-xl" />
      <div className="flex justify-center gap-4">
        <input type="color" name="" id="" />
        <button onClick={handlePlayerChange} className="w-20 border rounded">
          {player}
        </button>
      </div>
    </div>
  );
};

export default PlayerCard;
