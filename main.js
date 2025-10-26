const openBtn = document.getElementById("openBtn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");
const playBtn = document.getElementById("playBtn");
const stopBtn = document.getElementById("stopBtn");
const song = document.getElementById("song");
const heartsContainer = document.querySelector(".hearts");

function toggleModal(show) {
  modal.setAttribute("aria-hidden", show ? "false" : "true");
  if (!show) stopMusic();
}

openBtn.addEventListener("click", () => toggleModal(true));
closeBtn.addEventListener("click", () => toggleModal(false));

playBtn.addEventListener("click", () => {
  if (song.src) song.play().catch(() => {});
  else {
    playBtn.textContent = "✨ Reproduciendo...";
    setTimeout(() => (playBtn.textContent = "Reproducir música"), 1600);
  }
});

stopBtn.addEventListener("click", stopMusic);

function stopMusic() {
  song.pause();
  song.currentTime = 0;
}

function makeHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  const size = Math.random() * 18 + 12;
  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;
  heart.style.left = `${Math.random() * 100}%`;
  const duration = Math.random() * 6 + 6;
  heart.style.animation = `floatUp ${duration}s linear forwards`;
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), duration * 1000);
}

setInterval(makeHeart, 700);

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") toggleModal(false);
});
