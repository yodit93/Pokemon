import icon from '../images/heart-regular.svg';
import commentsPopup from './commentsPopup.js';

const pokdexContainer = document.getElementById('pokdex');
const displayPokemon = (pokemon) => {
  const pokemonHTMLString = pokemon.map((pokemon) => `<li class="card">
      <img class="card-image" src="${pokemon.image}"/>
      <div class="card-body">
        <h2 class="card-title">${pokemon.name} ${pokemon.id}</h2>
        <a class="heart" href="#"><img id=${pokemon.id} class="heart-img" src="${icon}"></a>
      </div>
      <div class="like-cont"><span class="likes">n likes</span></div>
      <button id="${pokemon.id}" class="comment-btn">Comments</button>
    </li>`).join(', ');
  pokdexContainer.innerHTML = pokemonHTMLString;

  const commentBtn = document.querySelectorAll('.comment-btn');
  commentBtn.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      const { id } = e.target;
      const popupCont = document.querySelector('.popup-cont');
      popupCont.classList.add('active');
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
      const response = await fetch(url);
      const pokemon = await response.json();
      commentsPopup(pokemon);
    });
  });
};

export default displayPokemon;