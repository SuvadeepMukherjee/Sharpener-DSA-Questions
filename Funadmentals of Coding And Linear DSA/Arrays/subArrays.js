function print_subarray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let subarray = [];
      for (let k = i; k <= j; k++) {
        subarray.push(arr[k]);
      }
      console.log(subarray);
    }
  }
}
print_subarray([1, 2, 3, 4, 5]);
