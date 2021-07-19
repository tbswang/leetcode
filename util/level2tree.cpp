#include <iostream>
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

class LevelTree {
public:
  // 序列化和反序列化
  TreeNode *level2Tree(vector<int> list){

  };
  vector<int> tree2Level(TreeNode *root) {}
};
