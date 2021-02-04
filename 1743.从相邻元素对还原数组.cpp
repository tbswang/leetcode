/*
 * @lc app=leetcode.cn id=1743 lang=cpp
 *
 * [1743] 从相邻元素对还原数组
 */
#include <iostream>
#include <vector>

using namespace std;

// @lc code=start
class Solution {
public:
    vector<int> restoreArray(vector<vector<int>>& adjacentPairs) {
        vector<int> res = adjacentPairs[0];
        for (int i = 0; i < adjacentPairs.size(); i++) {
            for (int j = i + 1; j < adjacentPairs.size(); j++) {
                // 头部 ,  左边
                if (res[0] == adjacentPairs[j][0])
                    res.insert(res.begin(), adjacentPairs[j][1]);
                if (res[0] == adjacentPairs[j][1])
                    res.insert(res.begin(), adjacentPairs[j][0]);
                if (res.back() == adjacentPairs[j][0])
                    res.push_back(adjacentPairs[j][1]);
                if (res.back() == adjacentPairs[j][1])
                    res.push_back(adjacentPairs[j][0]);
            }
        }
        return res;
    }
};
// @lc code=end

int main() {
    Solution s;
    vector<vector<int>> input = { {2,1}, {3,4}, {3,2} };
    vector <int> res = s.restoreArray(input);
    for (auto i : res) {
        cout << i << ' ';
    }
}
