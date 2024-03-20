const loginFormEl = document.querySelector(".login-form");
const signupFormEl = document.querySelector(".signup-form");
const loginBtnEl = document.querySelector(".login-div button");
const signupBtnEl = document.querySelector(".signup-div button");
const backLayerEl = document.querySelector(".back-layer");

signupBtnEl.addEventListener("click", () => {
  signupFormEl.classList.add("active");
  loginFormEl.classList.remove("active");
  backLayerEl.style.clipPath = "inset(0 0 0 50%)";
});

loginBtnEl.addEventListener("click", () => {
  loginFormEl.classList.add("active");
  signupBtnEl.classList.remove("active");
  backLayerEl.style.clipPath = "";
});
