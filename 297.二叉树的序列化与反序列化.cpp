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
    preTravel(root);
    return str;
  }
  void preTravel(TreeNode *root) {
    if (root == nullptr) {
      str += "null,";
      return;
    }
    str += (root->val + ',');
    preTravel(root->left);
    preTravel(root->right);
  }

  // Decodes your encoded data to tree.
  TreeNode *deserialize(string data) {
    vector<string> list;
    tokenize(data, ',', list);
    // 前序遍历
    return deserialize(list);
  }
  TreeNode *deserialize(vector<string> data) {
    if (data.size() == 0)
      return nullptr;
    string str = data.at(0);
    data.erase(data.begin());
    if (str == "null") {
      return nullptr;
    }
    TreeNode *root = new TreeNode(stoi(str));
    root->left = deserialize(data);
    root->right = deserialize(data);
    return root;
  }

  // 实现split的功能
  void tokenize(const string &s, const char delim, vector<string> &out) {
    string::size_type beg = 0;
    for (auto end = 0; (end = s.find(delim, end)) != string::npos; ++end) {
      out.push_back(s.substr(beg, end - beg));
      beg = end + 1;
    }
    out.push_back(s.substr(beg));
  }
};

// Your Codec object will be instantiated and called as such:

// @lc code=end

int main() {
  Codec ser, deser;
  // TreeNode* ans = deser.deserialize(ser.serialize(root));
  TreeNode *ans = deser.deserialize("1,2,null,null,3,4,5");
}