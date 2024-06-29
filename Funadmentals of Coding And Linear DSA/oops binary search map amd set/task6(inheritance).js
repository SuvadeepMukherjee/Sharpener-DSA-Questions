class Shape {
  printShape() {
    console.log("This is shape");
  }
}

class Rectangle extends Shape {
  print() {
    console.log("This is rectangle");
  }
}

class Circle extends Shape {
  print() {
    console.log("This is circle");
  }
}

class Square extends Rectangle {
  printSquare() {
    console.log("Square is rectangle");
  }
}
