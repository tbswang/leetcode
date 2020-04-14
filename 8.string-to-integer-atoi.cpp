/*
 * @lc app=leetcode id=8 lang=cpp
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
#include <string>
#include <iostream>
using namespace std;

class Solution
{
public:
    int myAtoi(string str)
    {
        if (str.length() == 0)
            return 0;
        int base = 0, i = 0, sign = 1;
        while (i < str.length() && str.at(i) == ' ')
        {
            i++;
        }
        if (i < str.length() && (str.at(i) == '-' || str.at(i) == '+'))
        {
            if (str.at(i) == '-')
                sign = -1;
            else
                sign = 1;
            i++;
        }
        while (i < str.length() && str.at(i) >= '0' && str.at(i) <= '9')
        {
            if (base > INT_MAX / 10 || (base == INT_MAX / 10 && str.at(i) - '0' > 7))
            {
                if (sign == 1)
                    return INT_MAX;
                else
                    return INT_MIN;
            }
            base = base * 10 + (str.at(i++) - '0');
        }
        return base * sign;
    }
};
// @lc code=end

int main()
{
    Solution s;
    string a[] = {"",
                  //   "-",
                  //   "+",
                  //   "+-",
                  //   "-+",
                  //   "+-1",
                  //   "-+1",
                  //   "   -42",
                  //   "   42",
                  //   "words and 987",
                  //   "-91283472332",
                  "2147483646"};
    for (const auto &str : a)
    {
        int a = s.myAtoi(str);
        cout << a << endl;
    }
}