let count = parseInt(localStorage.getItem('count') || '0');

const countElement = document.getElementById('count');
countElement.textContent = count;

const minusButton = document.getElementById('minus');
minusButton.addEventListener('click', () => {
  count--;
  countElement.textContent = count;
  localStorage.setItem('count', count.toString());
});

const plusButton = document.getElementById('plus');
plusButton.addEventListener('click', () => {
  count++;
  countElement.textContent = count;
  localStorage.setItem('count', count.toString());
});