const menuIcon = document.querySelector('.primary__menu')
const navLinks = document.querySelector('.primary__links')

menuIcon.addEventListener('click', function () {
    menuIcon.classList.toggle("closeIcon")
    navLinks.classList.toggle("toggle")
})

window.addEventListener("resize", function () {
    if (window.innerWidth > 1024) {
        navLinks.classList.remove("toggle");
        menuIcon.classList.remove("closeIcon")
    }
});

const dropDown = document.querySelector('.drop-down')
const dropDownMenu = document.querySelector('.drop-down__menu')

dropDown.addEventListener('click', function () {
    dropDownMenu.classList.toggle('show-menu')
})