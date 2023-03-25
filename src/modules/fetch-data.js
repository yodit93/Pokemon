import displayPokemon from './display-pokemon.js';
import { pokemonCounter } from './Counter.js';
import { likesCount } from './createId.js';

const fetchData = async () => {
  const urls = Array.from({ length: 16 }, (_, i) => `https://pokeapi-215911.firebaseapp.com/api/v2/pokemon/${i + 30}`);
  const responses = await Promise.all(urls.map((url) => fetch(url)));
  const pokemonData = await Promise.all(responses.map((response) => response.json()));

  const pokmone = pokemonData.map((pokemon) => ({
    name: pokemon.name,
    id: pokemon.id,
    image: pokemon.sprites.front_default,
  }));
  pokemonCounter(pokmone);
  likesCount();
  displayPokemon(pokmone);
};

export default fetchData;
