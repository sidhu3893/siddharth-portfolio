const phrases = [
  'ECE Engineer 🔌',
  'CSK Die-Hard Fan 🏏',
  'Intern @ Psiog Digital 💼',
  'Verstappen Fan 🏎️',
  'Music Lover',
  'Problem Solver 🧠',
];

const el = document.getElementById('typewriter');
let pIdx = 0, cIdx = 0, deleting = false;

function type() {
  const phrase = phrases[pIdx];
  if (!deleting) {
    el.textContent = phrase.slice(0, ++cIdx);
    if (cIdx === phrase.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    el.textContent = phrase.slice(0, --cIdx);
    if (cIdx === 0) {
      deleting = false;
      pIdx = (pIdx + 1) % phrases.length;
    }
  }
  setTimeout(type, deleting ? 60 : 100);
}
type();
