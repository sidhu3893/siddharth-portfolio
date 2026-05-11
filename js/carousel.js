const ring = document.getElementById('carouselRing');
const total = ring.children.length;
const step = 360 / total;
let current = 0;

document.getElementById('carouselLeft').addEventListener('click', () => {
  current -= step;
  ring.style.transform = `rotateY(${current}deg)`;
});

document.getElementById('carouselRight').addEventListener('click', () => {
  current += step;
  ring.style.transform = `rotateY(${current}deg)`;
});