const quoteEl = document.querySelector(".quote");
const authorEl = document.querySelector(".author");
const buttonEl = document.querySelector(".button");

buttonEl.addEventListener("click", () => {
  const quoteNumber = Math.floor(Math.random() * arrayOfQuotes.length);
  quoteEl.textContent = `"${arrayOfQuotes[quoteNumber].quote}"`;
  authorEl.textContent = `- ${arrayOfQuotes[quoteNumber].author} -`;
});

const arrayOfQuotes = [
  {
    author: "Albert Einstein",
    quote:
      "We cannot solve problems with the kind of thinking we employed when we came up with them",
  },
  {
    author: " Mark Twain",
    quote:
      "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.",
  },
  {
    author: "Eleanor",
    quote:
      "When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.",
  },
  {
    author: "Norman Vincent Peale",
    quote: "When you change your thoughts, remember to also change your world.",
  },
  {
    author: "Walter",
    quote:
      "It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest. ",
  },
  {
    author: "Diane McLaren",
    quote:
      "Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.",
  },
  {
    author: "Dale Carnegie",
    quote:
      "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
  },
  {
    author: "Washington Irving",
    quote:
      "Little minds are tamed and subdued by misfortune; but great minds rise above it.",
  },
  {
    author: "Latin Proverb",
    quote: "If the wind will not serve, take to the oars.",
  },
  {
    author: "Neil Armstrong",
    quote:
      "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
  },
  {
    author: "Coco Chanel",
    quote:
      "Success is most often achieved by those who don't know that failure is inevitable",
  },
  {
    author: "Ralph Nader",
    quote:
      "The function of leadership is to produce more leaders, not more followers.",
  },
  {
    author: "T. Roosevelt",
    quote: "Believe you can and you're halfway there.",
  },
  {
    author: "Zat Rana",
    quote:
      "The purpose of life isn’t to do or to accomplish. It’s to merely experience.",
  },
];
