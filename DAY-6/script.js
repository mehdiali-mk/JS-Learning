// Function without parameter.
function myFunction() {
  console.log("I am a good student.");
  console.log("I am learning JS.");
}

myFunction(); // calling function.

// Function with parameter.

function myFunction1(msg, n) {
  for (let i = 1; i <= n; i++) {
    console.log(msg);
  }
}

myFunction1("I love JS", 5);

// Function to add two numbers.
function addNumbers(num1, num2) {
  console.log(num1 + num2);
}

addNumbers(12, 13);

// Function which return something.
function multiplyTwoNumber(num1, num2) {
  let mult = num1 * num2;

  return mult;
  // The following will not execute because they are after return statement.
  mult = 0;
  console.log(mult);
}
let myMult = multiplyTwoNumber(5, 2);
console.log(myMult);

// Arrow Function. Introduced in modern javascript.

const arrowAdd = (n1, n2) => {
  return n1 + n2;
};

console.log(arrowAdd(5, 4));

// Qs. Create a function using the “function” keyword that takes a String as an argument &
// returns the number of vowels in the string.

function findVowels(string) {
  let vowelsInString = 0;
  string = string.toLowerCase();
  for (let char of string) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      vowelsInString++;
    }
  }

  return vowelsInString;
}

console.log("The number of vowels = " + findVowels("Mehdiali"));

// Arrow function to perform the above task.
const arrowFindVowels = (string) => {
  let vowelsInString = 0;
  string = string.toLowerCase();
  for (let char of string) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      vowelsInString++;
    }
  }

  return vowelsInString;
};
console.log("The number of vowels = " + arrowFindVowels("KADIWALA"));
