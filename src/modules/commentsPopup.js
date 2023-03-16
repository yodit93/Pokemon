import Comment from './comment.js';

const commentsPopup = (pokeMon) => {
  const popupCont = document.querySelector('.popup-cont');
  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.innerHTML = `
    <div class="popup-header">
      <img src="${pokeMon.sprites.front_default}" alt="pokeMon image">
      <button class="close-btn">&times;</button>
    </div>
    <h2 class="pokemon-title">${pokeMon.name} ${pokeMon.id}</h2>
    <div class="pokemon-body">
      <div class="left">
        <p class="pokemon-type text">Type: ${pokeMon.types.map((type) => type.type.name).join(', ')}</p>
        <p class="pokemon-order text">Order: ${pokeMon.order}</p>
      </div>
      <div class="right">
        <p class="pokemon-height text">Height: ${pokeMon.height}</p>
        <p class="pokemon-weight text">Weight: ${pokeMon.weight}</p>
      </div>
    </div>
    <div class="comm-cont">
      <p class="comm-header comment-count">Comment</p>
      <ul class="comm-body" id="body_comment_${pokeMon.id}">

      </ul>
    </div>
    <div class="comm-form">
      <p class="comm-header">Add a comment</p>
      <form action="">
        <input type="text" id="name_${pokeMon.id}" placeholder="Your name" />
        <textarea name="" id="insights_${pokeMon.id}" cols="30" rows="10" placeholder="Your insights"></textarea>
        <button type="submit" class="submit-btn" id="submit_${pokeMon.id}">Comment</button>
      </form>
    </div>`;
  popupCont.appendChild(popup);
  Comment.getComment(pokeMon.id);

  const submitComment = document.querySelector(`#submit_${pokeMon.id}`);
  submitComment.addEventListener('click', (event) => {
    event.preventDefault();
    const nameInput = document.querySelector(`#name_${pokeMon.id}`);
    const insightsInput = document.querySelector(`#insights_${pokeMon.id}`);

    Comment.addCommentChigozie(nameInput.value, insightsInput.value, pokeMon.id);
    nameInput.value = '';
    insightsInput.value = '';
  });

  const closeBtn = document.querySelectorAll('.close-btn');
  closeBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      popupCont.innerHTML = '';
      popupCont.classList.remove('active');
    });
  });
};

export default commentsPopup;