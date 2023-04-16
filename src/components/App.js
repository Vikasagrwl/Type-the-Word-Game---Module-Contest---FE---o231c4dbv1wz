import React, { useState, useEffect } from "react";
import "../styles/App.css";

const WORD_LIST = ["apple", "banana", "cherry", "grape", "orange"];

function App() {
  const [word, setWord] = useState("");
  const [flashWord, setFlashWord] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(()=>{
    setWord(WORD_LIST[index])
  },[index])

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if(word===userInput){
      setResult("You Won!")
    }
    else{
      setResult("You Lost!")
    }
  };
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleRestartClick = ()=>{
    setResult("")
    setIndex(index+1)
    setUserInput("")
    setFlashWord(true)
  } 

  return (
    <div className="mini-game-container">
      <h2 className="mini-game-title">Mini Game</h2>
      {setTimeout(() => {
        return setFlashWord(false);
      }, 500)}
      {flashWord ? (
        <p className="mini-game-word">{word}</p>
      ) : (
        result == "" &&
        <form className="mini-game-form" onSubmit={handleFormSubmit}>
          <input
            class="mini-game-input"
            type="text"
            value={userInput}
            onChange={handleInputChange}
          />
          <button className="mini-game-button" type="submit">
            Check Answer
          </button>
        </form>
      
      )}

      {result && (
        <>
          <p class="mini-game-result">{result}</p>
          <button class="mini-game-restart-button" onClick={handleRestartClick}>
            Restart
          </button>
        </>
      )}
    </div>
  );
}

export default App;
