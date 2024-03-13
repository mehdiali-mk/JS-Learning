const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", () => {
  eyeBall();
});

function eyeBall() {
  const eyesEl = document.querySelectorAll(".eye");
  eyesEl.forEach((eyeEl) => {
    let x = eyeEl.getBoundingClientRect().left + eyeEl.clientWidth / 2;
    let y = eyeEl.getBoundingClientRect().top + eyeEl.clientHeight / 2;
    console.log(x, y);
    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rotate = radian * (180 / Math.PI) * -1 + 270;
    console.log(radian, rotate);
    eyeEl.style.transform = `rotate(${rotate}deg)`;
  });
}
