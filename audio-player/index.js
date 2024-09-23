document.addEventListener("DOMContentLoaded", function () {
  const audio = document.querySelector("audio");
  const playBtn = document.querySelector(".play-btn");
  const forwardBtn = document.querySelector(".forward-btn");
  const backwardBtn = document.querySelector(".backward-btn");
  const containerAudio = document.querySelector(".container-audio");
  const audioBackground = document.querySelector(".audio-background");
  const singer = document.querySelector(".singer");
  const song = document.querySelector(".song");
  const progressBar = document.querySelector(".progress-bar");
  const currentTimeEl = document.querySelector(".current-time");
  const durationEl = document.querySelector(".duration");

  let currentIndex = 0;

  // Включить/выключить песню
  function toggleAudio() {
    if (audio.paused) {
      audio.play();
      playBtn.classList.add("pause-btn");
      audioBackground.classList.add("zoomed");
    } else {
      audio.pause();
      playBtn.classList.remove("pause-btn");
      audioBackground.classList.remove("zoomed");
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
  }

  function nextTrack() {
    currentIndex = (currentIndex + 1) % arrayAudio.length;
    loadTrack(currentIndex);
    audio.play();
    playBtn.classList.add("pause-btn");
    audioBackground.classList.add("zoomed");
  }

  function prevTrack() {
    currentIndex = (currentIndex - 1 + arrayAudio.length) % arrayAudio.length;
    loadTrack(currentIndex);
    audio.play();
    playBtn.classList.add("pause-btn");
    audioBackground.classList.add("zoomed");
  }
  forwardBtn.addEventListener("click", nextTrack);
  backwardBtn.addEventListener("click", prevTrack);

  // При загрузке страницы - первая песня
  loadTrack(currentIndex);

  // Прогресс-бар
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  }

  audio.addEventListener("loadedmetadata", function () {
    progressBar.max = audio.duration;
    durationEl.textContent = formatTime(audio.duration);
  });

  audio.addEventListener("timeupdate", function () {
    progressBar.value = audio.currentTime;
    currentTimeEl.textContent = formatTime(audio.currentTime);
  });

  progressBar.addEventListener("input", function () {
    audio.currentTime = progressBar.value;
  });

  audio.addEventListener("ended", nextTrack);
});
