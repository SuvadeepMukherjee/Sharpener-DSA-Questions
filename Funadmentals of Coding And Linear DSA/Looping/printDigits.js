function print_digits(n) {
  while (n > 0) {
    console.log(Math.floor(n % 10));
    n = Math.floor(n / 10);
  }
}
print_digits(153);
