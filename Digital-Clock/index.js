


function updateTime() {
  let now = new Date();
  let hours = now.getHours();
  let stamp;
  if (hours > 12) {
    hours = `0${(hours % 10 - 2)}`;
    stamp = 'PM'
  }
  else {
    stamp = 'AM'
  }

  let mins = (now.getMinutes());
  let secs = (now.getSeconds());
  if (mins < 10) {
    mins =`0${mins}` 
  }

  if (secs < 10) {
    secs =`0${secs}` 
  }
  document.querySelector('.time-hour').innerText=hours;
  document.querySelector('.time-min').innerText=mins;
  document.querySelector('.time-sec').innerText = secs;
  document.querySelector('.time-stamp').innerHTML = stamp;
  setTimeout(() => {
    updateTime()
  },1000)
}

updateTime()