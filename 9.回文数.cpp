/*
 思路： 双指针+数组
 * @lc app=leetcode.cn id=9 lang=cpp
 * 
 * [9] 回文数
 */

#include <iostream>
#include <vector>
using namespace std;
// @lc code=start
class Solution {
public:
  bool isPalindrome(int x) {
    if (x == 0)
      return true;
    if (x < 0)
      return false;
    return reverse(x);

    // cout << re << endl;
    // return re == x;
  }
  bool reverse(int x) {
    vector<int> re;
    // int out = 0;
    while (x > 0) {
      re.push_back(x % 10);
      x = x / 10;
    }
    for (vector<int>::iterator start = re.begin(), end = re.end() - 1;
         start < end; ++start, --end) {
      // cout << *start << "," << *end << endl;
      if (*start != *end)
        return false;
    }
    return true;
    // out = out * 10 + (*it);

    // return out;
  }
};
// @lc code=end

int main() {
  Solution s;
  bool out = s.isPalindrome(121);
  cout << out << endl;
}