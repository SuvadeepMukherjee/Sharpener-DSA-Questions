var findDuplicates = function (nums) {
  const myMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const count = (myMap.get(nums[i]) || 0) + 1;
    myMap.set(nums[i], count);
  }
  let arr = [];
  for (const [key, value] of myMap) {
    const appearMoreThan1 = value > 1;
    if (appearMoreThan1) arr.push(key);
  }
  arr = arr.sort((a, b) => a - b);
  return arr;
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
