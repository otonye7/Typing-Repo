import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/home.component';
import GamePage from './pages/about/about.component';


function App() {

  return (
    <div className="App">
       <Routes>
         <Route  path={'/'} exact={true}  element={<Home />} />
     </Routes>
      {/* <GamePage /> */}
    </div>
  );
}

export default App;
