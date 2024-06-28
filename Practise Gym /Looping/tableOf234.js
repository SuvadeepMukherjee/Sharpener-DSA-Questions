function printTables() {
  for (let i = 1; i <= 10; i++) {
    process.stdout.write(i * 2 + " ");
  }
  console.log();
  for (let i = 1; i <= 10; i++) {
    process.stdout.write(i * 3 + " ");
  }
  console.log();
  for (let i = 1; i <= 10; i++) {
    process.stdout.write(i * 4 + " ");
  }
  console.log();
}
