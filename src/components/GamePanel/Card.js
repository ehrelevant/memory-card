import React, { useState, useEffect } from 'react';

import { fetchPokemonData } from '../../modules/cardInfo';
import '../../styles/Card.css'


function Card(props) {
  const { pokemonId } = props;
  const [state, setState] = useState({
    name: '',
    imageUrl: '',
    id: '',
  });

  useEffect(() => {
    fetchPokemonData(pokemonId).then(res => {
      setState({
        name: res.name,
        imageUrl: res.sprites.front_default,
        id: res.id,
      });
    }).catch(err => {
      // Not sure why an error here is occuring
      console.log(err)
    });
  });

  return (
    <div className="Card">
      <img className="card-image" src={state.imageUrl} alt="" />
      <p>{state.name}</p>
    </div>
  );
}

export default Card;
