const navbar = document.getElementById('nav');
const hero = document.getElementById('main-nav');
const mobileButton = document.getElementById('menu-toggle');

mobileButton.addEventListener('click', () => {
  navbar.classList.toggle('hidden');
});

window.addEventListener('scroll', () => {
  const mainNav = hero.getBoundingClientRect();
  if ((mainNav.bottom <= 0 || mainNav.top >= 30) && window.innerWidth >= 768) { 
    navbar.classList.remove('hidden');
  } else {
    navbar.classList.add('hidden');
  }
});


window.addEventListener('resize', () => {
  if (window.innerWidth <= 768) {
    navbar.classList.add('hidden');
  } else {
    navbar.classList.remove('hidden');
  }
})

