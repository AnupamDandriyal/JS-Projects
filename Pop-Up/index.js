const btnEl = document.querySelector('.ok');
const submitEl = document.querySelector('.submit');
const popupEl = document.querySelector('.popup');
btnEl.addEventListener('click', () => {
  popupEl.style.top = `0`;
  popupEl.style.transform = 'translate(-50%,-50%) scale(0.1)'
  popupEl.style.visibility = 'hidden';
  submitEl.style.display = 'block';
});


submitEl.addEventListener('click', () => {
  popupEl.style.visibility = 'visible';
  popupEl.style.top = `50%`;
  popupEl.style.transform = 'translate(-50%,-50%) scale(1)'
  submitEl.style.display = 'none';
});