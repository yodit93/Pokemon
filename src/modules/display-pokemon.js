import icon from '../images/heart-regular.svg';

const pokdex = document.getElementById('pokdex');
const displayPokemon = (pokemon) => {
  const pokemonHTMLString = pokemon.map((pokemon) => `<li class="card">
      <img class="card-image" src="${pokemon.image}"/>
      <div class="card-body">
        <h2 class="card-title">${pokemon.name} ${pokemon.id}</h2>
        <a class="heart" href="#"><img class="heart-img" src="${icon}"></a>
      </div>
      <div class="like-cont"><span class="likes">n likes</span></div>
      <button class="comment-btn">Comments</button>
    </li>`).join(', ');
  pokdex.innerHTML = pokemonHTMLString;
};

export default displayPokemon;