import { commentCounter } from './pokemonCounter.js';

export default class Comment {
  static displayComments = async (pokeMonId, data) => {
    const listUl = document.querySelector(`#body_comment_${pokeMonId}`);
    let listLi = '';
    for (let i = 0; i < data.length; i += 1) {
      listLi += `
      <li class="comm-list">
            <p class="user-comm">${data[i].creation_date} ${data[i].username}: ${data[i].comment}</p>
          </li>`;
    }
    listUl.innerHTML = `${listLi}`;
  }

  static getComment = async (id) => {
    const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ElFTMcXWOO17H2FSqTOD/comments?item_id=${id.toString()}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    if (data) {
      commentCounter(data);
    }
    this.displayComments(id, data);
    return res;
  }

  static addCommentChigozie = async (name, comment, id) => {
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
    this.getComment(id);
    return res;
  }
}
