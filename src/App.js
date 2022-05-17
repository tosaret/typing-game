import { useState, useEffect } from "react";
import Container from "./components/Container/Container";
import Results from "./components/Results/Results";
import Typeracer from "./components/Typeracer/Typeracer";

import words from "./Words";

import "./App.css";

const TIMEOUT = 30;

const App = () => {
  const [newWord, setNewWord] = useState(words[0]);
  const [correctWords, setCorrectWords] = useState([]);
  const [wrongWords, setWrongWords] = useState([]);
  const [countCorrect, setCountCorrect] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [time, setTime] = useState(TIMEOUT);
  const [disabled, setDisabled] = useState(true);

  let randomWord = Math.floor(Math.random() * words.length);

  useEffect(() => {
    if (disabled === false && time <= TIMEOUT && time !== 0) {
      setTimeout(() => setTime((prev) => prev - 1), 1000);
    } else if (disabled) {
      setTime(TIMEOUT);
    } else if (time === 0) {
      setDisabled(true);
    }
  }, [disabled, time]);

  useEffect(() => {
    setNewWord(words[randomWord]);
  }, []);

  const checkAnswer = () => {
    if (inputValue.trim() === newWord) {
      setCorrectWords((prev) => [...prev, newWord]);
      setCountCorrect((prev) => prev + 1);
      return;
    }
    setWrongWords((prev) => [...prev, inputValue]);
  };

  const handleInput = (e) => {
    if (e.keyCode === 13 && inputValue.trim() !== "") {
      checkAnswer();
      setNewWord(words[randomWord]);
      setInputValue("");
    }
  };

  const handleButton = () => {
    setDisabled(!disabled);
    setCorrectWords([]);
    setWrongWords([]);
    setCountCorrect(0);
    setInputValue("");
  };

  return (
    <div className="App">
      <Container>
        <Typeracer
          handleInput={handleInput}
          handleButton={handleButton}
          setInputValue={setInputValue}
          inputValue={inputValue}
          newWord={newWord}
          time={time}
          disabled={disabled}
        />
      </Container>
      <Results
        correctWords={correctWords}
        wrongWords={wrongWords}
        countCorrect={countCorrect}
      />
    </div>
  );
};

export default App;
