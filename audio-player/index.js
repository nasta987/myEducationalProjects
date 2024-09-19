document.addEventListener("DOMContentLoaded", function () {
  const audio = document.querySelector("audio");
  const playBtn = document.querySelector(".play-btn");

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
});
