const signupBtnEl = document.querySelector("#signup-btn");
const closeBtnEl = document.querySelector(".cross-btn");
const submitBtnEl = document.querySelector("#submit-btn");
const formBackgroundEl = document.querySelector(".form-container");
const backgroundEl = document.querySelector(".background-img");

signupBtnEl.addEventListener("click", () => {
  formBackgroundEl.classList.remove("hide");
  backgroundEl.classList.add("blur");
});

closeBtnEl.addEventListener("click", () => {
  formBackgroundEl.classList.add("hide");

  backgroundEl.classList.remove("blur");
});
