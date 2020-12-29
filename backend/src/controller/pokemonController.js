/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */

const axios = require('axios');

function pokemonController() {
  async function getPokedex(req, res) {
    const pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';
    const pokeImgUrl = 'https://pokeapi.co/api/v2/pokemon-form';
    try {
      const list = await axios.get(pokeApiUrl);
      const pokemonList = list.data.results;
      for (let id = 1; id < 20; id++) {
        const { data } = await axios.get(`${pokeImgUrl}/${id}`);
        pokemonList[id - 1].url = data.sprites.front_default;
      }
      res.json(pokemonList);
    } catch (error) {
      res.send(error);
    }
  }

  async function getPokemonById(req, res) {
    const { pokemonId } = req.params;
    const pokeApiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    try {
      const pokemon = await axios.get(pokeApiUrl);
      res.json(pokemon.data);
    } catch (error) {
      res.send(error);
    }
  }

  return {
    getPokedex, getPokemonById,
  };
}

module.exports = pokemonController;
