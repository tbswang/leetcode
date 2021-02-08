/*
 * @lc app=leetcode.cn id=114 lang=cpp
 *
 * [114] 二叉树展开为链表
 */

#include<vector>
#include<math.h>
#include<queue>
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
    void flatten(TreeNode* root) {
        if (!root)
            return;
        if(root->left)
            flatten(root->left);
        if(root->right)
            flatten(root->right);
        TreeNode* rightest = getRightChild(root->left);
        rightest->right = root->right;
        root->right = root->left;
        root->left = nullptr;
    }
    TreeNode* getRightChild(TreeNode* root) {
        if (!root)
            return root;
        while (root->right) {
            root = root->right;
        }
        return root;

    }
};
// @lc code=end

int main(){
    vector<int> list = {1,2,3,4,5,6,7};
    auto root = new TreeNode(list[0]);
    queue<TreeNode*> q;
    q.push(root);
    for(int i = 1; i< floor(log2(list.size() + 1)); i++){
        auto now = q.front();
        q.pop();
        int levelSize = exp2(i);
        for(int j = )
    }
}