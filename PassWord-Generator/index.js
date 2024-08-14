const btn = document.querySelector('.btn');
const copy = document.querySelector('.copy');
const password = document.getElementById('password');
const length = 12;
copy.addEventListener('click', () => {
  copy.style.color = 'lightblue';
  password.select();
  document.execCommand("copy");
})

btn.addEventListener('click',()=> {
  createPassword();
  setTimeout(() => {
    password.value=''
  },5000)
})
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '~!@#$%^&*()}{_][?<>/|+=-';
const allChars = upperCase + lowerCase + number + symbol; 
let code = '';

function createPassword() {
  code += upperCase[Math.floor(Math.random() * upperCase.length)];
  code += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  code += number[Math.floor(Math.random() * number.length)];
  code += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > code.length) {
    code += allChars[Math.floor(Math.random() * allChars.length)];
  }
  password.value = code;
}
