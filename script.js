// CONFETTI
const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = Array.from({ length: 120 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 5 + 2,
  d: Math.random() * 1 + 0.5
}));

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(c => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,180,200,0.6)";
    ctx.fill();
    c.y += c.d;
    if (c.y > canvas.height) c.y = -10;
  });
  requestAnimationFrame(draw);
}
draw();

// THEME TOGGLE
const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeBtn.textContent = document.body.classList.contains("dark-theme")
    ? "Light Theme ☀️"
    : "Dark Theme 🌙";
});
