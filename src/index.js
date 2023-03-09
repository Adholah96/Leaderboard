import './style.css';
import postData from '../modules/postdata.js';
import fetchData from '../modules/fetchdata.js';
import displayData from '../modules/displayData.js';

const refreshBtn = document.querySelector('.refreshbtn');
const form = document.querySelector('.form');
const nameInput = form.elements.name;
const scoreInput = form.elements.score;

refreshBtn.addEventListener('click', async () => {
  displayData(await fetchData());
});

const addScore = async (e) => {
  e.preventDefault();

  const result = await postData(nameInput.value, scoreInput.value);

  if (result) {
    nameInput.value = '';
    scoreInput.value = '';

    displayData(await fetchData());
  }
};
const init = async () => {
  const data = await fetchData();
  if (data) {
    displayData(data);
  }

  if (form) {
    form.addEventListener('submit', addScore);
  }

  if (refreshBtn) {
    refreshBtn.addEventListener('click', async () => {
      const data = await fetchData();
      if (data) {
        displayData(data);
      }
    });
  }
};

init();
