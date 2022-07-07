// Start OPEN MENU
// let menuIcon = document.querySelector(".menuOpen");
// let menuClose = document.querySelector(".menuClose");
// let allLinks = document.querySelector(".allLinks");
// let links = document.querySelectorAll(".allLinks ul li a");

// menuIcon.onclick = function () {
//   menuIcon.style.display = "none";
//   menuClose.style.display = "block";
//   allLinks.style.display = "block";
// };

// menuClose.onclick = function () {
//   menuIcon.style.display = "block";
//   menuClose.style.display = "none";
//   allLinks.style.display = "none";
// };
/* End OPEN MENU */

// Show Menu
const navMenu = document.getElementById("allLinks"),
  navToggle = document.getElementById("open"),
  navClose = document.getElementById("close");

// Show Menu Links
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("showLink");
    navMenu.style.display = "block";
    navClose.style.display = "block";
    navToggle.style.display = "none";
  });
}

// Hidden Menu Links
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("showLink");
    navMenu.style.display = "none";
    navClose.style.display = "none";
    navToggle.style.display = "block";
  });
}

// if (window.innerWidth <= 991) {
//   if ((navToggle.style.display = "block")) {
//     navToggle.style.display = "none";
//   } else {
//     navClose.style.display = "none";
//   }
// }
