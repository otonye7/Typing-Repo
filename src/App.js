// import './App.css';
import { useState, useEffect, useRef } from 'react';
import CardComponent from './components/card/card.component';
import TextArea from './components/text-area/text-area.component';
import Timer from './components/timer/timer.component';
import randomWords from 'random-words';


const NUMBER_OF_WORDS = 200;
const SECONDS = 10;

function App() {
  const [words, setWords] = useState([]);
  const [countDown, setCountDown] = useState(SECONDS);
  const [currentInput, setCurrentInput] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(-1);
  const [currentChar, setCurrentChar] = useState("");
  const [score, setScore] = useState(0);
  const [correctWord, setCorrectWord] = useState(0);
  const [inCorrectWord, setInCorrectWord] = useState(0);
  const [status, setStatus] = useState("waiting");
  const textInput = useRef(null)

  useEffect(() => {
    setWords(generateWords())
  }, [])

  useEffect(() => {
    if(status === "started"){
      textInput.current.focus()
    }
  }, [status])

  function generateWords(){
    return new Array(NUMBER_OF_WORDS).fill(null).map(() => randomWords())
  }

  const startTimer = () => {
    if(status === "finished"){
      setCorrectWord(0);
      setScore(0);
      setInCorrectWord(0);
      setCurrentCharIndex(-1);
      setCurrentChar("");
    }
    if(status !== "started"){
      setStatus("started")
      let interval = setInterval(() => {
        setCountDown(prev =>  {
         if(prev === 1){
           clearInterval(interval)
           setStatus("finished")
           setCurrentInput("")
           return SECONDS 
         }
         return prev - 1
        })
    }, 1000)
    }
  }

  const checkMatch = () => {
    const wordToCompare = words[currentWordIndex];
    const doesItMatch = wordToCompare === currentInput.trim();
    if(doesItMatch === true){
      setScore((prev) => prev + 1)
      setCorrectWord((prev) => prev + 1)
    } else {
      setScore((prev) => prev - 1)
      setInCorrectWord((prev) => prev - 1)
    }
  }

  const handleKeyDown = ({ keyCode, key }) => {
    if(keyCode === 32){
       setCurrentInput("")
       checkMatch()
       setCurrentWordIndex((prev) => prev + 1)
       setCurrentCharIndex(-1)
    } else if(keyCode === 8){
      setCurrentCharIndex((prev) => prev - 1)
      setCurrentChar("")
    } else {
      setCurrentCharIndex((prev) => prev + 1)
      setCurrentChar(key)
    }
  }

  const getCharClass = (wordIdx, charIdx, char) => {
    if(wordIdx === currentWordIndex && charIdx === currentCharIndex && currentChar && status !== "finished"){
      if(char === currentChar){
        return ""
      } else {
        return "red"
      }
    } else if(wordIdx === currentWordIndex && currentCharIndex > words[currentWordIndex].length) {
      return "red"
    } else {
      return ""
    }
  }

  const handleChange = (e) => {
    setCurrentInput(e.target.value)
  }

  return (
    <div className="App">
       <Timer countDown={countDown}
        score={score}
        numberOfWords={NUMBER_OF_WORDS} 
        correctWord={correctWord}
        inCorrectWord={inCorrectWord}
        status={status}
        />
       <br />
       <CardComponent 
         words={words} 
         getCharClass={getCharClass}
         />
       <br />
       <TextArea startTimer={startTimer}
        handleKeyDown={handleKeyDown}
        currentInput={currentInput}
        handleChange={handleChange}
        status={status}
        textInput={textInput}
        />
    </div>
  );
}

export default App;
