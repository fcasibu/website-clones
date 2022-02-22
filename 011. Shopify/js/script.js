const menu = document.querySelector(".menu");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const menuStartDropDown = document.querySelector(".menu-start-dropdown");

menuIcon.addEventListener("click", () => {
  menu.classList.add("show-menu");
});

closeIcon.addEventListener("click", () => {
  menu.classList.remove("show-menu");
});

menuStartDropDown.addEventListener("click", () => {
  menuStartDropDown.children[1].classList.toggle("show-dropdown");
});
