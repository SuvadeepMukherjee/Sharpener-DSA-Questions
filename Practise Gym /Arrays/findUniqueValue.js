function findUniqueMagicalKey(arr, length) {
  const myMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const count = (myMap.get(arr[i]) || 0) + 1;
    myMap.set(arr[i], count);
  }
  for (let [key, value] of myMap) {
    const isOne = value === 1;
    if (isOne) return key;
  }
  return -1;
}
console.log(findUniqueMagicalKey([7, 12, 4, 9, 3, 7, 13, 9, 4, 12, 3], 10));
