/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let indexes = []
  let newTarget

  for (let i = 0; i < nums.length; i++) {
    newTarget = target - nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === newTarget) {
        indexes.push(i)
        indexes.push(j)
        return indexes
      }
    }
  }
};
