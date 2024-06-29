class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }
  calculate_area() {
    return this.side1 * this.side2 * this.side3;
  }
  calculate_perimeter() {
    return this.side1 + this.side2 + this.side3;
  }
}

const isoceles = new Triangle(2, 2, 2);
console.log(isoceles.calculate_area());
console.log(isoceles.calculate_perimeter());
