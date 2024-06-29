function sort_array(arr, length) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[smallest] < arr[j]) {
        smallest = j;
      }
    }
    let temp = arr[smallest];
    arr[smallest] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
console.log(sort_array([4, 3, 2, 5, 1]));
