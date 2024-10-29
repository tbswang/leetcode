function coinChange(coins: number[], amount: number): number {

  const dp = new Array(amount + 1).fill(amount + 1)
  dp[0] = 0
  for (let i = 0; i <= amount; i++) {
    // for (let c of coins) {
    //   dp[i] = Math.min(dp[i - c] + 1, dp[i])
    // }
    const avilableCoins = coins.filter((c) => c <= i)
    dp[i] = Math.min(...avilableCoins.map((c) => dp[i - c] + 1), dp[i])
  }

  return dp[amount] === amount + 1 ? -1 : dp[amount]
}

var coins = [1, 2, 5], amount = 11
console.log(coinChange(coins, amount))