const imageContainerEl = document.querySelector(".img-container");
const nextBtnEl = document.querySelector("#next");
const prevBtnEl = document.querySelector("#prev");

x = 0;

nextBtnEl.addEventListener("click", () => {
  x = x - 45;
  rotateGallery();
});

prevBtnEl.addEventListener("click", () => {
  x = x + 45;
  rotateGallery();
});

const rotateGallery = () => {
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
};
