/*
 * @lc app=leetcode.cn id=931 lang=typescript
 *
 * [931] 下降路径最小和
 */

// @lc code=start
function minFallingPathSum(matrix: number[][]): number {
  const n = matrix.length
  let max = 100 * 100
  const DEFAULT_VALUE = max + 1
  const memo = Array.from({length: n}, () => new Array(n).fill(DEFAULT_VALUE))
  memo[0] = matrix[0]
  //  从 0,x 下落到 i,j 的最新路径为dp(x,y)
  function dp(i: number, j: number): number {
    if (i < 0 || i > n - 1) return DEFAULT_VALUE
    if (j < 0 || j > n - 1) return DEFAULT_VALUE
    if (memo[i][j] !== DEFAULT_VALUE)
      return memo[i][j]
    let left = dp(i - 1, j - 1)
    let mid = dp(i - 1, j)
    let right = dp(i - 1, j + 1)
    memo[i][j] = Math.min(left, mid, right) + matrix[i][j]
    return memo[i][j]
  }

  for (let j = 0; j < n; j++) {
    max = Math.min(dp(n - 1, j), max)
  }
  return max
};
// @lc code=end

// console.log(minFallingPathSum([[17,82],[1,-44]]))
console.log(minFallingPathSum([[2, 1, 3], [6, 5, 4], [7, 8, 9]]))