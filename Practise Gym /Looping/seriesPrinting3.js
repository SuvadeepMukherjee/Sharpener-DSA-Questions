function fibonacci(num) {
  if (num <= 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  let n1 = 0,
    n2 = 1,
    nextTerm;

  for (let i = 3; i <= num; i++) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  return n2;
}

console.log(fibonacci(5)); // Output: 3
