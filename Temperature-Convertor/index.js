const temp = document.querySelectorAll('.temp');
temp.forEach((input) => {
  input.addEventListener('click', () => {
    if (input.classList.contains('celsius')) {
      inputCelsius();
    }

    else if (input.classList.contains('farenheit')) {
      inputFarenheit();
    }
    else {
      inputKelvin();
    }
  })
})


function inputFarenheit() {
  console.log('Farenheit is clicked')
}

function inputCelsius() {
  console.log('Celsius is clicked')
}

function inputKelvin(){
  console.log('Kelvin is clicked')
}