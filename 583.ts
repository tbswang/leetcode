/*
 * @lc app=leetcode.cn id=583 lang=typescript
 *
 * [583] 两个字符串的删除操作
 */

// @lc code=start
function minDistance(word1: string, word2: string): number {

  const l1 = word1.length
  const l2 = word2.length
  const memo = new Array(l1).fill(0).map(v => v = new Array(l2).fill(0))
  // 对于 w1 [0..i...l1] 和w2 [0...j...l2] 的
  function dp(i, j) {
    if (i === l1 || j === l2) {
      // memo[i][j] = l1 - i + l2 - j
      // return memo[i][j]
      return l1 - i + l2 - j
    }
    if (memo[i][j]) return memo[i][j]
    if (word1[i] === word2[j]) {
      memo[i][j] = dp(i + 1, j + 1)
      return memo[i][j]
    } else {
      memo[i][j] = Math.min(dp(i + 1, j), dp(i, j + 1)) + 1
      return memo[i][j]
    }
  }

  return dp(0, 0)
};
// @lc code=end

console.log(minDistance('dinitrophenylhydrazine', 'acetylphenylhydrazine'))
