const pokemonCounter = (pokemon) => {
  const pokemonCountHolder = document.querySelector('.pokemon-count');
  pokemonCountHolder.textContent = `${'Pokemon'} ${'('}${pokemon.length}${')'}`;
};

const commentCounter = (comments) => {
  const commentCountHolder = document.querySelector('.comment-count');
  commentCountHolder.textContent = `${'Comments'} ${'('}${comments.length}${')'}`;
};

export { pokemonCounter, commentCounter };