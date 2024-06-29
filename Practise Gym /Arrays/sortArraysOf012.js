var sortArray = function (nums) {
  const comparatorFunction = (a, b) => a - b;
  nums = nums.sort(comparatorFunction);
  return nums;
};
