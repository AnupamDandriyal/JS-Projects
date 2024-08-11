const items = document.querySelectorAll('.item');
const containerEl = document.querySelector('.container')
items.forEach((sound) => {
    const text = (sound.innerText);
    const tune = document.createElement('audio');
    tune.id = `${text}-audio`;
    tune.src = `/Drum-Kits/Audio/${text}.mp3`
  sound.appendChild(tune);
    sound.addEventListener('click', () => {
      if (containerEl.classList.contains('playing')) {
        tune.pause();
        containerEl.classList.remove('playing')
      }
      else {
        containerEl.classList.add('playing')
        tune.play()
      }
    })
  
})

