const counterEl = document.querySelector(".counter");
const subBtnEl = document.querySelector(".btn-sub");
const resetBtnEl = document.querySelector(".btn-reset");
const addBtnEl = document.querySelector(".btn-add");

let counter = 0;

addBtnEl.addEventListener("click", () => {
  counter++;
  counterEl.innerHTML = counter;
});

subBtnEl.addEventListener("click", () => {
  counter--;
  counterEl.innerHTML = counter;
});

resetBtnEl.addEventListener("click", () => {
  counter = 0;
  counterEl.innerHTML = counter;
});

document.addEventListener("keyup", function (event) {
  if (event.keyCode == 37 || event.keyCode == 40) {
    counter--;
    counterEl.innerHTML = counter;
  } else if (event.keyCode == 38 || event.keyCode == 39) {
    counter++;
    counterEl.innerHTML = counter;
  } else if (event.keyCode == 32) {
    counter = 0;
    counterEl.innerHTML = counter;
  }
});
