/*
 * @lc app=leetcode.cn id=139 lang=typescript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * 
 */
function wordBreak(s: string, wordDict: string[]): boolean {
  const dpTable = new Map()
  function dp(s) {
    if (s === '') return true
    if (dpTable.has(s)) return dpTable.get(s)
    for (let i = 0; i < wordDict.length; i++) {
      let result = dp(s.substring(wordDict[i].length))
      dpTable.set(s.substring(wordDict[i].length), result)
      if (s.substring(0, wordDict[i].length) === wordDict[i] && result) {
        return true
      }
    }
    return false
  }
  return dp(s)
};
// @lc code=end

// console.log(wordBreak("leetcode", ["leet", "code"]))
console.log(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab", 
  ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"]))

