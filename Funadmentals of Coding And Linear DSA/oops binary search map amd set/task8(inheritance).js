class Member {
  constructor(name, age, ph, add, sal) {
    this.name = name;
    this.age = age;
    this.ph = ph;
    this.add = add;
    this.sal = sal;
  }
  printSalary() {
    console.log(this.sal);
  }
}
class Employee extends Manager {
  constructor(name, age, ph, add, sal, specialization) {
    super(name, age, add, sal);
    this.specialization = specialization;
  }
  print_details() {
    console.log(this.name);
    console.log(this.specialization);
    super.printSalary();
  }
}

class Manager extends Member {
  constructor(name, age, ph, address, salary, specialization, department) {
    super(name, age, ph, address, salary);
    this.specialization = specialization;
    this.department = department;
  }
  print_details() {
    console.log(this.name);
    console.log(this.specialization);
    super.printSalary();
  }
}
