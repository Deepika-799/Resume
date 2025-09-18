document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      navToggle.classList.toggle('open');
    });
  }

  // Contact form demo
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thanks! Your message has been sent (demo).');
      form.reset();
    });
  }

  // Current year
  document.getElementById('year').textContent = new Date().getFullYear();
});
