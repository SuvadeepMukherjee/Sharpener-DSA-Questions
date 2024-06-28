function print_pattern() {
  let k = 1;

  while (k <= 5) {
    let str1 = "";
    let l = 10;
    while (l <= 15 - k) {
      str1 += "*";
      l++;
    }
    console.log(str1);

    k++;
  }

  let i = 1;
  while (i <= 5) {
    let str = "";
    let j = 10;
    while (j <= 9 + i) {
      str += "*";
      j++;
    }
    console.log(str);
    i++;
  }
}
print_pattern();
