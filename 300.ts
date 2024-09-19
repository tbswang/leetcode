/*
 * @lc app=leetcode.cn id=300 lang=typescript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * 迭代写法
 */



function lengthOfLIS(nums: number[]): number {
  let dp = new Array(nums.length).fill(1)

  // 0...j ... i
  function findLowerThanI(i) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  for (let i = 1; i < nums.length; i++) {
    /**
     * 状态转移
     */
    // dp[i] = length(i-1)
    findLowerThanI(i)
  }
  // for (let i = 0; i < nums.length; i++) {
  //   res = Math.max(res, dp[i])
  // }
  // return res
  // return dp[dp.length - 1]
  return Math.max(...dp)
};
// @lc code=end

console.log(lengthOfLIS([1,3,6,7,9,4,10,5,6]))