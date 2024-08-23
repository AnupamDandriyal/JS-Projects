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
    playlogo.className = "bx bx-play-circle play";
    player.appendChild(playNow);
    player.appendChild(playlogo);
    song.appendChild(info);
    song.appendChild(player);
    songs.appendChild(song);
  }
}
getData()



