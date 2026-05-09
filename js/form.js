document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = this.querySelector('button');
  const orig = btn.textContent;
  btn.textContent = '✅ Message Sent!';
  btn.style.background = 'linear-gradient(135deg, #00C9A7, #004B8D)';
  btn.style.color = '#fff';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = orig;
    btn.style.background = '';
    btn.style.color = '';
    btn.disabled = false;
    this.reset();
  }, 3000);
});
