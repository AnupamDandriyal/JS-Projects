const playMusic = document.querySelector('.play');
const pauseMusic = document.querySelector('.pause');
const music = document.querySelector('audio');
const backward = document.getElementById('backward');
let progress = document.getElementById('progress');

music.onloadedmetadata = function () {
  progress.max = music.duration;
  progress.value = music.currentTime;
}


playMusic.addEventListener('click', () => {
  playMusic.style.display = 'none';
  pauseMusic.style.display = 'flex';
  music.play()
})

pauseMusic.addEventListener('click', () => {
  pauseMusic.style.display = 'none';
  playMusic.style.display = 'flex';
  music.pause()
})

backward.addEventListener('click', () => {
  music.currentTime=0
  music.play();
})

if (music.play()) {
  setInterval(() => {
    progress.value = music.currentTime
  },500)
}

progress.onchange= function () {
  
  music.currentTime = progress.value;
  music.play();
  playMusic.style.display = 'none';
  pauseMusic.style.display = 'flex';
}