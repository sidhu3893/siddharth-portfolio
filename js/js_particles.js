const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const container = document.getElementById('particles');
container.appendChild(canvas);

canvas.style.cssText = 'width:100%;height:100%;position:absolute;top:0;left:0;';

let W, H, dots = [];

function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', () => { resize(); init(); });

const COLORS = ['#FDB913','#004B8D','#00C9A7','#6C3AE8','#FF6B35'];

function init() {
  dots = [];
  const n = Math.floor(W * H / 12000);
  for (let i = 0; i < n; i++) {
    dots.push({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: Math.random() * 0.5 + 0.2
    });
  }
}
init();

function draw() {
  ctx.clearRect(0, 0, W, H);
  dots.forEach(d => {
    d.x += d.vx; d.y += d.vy;
    if (d.x < 0 || d.x > W) d.vx *= -1;
    if (d.y < 0 || d.y > H) d.vy *= -1;
    ctx.beginPath();
    ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
    ctx.fillStyle = d.color;
    ctx.globalAlpha = d.alpha;
    ctx.fill();
  });
  // draw lines between close dots
  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      const dx = dots[i].x - dots[j].x, dy = dots[i].y - dots[j].y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < 100) {
        ctx.beginPath();
        ctx.moveTo(dots[i].x, dots[i].y);
        ctx.lineTo(dots[j].x, dots[j].y);
        ctx.strokeStyle = '#FDB913';
        ctx.globalAlpha = (1 - dist / 100) * 0.12;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
  ctx.globalAlpha = 1;
  requestAnimationFrame(draw);
}
draw();
