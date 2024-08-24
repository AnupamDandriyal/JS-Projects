const songs = document.querySelector('.library-content');
const Music = document.querySelector('.playbar audio');
const playbarPlay = document.querySelector('.control .play');
const playbarSong = document.querySelector('.songInfo .songName');
const playbarSinger = document.querySelector('.songInfo .singer');
const endStamp = document.querySelector('.playbar .songDuration .end');

async function getData() {
  let response = await fetch('http://127.0.0.1:5500/Clones/Spotify/audiofiles.json');
  let data = await response.json();
  let audios = data.audios;
  for (let item of audios) {
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
    /* player.appendChild(close); */
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
        Music.pause();
        Music.currentTime = 0;
      });
      song.classList.add('active');
      close.innerHTML = '&times;';
      playNow.innerHTML = 'Playing...';
      playlogo.className = "bx bx-pause-circle";
      playMusic(item);
    });
    
  }
}
getData()


function playMusic(item) {
  Music.src = item.source;
  console.log(Music.duration)
  Music.play();
  playbarPlay.className = "bx bx-pause-circle play";
  playbarSinger.innerHTML = item.singer;
  playbarSong.innerHTML = item.name;
  /* endStamp.innerHTML = playbar.duration; */
}


playbarPlay.addEventListener('click', () => {
  if (Music.paused) {
    Music.play();
    playbarPlay.className = "bx bx-pause-circle play";
  }
  else {
    Music.pause();
    playbarPlay.className = "bx bx-play-circle play";
  }
});






