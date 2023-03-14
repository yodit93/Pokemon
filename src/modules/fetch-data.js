import displayPokemon from './display-pokemon.js';

const fetchData = async () => {
  const urls = Array.from({ length: 12 }, (_, i) => `https://pokeapi.co/api/v2/pokemon/${i + 1}`);
  const responses = await Promise.all(urls.map((url) => fetch(url)));
  const pokemonData = await Promise.all(responses.map((response) => response.json()));

  const pokmone = pokemonData.map((pokemon) => ({
    name: pokemon.name,
    id: pokemon.id,
    image: pokemon.sprites.front_default,
  }));
  displayPokemon(pokmone);
};

export default fetchData;