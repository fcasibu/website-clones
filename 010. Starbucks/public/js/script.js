const sections = document.querySelector('.sections');
const menuIcon = document.querySelector('.primary__menu-icon');
const menuLinks = document.querySelector('.primary__links');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('toggle-menu');
  menuLinks.classList.toggle('show-links');;
  sections.classList.toggle('pointer-events');
  document.body.classList.toggle('overflow');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    menuIcon.classList.remove('toggle-menu');
    menuLinks.classList.remove('show-links');
    orderMenuItems.classList.remove('show-order');
    sections.classList.remove('pointer-events');
    document.body.classList.remove('overflow');
  }
});

const day = document.querySelector('.day');
const hours = new Date().getHours();

window.onload = () => {
  if(hours >= 1 && hours < 12) {
    day.textContent = `Good morning ☕`;
  } else if (hours >= 12 && hours < 18) {
    day.textContent = `Good afternoon ☀️`;
  } else {
    day.textContent = `Good evening 🌙`;
  }
};

const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

rightArrow.addEventListener('click', () => {
  const property = document.documentElement.style.getPropertyValue('--slider');
  if(!property || property === '0%') {
    document.documentElement.style.setProperty('--slider', `-100%`);
  } else if(property === '-100%') {
    document.documentElement.style.setProperty('--slider', `-200%`);
  } else if(property === '-200%') {
    document.documentElement.style.setProperty('--slider', `0%`);
  }
});

leftArrow.addEventListener('click', () => {
  const property = document.documentElement.style.getPropertyValue('--slider');
  if(!property || property === '0%') {
    document.documentElement.style.setProperty('--slider', `-200%`);
  } else if(property === '-200%') {
    document.documentElement.style.setProperty('--slider', `-100%`);
  } else if(property === '-100%') {
    document.documentElement.style.setProperty('--slider', `0%`);
  }
});

const items = document.querySelectorAll('.item');

items.forEach((item) => item.addEventListener('click', () => {
  item.lastElementChild.classList.toggle('drop-down');
  item.firstElementChild.children[1].classList.toggle('rotate-arrow');
}))

const orderMenu = document.querySelector('.order-menu');
const orderMenuItems = document.querySelector('.order-menu-items');

orderMenu.addEventListener('click', () => {
  orderMenuItems.classList.add('show-order')
})

orderMenuItems.firstElementChild.addEventListener('click', () => {
  orderMenuItems.classList.remove('show-order');
})