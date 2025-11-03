const canvas = document.querySelector('.estrelacanvas');
const ctx = canvas.getContext('2d');

let estrela = [];
let w = 0, h = 0;

function resize() {
  const rect = canvas.getBoundingClientRect();
  w = Math.floor(rect.width);
  h = Math.floor(rect.height);

  const ratio = window.devicePixelRatio || 1;
  canvas.width = w * ratio;
  canvas.height = h * ratio;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  iniestrela();
}

function iniestrela() {
  estrela = [];
  const count = Math.max(100, Math.floor((w * h) / 40000));
  for (let i = 0; i < count; i++) {
    estrela.push({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random(),
      r: Math.random() * 2.2 + 0.6,
      speed: 0.15 + Math.random() * 0.35
    });
  }
}

let last = 0;
function loop(ts) {
  const dt = Math.min(40, ts - last);
  last = ts;
  update(dt / 16);
  draw();
  requestAnimationFrame(loop);
}

function update(t) {
  for (let s of estrela) {
    s.y += s.speed * t * 0.6;
    s.x += Math.sin((s.y / 60) + s.z * 10) * 0.1;
    s.z += (Math.random() - 0.5) * 0.003;
    if (s.y > h + 10) {
      s.y = -10;
      s.x = Math.random() * w;
      s.z = Math.random();
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, w, h);
  for (let s of estrela) {
    const alpha = 0.6 - (s.z * 0.45) + Math.sin((s.y * 0.05) + s.x) * 0.15;
    ctx.beginPath();
    ctx.fillStyle = `rgba(255,255,255,${Math.max(0, Math.min(1, alpha))})`;
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  }
}

window.addEventListener('resize', resize);
resize();
requestAnimationFrame(loop);

