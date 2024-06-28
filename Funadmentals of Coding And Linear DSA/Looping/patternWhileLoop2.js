function print_pattern() {
  let i = 1;
  while (i <= 5) {
    let str = "";
    let j = 10;
    while (j <= 15 - i) {
      str += "*";
      j++;
    }
    console.log(str);
    i++;
  }
}
print_pattern();
