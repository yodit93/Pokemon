import displayPokemon from './display-pokemon.js';

const fetchData = async () => {
  const urls = Array.from({ length: 12 }, (_, i) => `https://pokeapi.co/api/v2/pokemon/${i + 1}`);
  const responses = await Promise.all(urls.map((url) => fetch(url)));
  const data = await Promise.all(responses.map((response) => response.json()));

  const pokmone = data.map((pokemon) => ({
    name: pokemon.name,
    id: pokemon.id,
    image: pokemon.sprites.front_default,
  }));
  displayPokemon(pokmone);
};

export default fetchData;