/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const outRange = (arr, idx) => idx < 0 || idx > arr.length - 1 ? 0 : arr[idx];
var getRow = function (rowIndex) {
  if (rowIndex < 0) return;
  if (rowIndex === 1) return [1,1];
  let i = 0;
  let pre = [1];
  let out = [1];
  while (i <= rowIndex) {
    let j = 0;
    while(j <= i){
      out[j] = outRange(pre, j-1)  + outRange(pre, j);
      j += 1;
    }
    i+=1;
    pre = [...out];
    // console.log('getRow -> out', out);
  }
  return out;
};
// @lc code=end

// const row = getRow(3);
// console.log(row);