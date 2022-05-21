import '../header/header.css';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const history = useNavigate(); 
    const home = () => {
        history('./')
    }
    return(
        <div onClick={home} className="header-container">
            <h2 className='header-text'>Typing Game</h2>
        </div>
    )
}

export default Header