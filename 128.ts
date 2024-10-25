/*
 * @lc app=leetcode.cn id=128 lang=typescript
 *
 * [128] 最长连续序列
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) {
    return 0
  }

  const numSet = new Set(nums)
  let max = 1
  for (let num of numSet) {
    if (numSet.has(num - 1)) {
      continue
    }
    let cur = 1
    let curNum = num
    while (numSet.has(curNum + 1)) {
      cur++
      curNum++
    }
    max = Math.max(cur, max)
  }
  return max
};
// @lc code=end

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))
