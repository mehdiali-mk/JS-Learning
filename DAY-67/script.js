const btnEl = document.querySelector(".btn");
const backgroundEl = document.querySelector(".background");
const audioEl = document.querySelector("#audio");

btnEl.addEventListener("click", () => {
  backgroundEl.classList.toggle("on");
  audioEl.play();
});
