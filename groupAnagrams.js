//Given an array of strings strs, group the anagrams together. You can return the answer in any order.

var groupAnagrams = function (strs) {
  const groupedAnagrams = {};
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    const sortedStr = str.split("").sort().join("");
    if (groupAnagrams[sortedStr]) {
      groupAnagrams[sortedStr].push(str);
    } else {
      groupAnagrams[sortedStr] = [str];
    }
  }
  return Object.values(groupAnagrams);
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(strs);
console.log(result);
