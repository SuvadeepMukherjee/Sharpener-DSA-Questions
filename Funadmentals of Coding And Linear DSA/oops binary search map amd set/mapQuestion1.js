var twoSum = function (nums, target) {
  const myMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const complement = target - current;
    const complementIndex = myMap.get(complement);
    if (myMap.has(complement)) {
      return [i, complementIndex];
    }
    myMap.set(nums[i], i);
  }
};
