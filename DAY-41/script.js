const progressBarEl = document.querySelector("#progress-bar");
const nextBtnEl = document.querySelector("#next-btn");
const previousBtnEl = document.querySelector("#previous-btn");
const circlesEl = document.querySelectorAll(".progress-circle");

let activeCircle = 1;

nextBtnEl.addEventListener("click", () => {
  activeCircle++;
  if (activeCircle > circlesEl.length) {
    activeCircle = circlesEl.length;
  }
  changeProgress();
});

previousBtnEl.addEventListener("click", () => {
  activeCircle--;
  if (activeCircle < 1) {
    activeCircle = 1;
  }

  changeProgress();
});

function changeProgress() {
  circlesEl.forEach((circle, index) => {
    if (index < activeCircle) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const activeCirclesEl = document.querySelectorAll("active");
  progressBarEl.style.width =
    ((activeCircle - 1) / (circlesEl.length - 1)) * 100 + "%";

  if (activeCircle === 1) {
    previousBtnEl.disabled = true;
    previousBtnEl.classList.add("disable");
  } else if (activeCircle === circlesEl.length) {
    nextBtnEl.disabled = true;
    nextBtnEl.classList.add("disable");
  } else {
    previousBtnEl.disabled = false;
    nextBtnEl.disabled = false;
    nextBtnEl.classList.remove("disable");
    previousBtnEl.classList.remove("disable");
  }
}
