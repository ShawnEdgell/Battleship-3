import { useState } from 'react';
import Gameboard from './components/Gameboard';
import Controls from './components/Controls';
import './styles/App.css';

function App() {
  // Here, you'll set up the state that will manage the overall game state
  const [gameState, setGameState] = useState(/* initial state */);

  return (
    <div className="app">
      <h1>Battleship</h1>
      <Gameboard gameState={gameState} /* other props */ />
      <Controls /* props */ />
    </div>
  );
}

export default App;
