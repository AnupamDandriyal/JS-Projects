const dayEl = document.querySelector('.days');
const hourEl = document.querySelector('.hours');
const minEl = document.querySelector('.mins');
const secEl = document.querySelector('.secs');
updateTimer()
function updateTimer() {
  let today = new Date();
  let launch = new Date('Jan 1,2025');
  let gap = launch.getTime() - today.getTime();
  let seconds = 1000;
  let minutes = seconds * 60;
  let hours = minutes * 60;
  let days = hours * 24;

  dayEl.innerHTML = Math.floor(gap / days);
  hourEl.innerHTML= Math.floor((gap % days) / hours);
  minEl.innerHTML= Math.floor((gap % hours) / minutes);
  secEl.innerHTML = Math.floor((gap % minutes) / seconds);
  
  setTimeout(updateTimer,50)
}


