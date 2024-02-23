const arrowEl = document.querySelector(".arrow");

window.addEventListener("scroll", () => {
  let position = window.scrollY;
  if (position <= 5) {
    arrowEl.classList.add("fade-in");
    arrowEl.classList.remove("fade-out");
  }
  if (position > 5) {
    arrowEl.classList.remove("fade-in");
    arrowEl.classList.add("fade-out");
  }
});
