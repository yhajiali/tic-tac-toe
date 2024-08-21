"use client";
import {
  ImageIcon,
  PersonIcon,
  QuestionMarkCircledIcon,
} from "@radix-ui/react-icons";
import { Avatar, Flex, IconButton, TextField, Tooltip } from "@radix-ui/themes";
import React, { useState } from "react";

type Props = {
  playerName: string;
  playerType: "human" | "cpu"; // "human" or "computer"
};

const PlayerCard = ({ playerName, playerType }: Props) => {
  const [type, setType] = useState(playerType);
  const [player, setPlayer] = useState({
    avatar: "",
    name: "",
    color: "",
  });
  const nameArray = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Frank",
    "Grace",
    "Harry",
    "Isabella",
    "Jack",
    "Jill",
    "Kim",
    "Lisa",
    "Mary",
    "Nancy",
    "Olivia",
    "Peter",
    "Quinn",
    "Rachel",
    "Sophia",
    "Tina",
    "Ursula",
    "Vivienne",
    "Wendy",
    "Xavier",
    "Yvonne",
    "Zoe",
  ];

  const changePlayerType = () => {
    setType(type === "human" ? "cpu" : "human");
  };

  const randomisePlayer = () => {
    setPlayer({
      ...player,
      avatar: `https://picsum.photos/id/${
        Math.floor(Math.random() * 1000) + 1
      }/200/200`,
      name: nameArray[Math.floor(Math.random() * nameArray.length)],
    });
  };

  // Change to a random selection of Avatars
  const changeAvatar = () => {
    setPlayer({
      ...player,
      avatar: `https://picsum.photos/id/${
        Math.floor(Math.random() * 1000) + 1
      }/200/200`,
    });
  };

  return (
    <div className="w-full md:w-1/2 h-48 md:h-96 p-4 border border-neutral-700 rounded-xl flex flex-col justify-center gap-4">
      <Flex justify={"center"} gap={"6"}>
        <div className="relative">
          <div
            className="absolute -left-2 -top-2 z-50"
            onClick={randomisePlayer}
          >
            <Tooltip content="Randomise">
              <IconButton radius="full" className="hover:cursor-pointer">
                <QuestionMarkCircledIcon className="size-5" />
              </IconButton>
            </Tooltip>
          </div>

          <Avatar
            size="7"
            radius="small"
            fallback={<ImageIcon className="size-5" />}
            src={player.avatar}
            className="hover:scale-90 hover:cursor-pointer transition-transform duration-200"
            onClick={changeAvatar}
          />
        </div>

        <div className="flex flex-col justify-center items-center gap-2 w-2/5">
          <input
            type="color"
            className="w-full h-10 border border-neutral-700 rounded"
          />
          <button
            onClick={changePlayerType}
            className={`w-full h-10 border border-neutral-700 rounded uppercase font-bold text-sm ${
              type === "human" ? "text-blue-500" : "text-neutral-300"
            }`}
          >
            {type}
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
