import React from 'react';

import GamePanel from './GamePanel/GamePanel';
import ScorePanel from './ScorePanel/ScorePanel';

import './styles/App.css';


function App() {
  return (
    <div>
      <GamePanel />
      <ScorePanel />
    </div>
  );
}

export default App;
