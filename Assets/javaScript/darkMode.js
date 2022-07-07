// Start DARK MODE

let darkMode = localStorage.getItem("darkMode");
let darkModeToggle = document.querySelector(".theam");
let icon = document.querySelector(".theam i");
const enableDarkMode = () => {
  document.body.classList.add("dark");
  localStorage.setItem("darkMode", "dark");
  icon.className = "bx bx-sun";
};

const disableDarkMode = () => {
  document.body.classList.remove("dark");
  localStorage.setItem("darkMode", null);
  icon.className = "bx bx-moon";
};

if (darkMode === "dark") {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  console.log("YES");
  darkMode = localStorage.getItem("darkMode");

  if (darkMode !== "dark") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

/* End DARK MODE */
