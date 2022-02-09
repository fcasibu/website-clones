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

const teamwork = document.querySelector('.teamwork-img')
window.addEventListener('resize', function () {
    if (window.innerWidth <= 900) {
        teamwork.src = "https://cfw.paymoapp.com/wp-content/themes/paymo/public/img/home/handshake-mobile_1.svg.gzip"
    } else {
        teamwork.src = "https://cfw.paymoapp.com/wp-content/themes/paymo/public/img/home/handshake_1.svg.gzip"
    }
})

let featuresNav = document.querySelector('.features-nav')
let items = document.querySelectorAll('.features-nav__item')
let features = document.querySelectorAll('.feature')

let itemIndex = 1;

function currentItem(n) {
    changeItem(itemIndex = n)
    if (n === 1) {
        changeImage(n)
        changeColor(n)
    } else if (n === 2) {
        changeImage(n + 3)
        changeColor(n + 3)
    } else if (n === 3) {
        changeColor(n + 6)
    } else if (n === 4) {
        changeColor(n + 9)
    } else if (n === 5) {
        changeColor(n + 12)
    } else if (n === 6) {
        changeColor(n + 15)
    }
}

function changeItem() {
    if (window.innerWidth > 1024) {
        for (let i = 0; i < features.length; i++) {
            features[i].style.display = "none"
        }
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove('nav-item-selected')
        }
    }
    features[itemIndex - 1].style.display = "flex"
    items[itemIndex - 1].classList.add('nav-item-selected')
}

changeItem(itemIndex)

window.addEventListener('resize', () => {
    if (window.innerWidth < 1024) {
        features.forEach(function (element) {
            element.style.display = "flex"
        })
        changeImage(1)
    } else {
        changeItem()
        changeImage(featureIndex)
    }
})

let featureImageTask = document.querySelector('.task')
let featureImageTime = document.querySelector('.time-tracking')
let h4 = document.querySelectorAll('h4')

let featureIndex = 1

function currentFeature(n) {
    if (window.innerWidth > 1024) {
        changeImage(featureIndex = n)
        changeColor(featureIndex = n)
    }
}

function changeColor(n) {
    for (let i = 0; i < h4.length; i++) {
        h4[i].classList.remove('feature-selected')
    }
    h4[n - 1].classList.add('feature-selected')
}

function changeImage(n) {
    if (n === 1) {
        featureImageTask.src = "https://cfw.paymoapp.com/wp-content/themes/paymo/public/img/home/features/mobile/task-management.png"
    } else if (n === 2) {
        featureImageTask.src = "https://cfw.paymoapp.com/wp-content/themes/paymo/public/img/home/features/Task-Management/advanced-task-management-0.png"
    } else if (n === 3) {
        featureImageTask.src = "https://cfw.paymoapp.com/wp-content/themes/paymo/public/img/home/features/Task-Management/schedule-and-monitor-activities-0.png"
    } else if (n === 4) {
        featureImageTask.src = "https://cfw.paymoapp.com/wp-content/themes/paymo/public/img/home/features/Task-Management/real-time-task-comments-0.png"
    } else if (n === 5) {
        featureImageTime.src = "https://cfw.paymoapp.com/wp-content/themes/paymo/public/img/home/features/Time-Tracking/desktop-and-mobile-apps-0.png"
    } else if (n === 6) {
        featureImageTime.src = "https://cfw.paymoapp.com/wp-content/themes/paymo/public/img/home/features/Time-Tracking/multiple-timesheet-views-0.png"
    } else if (n === 7) {
        featureImageTime.src = "https://cfw.paymoapp.com/wp-content/themes/paymo/public/img/home/features/Time-Tracking/automatic-time-tracking-0.png"
    } else if (n === 8) {
        featureImageTime.src = "https://cfw.paymoapp.com/wp-content/themes/paymo/public/img/home/features/Time-Tracking/integrated-online-timer-01.png"
    }
    featureImageTask.style.width = "100%"
    featureImageTime.style.width = "100%"
}