document.addEventListener("DOMContentLoaded", function () {
  const audio = document.querySelector("audio");
  const playBtn = document.querySelector(".play-btn");
  const forwardBtn = document.querySelector(".forward-btn");
  const backwardBtn = document.querySelector(".backward-btn");
  const containerAudio = document.querySelector(".container-audio");
  const audioBackground = document.querySelector(".audio-background");
  const singer = document.querySelector(".singer");
  const song = document.querySelector(".song");

  let currentIndex = 0;

  // Включить/выключить песню
  function toggleAudio() {
    if (audio.paused) {
      audio.play();
      playBtn.classList.add("pause-btn");
    } else {
      audio.pause();
      playBtn.classList.remove("pause-btn");
    }
  }

  playBtn.addEventListener("click", toggleAudio);

  // Переключать песни
  function loadTrack(index) {
    const track = arrayAudio[index];
    audio.src = track.pathSong;
    containerAudio.style.backgroundImage = `url(${track.pathBackground})`;
    audioBackground.style.backgroundImage = `url(${track.pathBackground})`;
    singer.textContent = track.artist;
    song.textContent = track.nameSong;
    audio.play();
  }

  function nextTrack() {
    currentIndex = (currentIndex + 1) % arrayAudio.length;
    loadTrack(currentIndex);
  }

  function prevTrack() {
    currentIndex = (currentIndex - 1 + arrayAudio.length) % arrayAudio.length;
    loadTrack(currentIndex);
  }
  forwardBtn.addEventListener("click", nextTrack);
  backwardBtn.addEventListener("click", prevTrack);

  // При загрузке страницы - первая песня
  loadTrack(currentIndex);
});
