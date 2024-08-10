const searchEl = document.querySelector('.search');
const containerEl = document.querySelector('.container');
console.log('haha')

searchEl.addEventListener('click', () => {
  containerEl.classList.toggle('active');
})