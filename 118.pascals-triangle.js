/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
const outRange = (arr, idx) => idx < 0 || idx > arr.length - 1 ? 0 : arr[idx];
var generate = function (numRows) {
  if (numRows < 1) return [];
  if (numRows == 1) return [[1]];
  const out = [[1]];
  let i = 1;
  while (i < numRows) {
    let j = 0;
    out[i] = [];
    while (j <= i) {
      out[i][j] = outRange(out[i - 1], j - 1) + outRange(out[i - 1], j);
      j += 1;
    }
    i += 1;
  }
  return out;
};
// @lc code=end

// const out = generate(5)
// console.log('out', out);