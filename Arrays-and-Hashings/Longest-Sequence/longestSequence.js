/**
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 * @param {number[]} nums
 * @return {number}
 */

function longestConsecutive(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let numSet = new Set(nums);
  let maxLength = 1;

  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentLength = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentLength++;
      }

      maxLength = Math.max(maxLength, currentLength);
    }
  }

  return maxLength;
}
