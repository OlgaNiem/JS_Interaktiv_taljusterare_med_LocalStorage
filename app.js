let count = parseInt(localStorage.getItem('count') || '0');

const countNumber = document.getElementById('count');
countNumber.textContent = count;

const minusButton = document.getElementById('minus');
minusButton.addEventListener('click', () => {
  count--;
  countNumber.textContent = count;
  localStorage.setItem('count', count.toString());
});

const plusButton = document.getElementById('plus');
plusButton.addEventListener('click', () => {
  count++;
  countNumber.textContent = count;
  localStorage.setItem('count', count.toString());
});