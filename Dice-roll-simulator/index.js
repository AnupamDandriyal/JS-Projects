const faces = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;']

const diceface = document.querySelector('.dice-face')
const btn = document.querySelector('.btn');
const res = document.querySelector('.result');
btn.addEventListener('click', () => {
  setTimeout(updateFace,500);
})


let rotation = 0
function updateFace() {
  let randomNum = Math.random();
  let i = Math.floor(randomNum * 6);
  diceface.innerHTML = faces[i];
  res.innerHTML=`Face Value: ${i+1}`
  rotation +=360
  diceface.style.transform = `rotate(${rotation}deg)`
}