function find_sum(arr, length) {
  return arr.reduce((acc, el) => acc + el, 0);
}
console.log(find_sum([4, 7, 2, 9, 1, 5]));
