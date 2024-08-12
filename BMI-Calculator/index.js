const wt = document.querySelector('.weight');
const ht = document.querySelector('.height');
const bmi = document.querySelector('.BMI');
const btn = document.querySelector('.btn');
const value = document.querySelector('.value')
btn.addEventListener('click', () => {
  let wtVal = wt.value;
  let htVal = ht.value/100;
  let bmival = wtVal / htVal ** 2
  bmi.innerHTML = bmival.toFixed(2);
  if (bmival <= 18.4) {
    value.style.color = 'yellow';
    value.innerHTML = 'Under Weight';
  }
  else if (bmival >= 18.5 && bmival <= 24.9) {
    value.style.color = 'green';
    value.innerHTML = 'Normal Weight';
  }
  else if (bmival >= 25 && bmival <= 39.9) {
    value.style.color = 'orange';
    value.innerHTML = 'Over Weight';
  }
  else if (bmival >= 40) {
    value.style.color = 'Red';
    value.innerHTML = 'Obese';
  }
  
})

console.log(2**4)