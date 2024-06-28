function max(a, b, c) {
  if (a > b && a > c) {
    console.log(a + " is greater");
  } else if (b > c && b > a) {
    console.log(b + " is greater ");
  } else {
    console.log(c + " is greater");
  }
}

max(10, 20, 30);
