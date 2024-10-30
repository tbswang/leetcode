/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {

  // 状态： 子序列和
  // 选择： 是否添加某一个元素

  // dp[i] 以 i 结尾的最大子数组的和
  const dp = new Array(nums.length ).fill(0)

  dp[0] = nums[0]
  for(let [idx, v] of nums.entries()){
    if(idx === 0){
      continue
    }
    dp[idx] = Math.max(nums[idx], dp[idx-1] + nums[idx])
  }
  console.log(dp)

  return Math.max(...dp)
    
};
// @lc code=end


maxSubArray( [-2,1,-3,4,-1,2,1,-5,4])
maxSubArray([1])
maxSubArray( [5,4,-1,7,8])