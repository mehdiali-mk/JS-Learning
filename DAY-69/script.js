const backgroundEl = document.querySelector(".background");
const themeChangerEl = document.querySelector(".theme-changer");
const followButtensEl = document.querySelectorAll(".follow-button");

themeChangerEl.addEventListener("click", toggleTheme);

function toggleTheme() {
  if (backgroundEl.classList.contains("light-theme")) {
    backgroundEl.classList.remove("light-theme");
    backgroundEl.classList.add("dark-theme");
    themeChangerEl.textContent = "Light";
  } else {
    backgroundEl.classList.remove("dark-theme");
    backgroundEl.classList.add("light-theme");
    themeChangerEl.textContent = "Dark";
  }
}

followButtensEl.forEach((button) => {
  button.addEventListener("click", (e) => checkFollow(e.target));
});

function checkFollow(button) {
  button.classList.toggle("followed");
  if (button.textContent === "Follow") {
    button.textContent = "Unfollow";
  } else {
    button.textContent = "Follow";
  }
}
