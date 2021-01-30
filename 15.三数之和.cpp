/*
 * @lc app=leetcode.cn id=15 lang=cpp
 *
 * [15] 三数之和
 */
#include <stdio.h>
#include <iostream>
#include <vector>

using namespace std;

// @lc code=start

class Solution
{
public:
  vector<vector<int>> threeSum(vector<int> &nums)
  {
    sort(nums.begin(), nums.end());
    int target = 0;
    vector<vector<int>> res;
    for (int i = 0; i < nums.size(); i++)
    {
      twoSum(nums, i, target - nums[i], res);
      while (i < nums.size() - 1 && nums[i] == nums[i + 1])
      {
        i++;
      }
    }
    return res;
  }

  void twoSum(vector<int> &nums, int startIdx, int target, vector<vector<int>> &res)
  {
    int l = startIdx + 1, h = nums.size() - 1;
    while (l < h)
    {
      int left = nums[l], right = nums[h];
      int sum = left + right;
      if (sum < target)
      {
        while (l < h && left == nums[l])
          l++;
      }
      else if (sum > target)
        while (l < h && right == nums[h])
          h--;
      else
      {
        res.push_back({nums[startIdx], left, right});
        while (l < h && left == nums[l])
          l++;
        while (l < h && right == nums[h])
          h--;
      }
    }
  }
};
// @lc code=end

int main()
{
  Solution s;
  vector<int> nums = {};
  vector<vector<int>> sol = s.threeSum(nums);

  for (auto i : sol)
  {
    cout << '{';
    for (auto j : i)
      cout << j << ',';
    cout << '}';
  }
  cout << endl;
  return 0;
}