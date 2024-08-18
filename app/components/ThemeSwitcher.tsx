"use client";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useState } from "react";

type Props = {};

function ThemeSwitcher({}: Props) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}

export default ThemeSwitcher;
