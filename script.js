// Toggle mobile navigation
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('show');
}

// Highlight active page link
const currentLocation = window.location.href;
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  if (currentLocation.includes(link.getAttribute('href'))) {
    link.classList.add('active');
  }
});
