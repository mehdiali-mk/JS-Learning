const navbarDivEl = document.querySelector(".navbar-div");
const navbarEl = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  navbarDivEl.classList.toggle("sticky", window.scrollY > 0);

  navbarEl.classList.toggle("unsticky", window.scrollY == 0);
});
