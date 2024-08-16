const scrollContainerEl = document.querySelector('.pictures');
const left = document.getElementById('left');
const right = document.getElementById('right');

/* scrollContainerEl.addEventListener('scroll', (event) => {
  event.preventDefault();
  scrollContainerEl.scrollLeft += event.deltaY
}) */

left.addEventListener('click', () => {
  scrollContainerEl.style.scrollBehavior = 'smooth'
  scrollContainerEl.scrollLeft += 910;
});

right.addEventListener('click', () => {
  scrollContainerEl.style.scrollBehavior = 'smooth'
  scrollContainerEl.scrollLeft -= 910;
});