/*
 * @lc app=leetcode.cn id=53 lang=cpp
 *
 * [53] 最大子序和
 */

// @lc code=start
class Solution {
public:
  int max = 0;
  int maxSubArray(vector<int> &nums) {}
  int dp(vector<int> &nums, int start, int end) {
    if (start == end)
      return nums[start];
    return max(dp(nums, start, --end), dp(nums, ++start, end), nums[start],
               nums[end]);
  }
};
// @lc code=end
