let nowPlaying = document.querySelector('.now-playing');
let musicArt = document.querySelector('.music-art');
let musicName = document.querySelector('.music-name');
let musicArtist = document.querySelector('.music-artist');

let prevBtn = document.querySelector('.prev-track');
let playpauseBtn = document.querySelector('.playpause-track');
let nextBtn = document.querySelector('.next-track');

let seekSlider = document.querySelector('.seek_slider');
let volumeSlider = document.querySelector('.volume_slider');
let currTime = document.querySelector('.current-time');
let totalDuration = document.querySelector('.total-duration');
let currTrack = document.createElement('audio');

let trackIndex = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

let yatraBtn = document.querySelector('.yatrabtn');

function dondeVan() {
  document.getElementById(".music-name") = "A Donde Van";
  document.getElementById(".music-artist") = "Sebastian Yatra";
}

let yatraSong= [{
    img: 'album/A Donde Van.jpg',
    name: 'A Dónde Van',
    artist: 'Sebastián Yatra, Álvaro Díaz',
    music: 'audio/A Donde Van.mp3'
  },]

let chemaSong=  [{
    img: 'album/Entre tu y yo.jpg',
    name: 'Entre Tú Y Yo',
    artist: 'Chema Rivas',
    music: 'audio/Entre Tu y Yo.mp3'
  },
]

