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
        int start = 1;
        while (start < adjacentPairs.size()) {
            for (int i = start; i < adjacentPairs.size(); i++) {
                // 头部 ,  左边
                if (res[0] == adjacentPairs[i][0]) {
                    res.insert(res.begin(), adjacentPairs[i][1]);
                    adjacentPairs[i] = adjacentPairs[start];
                    start++;
                    break;
                }
                if (res[0] == adjacentPairs[i][1]) {
                    res.insert(res.begin(), adjacentPairs[i][0]);
                    adjacentPairs[i] = adjacentPairs[start];
                    start++;
                    break;
                }
                if (res.back() == adjacentPairs[i][0]) {

                    res.push_back(adjacentPairs[i][1]);
                    adjacentPairs[i] = adjacentPairs[start];
                    start++;
                    break;
                }
                if (res.back() == adjacentPairs[i][1]) {
                    res.push_back(adjacentPairs[i][0]);
                    adjacentPairs[i] = adjacentPairs[start];
                    start++;
                    break;
                }
            }
        }

        return res;
    }
};
// @lc code=end

int main() {
    Solution s;
    vector<vector<int>> input = { {100000,-100000} };
    vector <int> res = s.restoreArray(input);
    for (auto i : res) {
        cout << i << ' ';
    }
}
