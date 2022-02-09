let btnBurger = document.querySelector("#btnBurger");
let menu = document.querySelector("#menu");
let bgFade = document.querySelector(".bg-fade");
let body = document.querySelector("body");

btnBurger.addEventListener("click", function () {
  if (btnBurger.classList.contains("open")) {
    btnBurger.classList.remove("open");
    menu.classList.remove("visible");
    bgFade.classList.remove("overflow");
    body.classList.remove("overflow");
  } else {
    btnBurger.classList.add("open");
    menu.classList.add("visible");
    bgFade.classList.add("overflow");
    body.classList.add("overflow");
  }
});
