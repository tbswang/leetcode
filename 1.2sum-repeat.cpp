/**
 * 不允许重复的多个2sum问题
 */
#include <stdio.h>
#include <iostream>
#include <vector>

using namespace std;

class Solution
{
public:
  vector<int> twoSum(vector<int> &nums, int target)
  {
    sort(nums.begin(), nums.end());
    vector<int> res;
    int lo = 0, hi = nums.size() - 1;
    while (lo < hi)
    {
      int left = nums[lo], right = nums[hi];
      int sum = left + right;
      if (sum < target)
        lo++;
      else if (sum < target)
        hi--;
      else
      {
        res.push_back(left);
        res.push_back(right);
        while (lo < hi && nums[lo] == left)
          lo++;
        while (lo < hi && nums[hi] == right)
          hi--;
      }
    }
    return res;
  }
};

int main()
{
  Solution s;
  vector<int> nums = {1, 3, 1, 2, 2, 3};
  vector<int> sol = s.twoSum(nums, 4);

  /* Print path vector to console */
  for (auto i = sol.begin(); i != sol.end(); ++i)
    std::cout << *i << ' ';
  cout << endl;
  return 0;
}