import '../score/score.css';

const Score = ({ correctWord, inCorrectWord, status, score, numberOfWords, currentInput }) => {
    let total = correctWord + inCorrectWord
    return(
        <div className="scorecontainer">
            <p className='score'>SCORE: {score} / {total}</p>
            {status === "finished" && (<p className='score'>ACCURACY: {Math.round((score / (total)) * 100)}%</p>)}
        </div>
    )
}

export default Score;