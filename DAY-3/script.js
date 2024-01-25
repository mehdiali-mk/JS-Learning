"use strict";

// Logical Operators.
let a = 5,
  b = 4;

console.log("a = ", a, ", b = ", b);
console.log("a > b && a === 5 = ", a > b && a === 5);
console.log("a === 5 || a === b = ", a === 5 || a === b);
console.log("!(a === b) = ", !(a === b));

// If Statement

let car = "red";

if (car === "red") {
  console.log("Buy the car.");
}

// If-Else statement.

let mode = "dark";
let color;
if (mode === "dark") {
  color = "black";
  console.log(color);
} else {
  color = "white";
  console.log(color);
}

// Else-If Statement.

let age = 18;
if (age < 18) {
  console.log("Junior");
} else if (age > 60) {
  console.log("Senior");
} else {
  console.log("middle");
}

// Practice Question (1).

// let number = prompt("Enter the number:");

// if (number % 5 === 0) {
//   console.log(number, " is multiple of 5");
// } else {
//   console.log(number, " is not a multiple of 5");
// }

// Practice Question (2).

let marks = 75;
let grade;

if (marks >= 80 && marks <= 100) {
  grade = "A";
} else if (marks >= 70 && marks <= 89) {
  grade = "B";
} else if (marks >= 60 && marks <= 69) {
  grade = "C";
} else if (marks >= 50 && marks <= 59) {
  grade = "D";
} else if (marks >= 0 && marks <= 49) {
  grade = "F";
} else {
  grade = "~~ERROR~~";
}

console.log(grade);
