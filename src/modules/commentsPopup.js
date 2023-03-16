/* eslint-disable */

const addCommentChigozie = async (name, comment, id) => {
  const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ElFTMcXWOO17H2FSqTOD/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username: name,
      comment,
    }),
  });
  getComment(id);
  return res;
};

const displayComments = async (pokeMonId, data) => {
  const listUl = document.querySelector(`#body_comment_${pokeMonId}`);
  let listLi = '';
  for (let i = 0; i < data.length; i += 1) {
    listLi += `
    <li class="comm-list">
          <p class="user-comm">${data[i].creation_date} ${data[i].username}: ${data[i].comment}</p>
        </li>`;
  }
  listUl.innerHTML = `
    <p class="comm-header">Comments (${data.length})</p>
    ${listLi}
  `;
};

const getComment = async (men) => {
  const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ElFTMcXWOO17H2FSqTOD/comments?item_id=${men.toString()}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  displayComments(men, data);
  return res;
};

const commentsPopup = (pokeMon) => {
  const popupCont = document.querySelector('.popup-cont');
  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.innerHTML = `
    <div class="popup-header">
      <img src="${pokeMon.sprites.front_default}" alt="pokeMon image">
      <button class="close-btn">&times;</button>
    </div>
    <h2 class="pokeMon-title">${pokeMon.name} ${pokeMon.id}</h2>
    <div class="pokeMon-body">
      <div class="left">
        <p class="pokeMon-type text">Type: ${pokeMon.types.map((type) => type.type.name).join(', ')}</p>
        <p class="pokeMon-order text">Order: ${pokeMon.order}</p>
      </div>
      <div class="right">
        <p class="pokeMon-height text">Height: ${pokeMon.height}</p>
        <p class="pokeMon-weight text">Weight: ${pokeMon.weight}</p>
      </div>
    </div>
    <div class="comm-cont">
      <ul class="comm-body" id="body_comment_${pokeMon.id}">
        <li class="comm-list">
          <p class="user-comm">date name: comments</p>
        </li>
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
  getComment(pokeMon.id);

  const submitComment = document.querySelector(`#submit_${pokeMon.id}`);
  submitComment.addEventListener('click', (event) => {
    event.preventDefault();
    const nameInput = document.querySelector(`#name_${pokeMon.id}`);
    const insightsInput = document.querySelector(`#insights_${pokeMon.id}`);

    addCommentChigozie(nameInput.value, insightsInput.value, pokeMon.id);
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