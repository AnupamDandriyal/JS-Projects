const inputEl = document.querySelector('.input');
const circle = document.querySelector('.circle')

inputEl.checked = JSON.parse(localStorage.getItem('mode'))
updatebody();
function updatebody() {
  const body = document.querySelector('body')
  if (inputEl.checked) {
    body.style.background = 'black';
    circle.style.background = 'black';
  }

  else {
    body.style.background = 'white';
    circle.style.background = 'white';
  }
}

inputEl.addEventListener('click', () => {
  updatebody();
  updateStorage();
})


function updateStorage() {
  localStorage.setItem('mode',JSON.stringify(inputEl.checked))
}