const amount = document.getElementById('loan-amount');
const rate = document.getElementById('loan-rate');
const time = document.getElementById('loan-time');
const monthlyPayment = document.querySelector('.monthlypay');
let p=0;

function clearval(val) {
  val.addEventListener('click', () => {
    val.value =''
  })
}


function calcloan() {
  
  let a = amount.value;
  let r = rate.value;
  let t = time.value;
  p = (r * a) / (1 - (1 + r) ** (-t));
  monthlyPayment.innerText = `$${p.toFixed(2)}`
}

