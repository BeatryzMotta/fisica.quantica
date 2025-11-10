const canvas = document.querySelector('.estrelacanvas');
const ctx = canvas.getContext('2d');

let estrelas = [];
let w = 0, h = 0;

function resize() {
  const rect = canvas.getBoundingClientRect();
  w = Math.floor(rect.width);
  h = Math.floor(rect.height);

  const ratio = window.devicePixelRatio || 1;
  canvas.width = w * ratio;
  canvas.height = h * ratio;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  iniciarEstrelas();
}

function iniciarEstrelas() {
  estrelas = [];
  // Aumente ou diminua o divisor para mais/menos estrelas
  const count = Math.max(150, Math.floor((w * h) / 20000));
  
  for (let i = 0; i < count; i++) {
    estrelas.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2.5 + 0.5,
      speed: 0.1 + Math.random() * 0.3,
      color: escolherCorEstrela(),
      twinkle: Math.random() * Math.PI * 2
    });
  }
}

function escolherCorEstrela() {
  const cores = [
    'rgba(255,255,255,',  // branco
    'rgba(255,245,200,',  // amarelado
    'rgba(200,220,255,'   // azulado
  ];
  return cores[Math.floor(Math.random() * cores.length)];
}

let last = 0;
function loop(ts) {
  const dt = Math.min(40, ts - last);
  last = ts;
  atualizar(dt / 16);
  desenhar();
  requestAnimationFrame(loop);
}

function atualizar(t) {
  for (let s of estrelas) {
    s.y += s.speed * t * 0.5;
    s.twinkle += 0.03; // cintilar lentamente
    if (s.y > h + 10) {
      s.y = -10;
      s.x = Math.random() * w;
    }
  }
}

function desenhar() {
  // fundo com leve transparência (rastro suave)
  ctx.fillStyle = 'rgba(0, 0, 20, 1)';
  ctx.fillRect(0, 0, w, h);

  for (let s of estrelas) {
    const brilho = 0.5 + Math.sin(s.twinkle) * 0.5; // piscar suave
    ctx.beginPath();
    ctx.fillStyle = s.color + brilho.toFixed(2) + ')';
    ctx.shadowBlur = 6;
    ctx.shadowColor = 'white';
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  }
}

window.addEventListener('resize', resize);
resize();
requestAnimationFrame(loop);
