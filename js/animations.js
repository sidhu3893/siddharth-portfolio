// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(r => observer.observe(r));

// Staggered card animations
document.querySelectorAll('.about-card, .project-card, .interest-card, .family-card, .cert-card').forEach((el, i) => {
  el.style.transitionDelay = `${i * 80}ms`;
});

// Parallax scroll on interest photos
window.addEventListener('scroll', () => {
  document.querySelectorAll('.interest-photo img').forEach(img => {
    const rect = img.closest('.interest-photo').getBoundingClientRect();
    const winH = window.innerHeight;
    // progress: 0 when bottom enters, 1 when top leaves
    const progress = 1 - (rect.bottom / (winH + rect.height));
    const clamped = Math.min(Math.max(progress, 0), 1);
    // shift object-position from top to bottom as you scroll
    const pos = Math.round(clamped * 100);
    img.style.objectPosition = `center ${pos}%`;
  });
});