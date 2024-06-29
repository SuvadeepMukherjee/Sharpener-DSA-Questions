function find_maximum_subarray(arr) {
  let max = -Infinity;
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    // Outer loop sets the starting index
    for (let j = i; j < n; j++) {
      // Middle loop sets the ending index
      let subarray = [];
      let sum = 0;
      for (let k = i; k <= j; k++) {
        // Inner loop prints elements from i to j
        subarray.push(arr[k]);
        sum += arr[k];
      }
      //console.log(subarray);
      if (sum > max) {
        max = sum;
      }
    }
  }
  return max;
}
console.log(find_maximum_subarray([5, 2, -4, -5, 3, -1, 2, 3, 1]));
