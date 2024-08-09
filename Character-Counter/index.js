const textAreaEl = document.querySelector('textarea');
let counter = 0;
textAreaEl.addEventListener('keyup', (event) => {
  console.log(event.key)
  if ((event.key === 'Enter') || (event.key === 'Backspace') || (event.key === 'CapsLock') || (event.key ==='Shift')) {
    return
  }
  else if(counter !=50) {
    updateCounter();
  }
  else (
    alert('You have reached the maximum reach of text!')
  )

});

function updateCounter() {
  counter++;
  const blue = document.querySelector('.blue');
  const orange = document.querySelector('.orange');
  blue.innerHTML = counter;
  orange.innerHTML = 50 - counter;
}