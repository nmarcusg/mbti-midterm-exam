const navbar = document.getElementById('nav');
const bigNav = document.getElementById('main-nav');
const mobileButton = document.getElementById('menu-toggle');
const heading = document.getElementById('header');
const returnButton = document.getElementById('returnButton');
let hideTimeout;

window.addEventListener('scroll', () => {
  const mainHeading = heading.getBoundingClientRect();
  if (mainHeading.bottom <= 0) {
    returnButton.classList.remove('hidden')
  }
  else {
    returnButton.classList.add('hidden')
  }
})

mobileButton.addEventListener('click', () => {
  navbar.classList.toggle('hidden');
});

window.addEventListener('scroll', () => {
  const mainNav = bigNav.getBoundingClientRect();
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

