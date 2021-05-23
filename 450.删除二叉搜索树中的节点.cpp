/*
 * @lc app=leetcode.cn id=450 lang=cpp
 *
 * [450] 删除二叉搜索树中的节点
 */
struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode() : val(0), left(nullptr), right(nullptr) {}
  TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
  TreeNode(int x, TreeNode *left, TreeNode *right)
      : val(x), left(left), right(right) {}
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
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left),
 * right(right) {}
 * };
 */
class Solution {
public:
  TreeNode *deleteNode(TreeNode *root, int key) {
    if (root == nullptr)
      return root;

    if (key < root->val) {
      root->left = deleteNode(root->left, key);
      return root;
    } else if (key > root->val) {
      root->right = deleteNode(root->right, key);
      return root;
    } else {
      if (root->left == nullptr) {
        return root->right;
      }
      if (root->right == nullptr) {
        return root->left;
      }
      auto newRoot = getMin(root->right);
      newRoot->right = deleteNode(root->right, newRoot->val);
      newRoot->left = root->left;
      return newRoot;
    }
  }
  TreeNode *getMin(TreeNode *root) {
    if (root == nullptr)
      return root;
    while (root->left != nullptr) {
      //   return getMin(root->left);
      root = root->left;
    }
    return root;
  }
};
// @lc code=end
