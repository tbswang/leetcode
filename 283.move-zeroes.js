/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const swap = (arr, i, j) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
const moveToBefore = (arr, i, value) => {
  for (let j = i; j < arr.length - 1 && arr[j + 1] !== value; j += 1) {
    swap(arr, j, j + 1);
  }
}
var moveZeroes = function (nums) {
  for (let i = nums.length - 1; i >= 0; i -= 1) {
    if (nums[i] === 0) {
      moveToBefore(nums, i, 0);
    }
  }
};
// @lc code=end


// const input = [0, 1, 0, 3, 12]
// moveZeroes(input)
// console.log(input);