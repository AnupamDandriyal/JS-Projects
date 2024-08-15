const inputEl = document.querySelector('input');
const btn = document.querySelector('.btn');
const codeEl = document.querySelector('.code');
inputEl.addEventListener('input', () => {
  codeEl.firstElementChild.remove();
})

btn.addEventListener('click', () => {
  let QR = document.createElement('img');
  QR.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputEl.value}`;
  codeEl.appendChild(QR);
})