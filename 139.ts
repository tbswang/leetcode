/*
 * @lc app=leetcode.cn id=139 lang=typescript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * 解法 1： 自顶向下
 */
// function wordBreak(s: string, wordDict: string[]): boolean {
//   const dpTable = new Map()
//   function dp(s) {
//     if (s === '') return true
//     if (dpTable.has(s)) return dpTable.get(s)
//     for (let i = 0; i < wordDict.length; i++) {
//       let result = dp(s.substring(wordDict[i].length))
//       dpTable.set(s.substring(wordDict[i].length), result)
//       if (s.substring(0, wordDict[i].length) === wordDict[i] && result) {
//         return true
//       }
//     }
//     return false
//   }
//   return dp(s)
// };

/**
 * 解法 2： 自底向上
 */
function wordBreak(s: string, wordDict: string[]): boolean {

  // 空字符串，可以组合成
  // const dp = [true]
  const dpMap = new Map()
  dpMap.set('', true)
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < wordDict.length; j++) {
      if (dpMap.get(s.substring(0, i)) && s.substring(i, i + wordDict[j].length) === wordDict[j]) {
        dpMap.set(s.substring(0, i) + wordDict[j], true)
        // break
      }

    }
  }
  return !!dpMap.get(s)
}

// @lc code=end

console.log(wordBreak("applepenapple", ["apple", "pen"]))
// console.log(wordBreak("aab",
//   ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"]))

