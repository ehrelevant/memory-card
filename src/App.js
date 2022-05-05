import React, { useState } from 'react';

import Body from './components/Body';
import Footer from './components/Footer';
import { generatePokemonIdList } from './modules/cardInfo';

import './styles/App.css';

function App() {
  const [ state, setState ] = useState({
    score: 0,
    highScore: 0,
    usedCardIds: [],
    displayCardIds: generatePokemonIdList(12)
  });

  const resetGame = () => {
    setState({
      score: 0,
      highScore: state.highScore,
      usedCardIds: [],
      displayCardIds: generatePokemonIdList(12),
    });
  }

  const updateGame = (pkId) => {
    const newScore = state.score + 1;
    setState({
      score: newScore,
      highScore: Math.max(newScore, state.highScore),
      usedCardIds: state.usedCardIds.concat([pkId]),
      displayCardIds: generatePokemonIdList(12)
    });
  }

  const pickCard = (evt, pkId) => {
    if(!state.usedCardIds.includes(pkId)) {
      updateGame(pkId);
    } else {
      resetGame();
    }
  }

  return (
    <div className="App">
      {console.log(state.usedCardIds)}
      <Body score={state.score}
            highScore={state.highScore}
            pokemonIdList={state.displayCardIds}
            pickCard={pickCard}
      />
      <Footer />
    </div>
  );
}

export default App;
