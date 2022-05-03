const Pokedex = require("pokeapi-js-wrapper")
const pokedex = new Pokedex.Pokedex();

function generatePokemonIdList(listLength) {
  let pokemonIdList = [];
  while(pokemonIdList.length < listLength) {
    const pkId = Math.floor(Math.random() * 151) + 1;

    if(pokemonIdList.indexOf(pkId) === -1) {
      pokemonIdList.push(pkId);
    }
  }

  return pokemonIdList;
}

async function fetchPokemonData(pkId) {
  const pkData = await pokedex.getPokemonByName(pkId);

  return pkData;
}

export { generatePokemonIdList, fetchPokemonData };