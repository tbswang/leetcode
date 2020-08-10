/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const swap = (arr, i, j) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
var rotate = function (nums, k) {
  if (nums.length === 1) return;
  const step = k % nums.length;
  let i = 0;
  while (i < step) {
    for (let j = nums.length - 1; j > 0; j -= 1) {
      swap(nums, j - 1, j)
    }
    i += 1;
  }
};
// @lc code=end

// const nums = [1, 2, 3, 4, 5, 6, 7], k = 3;
// rotate(nums, k)
// console.log('rotate(nums, k)', nums);