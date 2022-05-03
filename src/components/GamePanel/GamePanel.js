import React from 'react';

import Card from './Card';


function GamePanel(props) {
  const { pokemonIdList } = props;

  return (
    <div className="GamePanel">
      {pokemonIdList.map(pkId => {
        return (
          <Card pokemonId={pkId} key={pkId} />
        )
      })}
    </div>
  );
}

export default GamePanel;
