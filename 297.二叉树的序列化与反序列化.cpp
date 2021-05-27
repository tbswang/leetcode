/*
 * @lc app=leetcode.cn id=297 lang=cpp
 *
 * [297] 二叉树的序列化与反序列化
 */
#include <iostream>
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
  string nullToken = "null";
  string delimiter = ",";
  // Encodes a tree to a single string.
  string serialize(TreeNode *root) {
    str = traverse(root);
    // return "[" + str + "]";
    return str;
  }
  /* postorder */
  string traverse(TreeNode *root) {
    if (root == nullptr)
      return nullToken;
    string left = traverse(root->left);
    string right = traverse(root->right);
    return to_string(root->val) + delimiter + left + delimiter + right;
  }
  int idx;
  // Decodes your encoded data to tree.
  TreeNode *deserialize(string data) {
    vector<string> list;
    size_t pos = 0;
    while ((pos = data.find(delimiter)) != string::npos) {
      list.push_back(data.substr(0, pos));
      data.erase(0, pos + delimiter.length());
    }
    return build(&list);
  }
  TreeNode *build(vector<string> *list) {
    if (list->empty())
      return nullptr;
    if (list->at(0) == nullToken) {
      list->erase(list->begin());
      return nullptr;
    }
    TreeNode *root = new TreeNode(stoi(list->at(0)));
    list->erase(list->begin());

    root->left = build(list);
    root->right = build(list);
    return root;
  }
};

// Your Codec object will be instantiated and called as such:
// Codec ser, deser;
// TreeNode* ans = deser.deserialize(ser.serialize(root));
// @lc code=end

int main() {
  string in = "1,2,null,4,null,null,3,null,null";
  Codec ser, deser;
  auto mid = deser.deserialize(in);
  auto out = ser.serialize(mid);
  cout << out << endl;
}