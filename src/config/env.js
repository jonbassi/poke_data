require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 3000,
  API_BASE_URL: 'https://pokeapi.co/api/v2'
};