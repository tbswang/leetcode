/*
 * @lc app=leetcode.cn id=875 lang=typescript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
/**
 * 数组求和
 */
function sum(nums: number[]): number {
  return nums.reduce((pre, cur) => pre + cur, 0)
}

function minEatingSpeed(piles: number[], h: number): number {

  /**
   * 以 x 吃香蕉，所需的时间
   */
  function hours(x: number): number {
    let time = 0
    for (let i = 0; i < piles.length; i++) {
      time += Math.ceil(piles[i] / x)
    }
    return time
  }
  let left = 1
  let right = sum(piles)
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (hours(mid) === h) {
      right =  mid - 1
    } else if (hours(mid) < h) {
      right = mid - 1
    } else if (hours(mid) > h) {
      left = mid + 1
    }
  }
  return left
};
// @lc code=end

console.log(minEatingSpeed([30, 11, 23, 4, 20],
  5))
