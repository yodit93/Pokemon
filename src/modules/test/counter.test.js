/**
 * @jest-environment jsdom
 */

import { pokemonCounter, commentCounter } from '../Counter.js';

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

describe('commentCounter', () => {
  test('Should update the comment counter', () => {
    document.body.innerHTML = `<div>
      <p class="comment-count"></p>
      <ul class="comm-body" id="body_comment"></ul>
    </div>`;
    const commentCountHolder = document.querySelector('.comment-count');
    const comments = [
      {
        date: '2021-08-01',
        user: 'Chigozie',
        message: 'This is a comment1',
      },
      {
        date: '2021-08-01',
        user: 'Judy',
        message: 'This is a comment2',
      },
      {
        date: '2021-08-01',
        user: 'Daniel',
        message: 'This is a comment3',
      },
    ];

    commentCounter(comments);
    expect(commentCountHolder.textContent).toBe('Comments (3)');
  });
  test('Should update the comment counter', () => {
    document.body.innerHTML = `<div>
      <p class="comment-count"></p>
      <ul class="comm-body" id="body_comment"></ul>
    </div>`;
    const commentCountHolder = document.querySelector('.comment-count');
    const comments = [
      {
        date: '2021-08-01',
        user: 'Judy',
        message: 'This is a comment2',
      },
      {
        date: '2021-08-01',
        user: 'Daniel',
        message: 'This is a comment3',
      },
    ];

    commentCounter(comments);
    expect(commentCountHolder.textContent).toBe('Comments (2)');
  });
  test('Should update the comment counter', () => {
    document.body.innerHTML = `<div>
      <p class="comment-count"></p>
      <ul class="comm-body" id="body_comment"></ul>
    </div>`;
    const commentCountHolder = document.querySelector('.comment-count');
    const comments = [];

    commentCounter(comments);
    expect(commentCountHolder.textContent).toBe('Comments (0)');
  });
});
