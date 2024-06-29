function sort_array(arr) {
  let isSorted;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j] > arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  return arr;
}
console.log(sort_array([4, 3, 2, 5, 1]));
