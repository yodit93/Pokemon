import icon from '../images/heart-regular.svg';
import commentsPopup from './commentsPopup.js';
import { addLikes } from './createId.js';

const pokdexContainer = document.getElementById('pokdex');

const displayPokemon = (pokemon) => {
  const pokemonHTMLString = pokemon.map((pokemon) => `<li class="card">
      <div class="card-imag-cont"><img class="card-image" src="${pokemon.image}"/></div>
      <div class="card-body">
        <h2 class="card-title">${pokemon.name} ${pokemon.id}</h2>
        <img id=${pokemon.id} class="heart-img" src="${icon}">
      </div>
      <div class="like-cont"><span id=likes-${pokemon.id} class="likes">0</span>likes</div>
      <div class="comment-btn-cont"><button id="${pokemon.id}" class="comment-btn">Comments</button></div>
    </li>`).join('');
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

  const likeBtn = document.querySelectorAll('.heart-img');
  likeBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const { id } = e.target;
      addLikes(id);
    });
  });
};

export default displayPokemon;