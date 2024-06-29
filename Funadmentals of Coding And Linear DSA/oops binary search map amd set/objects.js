class Employee {
  constructor(name, yearOfJoining, address) {
    this.name = name;
    this.yearOfJoining = yearOfJoining;
    this.address = address;
  }
  print_details() {
    console.log(`${this.name} ${this.yearOfJoining} ${this.address}`);
  }
}

const robert = new Employee("Robert", 1994, "64C-WallsStreet");
robert.print_details();
