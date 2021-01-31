/*
 * @lc app=leetcode.cn id=26 lang=cpp
 *
 * [26] 删除排序数组中的重复项
 */

#include <vector>
#include <iostream>
using namespace std;

// @lc code=start
class Solution
{
public:
    int removeDuplicates(vector<int> &nums)
    {
        if (nums.size() == 0)
            return 0;
        int l = 0, h = 1;
        while (h < nums.size())
        {
            if (nums[l] != nums[h])
            {
                l++;
                int tmp = nums[h];
                nums[h] = nums[l];
                nums[l] = tmp;
            }
            h++;
        }
        return l + 1;
    }
};
// @lc code=end

int main()
{
    Solution s;
    vector<int> nums = {};
    int len = s.removeDuplicates(nums);
    for (int i = 0; i < len; i++)
    {
        cout << nums[i] << ',';
    }
    cout << endl;
    cout << len << endl;
}