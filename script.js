function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const navToggle = document.querySelector('.nav-toggle');
  const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;

  if (navLinks.style.display === 'flex') {
    navLinks.style.display = 'none';
  } else {
    navLinks.style.display = 'flex';
  }

  navToggle.setAttribute('aria-expanded', !expanded);
}

// Update the year in the footer automatically
document.getElementById('year').textContent = new Date().getFullYear();
