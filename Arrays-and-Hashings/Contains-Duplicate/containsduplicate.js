//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// function containsDuplicate(nums) {
//   const numbers = new Set();
//   for (const num of nums) {
//     if (numbers.has(num)) return true;
//     else numbers.add(num);
//   }
//   return false;
// }

const containsDuplicate = (nums) => new Set(nums).size !== nums.length;

const nums1 = [1, 4, 5, 5, 7, 8, 0];
console.log(containsDuplicate(nums1));

const nums2 = [0, 8, 9, 5, 2, 4, 6];
console.log(containsDuplicate(nums2));
