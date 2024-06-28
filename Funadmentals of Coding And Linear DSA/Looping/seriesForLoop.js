function print_series(n) {
  for (let i = 1; i * i * i <= n; i++) {
    console.log(i * i * i);
  }
}
print_series(125);
