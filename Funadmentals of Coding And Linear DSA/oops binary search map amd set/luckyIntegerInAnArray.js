var findLucky = function (arr) {
  const compareFn = (a, b) => b - a;
  arr = arr.sort(compareFn);
  const myMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    const count = (myMap.get(arr[i]) || 0) + 1;
    myMap.set(arr[i], count);
  }
  for (const [key, value] of myMap) {
    const isEqual = key === value;
    if (isEqual) return key;
  }
  return -1;
};
