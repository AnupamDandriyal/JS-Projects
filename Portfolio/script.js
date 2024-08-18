let profiles = ['Front-End Developer', 'UI/UX Designer','Web Developer', 'Adobe Specilaist', 'Support Specialist'];
const job = document.querySelector('.job');
let i = 0;
let contentindex = 0;
updateProfiles()
function updateProfiles() {
  if (contentindex < profiles.length) {
    job.innerHTML = profiles[i];
    i++;
  }
  if (i === profiles.length) {
    i = 0;
  }
  
  setTimeout(updateProfiles,2000)
}
 

/* let msgIndex = 0;
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
  } */