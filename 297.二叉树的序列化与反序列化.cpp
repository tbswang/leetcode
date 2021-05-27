/*
 * @lc app=leetcode.cn id=297 lang=cpp
 *
 * [297] 二叉树的序列化与反序列化
 */
#include <queue>
#include <string>
using namespace std;
struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
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
class Codec {
public:
  string str;
  // Encodes a tree to a single string.
  string serialize(TreeNode *root) {
    str = traverse(root);
    // return "[" + str + "]";
    return str;
  }
  /* postorder */
  string traverse(TreeNode *root) {
    if (root == nullptr)
      return "null";
    string left = traverse(root->left);
    string right = traverse(root->right);
    return root->val + "," + left + "," + right;
  }
  int idx;
  // Decodes your encoded data to tree.
  TreeNode *deserialize(string data) {
    vector<string> *list = split(data, ',');
  }
  TreeNode *build(vector<string> *list) {
    if (idx > list->size()-1 ) {
      return nullptr;
    }
    
  }
};

// Your Codec object will be instantiated and called as such:
// Codec ser, deser;
// TreeNode* ans = deser.deserialize(ser.serialize(root));
// @lc code=end
