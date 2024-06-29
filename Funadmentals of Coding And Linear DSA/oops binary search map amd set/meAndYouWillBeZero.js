function hasSubarrayWithZeroSum(arr) {
  let prefixSumSet = new Set();
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (currentSum === 0 || prefixSumSet.has(currentSum)) {
      return true;
    }

    prefixSumSet.add(currentSum);
  }

  return false;
}

console.log(hasSubarrayWithZeroSum([5, 4, 2, -3, 1, 6])); // True
console.log(hasSubarrayWithZeroSum([5, 4, 2, 0, 1, 6])); // True
console.log(hasSubarrayWithZeroSum([5, 4, 2, 2, 1, 6])); // False
