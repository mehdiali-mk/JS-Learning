"use strict";

// For Loop
let sum = 0;
let n = 100;

for (let i = 1; i <= n; i++) {
  sum = sum + i;
}

console.log(sum);

// While Loop
let i = 1;
while (i <= 100) {
  console.log("i = ", i);
  i++;
}

// Do-While Loop
let j = 1;
do {
  console.log("J = ", j);
  j++;
} while (j <= 5);

// For-Of Loop.
let str = "Mehdiali Kadiwala";
let strSize = 0;

for (let val of str) {
  console.log("Val = ", val);
  strSize++;
}

console.log("Size of str = ", strSize);

// For-In Loop.
const student = {
  name: "Mehdiali",
  enrollNo: 123456,
  division: "C",
  cgpa: 10,
  isPass: true,
  branch: "Computer",
};

for (let key in student) {
  console.log("key = ", key, " Value = ", student[key]);
}

// Practice 1 - Print Even numebers from 0 to 100.
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Practice 2 - Enter a number unitl correct number.
// let correctNumber = 25;
// let gussNumber;
// do {
//   gussNumber = prompt("Enter the number: ");
// } while (gussNumber != correctNumber);

// console.log("Conguratulation: You have entered correct number.");

// String

let string = "      Mehdiali Kadiwala    ";

let newStr = string.trim();

console.log(newStr);
console.log(newStr.length);
console.log(newStr[5]);
console.log(newStr.toUpperCase());
console.log(newStr.toLowerCase());
console.log(newStr.slice(2, 6));
console.log(newStr.slice(2));

let str1 = "Mehdiali";
let str2 = "MK";

let str3 = str1.concat(str2);
console.log(str3);
let str4 = "Kadiwala";
console.log(str3.replace("MK", str4));
let str5 = "Hellollo";
console.log(str5.replaceAll("llo", "mo"));

// Template Literals.

const pen = {
  brand: "Parker",
  price: 350,
  color: "Black",
  shape: "Rounded",
};

console.log(
  `The pen brand is ${pen.brand} of Rs. ${pen.price} with ${pen.color} color and ${pen.shape} shape.`
);
