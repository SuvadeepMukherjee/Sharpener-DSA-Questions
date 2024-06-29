class Student {
  constructor(name = "john", roll_no = 2) {
    this.name = name;
    this.roll_no = roll_no;
  }
}

const endrit = new Student("Endrit", 1);
const john = new Student();
console.log(endrit, john);
