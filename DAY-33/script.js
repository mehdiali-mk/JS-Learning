const countTo = "1 Jan 2025";

const c = setInterval(() => {
  const endDate = new Date(countTo);
  const currentDate = new Date();
  const totalSeconds = (endDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  const countDownDays = document.querySelector(".days");
  const countDownTimes = document.querySelector(".times");

  countDownDays.innerHTML = `${setFormat(days)} Days`;
  countDownTimes.innerHTML = `${setFormat(hours)} : ${setFormat(
    minutes
  )} : ${setFormat(seconds)}`;

  if (totalSeconds < 0) {
    clearInterval(c);
    countDownDays.textContent = "Happy New Year.";
  }
}, 1000);

const setFormat = (t) => {
  return t < 10 ? `0${t}` : t;
};
