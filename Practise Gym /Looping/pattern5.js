function pattern(n) {
  for (let i = 0; i < n; i++) {
    let spaces = n - i - 1;
    let stars_in_row = 2 * i + 1;
    let row = "";

    if (i == n - 1) {
      row = "*".repeat(stars_in_row);
    } else {
      if (stars_in_row == 1) {
        row = "*";
      } else {
        row = "*" + " ".repeat(stars_in_row - 2) + "*";
      }
    }

    console.log(" ".repeat(spaces) + row);
  }
}
pattern(5);
