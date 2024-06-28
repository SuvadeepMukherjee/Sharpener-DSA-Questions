function reverse(n) {
  let temp = n;
  let rev = 0;
  while (temp > 0) {
    const digit = temp % 10;
    rev = rev * 10 + digit;
    temp = Math.floor(temp / 10);
  }
  return rev;
}

console.log(reverse(123));
