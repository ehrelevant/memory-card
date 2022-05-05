import React from 'react';

import GamePanel from './GamePanel/GamePanel';
import ScorePanel from './ScorePanel/ScorePanel';


function Body(props) {
  const { score, highScore, pokemonIdList, pickCard } = props;

  return (
    <div className="Body">
      <ScorePanel score={score} highScore={highScore} />
      <GamePanel pokemonIdList={pokemonIdList} pickCard={pickCard} />
    </div>
  );
}

export default Body;
