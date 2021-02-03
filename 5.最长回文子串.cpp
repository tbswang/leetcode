/*
 * @lc app=leetcode.cn id=5 lang=cpp
 *
 * [5] 最长回文子串
 */

#include <iostream>
#include <string>
using namespace std;

// @lc code=start
class Solution
{
public:
    string longestPalindrome(string s)
    {
        if (s.size() == 1)
            return s;
        string res = "";
        for (int i = 0; i < s.size(); i++)
        {
            string ol = palindrome(s, i, i);
            string oh = palindrome(s, i, i + 1);
            res = res.size() > ol.size() ? res : ol;
            res = res.size() > oh.size() ? res : oh;
        }
        return res;
    }
    string palindrome(string s, int l, int h)
    {
        while (l >= 0 && h < s.size() && s[l] == s[h])
        {
            l--;
            h++;
        }
        return s.substr(l + 1, h - l - 1);
    }
};
// @lc code=end

int main()
{
    Solution s;
    string str = "babad";
    cout << s.longestPalindrome(str) << endl;
}
