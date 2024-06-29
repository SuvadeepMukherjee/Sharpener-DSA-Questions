var minRecolors = function (s, k) {
  let minRecolors = Infinity;
  let currentWCount = 0;

  for (let i = 0; i < k; i++) {
    if (s[i] === "W") {
      currentWCount++;
    }
  }

  minRecolors = currentWCount;

  for (let i = k; i < s.length; i++) {
    if (s[i - k] === "W") {
      currentWCount--;
    }
    if (s[i] === "W") {
      currentWCount++;
    }
    minRecolors = Math.min(minRecolors, currentWCount);
  }

  return minRecolors;
};
