const songs = document.querySelector('.library-content');
const playbar = document.querySelector('.playbar');
const playbarPlay = document.querySelector('.control .play');
const playbarSong = document.querySelector('.songInfo .songName');
const playbarSinger = document.querySelector('.songInfo .singer');
const startStamp = document.querySelector('.playbar .songDuration .start');
const endStamp = document.querySelector('.playbar .songDuration .end');
let Music = document.createElement('audio');
let playFlag = false;
let audios;
let currMusic;
document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.left').style.left = '0'
})


document.querySelector('.close').addEventListener('click', () => {
  document.querySelector('.left').style.left = '-100%'
})


async function getData() {
  let response = await fetch('http://127.0.0.1:5500/Clones/Spotify/audiofiles.json');
  let data = await response.json();
  audios = data.audios;
  playbarSong.innerHTML = audios[0].name;
  playbarSinger.innerHTML = audios[0].singer;
  Music.src = audios[0].source;
  for (let item of audios) {
    console.log(item.name);
    let song = document.createElement('div');
    song.className = 'song';
    let info = document.createElement('div');
    info.className = 'info';
    let audiologo = document.createElement('i');
    /* audiologo.className = "audiologo"; */
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
    playNow.className = "playNow"
    playNow.innerHTML = 'Play Now';
    let playlogo = document.createElement('i');
    playlogo.className = "playlogo"
    playlogo.classList.add = "bx bx-play-circle";
    player.appendChild(playNow);
    player.appendChild(playlogo);
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
      let index = getMusicIndex(item);
      playMusic(item,index);
    });
    
  }
  playbarPlay.addEventListener('click', () => {
    if (playFlag === false) {
      let song = document.querySelector('.song');
      song.classList.add('active');
      document.querySelector('.song .playNow').innerHTML = 'Playing';
      document.querySelector('.song .playlogo').className = "bx bx-pause-circle";
      playMusic(audios[0],0);
    }
  })

}
getData()




function formatAudioDuration(durationInSeconds) {
  let minutes = Math.floor(durationInSeconds / 60);
  let seconds = Math.floor(durationInSeconds % 60);

  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  return `${minutes}:${seconds}`;
}


function playMusic(item, index) {
  console.log(item);
  currMusic = item;
  playFlag = true;
  Music.src = item.source;
  playbar.appendChild(Music);
  Music.play();
  playbarPlay.className = "bx bx-pause-circle play";
  playbarSinger.innerHTML = item.singer;
  playbarSong.innerHTML = item.name;
  document.querySelectorAll('.song').forEach(s => {
    s.classList.remove('active');
    s.querySelector('.player p').innerHTML = 'Play Now';
    s.querySelector('.player i').className = "bx bx-play-circle";
  });
  let currentSongElement = document.querySelectorAll('.song')[index];
  currentSongElement.classList.add('active');
  currentSongElement.querySelector('.player p').innerHTML = 'Playing';
  currentSongElement.querySelector('.player i').className = "bx bx-pause-circle";
  Music.addEventListener('timeupdate', () => {
    if (!isNaN(Music.duration)) {
      startStamp.innerHTML = formatAudioDuration(Music.currentTime);
      endStamp.innerHTML = formatAudioDuration(Music.duration);
      document.querySelector('.seekbarControl').style.left = (Music.currentTime / Music.duration) * 100 + "%"; 
    }
  })
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
})


Music.addEventListener('pause', () => {
  playbarPlay.classList.remove('rotate'); // Remove 'rotate' class when paused
});

Music.addEventListener('play', () => {
  playbarPlay.classList.add('rotate'); // Ensure 'rotate' class is added when playing
});


document.querySelector('.seekbar').addEventListener('click', (e) => {
  let percent = (e.offsetX/e.target.getBoundingClientRect().width)*100;
  document.querySelector('.seekbarControl').style.left = percent + "%";
  Music.currentTime = (Music.duration * percent) / 100;
})



document.querySelector('.prev').addEventListener('click', () => {
  if (getMusicIndex(currMusic) === 0) {
    Music.currentTime = 0;
  }
  else {
    playMusic(audios[getMusicIndex(currMusic) - 1],getMusicIndex(currMusic)-1)
  }
})


document.querySelector('.next').addEventListener('click', () => {
  console.log(getMusicIndex(currMusic));
  if (getMusicIndex(currMusic) === audios.length - 1) {
    setTimeout(() => {
      playMusic(audios[0], 0)
    }, 500);
  }
  if (getMusicIndex(currMusic) < audios.length) {
    playMusic(audios[getMusicIndex(currMusic)+1],getMusicIndex(currMusic)+1)
  }
 
})



function getMusicIndex(Music) {
    for (let i = 0; i < audios.length; i++){
      if (Music.source.includes(audios[i].source)) {
        return i;
      }
    }
}

let volume = document.querySelector('.volume');
let volumeLevel = document.querySelector('.volumeSeekbar')
volume.addEventListener('click', () => {
  volume.style.marginRight = '70px';
  volumeLevel.style.display = 'block';
  setTimeout(() => {
    volume.style.marginRight = '0px';
    volumeLevel.style.display = 'none';
  },7000)
})


document.querySelector('.volumeControls').getElementsByTagName('input')[0].addEventListener('change', (e) => {
  Music.volume = parseInt(e.target.value)/100
})




