class PARENT {
  print() {
    console.log("this is a parent class");
  }
}

class CHILD extends PARENT {
  print() {
    console.log("this is a child class");
    super.print();
  }
}
