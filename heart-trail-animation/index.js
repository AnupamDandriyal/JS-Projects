const bodyEl = document.querySelector('body')
bodyEl.addEventListener('mousemove', (event) => {
  const x = event.offsetX;
  const y = event.offsetY;
  const spanEl = document.createElement('span');
  const size = Math.random() * 100;
  spanEl.style.height = size + 'px';
  spanEl.style.width = size + 'px';
  spanEl.style.left = x + 'px';
  spanEl.style.top = y + 'px';
  bodyEl.appendChild(spanEl);
  setTimeout(() => {
    spanEl.remove()
  },3000)
})