const createGame = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', { method: 'POST' });
  const data = await response.text();
  localStorage.setItem('id', data);
  return data;
};

const checkId = () => {
  let appId = '';
  if (localStorage.getItem('id')) {
    appId = localStorage.getItem('id');
  } else {
    createGame('second').then((data) => localStorage.setItem('id', data));
    appId = localStorage.getItem('id');
  }
  return appId;
};

const getlikes = async () => {
  const appId = checkId();
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Network response was not ok (${response.status})`);
  }
  const data = await response.json();
  return data;
};

const likesCount = async () => {
  const likesArr = await getlikes();
  likesArr.forEach((item) => {
    const { likes } = item;
    const likesHolder = document.getElementById(`likes-${item.item_id}`);
    if (likes) {
      likesHolder.textContent = likes;
    }
  });
};

const addLikes = async (id) => {
  const appId = checkId();
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;
  const options = {
    method: 'POST',
    body: JSON.stringify({ item_id: id }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  };
  const response = await fetch(url, options);
  const data = response.status;
  likesCount();
  return data;
};

export { addLikes, likesCount, getlikes };