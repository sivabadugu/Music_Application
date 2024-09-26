"use strict";

// DOM Elements
const imgCoverEl = document.getElementById("cover");
const musicTitleEl = document.getElementById("music_title");
const musicArtistEl = document.getElementById("music_artist");
const playerProgressEl = document.getElementById("player_progress");
const progressEl = document.getElementById("progress");
const currentTimeEl = document.getElementById("current_time");
const durationEl = document.getElementById("duration");
const prevBtnEl = document.getElementById("prev");
const playBtnEl = document.getElementById("play");
const nextBtnEl = document.getElementById("next");
const shuffleBtnEl = document.getElementById("shuff");
const repeatBtnEl = document.getElementById("rep");
const heartBtnEl = document.getElementById("heart");
const shareBtnEl = document.getElementById("shar");

// Songs Array
const songs = [
  {
    path: "media/audio/song1.mp3",
    displayName: "BGM Of Premalu",
    cover: "media/images/image-1.jpeg",
    artist: "Vishnu Vijay | Shakthisree Gopalan | Kapil Kapilan",
    liked: false,
  },
  {
    path: "media/audio/song2.mp3",
    displayName: "Suttamla Soosi",
    cover: "media/images/image-2.jpeg",
    artist: "VishwakSen, Neha Shetty | Yuvan Shankar Raja",
    liked: false,
  },
  {
    path: "media/audio/song3.mp3",
    displayName: "Chaleya",
    cover: "media/images/image-3.jpeg",
    artist: "Arijit Singh, Shilpa Rao",
    liked: false,
  },
  {
    path: "media/audio/song4.mp3",
    displayName: "Nadaniya",
    cover: "media/images/image-4.jpeg",
    artist: "Akshath",
    liked: false,
  },
  {
    path: "media/audio/song5.mp3",
    displayName: "O-Sajni-Re",
    cover: "media/images/image-5.jpeg",
    artist: "Arijit Singh, Ram Sampath | Laapataa Ladies | Aamir Khan Productions",
    liked: false,
  },
];

// Audio element and player state variables
const music = new Audio();
let musicIndex = 0;
let isPlaying = false;
let isRepeating = false;
let isShuffling = false;

// Play or pause music
function togglePlay() {
  isPlaying ? pauseMusic() : playMusic();
}

// Play music
function playMusic() {
  isPlaying = true;
  playBtnEl.classList.replace("fa-play", "fa-pause");
  playBtnEl.setAttribute("title", "pause");
  music.play();
}

// Pause music
function pauseMusic() {
  isPlaying = false;
  playBtnEl.classList.replace("fa-pause", "fa-play");
  playBtnEl.setAttribute("title", "play");
  music.pause();
}

// Load and display the selected song
function loadMusic(song) {
  music.src = song.path;
  musicTitleEl.textContent = song.displayName;
  musicArtistEl.textContent = song.artist;
  imgCoverEl.src = song.cover;
  updateLikeButton(song.liked);
}

// Change music based on direction
function changeMusic(direction) {
  if (isShuffling) {
    musicIndex = Math.floor(Math.random() * songs.length);
  } else {
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
  }
  loadMusic(songs[musicIndex]);
  playMusic(); // Ensure the next song plays
}

// Set progress bar based on click position
function setProgressBar(e) {
  const width = playerProgressEl.clientWidth;
  const xValue = e.offsetX;
  music.currentTime = (xValue / width) * music.duration;
}

// Update progress bar and time displays
function updateProgressBar() {
  const { duration, currentTime } = music;
  const progressPercent = (currentTime / duration) * 100;
  progressEl.style.width = `${progressPercent}%`;

  // Format and display time
  const formatTime = (time) => String(Math.floor(time)).padStart(2, "0");
  durationEl.textContent = `${formatTime(duration / 60)} : ${formatTime(duration % 60)}`;
  currentTimeEl.textContent = `${formatTime(currentTime / 60)} : ${formatTime(currentTime % 60)}`;
}

// Toggle like status
function toggleLike() {
  songs[musicIndex].liked = !songs[musicIndex].liked;
  updateLikeButton(songs[musicIndex].liked);
}

// Update the like button's appearance
function updateLikeButton(isLiked) {
  heartBtnEl.classList.toggle("liked", isLiked);
}

// Share the current song
function shareSong() {
  const song = songs[musicIndex];
  const shareData = {
    title: song.displayName,
    text: `Check out this song: ${song.displayName} by ${song.artist}`,
    url: song.path,
  };

  if (navigator.share) {
    navigator.share(shareData)
      .then(() => console.log('Share was successful.'))
      .catch((error) => console.error('Error sharing:', error));
  } else {
    alert(`Share this song: ${song.displayName} by ${song.artist}\n${song.path}`);
  }
}

// Toggle repeat mode
function toggleRepeat() {
  isRepeating = !isRepeating;
  repeatBtnEl.classList.toggle("active", isRepeating);
}

// Toggle shuffle mode
function toggleShuffle() {
  isShuffling = !isShuffling;
  shuffleBtnEl.classList.toggle("active", isShuffling);
}

// Initialize event listeners
function btnEvents() {
  playBtnEl.addEventListener("click", togglePlay);
  nextBtnEl.addEventListener("click", () => changeMusic(1));
  prevBtnEl.addEventListener("click", () => changeMusic(-1));
  heartBtnEl.addEventListener("click", toggleLike);
  shareBtnEl.addEventListener("click", shareSong);
  repeatBtnEl.addEventListener("click", toggleRepeat);
  shuffleBtnEl.addEventListener("click", toggleShuffle);
  
  music.addEventListener("ended", () => {
    console.log('Current song ended');
    if (isRepeating) {
      console.log('Repeating song');
      loadMusic(songs[musicIndex]);
      playMusic();
    } else {
      console.log('Moving to next song');
      changeMusic(1);
    }
  });
  
  music.addEventListener("timeupdate", updateProgressBar);
  playerProgressEl.addEventListener("click", setProgressBar);
}

// Initialize music player
document.addEventListener("DOMContentLoaded", () => {
  btnEvents();
  loadMusic(songs[musicIndex]);
});

// Image carousel logic
let currentImageIndex = 0;
const carouselImages = document.querySelectorAll('.carousel img');
const totalCarouselImages = carouselImages.length;

function showCarouselImage(index) {
  carouselImages.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

function nextCarouselImage() {
  currentImageIndex = (currentImageIndex + 1) % totalCarouselImages;
  showCarouselImage(currentImageIndex);
}

// Change carousel image every 3 seconds
setInterval(nextCarouselImage, 3000);
showCarouselImage(currentImageIndex);

// Music image activation logic
let currentMusicIndex = 0;
const musicImages = document.querySelectorAll('.player_img img');

function activateMusicImage(index) {
  musicImages.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

// Change music image every 8 seconds
setInterval(() => {
  currentMusicIndex = (currentMusicIndex + 1) % musicImages.length;
  activateMusicImage(currentMusicIndex);
}, 8000);
activateMusicImage(currentMusicIndex);



