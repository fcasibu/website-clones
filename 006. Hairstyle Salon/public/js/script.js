let menuIcon = document.querySelector('.menu-icon')
let menu = document.querySelector('.menu-links')
let toggleTheme = document.querySelector('#toggle-switch')
let body = document.querySelector('body')

menuIcon.addEventListener('click', function () {
    if (menuIcon.classList.contains('toggle-menu')) {
        menuIcon.classList.remove('toggle-menu')
        menu.classList.remove('show-menu')
    } else {
        menuIcon.classList.add('toggle-menu')
        menu.classList.add('show-menu')
    }
})

let currentTheme = localStorage.getItem('wtf')

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme)

    if (currentTheme === 'dark') {
        toggleTheme.checked = true
    }
}

function changeTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('wtf', 'dark')
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('wtf', 'light')
    }
}

toggleTheme.addEventListener('change', changeTheme)

let slideIndex = 1;

function changeSlide(n) {
    let i;
    let slides = document.querySelectorAll('.box-item')
    let lines = document.querySelectorAll('.line')

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    for (i = 0; i < lines.length; i++) {
        lines[i].className = lines[i].className.replace(' active', "")
    }
    slides[slideIndex - 1].style.display = "block"
    lines[slideIndex - 1].className += " active"
}

function addSlide(n) {
    changeSlide(slideIndex += n)
}

function currentSlide(n) {
    changeSlide(slideIndex = n)
}

changeSlide(slideIndex)

let project = document.querySelectorAll('.project')
let button = document.querySelectorAll('.button')
let all = document.querySelector('.all')
let graphics = document.querySelector('.graphics')
let uiProject = document.querySelector('.ui-project')
let fullStack = document.querySelector('.fullstack')

document.querySelector('.all').addEventListener('click', function () {
    project.forEach(function (element) {
        element.style.opacity = "0"
        setTimeout(function () {
            element.style.opacity = "1"
        }, 200)
        element.style.display = "block"
    })
    button.forEach(function (element) {
        if (element.classList.contains('button--selected')) {
            element.classList.remove('button--selected')
            all.classList.add('button--selected')
        }
    })
})


document.querySelector('.graphics').addEventListener('click', function () {
    project.forEach(function (element) {
        if (!element.classList.contains('graphic')) {
            element.style.opacity = "0"
            setTimeout(function () {
                element.style.display = "none"
            }, 200)
        }
        if (element.classList.contains('graphic')) {
            element.style.opacity = "0"
            setTimeout(function () {
                element.style.display = "block"
            }, 0)
            setTimeout(function () {
                element.style.opacity = "1"
            }, 200)
        }
    })
    button.forEach(function (element) {
        if (element.classList.contains('button--selected')) {
            element.classList.remove('button--selected')
            graphics.classList.add('button--selected')
        }
    })
})

document.querySelector('.ui-project').addEventListener('click', function () {
    project.forEach(function (element) {
        if (!element.classList.contains('ui-project')) {
            element.style.opacity = "0"
            setTimeout(function () {
                element.style.display = "none"
            }, 200)
        }
        if (element.classList.contains('ui-project')) {
            element.style.opacity = "0"
            setTimeout(function () {
                element.style.display = "block"
            }, 0)
            setTimeout(function () {
                element.style.opacity = "1"
            }, 200)
        }
    })
    button.forEach(function (element) {
        if (element.classList.contains('button--selected')) {
            element.classList.remove('button--selected')
            uiProject.classList.add('button--selected')
        }
    })
})

document.querySelector('.fullstack').addEventListener('click', function () {
    project.forEach(function (element) {
        if (!element.classList.contains('fullstack')) {
            setTimeout(function () {
                element.style.opacity = "0"
            }, 200)
            setTimeout(function () {
                element.style.display = "none"
            }, 0)
        }
        if (element.classList.contains('fullstack')) {
            element.style.opacity = "0"
            setTimeout(function () {
                element.style.display = "block"
            }, 0)
            setTimeout(function () {
                element.style.opacity = "1"
            }, 200)
        }
    })
    button.forEach(function (element) {
        if (element.classList.contains('button--selected')) {
            element.classList.remove('button--selected')
            fullStack.classList.add('button--selected')
        }
    })
})

