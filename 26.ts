/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  if (nums.length === 1) return 1
  let fast = 0;
  let slow = 0;
  while (fast < nums.length) {
    if (nums[fast] !== nums[slow]) {
      slow++
      nums[slow] = nums[fast]
    }
    fast++
  }
  return slow + 1
};
// @lc code=end

