function print_output(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 4 === 0) continue;
    if (i % 2 === 0) console.log(i);
  }
}

print_output(10);
