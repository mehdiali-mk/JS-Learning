const btnEl = document.querySelector(".navbar-btn");
const navbarWrapperEl = document.querySelector(".navbar-wrapper");

btnEl.addEventListener("click", () => {
  navbarWrapperEl.classList.toggle("change");
});
