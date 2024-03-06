const navlinksEl = document.querySelectorAll(".nav-link");
const contentsEl = document.querySelectorAll(".content");

navlinksEl.forEach((link) => {
  link.addEventListener("click", () => {
    navlinksEl.forEach((link) => {
      link.parentElement.classList.remove("nav-active");
    });
    link.parentElement.classList.add("nav-active");
    contentsEl.forEach((content) => {
      if (content.id === link.id) {
        content.classList.remove("hide");
      } else {
        content.classList.add("hide");
      }
    });
  });
});
