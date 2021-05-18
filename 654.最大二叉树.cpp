/*
 * @lc app=leetcode.cn id=654 lang=cpp
 *
 * [654] 最大二叉树
 */

#include<iostream>
#include <vector>
#include <queue>
using namespace std;
struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode* left, TreeNode* right) : val(x), left(left), right(right) {}
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

class Solution {
public:
    TreeNode* constructMaximumBinaryTree(vector<int>& nums) {
        return build(nums, 0, nums.size() - 1);
    }
    TreeNode* build(vector<int>& nums, int low, int high) {
        if (low > high) return NULL;
        // 找到最大值及其索引
        int max = INT_MIN;
        int index = -1;
        for (int i = low; i <= high; i++) {
            if (nums[i] > max) {
                max = nums[i];
                index = i;
            }
        }
        TreeNode* root = new TreeNode(max);
        root->left = build(nums, low, index - 1);
        root->right = build(nums, index + 1, high);
        return root;
    }
};
// @lc code=end

int main() {
    Solution s;
    vector<int> in1 = { 3,2,1 };
    TreeNode* root = s.constructMaximumBinaryTree(in1);
    // 层序遍历
    queue<TreeNode*> q;
    q.push(root);
    cout << '[';
    while (!q.empty())
    {
        TreeNode* now = q.front();
        cout << now->val;
        q.pop();
        if (now->left != nullptr) {
            q.push(now->left);
        }
        else {
            cout << 'null';
        }
        if (now->right != nullptr) {
            q.push(now->right);
        }
        else {
            cout << 'null';
        }
        if (q.empty()) {
            cout << ']';
        }
        else {
            cout << ',';
        }

    }
    cout<<"abnc"<< endl;
}