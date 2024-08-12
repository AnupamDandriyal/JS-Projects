const amount = document.querySelector('.amount');
const tip = document.querySelector('.tip');
const btn = document.querySelector('.btn');
const total = document.querySelector('.total-value');
console.log(total)


btn.addEventListener('click', ()=> {
  calculatebill()
})

function calculatebill() {
  let a = Number(amount.value);
  let t = Number(tip.value);
  console.log(a);
  console.log(t);
  let totalbill = Math.ceil((t * 0.01 * a) + a);
  total.innerHTML = `$${totalbill.toFixed(2)}`
}