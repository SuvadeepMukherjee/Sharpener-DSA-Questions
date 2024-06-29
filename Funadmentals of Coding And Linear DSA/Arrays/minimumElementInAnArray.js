function find_minimum(arr, length) {
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

console.log(find_minimum([5, 6, 2, 9, -2]));
