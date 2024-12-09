function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  if (navLinks.style.display === 'flex') {
    navLinks.style.display = 'none';
  } else {
    navLinks.style.display = 'flex';
  }
}

function toggleTheme() {
  const htmlEl = document.documentElement;
  const currentTheme = htmlEl.getAttribute('data-theme');
  const newTheme = (currentTheme === 'light') ? 'dark' : 'light';
  htmlEl.setAttribute('data-theme', newTheme);
}

// Update the year in the footer automatically
document.getElementById('year').textContent = new Date().getFullYear();

// Intersection Observer for fade-in animations
const faders = document.querySelectorAll('[data-animate="fade-in"]');

const observerOptions = {
  threshold: 0.2
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, observerOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
