function check_armstrong(n) {
  let temp = n;
  let sum = 0;

  while (temp > 0) {
    let digit = Math.floor(temp % 10);
    sum += digit * digit * digit;
    temp = Math.floor(temp / 10);
  }
  const isArmstrong = sum === n ? "true" : "false";
  return isArmstrong;
}

console.log(check_armstrong(153));
