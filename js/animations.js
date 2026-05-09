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
