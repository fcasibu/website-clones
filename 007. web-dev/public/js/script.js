let menuIcon = document.querySelector('.menu-icon')
let navLinks = document.querySelector('.nav-links')

menuIcon.addEventListener('click', function () {
    if (menuIcon.classList.contains('toggle-menu')) {
        menuIcon.classList.remove('toggle-menu')
        navLinks.classList.remove('show-menu')
    } else {
        menuIcon.classList.add('toggle-menu')
        navLinks.classList.add('show-menu')
    }
})