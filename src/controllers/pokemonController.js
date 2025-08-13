const { getPokemonData } = require('../services/pokemonService');

async function fetchPokemon(req, res) {
  try {
    const { name } = req.params;
    const data = await getPokemonData(name.toLowerCase());

    const filteredData = {
      id: data.id,
      name: data.name,
      height: data.height,
      weight: data.weight,
      types: data.types.map(t => t.type.name),
      abilities: data.abilities.map(a => a.ability.name),
      sprites: {
        normal: data.sprites.other['showdown'].front_default,
        shiny: data.sprites.other['showdown'].front_shiny
      }
    };

    res.json(filteredData);
  } catch (err) {
    res.status(404).json({ error: 'Pokémon não encontrado' });
  }
}

module.exports = { fetchPokemon };