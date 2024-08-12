const btn = document.querySelector('.emoji');
const name = document.querySelector('.name');

let emoji = [];
async function getEmoji() {
  let response = await fetch('https://emoji-api.com/emojis?access_key=62172888dbaf56d71560f7f77517eeb84c8f9a12')
  const data = await response.json();
  emoji = data;
  let randomNum = Math.floor(Math.random() * 1000);
  btn.innerText = emoji[randomNum].character;
  name.innerText = emoji[randomNum].unicodeName.slice(5)
}
btn.addEventListener('click', () => {
  getEmoji();  
})