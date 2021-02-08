/*
 * @lc app=leetcode.cn id=102 lang=cpp
 *
 * [102] 二叉树的层序遍历
 */
#include<iostream>
#include <vector>
#include <queue>
using namespace std;
struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};
// @lc code=start
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    vector<vector<int>> levelOrder(TreeNode* root) {
        vector<vector<int>> res;
        res.push_back({ root->val });
        queue<TreeNode*> q;
        q.push(root);
        while (!q.empty()) {
            TreeNode* now = q.front();
            q.pop();
            cout << now->val << " ";
            if (now->left != nullptr)
                q.push(now->left);
            if (now->right != nullptr)
                q.push(now->right);
            // if (now->left && now->right) {
            //     res.push_back({ now->left->val, now->right->val });
            //     q.push(now->left);
            //     q.push(now->right);
            // }
            // else if (now->left && now->right == nullptr) {
            //     res.push_back({ now->left->val });
            //     q.push(now->left);
            // }
            // else if (now->left == nullptr && now->right) {
            //     res.push_back({ now->right->val });
            //     q.push(now->right);
            // }
        }
        return res;
    }
};
// @lc code=end
