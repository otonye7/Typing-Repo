import './App.css';
import Header from './components/header/header.component';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/home.component';
import GamePage from './pages/game/game.component';


function App() {

  return (
    <div className="App">
       <Header />
       <Routes>
         <Route  path={'/'} exact={true}  element={<Home />} />
         <Route  path={'/game'} exact={true}  element={<GamePage />} />
     </Routes>
    </div>
  );
}

export default App;
