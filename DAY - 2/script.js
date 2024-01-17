"use strict";

// This is single line comment.
/* This is
a multiline
comment!!
*/

let a = 5,
  b = 4;

console.log("a = ", a, ", b = ", b);
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b);
console.log("++a = ", ++a);
console.log("--b = ", --b);

// Assignment Operators.

let c = 6,
  d = 4;

console.log("\n\nc = ", c, ", d = ", d);
console.log("c += 4 = ", (c += 4)); // c = c + 4 = 6 + 4 = 10.
console.log("d -= 2 = ", (d -= 2)); // d = d - 2 = 4 - 2 = 2.
console.log("c *= 2 = ", (c *= 2)); // c = c * 2 = 10 * 2 = 20
console.log("c /= 2 = ", (c /= 2)); // c = c / 2 = 20 / 2 = 10.
console.log("c %= d = ", (c %= d)); // c = c % d = 10 % 2 = 0.
console.log("d **= 2 = ", (d **= 2)); // d = d ** 2 = 2 ** 2 = 4.

// Comparison Operators.

a = 6;
b = 4;

console.log("\n\na = ", a, ", b = ", b);
console.log("a == b = ", a == b);
console.log("a != b = ", a != b);
console.log("a > b = ", a > b);
console.log("a >= b = ", a >= b);
console.log("a < b = ", a < b);
console.log("a <= b = ", a <= b);

// Strict === operator.
a = 5;
b = "5";

console.log("\n\na = ", a, ", b = ", b);
console.log("a == b", a == b);
console.log("a != b", a != b);
console.log("a === b", a === b);
console.log("a !== b", a !== b);
