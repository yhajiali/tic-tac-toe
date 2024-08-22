"use client";
import { ImageIcon, PersonIcon, SymbolIcon } from "@radix-ui/react-icons";
import { Avatar, Flex, IconButton, TextField, Tooltip } from "@radix-ui/themes";
import React, { useState } from "react";
import { characters, colors } from "../data/gameSelectionData";
import Image from "next/image";

type Props = {
  playerName: string;
  playerType: "human" | "cpu"; // "human" or "computer"
};

const PlayerCard = ({ playerName, playerType }: Props) => {
  const [player, setPlayer] = useState({
    avatar:
      playerType === "human" ? characters[0].avatar : characters[1].avatar,
    name: "",
    color: playerType === "human" ? "#0099ff" : "#ff0000",
    type: playerType,
  });

  const randomisePlayer = () => {
    // get random player from array of characters
    const randomPlayer =
      characters[Math.floor(Math.random() * characters.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    // set the player details to that random character
    setPlayer({
      ...player,
      avatar: randomPlayer.avatar,
      name: randomPlayer.name,
      color: randomColor,
    });
  };

  // playerType from human -> computer or vice versa
  const changePlayerType = () => {
    setPlayer({ ...player, type: player.type === "human" ? "cpu" : "human" });
  };

  // Change from selection of Avatars
  const changeAvatar = () => {
    setPlayer({
      ...player,
      avatar: characters[Math.floor(Math.random() * characters.length)].avatar,
    });
  };

  return (
    <div className="w-full md:w-1/2 h-48 md:h-96 p-4 border border-neutral-700 rounded-xl flex flex-col justify-center gap-4 opacity-80">
      <Flex justify={"center"} gap={"6"} className="md:flex-col items-center">
        <div
          className={`relative rounded-lg`}
          style={{ backgroundColor: player.color }}
        >
          <div
            className="absolute -left-2 -top-2 z-10"
            onClick={randomisePlayer}
          >
            <Tooltip content="Randomise">
              <IconButton radius="full" className="hover:cursor-pointer">
                <SymbolIcon />
              </IconButton>
            </Tooltip>
          </div>

          <figure className="overflow-hidden size-24 md:size-32 flex justify-center items-center">
            <Image
              src={player.avatar}
              className="hover:scale-90 hover:cursor-pointer transition-transform duration-200 size-32"
              onClick={changeAvatar}
              alt={``}
            />
          </figure>
        </div>

        <div className="flex flex-col justify-center items-center gap-2 w-2/5 md:w-2/3">
          <input
            type="color"
            className="w-full h-10 border border-neutral-700 rounded"
            value={player.color}
            onChange={(e) => setPlayer({ ...player, color: e.target.value })}
          />
          <button
            onClick={changePlayerType}
            className={`w-full h-10 border border-neutral-700 rounded uppercase font-bold text-sm bg-neutral-800 ${
              player.type === "human" ? "text-blue-500" : "text-neutral-300"
            }`}
          >
            {player.type}
          </button>
        </div>
      </Flex>

      <TextField.Root
        placeholder={playerName}
        radius="large"
        onChange={(e) => setPlayer({ ...player, name: e.target.value })}
        value={player.name}
      >
        <TextField.Slot>
          <PersonIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>
    </div>
  );
};

export default PlayerCard;
