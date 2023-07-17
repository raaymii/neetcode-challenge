/**
 * @param {number[]} height
 * @return {number}
 */

function maxArea(height) {
  let maxWater = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const minHeight = Math.min(height[left], height[right]);
    const width = right - left;
    const area = minHeight * width;
    maxWater = Math.max(maxWater, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
