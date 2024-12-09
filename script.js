function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  if (navLinks.style.display === 'flex') {
    navLinks.style.display = 'none';
  } else {
    navLinks.style.display = 'flex';
  }
}

// Update the year in the footer automatically
document.getElementById('year').textContent = new Date().getFullYear();
