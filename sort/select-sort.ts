/**
 * 从未排序的元素中， 选择一个最小的，与当前元素交换
 */

function selectSort(nums: number[]) {
  for (let i = 0; i < nums.length; i++) {

    for (let k = i; k < nums.length; k++) {
      if (nums[k] < nums[i]) {
        let tmp = nums[i]
        nums[i] = nums[k]
        nums[k] = tmp
      }
    }
  }
  return nums
}

const nums = [4,2,3,1]
console.log(selectSort(nums))