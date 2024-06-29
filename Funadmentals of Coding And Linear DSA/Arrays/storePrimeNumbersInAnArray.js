function prime_numbers(n) {
  let x = 2;
  let counter = [];
  let arr = [];
  while (counter < n) {
    let flag = true;
    for (let i = 2; i < x; i++) {
      if (x % i === 0) {
        flag = false;
        break;
      }
    }
    if (flag) {
      arr.push(x);
      counter++;
    }
    x++;
  }
  return arr;
}
console.log(prime_numbers(5));
