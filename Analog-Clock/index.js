const hour = document.querySelector('.hours');
const min = document.querySelector('.mins');
const sec = document.querySelector('.secs');

updateClock();


function updateClock() {
  const time = new Date();
  const h = (time.getHours());
  const m = (time.getMinutes());
  const s = (time.getSeconds());
  const hdeg = (h / 12) * 360;
  const mdeg = (m / 60) * 360;
  const sdeg =  (s/ 60) * 360;
  hour.style.transform = `rotate(${hdeg}deg)`;
  min.style.transform = `rotate(${mdeg}deg)`;
  sec.style.transform = `rotate(${sdeg}deg)`;
  setTimeout(updateClock, 1000)
  
}