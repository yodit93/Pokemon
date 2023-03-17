/**
 * @jest-environment jsdom
 */

import { pokemonCounter } from '../Counter.js';

describe('pokemonCounter', () => {
  test('Should update the pokemon counter', () => {
    document.body.innerHTML = '<div class="pokemon-count"></div>';
    const pokemonCountHolder = document.querySelector('.pokemon-count');
    const pokemon = [
      {
        name: 'bulbasaur',
        id: 1,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      },
      {
        name: 'ivysaur',
        id: 2,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
      },
      {
        name: 'venusaur',
        id: 3,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
      },
    ];
    pokemonCounter(pokemon);
    expect(pokemonCountHolder.textContent).toBe('Pokemon (3)');
  });

  test('Should update the pokemon counter', () => {
    document.body.innerHTML = '<div class="pokemon-count"></div>';
    const pokemonCountHolder = document.querySelector('.pokemon-count');
    const pokemon = [];
    pokemonCounter(pokemon);
    expect(pokemonCountHolder.textContent).toBe('Pokemon (0)');
  });
});
