function sumOfMultiples(n, x) {
  let sum = 0;
  for (let i = x; i <= n; i += x) {
    //console.log(i);
    sum += i;
  }
  return sum;
}
console.log(sumOfMultiples(20, 4));
