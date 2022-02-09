const body = document.querySelector('body');
const menuIcon = document.querySelector('.primary__menu-icon');
const menuLinks = document.querySelector('.primary__links');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('toggle-menu');
  menuLinks.classList.toggle('show-links');
  body.style.overflow = 'hidden';
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    menuIcon.classList.remove('toggle-menu');
    menuLinks.classList.remove('show-links');
  }
});
