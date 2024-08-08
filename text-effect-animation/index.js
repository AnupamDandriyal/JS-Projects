const containerEl = document.querySelector('.container');
const msg = ['Hello, I am Anupam Dandriyal.', 'And i am an aspiring Software Engineer.', 'I really wish to god that he show me the right path.']
let msgIndex = 0;
let msgContentIndex = 0;


updateText();
function updateText() {
  msgContentIndex++;
  if (msgIndex != msg.length) {
    containerEl.innerHTML = `<h1>${msg[msgIndex].slice(0, msgContentIndex)}</h1>`; 
    if (msgContentIndex === msg[msgIndex].length) {
      msgIndex++;
      msgContentIndex = 0;
    }
    setTimeout(updateText, 100);
  }
  else {
    console.log('Thats the end!')
  }
}


