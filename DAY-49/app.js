const inputField = document.getElementById("input-field");
const outputField = document.getElementById("output-field");
const buttons = document.querySelectorAll("button");

inputField.addEventListener(
  "keyup",
  () => (outputField.innerHTML = inputField.value)
);

let isBold, isItalic, isUnderline;

isBold = isItalic = isUnderline = false;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("uppercase")) {
      outputField.innerHTML = outputField.innerHTML.toUpperCase();
    } else if (btn.classList.contains("lowercase")) {
      outputField.innerHTML = outputField.innerHTML.toLocaleLowerCase();
    } else if (btn.classList.contains("capitalize")) {
      outputField.innerHTML =
        outputField.innerHTML.charAt(0).toUpperCase() +
        outputField.innerHTML.slice(1).toLowerCase();
    } else if (btn.classList.contains("bold")) {
      if (isBold) {
        outputField.style.fontWeight = "400";
        isBold = false;
      } else {
        outputField.style.fontWeight = "900";
        isBold = true;
      }
    } else if (btn.classList.contains("italic")) {
      if (isItalic) {
        outputField.style.fontStyle = "normal";
        isItalic = false;
      } else {
        outputField.style.fontStyle = "italic";
        isItalic = true;
      }
    } else if (btn.classList.contains("underline")) {
      if (isUnderline) {
        outputField.style.textDecoration = "none";
        isUnderline = false;
      } else {
        outputField.style.textDecoration = "underline";
        isUnderline = true;
      }
    }
  });
});
