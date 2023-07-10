/**
 * Given a string s, return true if it is a palindrome, or false otherwise.

 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function (s) {
  // Remove non-alphanumeric characters and convert to lowercase
  let cleanedString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Check if the cleaned string is equal to its reverse
  return cleanedString === cleanedString.split("").reverse().join("");
};

console.log(isPalindrome("madam"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome("racecar"));
