const menu = document.querySelector(".container__hamburger");
const navBar = document.querySelector(".container__navbar");

const CHANGE_CL = "change";

function showNavlist() {
  navBar.classList.toggle(CHANGE_CL);
}

menu.addEventListener("click", showNavlist);
