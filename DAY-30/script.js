const formInputEl = document.querySelector(".form-input");
const buttonEl = document.querySelector(".button-generate");

const password = "!@#$%^&**()_+{}|1234567890ABCDEFG";
let newPassword = "Password";
const generatePassword = () => {
  newPassword = Math.random().toString(22).substring(2, 14).toUpperCase();
  replaceCharacter();
};

buttonEl.addEventListener("click", () => {
  generatePassword();
  formInputEl.value = newPassword;
});

const replaceCharacter = () => {
  newPassword = newPassword.replaceAll("0", "@");
  newPassword = newPassword.replaceAll("B", "?");
  newPassword = newPassword.replaceAll("A", "!");
  newPassword = newPassword.replaceAll("C", "%");
  newPassword = newPassword.replaceAll("G", "$");
  newPassword = newPassword.replaceAll("H", "{");
  newPassword = newPassword.replaceAll("I", "}");
  newPassword = newPassword.replaceAll("4", "=");
  newPassword = newPassword.replaceAll("8", "*");
  newPassword = newPassword.replaceAll("6", "-");
  newPassword = newPassword.replaceAll("3", "#");
};
