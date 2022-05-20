// import './App.css';
import { useState, useEffect } from 'react';
import CardComponent from './components/card/card.component';
import TextArea from './components/text-area/text-area.component';
import randomWords from 'random-words';


const NUMBER_OF_WORDS = 200;
// const SECONDS = 60;

function App() {
  const [words, setWords] = useState([]);

  console.log(words)

  useEffect(() => {
    setWords(generateWords())
  }, [])

  function generateWords(){
    return new Array(NUMBER_OF_WORDS).fill(null).map(() => randomWords())
  }

  return (
    <div className="App">
       <CardComponent words={words} />
       <br />
       <TextArea />
    </div>
  );
}

export default App;
