const navbar = document.querySelector('.nav');
const hero = document.getElementById('main-nav');

window.addEventListener('scroll', () => {
  const heroRect = hero.getBoundingClientRect();
  if (heroRect.bottom <= 0 || heroRect.top >= 30) { 
    navbar.classList.remove('hidden');
  } else {
    navbar.classList.add('hidden');
  }
});