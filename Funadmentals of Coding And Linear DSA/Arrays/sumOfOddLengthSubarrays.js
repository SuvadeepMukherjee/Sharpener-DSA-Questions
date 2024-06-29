var sumOddLengthSubarrays = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = i; k <= j; k++) {
        if ((j - i + 1) % 2 !== 0) {
          sum += arr[k];
        }
      }
    }
  }
  return sum;
};
