// Start COUNT NUMBER
let nums = document.querySelectorAll(".stats span");
let sectionOffsetTop = document.querySelector(".more-info");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= sectionOffsetTop.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.count;
  let count = setInterval(() => {
    el.textContent++;
    // console.log(el.textContent);
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 50 / goal);
}
/* End COUNT NUMBER */
