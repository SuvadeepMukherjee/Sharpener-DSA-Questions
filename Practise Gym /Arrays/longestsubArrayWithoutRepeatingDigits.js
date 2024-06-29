var longestSubarray = function (nums) {
  let maxLength = 0;
  let start = 0;
  const seen = new Set();

  for (let end = 0; end < nums.length; end++) {
    while (seen.has(nums[end])) {
      seen.delete(nums[start]);
      start++;
    }
    seen.add(nums[end]);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
};
