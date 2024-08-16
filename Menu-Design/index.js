const selectFieldEl = document.getElementById('selectField');
const selectTextEl = document.getElementById('selectText');
const listEl = document.getElementById('list');
let options = document.getElementsByClassName('options');
const hide = document.getElementsByClassName('hide');
const arrow = document.querySelector('.arrow')

for (option of options) {
  option.onclick = function () {
    selectTextEl.innerHTML = this.textContent;
    listEl.classList.toggle('hide');
    arrow.classList.toggle('rotate');
  }
}

selectFieldEl.addEventListener('click', () => {
  if (hide) {
    listEl.classList.toggle('hide');
    arrow.classList.toggle('rotate');
  }
})