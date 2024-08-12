const bar = document.querySelector('.overlay');
const percent = document.querySelector('.percentage');
const title = document.querySelector('.status')

let i = 0;

function updateBar() {
  percent.innerHTML = `${i}%`;
  bar.style.width = `${i}%`;;
  i++;
  if (i < 101) {
    setTimeout(updateBar, 50);
  }
  if (i === 100) {
    title.innerHTML = 'Completed';
    title.style.color = 'green'
  }
}

updateBar();
