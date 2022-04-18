import React from 'react';

import GamePanel from './GamePanel/GamePanel';
import ScorePanel from './ScorePanel/ScorePanel';


function App() {
  return (
    <div className="Body">
      <ScorePanel />
      <GamePanel />
    </div>
  );
}

export default App;
