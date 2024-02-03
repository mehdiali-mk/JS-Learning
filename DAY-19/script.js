"use strict";

class parent {
  sayHello() {
    console.log("Hello There");
  }
}

class child extends parent {} // This inherits all the properties and the functions of the class.

const child1 = new child();

console.log(child1.sayHello());

class person {
  constructor(name) {
    this.species = "Human Being";
    this.name = name;
  }

  eat() {
    console.log("Person can eat!");
  }

  sleep() {
    console.log("Person can sleep!");
  }

  walk() {
    console.log("Person can walk!");
  }

  work() {
    console.log("Do nothing!");
  }
}

class engineer extends person {
  constructor(name) {
    super(name);
  }
  work() {
    console.log("Solve Problems.");
  }
}

const mehdialiEr = new engineer("Mehdiali");

console.log(mehdialiEr.eat()); // Eat function inherited from person class.

console.log(mehdialiEr.sleep()); // Sleep function inherited from person class.
console.log(mehdialiEr.work()); // Work function from engineer class. Because Method overloading.
console.log(mehdialiEr);
