const commentsPopup = (pokemon) => {
  const popupCont = document.querySelector('.popup-cont');
  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.innerHTML = `
    <div class="popup-header">
      <img src="${pokemon.sprites.front_default}" alt="pokemon image">
      <button class="close-btn">&times;</button>
    </div>
    <h2 class="pokemon-title">${pokemon.name} ${pokemon.id}</h2>
    <div class="pokemon-body">
      <div class="left">
        <p class="pokemon-type text">Type: ${pokemon.types.map((type) => type.type.name).join(', ')}</p>
        <p class="pokemon-order text">Order: ${pokemon.order}</p>
      </div>
      <div class="right">
        <p class="pokemon-height text">Height: ${pokemon.height}</p>
        <p class="pokemon-weight text">Weight: ${pokemon.weight}</p>
      </div>
    </div>
    <div class="comm-cont">
      <p class="comm-header">Comments (n)</p>
      <ul class="comm-body">
        <li class="comm-list">
          <p class="user-comm">date name: comments</p>
        </li>
        <li class="comm-list">
          <p class="user-comm">date name: comments</p>
        </li>
      </ul>
    </div>
    <div class="comm-form">
      <p class="comm-header">Add a comment</p>
      <form action="">
        <input type="text" placeholder="Your name" />
        <textarea name="" id="" cols="30" rows="10" placeholder="Your insights"></textarea>
        <button type="submit" class="submit-btn">Comment</button>
      </form>
    </div>`;
  popupCont.appendChild(popup);

  const closeBtn = document.querySelectorAll('.close-btn');
  closeBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      popupCont.classList.remove('active');
    });
  });
};

export default commentsPopup;