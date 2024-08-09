const containerEl = document.querySelector('.container');
const leftEl = document.querySelector('.left');
const rightEl = document.querySelector('.right');


leftEl.addEventListener('mouseenter', () => {
  changeSize('left');
})

leftEl.addEventListener('mouseleave', () => {
  originalSize('left');
})

rightEl.addEventListener('mouseenter', () => {
  changeSize('right');
})

rightEl.addEventListener('mouseleave', () => {
  originalSize('right');
})



function changeSize(pos) {
  containerEl.classList.add(`active-${pos}`);
}

function originalSize(pos) {
  containerEl.classList.remove(`active-${pos}`);
}