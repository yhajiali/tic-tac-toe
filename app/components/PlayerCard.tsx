"use client";
import {
  ImageIcon,
  PersonIcon,
  QuestionMarkCircledIcon,
} from "@radix-ui/react-icons";
import { Avatar, Flex, IconButton, TextField, Tooltip } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";

type Props = {
  playerName: string;
  playerType: "human" | "cpu"; // "human" or "computer"
};

const PlayerCard = ({ playerName, playerType }: Props) => {
  const [player, setPlayer] = useState(playerType);
  const [color, setColor] = useState("#fff");

  const handlePlayerChange = () => {
    setPlayer(player === "human" ? "cpu" : "human");
  };

  useEffect(() => console.log("color:", color), [color]);

  return (
    <div className="w-full md:w-1/2 h-48 md:h-96 p-4 border border-neutral-700 rounded-xl flex flex-col justify-center gap-4">
      <Flex justify={"center"} gap={"6"}>
        {/* <Tooltip content="Randomise">
          <IconButton radius="full">
            <QuestionMarkCircledIcon className="size-5" />
          </IconButton>
        </Tooltip> */}

        <Avatar
          size="7"
          radius="small"
          fallback={<ImageIcon className="size-5" />}
        />

        <Flex
          direction={"column"}
          justify={"center"}
          align={"center"}
          gap={"2"}
          className="w-1/2"
        >
          <input
            type="color"
            name=""
            id=""
            className="w-full h-10 border border-neutral-700 rounded"
          />
          <button
            onClick={handlePlayerChange}
            className="w-full h-10 border border-neutral-700 rounded uppercase font-bold text-sm"
          >
            {player}
          </button>
        </Flex>
      </Flex>

      <TextField.Root placeholder={playerName} radius="large">
        <TextField.Slot>
          <PersonIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>
    </div>
  );
};

export default PlayerCard;
