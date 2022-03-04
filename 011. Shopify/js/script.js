const menu = document.querySelector(".menu");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const menuDropDown = document.querySelectorAll(".menu-dropdown");
const emailInput = document.querySelector("#email-box");
const main = document.querySelector("main");

menuIcon.addEventListener("click", () => {
  menu.classList.add("show-menu");
  document.body.style.overflow = "hidden";
  document.body.style.background = "black";
  main.style.opacity = 0.4;
});

closeIcon.addEventListener("click", () => {
  menu.classList.remove("show-menu");
  document.body.style.overflow = "auto";
  document.body.style.background = "white";
  main.style.opacity = 1;
});

menuDropDown.forEach((el) =>
  el.addEventListener("click", () => {
    el.children[1].classList.toggle("show-dropdown");
  })
);

window.addEventListener("resize", () => {
  const showcaseImage = document.querySelector(".showcase-img");

  if (window.innerWidth > 900) {
    showcaseImage.src =
      "https://cdn.shopify.com/shopifycloud/brochure/assets/home/hero/en/hero-product@tablet-dcee1276b5e044d7e201cd88922474aa3676c3133222b6946a578f01f5367589.png";
  } else {
    showcaseImage.src =
      "https://cdn.shopify.com/shopifycloud/brochure/assets/home/hero/en/hero-product@mobile-9be121f4c803c8501e1bade84a89e773f90fe67ac6b09c275ea19ce7e3d68e1c.png";
  }
});

window.addEventListener("scroll", () => {
  const primary = document.querySelector(".primary");

  if (window.pageYOffset > 620) {
    primary.style.backgroundColor = "white";
    primary.style.boxShadow = "0 0 1rem rgba(0,0,0,0.1)";
  } else {
    primary.style.backgroundColor = "#fbf7ed";
    primary.style.boxShadow = "none";
  }
});

emailInput.addEventListener("input", (e) => {
  if (e.target.value.length > 0) {
    e.target.previousElementSibling.classList.add("label-show");
    e.target.classList.add("on-input");
  } else {
    e.target.previousElementSibling.classList.remove("label-show");
    e.target.classList.remove("on-input");
  }
});
