function findFirstDuplicateElement(arr, length) {
  const mySet = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (mySet.has(arr[i])) return arr[i];
    mySet.add(arr[i]);
  }
}
console.log(
  findFirstDuplicateElement([7, 23, 15, 42, 7, 56, 89, 15, 91, 42], 10)
);
