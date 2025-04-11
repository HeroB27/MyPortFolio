// script.js

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Loading page functionality
window.addEventListener('load', function() {
  const loading = document.getElementById('loading');
  const content = document.getElementById('content');

  setTimeout(function() {
    loading.classList.add('hidden');
    setTimeout(function() {
      loading.style.display = 'none';
      content.classList.remove('hidden');
      content.classList.add('visible');
    }, 1000);
  }, 3000);
});