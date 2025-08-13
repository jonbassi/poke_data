const axios = require('axios');

async function getPokemonData(pokemonName) {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  return response.data;
}

module.exports = { getPokemonData };