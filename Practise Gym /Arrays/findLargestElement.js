function find_maximum(arr) {
  const compareFn = (a, b) => a - b;
  arr = arr.sort(compareFn);
  return arr[arr.length - 1];
}
console.log(find_maximum([12, 7, 31, 18, 25]));
