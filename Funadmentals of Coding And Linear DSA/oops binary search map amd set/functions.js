class Student {
  constructor(name = "john", roll_no = 2) {
    this.name = name;
    this.roll_no = roll_no;
  }
  display() {
    console.log(`Name is ${this.name} and roll number is ${this.roll_no}`);
  }
}

const john = new Student();
john.display();
