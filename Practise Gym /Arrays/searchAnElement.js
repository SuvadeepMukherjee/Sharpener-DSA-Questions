function searchForElement(arr, length, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
}

console.log(searchForElement([3, 17, 9, 25, 12, 5, 14, 21], 8, 12));
