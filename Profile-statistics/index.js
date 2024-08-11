const counters = document.querySelectorAll('.counter');
counters.forEach((counterEl) => {
  counterEl.innerText = "0";
  incrementCtr(); 
  function incrementCtr() {
    let currentNum = +counterEl.innerText;
    const dataCeil = counterEl.getAttribute('data-ceil');
    const increment = dataCeil / 13;
    currentNum = Math.ceil(currentNum + increment);
    counterEl.innerText = currentNum;
    if (currentNum < dataCeil) {
      counterEl.innerText = currentNum;
      setTimeout(incrementCtr,50)
    }
    else {
      counterEl.innerText = dataCeil
    }
  }
  
})
