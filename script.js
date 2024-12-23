document.addEventListener('DOMContentLoaded', () => {
  // Update footer year
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Smooth Scrolling for Navigation Links
  const navLinks = document.querySelectorAll('nav a.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        const yOffset = -60; // adjust if needed
        const yPosition = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({
          top: yPosition,
          behavior: 'smooth'
        });
      }
      // Close mobile menu
      const navbarLinks = document.querySelector('.navbar-links');
      if (navbarLinks.classList.contains('active')) {
        navbarLinks.classList.remove('active');
      }
      const toggleButton = document.querySelector('.navbar-toggle');
      toggleButton.setAttribute('aria-expanded', 'false');
      toggleButton.classList.remove('active');
    });
  });

  // Toggle Navigation Menu on Mobile
  const toggleButton = document.querySelector('.navbar-toggle');
  const navbarLinks = document.querySelector('.navbar-links');

  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true' || false;
      navbarLinks.classList.toggle('active');
      toggleButton.classList.toggle('active');
      toggleButton.setAttribute('aria-expanded', !isExpanded);
    });
  }
});
