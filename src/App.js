// import './App.css';
import { useState, useEffect } from 'react';
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
  const [score, setScore] = useState(0);
  const [correctWord, setCorrectWord] = useState(0);
  const [inCorrectWord, setInCorrectWord] = useState(0);
  const [status, setStatus] = useState("waiting");

  useEffect(() => {
    setWords(generateWords())
  }, [])

  function generateWords(){
    return new Array(NUMBER_OF_WORDS).fill(null).map(() => randomWords())
  }

  const startTimer = () => {
    if(status !== "started"){
      setStatus("started")
      let interval = setInterval(() => {
        setCountDown(prev =>  {
         if(prev === 1){
           clearInterval(interval)
           setStatus("finished")
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

  const handleKeyDown = ({ keyCode }) => {
    if(keyCode === 32){
       setCurrentInput("")
       checkMatch()
       setCurrentWordIndex((prev) => prev + 1)
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
       <CardComponent words={words} />
       <br />
       <TextArea startTimer={startTimer}
        handleKeyDown={handleKeyDown}
        currentInput={currentInput}
        handleChange={handleChange}
        status={status}
        />
    </div>
  );
}

export default App;
