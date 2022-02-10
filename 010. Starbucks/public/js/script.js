const body = document.querySelector('body');
const main = document.querySelector('main');
const menuIcon = document.querySelector('.primary__menu-icon');
const menuLinks = document.querySelector('.primary__links');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('toggle-menu');
  menuLinks.classList.toggle('show-links');
  menuLinks.style.borderTop = "3px solid #e6e6e6";
  main.classList.toggle('pointer-events');
  body.style.overflow = 'hidden';
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    menuIcon.classList.remove('toggle-menu');
    menuLinks.classList.remove('show-links');
    main.classList.remove('pointer-events');
    menuLinks.style.border = "none"
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