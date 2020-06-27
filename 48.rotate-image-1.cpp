/*
 * @lc app=leetcode id=48 lang=cpp
 *
 * [48] Rotate Image
 */
// FIXME 本地运行可以, submit就不可以!!
/*
 * 思路: 
 *  将两个元素交换
 *  如何确定两个元素? 
 * 
 */
#include <vector>
#include <iostream>
using namespace std;
// @lc code=start
class Solution
{
public:
    vector<vector<int>> rotate(vector<vector<int>> &matrix)
    {
        vector<vector<int>> m = r(matrix);
        vector<vector<int>> m1 = rt(m);
        vector<vector<int>> m2 = trans(m1);
        vector<vector<int>> m3 = r(m2);
        printVector(m3);
        return m3;
    }
    void printVector(vector<vector<int>> const &mat)
    {
        for (vector<int> row : mat)
        {
            for (int val : row)
            {
                cout << val << " ";
            }
            cout << '\n';
        }
    }

private:
    vector<vector<int>> r(vector<vector<int>> &m)
    {
        int len = m.size();
        int index = len - 1;
        for (int i = 0; i < len - 1; ++i)
        {
            for (int j = 0; j < len - i - 1; ++j)
            {
                int c = m[i][j];
                m[i][j] = m[index - j][index - i];
                m[index - j][index - i] = c;
            }
        }
        cout << "r" << endl;
        printVector(m);
        return m;
    }
    vector<vector<int>> rt(vector<vector<int>> &m)
    {
        int len = m.size();
        int index = len - 1;
        for (int i = 0; i <= index; ++i)
        {
            for (int j = i; j <= index; ++j)
            {
                int c = m[j][i];
                m[j][i] = m[i][j];
                m[i][j] = c;
            }
        }
        cout << "rt" << endl;
        printVector(m);
        return m;
    }
    vector<vector<int>> trans(vector<vector<int>> &m)
    {
        int len = m.size();
        int index = len - 1;
        for (int i = 0; i <= (int)(len / 2.0) - 1; ++i)
        {
            for (int j = 0; j <= index; ++j)
            {
                int c = m[index - i][j];
                m[index - i][j] = m[i][j];
                m[i][j] = c;
            }
        }
        cout << "trans" << endl;
        printVector(m);
        return m;
    }
};
// @lc code=end

int main()
{
    Solution s;
    vector<vector<int>> m{{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    // s.printVector(s.rotate(m));
    s.rotate(m);
    // std::cout << s.rotate(m) << std::endl;
}