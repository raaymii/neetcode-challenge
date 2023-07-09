var topKFrequent = function (nums, k) {
  const frequentElements = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (frequentElements[num]) {
      frequentElements[num]++;
    } else {
      frequentElements[num] = 1;
    }
  }
  const result = [];

  const sortedPairs = Object.entries(frequentElements).sort(
    (a, b) => b[1] - a[1]
  );

  for (let i = 0; i < k; i++) {
    result.push(Number(sortedPairs[i][0]));
  }

  return result;
};

console.log(topKFrequent([1, 1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4], 4));
