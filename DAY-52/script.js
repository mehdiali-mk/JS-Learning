const position = document.documentElement;

position.addEventListener("mousemove", (event) => {
  position.style.setProperty("--1", event.clientX + "px");
  position.style.setProperty("--2", event.clientY + "px");
});
