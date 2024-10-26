/*
 * @lc app=leetcode.cn id=322 lang=typescript
 *
 * [322] 零钱兑换
 */

// @lc code=start
function coinChange(coins: number[], amount: number): number {
  const dp = new Array(amount + 1).fill(amount + 1)
  dp[0] = 0

  for (let i = 1; i <= amount; i++) {
    for (let c of coins) {
      if (i < c) {
        continue
      }
      dp[i] = Math.min(dp[i], dp[i - c] + 1)
    }
  }
  return dp[amount] === amount + 1 ? -1 : dp[amount]
};
// @lc code=end

