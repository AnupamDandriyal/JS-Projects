const input = document.querySelector('input');
const strength = document.querySelector('.strength');
const containerEl = document.querySelector('.container');
input.addEventListener('keyup', () => {
  const length = input.value.length;
  if (length > 0 && length <= 5) {
    strength.innerHTML = 'weak';
    strength.style.color = 'red';
    containerEl.style.border = '1px solid red';
  }

  else if (length > 5 && length <= 10) {
    strength.innerHTML = 'moderate';
    strength.style.color = 'sandybrown';
    containerEl.style.border = '1px solid sandybrown';
  }

  else if(length>10) {
    strength.innerHTML = 'strong';
    strength.style.color = 'green';
    containerEl.style.border = '1px solid green';
  }
  else {
    strength.innerHTML = '';
    containerEl.style.border = '1px solid grey';
  }
})
