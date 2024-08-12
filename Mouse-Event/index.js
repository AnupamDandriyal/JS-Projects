const x = document.querySelector('.xvalue');
const y = document.querySelector('.yvalue');


window.addEventListener('mousemove', () => {
  x.innerHTML = event.clientX;
  y.innerHTML  =event.clientY

})