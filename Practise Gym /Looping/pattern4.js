function pattern(n) {
  for (let i = 0; i < n; i++) {
    let spaces = " ".repeat(i);
    let stars = "*".repeat(n - i);
    console.log(spaces + stars);
  }
}
pattern(5);
