const btnEl = document.querySelector('.ok');
const submitEl = document.querySelector('.submit');
const popupEl = document.querySelector('.popup');
btnEl.addEventListener('click', () => {
  popupEl.style.display = 'none';
  submitEl.style.display = 'block';
});


submitEl.addEventListener('click', () => {
  popupEl.style.display = 'block';
  submitEl.style.display = 'none';
});