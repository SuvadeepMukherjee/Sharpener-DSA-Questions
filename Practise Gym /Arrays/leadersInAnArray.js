var leaders = function (nums) {
  const n = nums.length;
  let leaders = [];
  let maxFromRight = -Infinity;

  for (let i = n - 1; i >= 0; i--) {
    if (nums[i] > maxFromRight) {
      leaders.push(nums[i]);
      maxFromRight = nums[i];
    }
  }

  leaders.reverse();

  return leaders;
};
