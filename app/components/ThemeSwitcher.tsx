"use client";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

type Props = {};

function ThemeSwitcher({}: Props) {
  const [darkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", String(darkMode));
  };

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}

export default ThemeSwitcher;
