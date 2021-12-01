const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector(".nav__menu-btn");



menuBtn.addEventListener("click", function (e) {
  console.log("show");
  menu.classList.toggle("menu-show");
})