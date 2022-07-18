import React, { useContext } from "react";
import cpp from "../images/cpp.svg";
import python from "../images/python.svg";
import csharp from "../images/csharp.svg";
import go from "../images/go.svg";
import java from "../images/java.svg";
import javascript from "../images/javascript.svg";
import rust from "../images/rust.svg";
import typescript from "../images/typescript.svg";
import { scoreContext } from "../contexts/scoreContext";

export default function Card(props) {
  const { highScore, setHigh, currentScore, setCurrent, ...rest } =
    useContext(scoreContext);
  function checkLanguage(lang) {
    if (lang === "cpp") return cpp;
    if (lang === "python") return python;
    if (lang === "c sharp") return csharp;
    if (lang === "go") return go;
    if (lang === "java") return java;
    if (lang === "javascript") return javascript;
    if (lang === "rust") return rust;
    if (lang === "typescript") return typescript;
    return console.error("card language isnt written");
  }
  const [clickedState, setCLicked] = props.clickedState;
  const updateScores = () => {
    setCurrent(currentScore + 1);
    currentScore + 1 > highScore
      ? setHigh(currentScore + 1)
      : setHigh(highScore);
    if (currentScore === 7) {
      alert("you won");
      setCurrent(0);
    }
  };
  function calcClick() {
    if (!clickedState.includes(props.lang)) {
      setCLicked([...clickedState, props.lang]);
      updateScores();
    } else {
      alert("you lost! try again");
      setCLicked([]);
      setCurrent(0);
    }
    props.shuffle();
  }
  return (
    <div
      className="group grid auto-rows-auto justify-start w-fit border-black border min-w-fit hover:bg-gray-400"
      onClick={() => {
        calcClick();
      }}
    >
      <img
        src={checkLanguage(props.lang)}
        alt={props.lang}
        className="w-32 h-32 m-8 "
      />
      <p className="m-0 pb-5 border-black group-hover:text-white group-hover:underline">
        {props.lang}
      </p>
    </div>
  );
}
