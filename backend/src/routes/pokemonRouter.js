const { Router } = require('express');
const pokemonController = require('../controller/pokemonController');

function pokemonRouter() {
  const router = Router();
  const pokedex = pokemonController();

  router.route('/')
    .get(pokedex.getPokedex);

  router.route('/:pokemonId')
    .get(pokedex.getPokemonById);

  return router;
}

module.exports = pokemonRouter;
