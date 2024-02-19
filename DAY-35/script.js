const buttonEl = document.querySelector(".calculate-btn");
const resultTipEl = document.querySelector(".result-tip");
const amountTipEl = document.querySelector(".result-amount");
const billEl = document.querySelector(".bill-amount-input");
const rateEl = document.querySelector(".rate-service-select");
const errorEl = document.querySelector(".error");

const hideError = () => {
  setTimeout(() => {
    errorEl.style.display = "none";
  }, 3000);
};

const calculateTip = () => {
  if (billEl.value == "" || rateEl.value == "") {
    errorEl.style.display = "block";
    hideError();
  } else {
    let tipAmount = billEl.value * rateEl.value;
    tipAmount = Math.ceil(tipAmount);
    resultTipEl.textContent = `Tip: $ ${tipAmount}`;

    let totalBill = Number(billEl.value) + tipAmount;
    totalBill = Math.ceil(totalBill);
    amountTipEl.textContent = `Total Bill: $ ${totalBill}`;
  }
};

buttonEl.addEventListener("click", () => {
  calculateTip();
});
