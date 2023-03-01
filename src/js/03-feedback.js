import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(handleInput, 500));
form.addEventListener('submit', handleSubmit);

const keyValue = 'feedback-form-state';
let savedItems = JSON.parse(localStorage.getItem(keyValue)) || {};

function handleInput(event) {
  savedItems[event.target.name] = event.target.value;
  localStorage.setItem(keyValue, JSON.stringify(savedItems));
}

function handleSubmit(event) {
  event.preventDefault();

  const saveData = localStorage.getItem(keyValue);
  console.log(JSON.parse(saveData));

  event.target.reset();
  localStorage.removeItem(keyValue);
  savedItems = {};
}

function preparedUserData() {
  form.email.value = savedItems.email || '';
  form.message.value = savedItems.message || '';
}
preparedUserData();
