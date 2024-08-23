const songs = document.querySelector('.library-content');

async function getData() {
  let response = await fetch('http://127.0.0.1:5500/Clones/Spotify/audiofiles.json');
  let data = await response.json();
  let audios = data.audios;
  for (item of audios) {
    console.log(item.name);
    let song = document.createElement('div');
    song.className = 'song';
    let info = document.createElement('div');
    info.className = 'info';
    let audiologo = document.createElement('i');
    audiologo.className = "bx bxs-music music";
    let songDetails = document.createElement('div');
    songDetails.className = 'songDetails';
    let songName = document.createElement('h5');
    songName.innerHTML = item.name;
    let singer = document.createElement('p');
    singer.innerHTML = item.singer;
    songDetails.appendChild(songName);
    songDetails.appendChild(singer);
    info.appendChild(audiologo);
    info.appendChild(songDetails);
    let player = document.createElement('div');
    player.className = 'player';
    let playNow = document.createElement('p');
    playNow.innerHTML = 'Play Now';
    let playlogo = document.createElement('i');
    playlogo.className = "bx bx-play-circle";
    let close = document.createElement('p');
    close.className = 'close';
    player.appendChild(playNow);
    player.appendChild(playlogo);
    player.appendChild(close);
    song.appendChild(info);
    song.appendChild(player);
    songs.appendChild(song);


    song.addEventListener('click', () => {
      document.querySelectorAll('.song').forEach(s => {
        s.classList.remove('active');
        s.querySelector('.player p').innerHTML = 'Play Now';
        s.querySelector('.player i').className = "bx bx-play-circle";
        let existingClose = s.querySelector('.player .close');
        if (existingClose) {
          existingClose.innerHTML = '';
        }
      });
      song.classList.add('active');
      close.innerHTML = '&times;';
      playNow.innerHTML = 'Playing...';
      playlogo.className = "bx bx-pause-circle";
    });
    close.addEventListener('click', (event) => {
      event.stopPropagation();  // Prevent the song click event from firing
      song.classList.remove('active');
      playNow.innerHTML = 'Play Now';
      playlogo.className = "bx bx-play-circle";
      close.style.display = 'none';  // Hide the close button
    });
  }
}
getData()




