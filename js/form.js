document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = this.querySelector('button');

  // Sending animation
  btn.textContent = '⏳ Sending...';
  btn.style.background = 'linear-gradient(135deg, #004B8D, #0066CC)';
  btn.style.color = '#fff';
  btn.disabled = true;

  setTimeout(() => {
    // Success state
    btn.textContent = '✅ Message Sent!';
    btn.style.background = 'linear-gradient(135deg, #00C9A7, #004B8D)';

    // Animate the button with a quick bounce
    btn.style.transform = 'scale(1.1)';
    setTimeout(() => btn.style.transform = 'scale(1)', 200);

    // Reset after 3 seconds
    setTimeout(() => {
      btn.textContent = 'Send Message 🚀';
      btn.style.background = '';
      btn.style.color = '';
      btn.disabled = false;
      this.reset();
    }, 3000);
  }, 1500);
});