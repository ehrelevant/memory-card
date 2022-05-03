import React from 'react';

import GamePanel from './GamePanel/GamePanel';
import ScorePanel from './ScorePanel/ScorePanel';


function Body(props) {
  const { pokemonIdList } = props;

  return (
    <div className="Body">
      <ScorePanel />
      <GamePanel pokemonIdList={pokemonIdList}/>
    </div>
  );
}

export default Body;
