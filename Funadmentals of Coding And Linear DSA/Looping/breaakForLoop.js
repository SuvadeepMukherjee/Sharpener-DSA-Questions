function print_series(n, m) {
  for (let i = 1; i <= n; i++) {
    if (i === m) break;
    console.log(i);
  }
}
print_series(10, 4);
