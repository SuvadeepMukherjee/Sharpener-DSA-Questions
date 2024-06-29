var countOnes = function (nums, k) {
  let maxLength = 0;
  let start = 0;
  let zeroCount = 0;

  for (let end = 0; end < nums.length; end++) {
    if (nums[end] === 0) {
      zeroCount++;
    }

    while (zeroCount > k) {
      if (nums[start] === 0) {
        zeroCount--;
      }
      start++;
    }

    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
};
