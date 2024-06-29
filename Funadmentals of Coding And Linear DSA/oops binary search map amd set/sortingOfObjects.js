class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
}

const babu = new Employee("Babu_Rao", 150);
const raju = new Employee("Raju", 160);
const shyam = new Employee("Shyam", 140);
const pappu = new Employee("pappu", 200);

let arr = [babu, raju, shyam, pappu];

const compareFn = (a, b) => a.salary - b.salary;

arr = arr.sort(compareFn);
console.log(arr);
