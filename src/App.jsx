import Headerbar from "./components/Headerbar";
import { scoreContext } from "./contexts/scoreContext";
import "./App.css";
import { useState } from "react";
import Card from "./components/Card";
const langs = [
  "cpp",
  "python",
  "c sharp",
  "go",
  "javascript",
  "java",
  "typescript",
  "rust",
];

function App() {
  const [highScore, setHigh] = useState(0);
  const [currentScore, setCurrent] = useState(0);
  const [cards, setCards] = useState(langs);
  const clickedState = useState([]);
  const scores = {
    highScore,
    setHigh,
    currentScore,
    setCurrent,
  };

  function shuffle(originalArray) {
    var array = [].concat(originalArray);
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  function shuffleLangs() {
    setCards(shuffle(cards));
  }
  function updateScores() {
    setCurrent(currentScore + 1);
    if (currentScore + 1 > highScore) setHigh(currentScore + 1);
  }
  return (
    <div className="App">
      <scoreContext.Provider value={scores}>
        <Headerbar />
        <div className="m-10 mx-10 flex gap-16 flex-wrap justify-center">
          {cards.map((i) => (
            <Card
              lang={i}
              key={i}
              clickedState={clickedState}
              shuffle={shuffleLangs}
            />
          ))}
        </div>
      </scoreContext.Provider>
    </div>
  );
}

export default App;
