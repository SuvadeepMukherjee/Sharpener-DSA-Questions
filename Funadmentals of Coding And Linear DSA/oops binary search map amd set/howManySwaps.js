function minSwapsToSort(nums) {
  let n = nums.length;
  let sortedNums = [...nums].sort((a, b) => a - b);
  let indexMap = new Map();
  let visited = new Array(n).fill(false);
  let swaps = 0;

  for (let i = 0; i < n; i++) {
    indexMap.set(sortedNums[i], i);
  }

  for (let i = 0; i < n; i++) {
    if (visited[i] || sortedNums[i] === nums[i]) {
      continue;
    }

    let cycleSize = 0;
    let x = i;

    while (!visited[x]) {
      visited[x] = true;
      x = indexMap.get(nums[x]);
      cycleSize++;
    }

    if (cycleSize > 0) {
      swaps += cycleSize - 1;
    }
  }

  return swaps;
}

// Test cases
console.log(minSwapsToSort([2, 8, 5, 4])); // Output: 1
console.log(minSwapsToSort([10, 19, 6, 3, 5])); // Output: 2
console.log(minSwapsToSort([10, 19, 6, 5, 3])); // Output: 3
