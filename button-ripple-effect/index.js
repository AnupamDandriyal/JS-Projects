const BtnEl = document.querySelector('.btn');
BtnEl.addEventListener('mouseover', (event) => {
  const x = event.pageX - BtnEl.offsetLeft;
  const y = event.pageY - BtnEl.offsetTop;
  console.log(`${x} & ${y}`)
  BtnEl.style.setProperty("--x",x + "px")
  BtnEl.style.setProperty("--y", y + "px")
})