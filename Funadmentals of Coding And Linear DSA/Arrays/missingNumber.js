var missingNumber = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  const n = nums.length;
  const actualSum = (n * (n + 1)) / 2;
  return actualSum - sum;
};
