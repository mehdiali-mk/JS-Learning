const btn1El = document.querySelector("#btn1");
const btn2El = document.querySelector("#btn2");
const divEl = document.querySelector("#div1");

btn1El.onclick = (evt) => {
  console.log("Button 1 was clicked.");
  console.log(evt.type);
};

btn2El.ondblclick = (evt) => {
  console.log("Button 2 was clicked.");
  console.log(evt.type);
};

divEl.onmouseover = (evt) => {
  console.log("Mouse hover on div.");
  console.log(evt.type);
};

btn1El.addEventListener("click", (evt) => {
  console.log("Button 1 was clicked. by event listener - Handler - 1");
  console.log(evt.type);
});
btn1El.addEventListener("click", (evt) => {
  console.log("Button 1 was clicked. by event listener - Handler - 2");
  console.log(evt.type);
});
const handler3 = (evt) => {
  console.log("Button 1 was clicked. by event listener - Handler - 3");
  console.log(evt.type);
};

btn1El.addEventListener("click", handler3);

btn1El.addEventListener("click", (evt) => {
  console.log("Button 1 was clicked. by event listener - Handler - 4");
  console.log(evt.type);
});

btn1El.removeEventListener("click", handler3);
