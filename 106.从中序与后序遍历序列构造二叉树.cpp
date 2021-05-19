/*
 * @lc app=leetcode.cn id=106 lang=cpp
 *
 * [106] 从中序与后序遍历序列构造二叉树
 */

#include <iostream>
#include <vector>
#include <queue>
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
    TreeNode *buildTree(vector<int> &inorder, vector<int> &postorder)
    {
        return build(inorder, 0, inorder.size() - 1, postorder, 0, postorder.size() - 1);
    }
    TreeNode *build(vector<int> &inorder, int inStart, int inEnd, vector<int> &postorder, int postStart, int postEnd)
    {
        if (inStart > inEnd)
            return NULL;
        auto root = new TreeNode(postorder[postEnd]);
        // 从中序遍历找到根
        int idx = inStart;
        for (; idx <= inEnd; idx++)
        {
            if (inorder[idx] == postorder[postEnd])
            {
                break;
            }
        }
        int leftSize = idx - inStart;
        // 左子树
        root->left = build(inorder, inStart, idx - 1, postorder, postStart, postStart + leftSize - 1);
        root->right = build(inorder, idx + 1, inEnd, postorder, postStart + leftSize, postEnd - 1);
        return root;
    }
};
// @lc code=end

int main()
{
    Solution s;
    vector<int> pre = {9, 3, 15, 20, 7};
    vector<int> in = {9, 15, 7, 20, 3};
    TreeNode *root = s.buildTree(pre, in);
    // 层序遍历
    queue<TreeNode *> q;
    q.push(root);
    // auto a = new TreeNode(9);
    // cout << a->val;
    // cout << a->val;
    cout << '[';
    while (!q.empty())
    {
        TreeNode *now = q.front();
        cout << now->val;
        q.pop();
        if (now->left != nullptr)
        {
            q.push(now->left);
        }
        else
        {
            cout << "null";
        }
        if (now->right != nullptr)
        {
            q.push(now->right);
        }
        else
        {
            cout << "null";
        }
        cout << ",";
    }
    cout << "]";
}
