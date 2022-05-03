import React from 'react';

import Body from './components/Body';
import Footer from './components/Footer';
import { generatePokemonIdList } from './modules/cardInfo';

import './styles/App.css';

function App() {
  const pokemonIdList = generatePokemonIdList(12);

  return (
    <div className="App">
      <Body pokemonIdList={pokemonIdList}/>
      <Footer />
    </div>
  );
}

export default App;
