class Employee {
  getInfo(salary, working_hours) {
    this.salary = salary;
    this.working_hours = working_hours;
  }
  addSal() {
    if (this.salary < 500) this.salary += 10;
  }
  addWork() {
    if (this.working_hours > 6) this.salary += 5;
  }
  //   get() {
  //     return `${this.salary} ${this.working_hours}`;
  //   }
}

// const raj = new Employee();
// raj.getInfo(5000, 8);
// raj.addWork();
// console.log(raj.get());
