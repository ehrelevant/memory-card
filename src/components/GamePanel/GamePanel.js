import React from 'react';

import Card from './Card';


function GamePanel(props) {
  const { pokemonIdList, pickCard } = props;

  return (
    <div className="GamePanel">
      {pokemonIdList.map(pkId => {
        return (
          <Card pokemonId={pkId} key={pkId} pickCard={pickCard} />
        )
      })}
    </div>
  );
}

export default GamePanel;
