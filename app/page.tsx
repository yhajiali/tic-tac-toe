import GameSettings from "./components/GameSettings";
import PlayerCard from "./components/PlayerCard";

export default function Home() {
  const gameStarted = false;
  return gameStarted ? <></> : <GameSettings />;
}
