const age = document.querySelector('.age');

function show() {
  const dob = document.querySelector('input').value;
  const date = new Date(dob)
  const today = new Date();
  const gap = today.getTime()- date.getTime()
  const s = gap / 1000;
  const m = s / 60;
  const h = m / 60;
  const d = h / 24;
  const y = d / 365.25
  age.innerHTML =`You are ${(Math.floor(y))} years old.`
}

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  show();
})