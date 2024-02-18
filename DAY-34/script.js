const counterEl = document.querySelector(".countdown");

let time = 10;
let dealTime = time * 60;

const startCountdown = () => {
  let dealTimer = setInterval(() => {
    if (dealTime <= 0) {
      clearInterval(dealTime);
      counterEl.textContent = "Deal has been ended!";
    } else {
      dealTime--;
      const hours = Math.floor(dealTime / 3600) % 24;
      const minutes = Math.floor(dealTime / 60) % 60;
      const seconds = Math.floor(dealTime % 60);

      counterEl.textContent = `${formatCount(hours)}  :  ${formatCount(
        minutes
      )}  :  ${formatCount(seconds)}`;
    }
  }, 1000);
};

function formatCount(t) {
  return t < 10 ? `0${t}` : t;
}

startCountdown();
