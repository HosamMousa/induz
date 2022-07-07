// Start FILLH EADER
if (scrollBy >= 80) {
  console.log("YES");
}
function scrollHeader() {
  const header = document.querySelector("header");
  // console.log(this);
  if (this.scrollY >= 50) header.classList.add("fillHeader");
  else header.classList.remove("fillHeader");
}
window.addEventListener("scroll", scrollHeader);
/* End FILLH EADER */

// Start SHOW BOX SEARCH
let searchButton = document.querySelector(".bx-search-alt-2");
let boxSearch = document.querySelector(".boxSearch");
let closeBoxSearchButton = document.querySelector(".searchClose");

searchButton.onclick = function () {
  boxSearch.style.display = "block";
};

closeBoxSearchButton.onclick = function () {
  boxSearch.style.display = "none";
};

/* End SHOW BOX SEARCH */
if (window.innerWidth <= 600) {
  console.log("YES");
}

// Start PAGES LINKS
let pages = document.querySelector(".pages>a");
let pagesDiv = document.querySelector(".nested");
let allA = document.querySelectorAll(".allLi>li>a");

pages.onclick = function () {
  // let pagesLiNested = document.querySelectorAll(".nested>li>a");
  // pagesLiNested.forEach((l) => {
  //   l.onclick = function () {
  //     if (!l.classList.contains("active")) {
  //       allA.forEach((el) => {
  //         if (el.classList.contains("active")) {
  //           el.classList.remove("active");
  //         }
  //       });
  //       l.classList.add("active");
  //     } else {
  //       l.classList.remove("active");
  //     }
  //   };
  // });

  // // pages.classList.add("active");
  pagesDiv.classList.toggle("show");
};

/* Ebd PAGES LINKS */
