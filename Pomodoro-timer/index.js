const starts = document.querySelector('.start');
const stops = document.querySelector('.stop');
const resets = document.querySelector('.reset');
const mins = document.querySelector('.mins');
const secs = document.querySelector('.secs');

starts.addEventListener('click', startTimer);

stops.addEventListener('click', stopTimer);

resets.addEventListener('click', resetTimer);

let timeleft = 25 * 60;
let interval;

function updateTimer() {
  let minutes = Math.floor(timeleft / 60);
  let seconds = Math.floor(timeleft % 60);

  mins.innerHTML = `${minutes.toString().padStart(2, "0")}`;
  secs.innerHTML = `${seconds.toString().padStart(2,"0")}`
}

function startTimer() {
  interval = setInterval(() => {
    timeleft--;
    if (timeleft === 0) {
      alert("Times Up");
      timeleft = 25 * 60;
      clearInterval(interval);
      updateTimer()
    }
    updateTimer();
  },1000)
}


function stopTimer() {
  clearInterval(interval)
}


function resetTimer() {
  timeleft = 25 * 60;
  clearInterval(interval);
  updateTimer();
}