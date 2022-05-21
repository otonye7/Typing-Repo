import { useState } from 'react';
import '../home/home.css';
import typingGame from '../../assets/typing-game.jpg';
import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const Home = () => {
    const [state] = useState({
        title: "How Fast Can You Type ?"
    })
    const history = useNavigate(); 
    const game = () => {
        history('./game')
    }
    return(
        <div className='overall'>
        <div className="image-container">
            <img src={typingGame} alt="" />
        </div>
        <div className='type-container'>
            <h2 className='type-text'>
            <Typewriter 
              options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: [
                    "How Fast Can You Type ?"
                  ]
              }}
            />
            </h2>
            <div className='started-button'>
                <button onClick={game} className='startbutton'>Get Started</button>
            </div>
        </div>
        </div>
    )
}

export default Home