/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = 0, j = 0;
  let lastIdx1 = m, lastIdx2 = n;
  while (i < lastIdx1 && j < n) {
    if (nums1[i] > nums2[j]) {
      nums1.splice(i, 0, nums2[j]);
      j += 1;
      lastIdx1 +=1;
    } else if (nums1[i] <= nums2[j] && nums1[i + 1] > nums2[j]) {
      nums1.splice(i + 1, 0, nums2[j])
      lastIdx1 +=1;
      j += 1;
    } else {
      i += 1;
    }
  }
  if (j < nums2.length) {
    nums1.splice(i, 0, ...nums2.slice(j))
  }
  nums1.splice(m+n);
};
// @lc code=end

// const nums1 = [0], m = 0, nums2 = [1], n = 1;

// merge(nums1, m, nums2, n);
// console.log(nums1);