const loaderTextEl = document.querySelector(".loader");
const backgroundImageEl = document.querySelector(".background-image");

let load = 0;
let int = setInterval(blurring, 30);

function blurring() {
  load++;
  loaderTextEl.textContent = load;
  loaderTextEl.style.opacity = scale(load, 0, 100, 1, 0);
  backgroundImageEl.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
  console.log(scale(load, 0, 100, 30, 0) / 10);
}

const scale = (num, inMin, inMax, outMin, outMax) => {
  return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};
