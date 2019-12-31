/*
 * @lc app=leetcode id=1 lang=cpp
 *
 * [1] Two Sum
 */
#include <stdio.h>
#include <iostream>
#include <vector>
using namespace std;
// @lc code=start
class Solution
{
public:
    vector<int> twoSum(vector<int> &nums, int target)
    {
        int len = nums.size();
        cout << len << endl;
        for (int i = 0; i < len; i++)
        {
            for (int j = len - 1; j > i; j--)
            {
                if (nums[i] + nums[j] == target)
                {
                    return {i, j};
                }
            }
        }
        return {};
    }
};
// @lc code=end

int main()
{
    Solution s;
    vector<int> nums = {3,2,4};
    vector<int> sol = s.twoSum(nums, 6);
    /* Print path vector to console */
    for (auto i = sol.begin(); i != sol.end(); ++i)
    std::cout << *i << ' ';
    cout << endl;
    return 0;
}