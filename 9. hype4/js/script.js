const menuIcon = document.querySelector('.primary__menu-icon');
const menu = document.querySelector('.primary__links')

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
  menuIcon.classList.toggle('toggle-icon');
  document.body.classList.toggle('overflow')
})

window.addEventListener('dblclick', () => {
  menu.classList.remove('show-menu');
  menuIcon.classList.remove('toggle-icon');
  document.body.classList.remove('overflow')
})

window.addEventListener('resize', () => {
  (window.innerWidth >= 1024) ? menu.classList.remove('show-menu'): false;
  (window.innerWidth >= 1024) ? menuIcon.classList.remove('toggle-icon'): false;
})