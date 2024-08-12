const farenheit = document.querySelector('.farenheit');
const celsius = document.querySelector('.celsius');
const kelvin = document.querySelector('.kelvin')


const temp = document.querySelectorAll('.temp');
temp.forEach((inputtemp) => {
  inputtemp.addEventListener('input', () => {
    let val = inputtemp.value;
    if (inputtemp.classList.contains('celsius')) {
      inputCelsius(val);
    }

    else if (inputtemp.classList.contains('farenheit')) {
      inputFarenheit(val);
    }
    else {
      inputKelvin(val);
    }
  })
})


function inputFarenheit(value) {
  let val = parseFloat(value);
  let c = ((5 / 9) * (val - 32));
  let k = ((5 / 9) * (val - 32) + 273.15);
  celsius.value = c.toFixed(2);
  kelvin.value = k.toFixed(2);
}

function inputCelsius(value) {
  let val = parseFloat(value);
  let f = ((9 / 5) * val) + 32;
  let k= (val + 273.15);
  farenheit.value = f.toFixed(2);
  kelvin.value = k.toFixed(2);
}

function inputKelvin(value){
  let val = parseFloat(value);
  let c = (val - 273.15);
  let f = ((9 / 5) * (val - 273.15)) + 32;
  celsius.value = c.toFixed(2);
  farenheit.value =f.toFixed(2)
}