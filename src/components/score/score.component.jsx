import '../score/score.css';

const Score = ({ correctWord, inCorrectWord, status, score, numberOfWords, currentInput }) => {
    let total = correctWord + inCorrectWord
    return(
        <div className="scorecontainer">
            <p className='score'>SCORE: {score} / {total}</p>
            <p className='score'>{Math.round((score / (total)) * 100)}%</p>
           {/* {status === "finished" && (<p className='score'>{Math.round((correctWord / (correctWord + inCorrectWord)) * 100)}%</p>)} */}
            <p className='score'>SPEED: {score} word per minute </p>
        </div>
    )
}

export default Score;