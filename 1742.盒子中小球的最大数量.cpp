/*
 * @lc app=leetcode.cn id=1742 lang=cpp
 *
 * [1742] 盒子中小球的最大数量
 */
#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

// @lc code=start
class Solution
{
public:
    int countBalls(int lowLimit, int highLimit)
    {
        unordered_map<int, int> box;
        int i = lowLimit;
        int out = 0;
        while (i <= highLimit)
        {
            int idx = sum(i);
            box[idx]++;
            out = max(out, box[idx]);
            i++;
        }
        return out;
    }
    int sum(int num)
    {
        int out = 0;
        while (num > 0)
        {
            out += num % 10;
            num = num / 10;
        }
        return out;
    }
};
// @lc code=end

int main()
{
    Solution s;
    cout << s.countBalls(1, 10) << ' ';
    cout << s.countBalls(5, 15) << ' ';
    cout << s.countBalls(19, 28) << endl;
}