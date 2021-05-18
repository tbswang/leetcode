/*
 * @lc app=leetcode.cn id=105 lang=cpp
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
    TreeNode *buildTree(vector<int> &preorder, vector<int> &inorder)
    {
        return build(preorder, 0, preorder.size() - 1, inorder, 0, inorder.size() - 1);
    }
    TreeNode *build(vector<int> &preorder, int preStart, int preEnd, vector<int> &inorder, int inStart, int inEnd)
    {
        if (preStart > preEnd)
            return NULL;
        // if (inStart > inEnd)
        //     return NULL;
        // if (preStart > preorder.size() - 1)
        //     return NULL;
        auto rootVal = preorder[preStart];
        // 找到根
        auto root = new TreeNode(rootVal);
        // 找到左子树
        int inIdx = inStart;
        for (; inIdx <= inEnd; inIdx++)
        {
            if (inorder[inIdx] == rootVal)
            {
                break;
            }
        }
        int leftSize = inIdx - inStart;
        // 递归左子树
        root->left = build(preorder, preStart + 1, preStart + leftSize, inorder, inStart, inIdx - 1);
        // 递归右子树
        root->right = build(preorder, preStart + leftSize + 1, preEnd, inorder, inIdx + 1, preEnd);

        return root;
    }
};
// @lc code=end

int main()
{
    Solution s;
    vector<int> pre = {3, 9, 20, 15, 7};
    vector<int> in = {9, 3, 15, 20, 7};
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