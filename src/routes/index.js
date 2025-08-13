const express = require('express');
const router = express.Router();
const { fetchPokemon } = require('../controllers/pokemonController');

router.get('/pokemon/:name', fetchPokemon);

module.exports = router;