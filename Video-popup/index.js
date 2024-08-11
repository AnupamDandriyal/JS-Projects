const btn = document.querySelector('.btn');
const containerEl = document.querySelector('.container');
const videoEl = document.querySelector('.video-container');
const close = document.querySelector('.close');
const video = document.querySelector('video')

btn.addEventListener('click', () => {
  video.currentTime = 0;
  videoEl.classList.remove('inactive')
  videoEl.classList.toggle('active');
  containerEl.classList.toggle('inactive')
})

close.addEventListener('click', () => {
  containerEl.classList.remove('inactive');
  containerEl.classList.toggle('active');
  videoEl.classList.toggle('inactive');
})

