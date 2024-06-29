function checkArraysEquality(arr1, arr2) {
  const myMap = new Map();
  for (let i = 0; i < arr1.length; i++) {
    const count = (myMap.get(arr1[i]) || 0) + 1;
    myMap.set(arr1[i], count);
  }
  for (let i = 0; i < arr2.length; i++) {
    const reduce = myMap.get(arr2[i]) - 1;
    myMap.set(arr2[i], reduce);
  }
  for (const [key, value] of myMap) {
    const isZero = value === 0;
    if (!isZero) {
      return "false";
    }
  }
  return true;
}
console.log(checkArraysEquality([3, 7, 2, 8, 7], [3, 7, 2, 8, 6]));
