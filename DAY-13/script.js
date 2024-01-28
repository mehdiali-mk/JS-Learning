const buttonEl = document.querySelector(".button");
const backgroundEl = document.querySelector(".background");
const imageEl = document.querySelector(".mk-logo");

let currentMode = "light";

const changeDarkMode = function () {
  buttonEl.classList.add("dark-button");
  backgroundEl.classList.add("dark-background");
  imageEl.setAttribute("src", "Mehdiali-Logo1.png");
  currentMode = "dark";
};
const changeLightMode = function () {
  buttonEl.classList.remove("dark-button");
  backgroundEl.classList.remove("dark-background");
  imageEl.setAttribute("src", "Mehdiali-Logo.png");
  currentMode = "light";
};

buttonEl.addEventListener("click", () => {
  if (currentMode === "light") {
    changeDarkMode();
  } else {
    changeLightMode();
  }
});
