var numJewelsInStones = function (jewels, stones) {
  jewels = jewels.split("");
  const jewelsSet = new Set(jewels);

  let count = 0;
  stones = stones.split("");
  for (let i = 0; i < stones.length; i++) {
    if (jewelsSet.has(stones[i])) {
      count++;
    }
  }
  return count;
};
