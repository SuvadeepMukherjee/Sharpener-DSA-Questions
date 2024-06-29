function print_subarray(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    // Outer loop sets the starting index
    for (let j = i; j < n; j++) {
      // Middle loop sets the ending index
      let subarray = [];
      for (let k = i; k <= j; k++) {
        // Inner loop prints elements from i to j
        subarray.push(arr[k]);
      }
      console.log(subarray);
    }
  }
}
print_subarray([1, 2, 3, 4, 5]);
