import '../timer/timer.css';


const Timer = ({ handleSelectChange, minutes, seconds }) => {
    return(
        <div className="container">
           <p className="time-text">TIMER: {minutes} : {seconds}</p>
            <div className='select-container'>
                <select className='select' onChange={handleSelectChange}>
                    <option className="options" value="">-select time-</option>
                    <option className="options" value="1">1min</option>
                    <option className="options" value="2">2mins</option>
                    <option className="options" value="5">5mins</option>
                </select>
            </div>
    </div>
    )
}

export default Timer;

