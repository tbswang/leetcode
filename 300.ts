/*
 * @lc app=leetcode.cn id=300 lang=typescript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * 迭代写法
 */
// function lengthOfLIS(nums: number[]): number {
//   let dp = new Array(nums.length).fill(1)

//   // 0...j ... i
//   function findLowerThanI(i) {
//     for (let j = 0; j < i; j++) {
//       if (nums[j] < nums[i]) {
//         dp[i] = Math.max(dp[i], dp[j] + 1)
//       }
//     }
//   }
//   for (let i = 1; i < nums.length; i++) {
//     /**
//      * 状态转移
//      */
//     // dp[i] = length(i-1)
//     findLowerThanI(i)
//   }
//   // for (let i = 0; i < nums.length; i++) {
//   //   res = Math.max(res, dp[i])
//   // }
//   // return res
//   // return dp[dp.length - 1]
//   return Math.max(...dp)
// };
/**
 * 递归写法, 但还是迭代的思想
 */
function lengthOfLIS(nums: number[]): number {
  let max = 1
  let dpTable = [1]
  /**
   * 以 idx= i 结尾的字符串的， 最长子字符串
   */
  function dp(i: number) {
    if(dpTable[i]) return dpTable[i]
    let max_2 = 1
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        max_2 = Math.max(dp(j) + 1, max_2)
      }
    }
    dpTable[i] = max_2
    return max_2
  }
  // return dp(nums.length - 1)
  for (let i = 1; i < nums.length; i++) {
    const d = dp(i)
    max = Math.max(d, max)
  }
  return max
}
// @lc code=end

console.log(lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]))
// console.log(lengthOfLIS([1, 4, 3, 4, 2, 3]))