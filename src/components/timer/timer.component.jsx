import '../timer/timer.css';

const Timer = ({ countDown, score, numberOfWords, correctWord, inCorrectWord, status }) => {
    return(
        <div className="container">
            <p className='score-text'>SCORE: {score} / {numberOfWords} </p>
            { status === "finished" && (<p className='score-text'>ACCURACY: {Math.round((correctWord) / (correctWord + inCorrectWord)) * 100}%</p>)}
            <p className="time-text">TIMER: {countDown}</p>
        </div>
    )
}

export default Timer;