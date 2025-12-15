// ✅ GUARANTEED LOADING SCREEN FIX + MOBILE MENU
document.addEventListener('DOMContentLoaded', function () {
  // Fade out loading screen after 1.2 seconds
  const loader = document.getElementById('loading-screen');
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => {
        if (loader.parentNode) {
          loader.parentNode.removeChild(loader);
        }
      }, 600);
    }, 1200);
  }

  // Mobile menu toggle
  const menuBtn = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});