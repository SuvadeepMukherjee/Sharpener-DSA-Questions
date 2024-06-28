function print_pattern() {
  for (let i = 1; i <= 5; i++) {
    let str = "";
    for (let j = 10; j <= 9 + i; j++) {
      str += "*";
    }
    for (let k = 10; k <= 14 - i; k++) {
      str += " ";
    }
    for (let l = 10; l <= 9 + i; l++) {
      str += "*";
    }
    console.log(str);
  }
}
print_pattern();
