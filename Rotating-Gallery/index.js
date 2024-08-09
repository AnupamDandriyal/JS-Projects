const prev = document.getElementById('prev');
const next = document.getElementById('next');
const imgEl = document.querySelector('.img-container');
let x = 0;
let timer;

prev.addEventListener('click', () => {
  x += 45;
  clearTimeout(timer);
  rotateSlider()
})


next.addEventListener('click', () => {
  x -= 45;
  clearTimeout(timer);
  rotateSlider();
})

function rotateSlider() {
  imgEl.style.transform = ` perspective(1000px) rotateY(${x}deg)`;
  timer=setTimeout(() => {
    x -= 45;
    rotateSlider()
  },5000)
}

rotateSlider()