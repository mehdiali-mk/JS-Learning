const clockEl = document.querySelector(".clock");

window.addEventListener("load", timer());

function timer() {
  let day = new Date();
  let hour = day.getHours();
  let minutes = day.getMinutes();
  let seconds = day.getSeconds();

  let timerText = `${format(hour)} : ${format(minutes)} : ${format(seconds)}`;
  clockEl.innerHTML = timerText;
}

function format(para) {
  return para <= 9 ? `0${para}` : para;
}

setInterval(timer, 1000);
