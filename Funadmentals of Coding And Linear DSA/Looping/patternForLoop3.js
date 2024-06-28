function print_pattern() {
  for (let i = 1; i <= 5; i++) {
    let str1 = "";
    for (let j = 10; j <= 15 - i; j++) {
      str1 += "*";
    }
    console.log(str1);
  }
  for (let k = 1; k <= 5; k++) {
    let str2 = "";
    for (let l = 10; l <= 9 + k; l++) {
      str2 += "*";
    }
    console.log(str2);
  }
}
print_pattern();
