const employee = {
  empName: "Mehdiali",
  empId: 440429,
  empDesignation: "Manager",
  empSalary: 50000,

  calculateTax() {
    console.log("Tax calculated 10%,");
  },
};

const Mehdiali = {
  firstName: "Mehdiali",
  lastName: "Kadiwala",
  salary: 70000,
  calculateTax() {
    console.log("Tax calculate 20%");
  },
};

Mehdiali.__proto__ = employee;

console.log(Mehdiali.calculateTax());
