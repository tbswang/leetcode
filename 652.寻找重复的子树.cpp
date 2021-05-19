/*
 * @lc app=leetcode.cn id=652 lang=cpp
 *
 * [652] 寻找重复的子树
 */

#include <iostream>
#include <vector>
#include <unordered_map>
#include <string>
#include <sstream>
using namespace std;
struct TreeNode
{
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

// @lc code=start
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution
{
public:
    unordered_map<string, int> memo;
    vector<TreeNode *> res;
    vector<TreeNode *> findDuplicateSubtrees(TreeNode *root)
    {
        find(root);
        return res;
    }
    string find(TreeNode *root)
    {
        if (root == nullptr)
            return "#";

        string left = find(root->left);
        string right = find(root->right);
        string subTree = left + "," + right + "," + int_string(root->val);

        int freq = memo[subTree];
        if (freq == 1)
        {
            res.push_back(root);
            // cout << ">>>" << root->val;
        }
        memo[subTree] = freq + 1;
        // cout << memo[subTree];
        // cout << subTree << endl;
        return subTree;
    }
    string int_string(int a)
    { //int转string
        stringstream st;
        st << a;
        string str = st.str();
        return str;
    }
};
// @lc code=end

int main()
{
    Solution s;
}
/**
 * 
in 431 432 4
先序遍历 124 324 4

后序 42 42 4 3 1

*/