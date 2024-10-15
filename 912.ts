/*
 * @lc app=leetcode.cn id=912 lang=typescript
 *
 * [912] 排序数组
 */

// @lc code=start
function sortArray(nums: number[]): number[] {
  function quickSort(left: number, right: number) {
    if (left < right) {
      const mid = partition(left, right)
      quickSort(left, mid - 1)
      quickSort(mid + 1, right)
    }
  }

  function partition(left: number, right: number) {
    let tmp = nums[left]
    while (left < right) {

      while (left < right && nums[right] > tmp) right--
      nums[left] = nums[right]
      while (left < right && nums[left] <= tmp) left++
      nums[right] = nums[left]
    }
    nums[left] = tmp
    return left
  }

  quickSort(0, nums.length - 1)
  return nums
};
// @lc code=end

let nums = [5,1,1,2,0,0]
console.log(sortArray(nums))

