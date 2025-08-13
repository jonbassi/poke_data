const axios = require('axios');
const { API_BASE_URL } = require('../config/env');

async function getPokemonData(pokemonName) {
  const response = await axios.get(`${API_BASE_URL}/pokemon/${pokemonName}`);
  return response.data;
}

module.exports = { getPokemonData };