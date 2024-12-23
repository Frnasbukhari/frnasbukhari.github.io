// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Update footer year
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  } else {
    console.warn('Year element not found in the footer.');
  }

  // Smooth Scrolling for Navigation Links
  const navLinks = document.querySelectorAll('nav a.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        const yOffset = -60; // Adjust for fixed navbar height
        const yPosition = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({
          top: yPosition,
          behavior: 'smooth'
        });
      }
      
      // Close the navbar on small screens after clicking
      const navbarLinks = document.querySelector('.navbar-links');
      if (navbarLinks.classList.contains('active')) {
        navbarLinks.classList.remove('active');
      }
      const toggleButton = document.querySelector('.navbar-toggle');
      toggleButton.setAttribute('aria-expanded', 'false');
      toggleButton.classList.remove('active');
    });
  });

  // Highlight Active Navigation Link Based on Scroll Position
  const sections = document.querySelectorAll('main section');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 70;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });
  });

  // Toggle Navigation Menu on Small Screens
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

  // Accessibility: Close navbar when clicking outside
  document.addEventListener('click', (e) => {
    if (!navbarLinks.contains(e.target) && !toggleButton.contains(e.target)) {
      if (navbarLinks.classList.contains('active')) {
        navbarLinks.classList.remove('active');
        toggleButton.classList.remove('active');
        toggleButton.setAttribute('aria-expanded', 'false');
      }
    }
  });
});
