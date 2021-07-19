/*
 * @lc app=leetcode.cn id=94 lang=cpp
 *
 * [94] 二叉树的中序遍历
 */

#include <stack>
#include <vector>
using namespace std;

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
  // vector<int> res;

  // 递归的办法
  // vector<int> inorderTraversal(TreeNode *root) {
  //   travel(root);
  //   return res;
  // }
  // void travel(TreeNode *root) {
  //   if (root == nullptr)
  //     return;
  //   travel(root->left);
  //   res.push_back(root->val);
  //   travel(root->right);
  // }

  // 非递归
  // 需要手动维护一个stack
  // 先把所有的左子树添加进去，再把根添加进去，在迭代的过程中添加右子树
  stack<TreeNode *> stack;
  vector<int> res;
  vector<int> inorderTraversal(TreeNode *root) {
    if (root == nullptr)
      return res;
    // 插入左侧
    while (root != nullptr) {
      stack.push(root);
      root = root->left;
    }

    while (!stack.empty()) {
      auto top = stack.top();
      res.push_back(top->val);
      stack.pop();
      auto next = top->right;
      while (next != nullptr) {
        stack.push(next);
        next = next->left;
      }
    }
    return res;
  }
};
// @lc code=end
