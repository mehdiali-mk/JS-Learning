const h1El = document.querySelector("h1");
const h2El = document.querySelector("h2");

console.log(h1El.getAttribute("class"));
console.log(h2El.getAttribute("class"));

h1El.setAttribute("class", "secondary-heading");
h2El.setAttribute("class", "primary-heading");

console.log(h1El.getAttribute("class"));
console.log(h2El.getAttribute("class"));

let h3El = document.createElement("h3");

h3El.innerText = h1El.innerText;

h1El.after(h3El);
h1El.remove();

/*
Qs. Create a new button element. Give it a text “click me”, background color of red & text color of white. Insert the button as the first element inside the body tag.
*/

const bodyEl = document.querySelector("body");
const btnEl = document.createElement("button");
btnEl.innerText = "click me";
btnEl.style.backgroundColor = "red";
btnEl.style.color = "white";
btnEl.style.padding = "1.2rem 2.4rem";
btnEl.style.fontSize = "2.4rem";
btnEl.style.cursor = "pointer";
btnEl.style.border = "5px solid black";

bodyEl.prepend(btnEl);
