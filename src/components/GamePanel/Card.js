import React, { useState, useEffect } from 'react';

import { fetchPokemonData } from '../../modules/cardInfo';
import { capitilizeFirstLetter } from '../../modules/helpers';

function Card(props) {
  const { pokemonId, pickCard } = props;
  const [state, setState] = useState({
    name: '',
    imageUrl: '',
    id: '',
  });

  useEffect(() => {
    fetchPokemonData(pokemonId).then(res => {
      setState({
        name: capitilizeFirstLetter(res.name),
        imageUrl: res.sprites.front_default,
        id: res.id,
      });
    }).catch(err => {
      // Not sure why an error here is occuring
      console.log(err)
    });
  });

  return (
    <div className="Card" onClick={(evt) => pickCard(evt, pokemonId)}>
      <img className="card-image" src={state.imageUrl} alt="" />
      <p className="card-name">{state.name}</p>
    </div>
  );
}

export default Card;
