const imageEl = document.querySelectorAll(".img");
const wrapperEl = document.querySelector("#wrapper");
const imageWrapperEl = document.querySelector("#fullImg");
const closeEl = document.querySelector("span");

console.log(imageEl);

imageEl.forEach((img, index) => {
  img.addEventListener("click", () => {
    console.log("YES");
    openModal(`images/Img${index + 1}.jpg`);
  });
});

closeEl.addEventListener("click", () => (wrapperEl.style.display = "none"));

function openModal(pic) {
  console.log("YES");
  wrapperEl.style.display = "flex";
  imageWrapperEl.src = pic;
}
