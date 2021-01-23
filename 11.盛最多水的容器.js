/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let volume = 0
  for(let i=0; i< height.length -1; i++){
    for(let j=i+1; j<height.length; j++){
      volume = Math.max((j-i)*Math.min(height[i], height[j]), volume);
    }
  }
  return volume;
};
// @lc code=end

