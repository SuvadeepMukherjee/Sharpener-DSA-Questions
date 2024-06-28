function print_pattern() {
  for (let i = 1; i <= 5; i++) {
    let str = "";
    for (let j = 10; j <= 15 - i; j++) {
      str += "*";
    }
    console.log(str);
  }
}
print_pattern();
