import GameSettings from "./components/GameSettings";

export default function Home() {
  const gameStarted = false;
  return gameStarted ? <></> : <GameSettings />;
}
