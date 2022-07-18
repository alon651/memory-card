import React, { useContext } from "react";
import { scoreContext } from "../contexts/scoreContext";

function Headerbar() {
  const { highScore, setHigh, currentScore, setCurrent, ...rest } =
    useContext(scoreContext);

  const updateScores = () => {
    setCurrent(currentScore + 1);
    currentScore + 1 > highScore
      ? setHigh(currentScore + 1)
      : setHigh(highScore);
  };

  return (
    <header className="flex flex-row justify-between bg-slate-700 text-white px-20 py-3 text-2xl items-baseline">
      <div>memory game</div>
      <div className="flex flex-row space-x-10">
        <div className="select-none p-2 text-lg text-slate-200 bg-green-500 hover:bg-green-700 hover:text-white">
          high score: {highScore}
        </div>
        <div className="select-none p-2 text-lg text-slate-200 bg-red-500 hover:bg-red-700 hover:text-white">
          current score: {currentScore}
        </div>
      </div>
    </header>
  );
}
export default Headerbar;
