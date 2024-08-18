import PlayerCard from "./components/PlayerCard";

export default function Home() {
  return (
    <main className="p-12 flex justify-center items-center h-full">
      <div className="w-full max-w-2xl h-4/6 flex flex-col justify-between border border-neutral-700 rounded-lg p-8">
        <h1 className="text-center text-2xl">CHOOSE YOUR CHARACTER</h1>
        <div className="flex justify-between items-center gap-4">
          <PlayerCard />
          <PlayerCard />
        </div>
        <button>START GAME!</button>
      </div>
    </main>
  );
}
