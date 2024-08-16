const input = document.querySelector('input');
const strength = document.querySelector('.strength');
const inputEl = document.querySelector('.input');
const check = document.querySelector('.check');
check.addEventListener('click', () => {
  if (input.type === 'password') {
    input.type = 'text';
  }
  else {
    input.type = 'password'
  }
})
input.addEventListener('keyup', () => {
  const length = input.value.length;
  if ((length > 0 && length <= 5) && (/[A-Za-z]/.test(input)) ){
    strength.innerHTML = 'weak';
    strength.style.color = 'red';
    inputEl.style.border = '2px solid red';
  }

  else if ((length > 5 && length <= 8) && (/[A-Za-z0-9]/.test(input))) {
    strength.innerHTML = 'moderate';
    strength.style.color = 'sandybrown';
    inputEl.style.border = '2px solid sandybrown';
  }

  else if((length>8) && (/[A-Za-z0-9~!@#$%^&*()-+]/.test(input))) {
    strength.innerHTML = 'strong';
    strength.style.color = 'green';
    inputEl.style.border = '2px solid green';
  }
  else {
    strength.innerHTML = '';
    inputEl.style.border = '2px solid grey';
  }
})


