const dark = document.querySelector('.dark');
const bodyEl = document.querySelector('body');
const light = document.querySelector('.light');
const navBar = document.querySelectorAll('a');
const btn = document.querySelector('button')

changeTheme();
function changeTheme() {
  let localData = localStorage.getItem('theme');
  if (localData === 'light') {
    bodyEl.style.color = 'black';
    navBar.forEach((item) => {
      item.style.color = 'black';
    })
    bodyEl.style.backgroundColor = 'white';
    dark.style.display = 'block';
    light.style.display = 'none';
    btn.classList.add('lightBtn');
    btn.classList.remove('darkBtn');
  }
  else if(localData ==='dark'){
    bodyEl.style.color = 'white';
    navBar.forEach((item) => {
      item.style.color = 'white';
    })
    bodyEl.style.backgroundColor = 'black';
    dark.style.display = 'none';
    light.style.display = 'block';
    btn.classList.remove('lightBtn');
    btn.classList.add('darkBtn');
  }
}


dark.addEventListener('click', () => {
  localStorage.setItem('theme', 'dark');
  changeTheme();
})

light.addEventListener('click', () => {
  localStorage.setItem('theme', 'light');
  changeTheme();
})