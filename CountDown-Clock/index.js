const day = document.querySelector('.days');
const hour = document.querySelector('.hours');
const min = document.querySelector('.mins');
const sec = document.querySelector('.secs');


function updateTimer() {
  const newYear = new Date('jan 1, 2025');
  const today = new Date();
  const gap = newYear.getTime() - today.getTime();

  let seconds = 1000;
  let minutes = seconds * 60;
  let hours = minutes * 60;
  let days = hours * 24

  let d = Math.floor(gap / days);
  day.innerHTML = (d);

  let h = Math.floor((gap % days) / hours);
  hour.innerHTML = (h);

  let m = Math.floor((gap%hours )/ minutes);
  min.innerHTML = (m);

  let s =  Math.floor((gap%minutes )/ seconds);
  sec.innerHTML = (s);

  setTimeout(() => {
    updateTimer();
  },100)
  
}

updateTimer()