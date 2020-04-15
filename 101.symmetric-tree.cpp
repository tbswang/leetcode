/*
 * @lc app=leetcode id=101 lang=cpp
 *
 * [101] Symmetric Tree
 */

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
#include <cstddef>
#include <iostream>
using namespace std;

// struct TreeNode
// {
//     int val;
//     TreeNode *left;
//     TreeNode *right;
//     // TreeNode(int x) : val(x), left(NULL), right(NULL) {}
// };
class Solution
{
public:
    bool isSymmetric(TreeNode *root)
    {
        return isMirror(root, root);
    }

    bool isMirror(TreeNode *t1, TreeNode *t2)
    {
        if (t1 == NULL && t2 == NULL)
            return true;
        if (t1 == NULL || t2 == NULL)
            return false;
        return (t1->val == t2->val) && isMirror(t1->left, t2->right) && isMirror(t1->right, t2->left);
    }
};
// @lc code=end

// /* Helper function that allocates a 
// new node */
// TreeNode *newNode(int val)
// {
//     TreeNode *node = (TreeNode *)malloc(sizeof(TreeNode));
//     node->val = val;
//     node->left = node->right = NULL;
//     return (node);
// }

// // Function to insert nodes in level order
// TreeNode *insertLevelOrder(int arr[], TreeNode *root,
//                            int i, int n)
// {
//     // Base case for recursion
//     if (i < n)
//     {
//         TreeNode *temp = newNode(arr[i]);
//         root = temp;

//         // insert left child
//         root->left = insertLevelOrder(arr,
//                                       root->left, 2 * i + 1, n);

//         // insert right child
//         root->right = insertLevelOrder(arr,
//                                        root->right, 2 * i + 2, n);
//     }
//     return root;
// }

// // Function to print tree nodes in
// // InOrder fashion
// void inOrder(TreeNode *root)
// {
//     if (root != NULL)
//     {
//         inOrder(root->left);
//         std::cout << root->val << " ";
//         inOrder(root->right);
//     }
// }

// int main()
// {
//     Solution s;
//     int arr[] = {1,
//                 2,
//                 2,
//                 3,
//                 4,
//                 4,
//                 3};
//     int n = sizeof(arr) / sizeof(arr[0]);
//     TreeNode *root = insertLevelOrder(arr, root, 0, n);
//     inOrder(root);
//     bool o = s.isSymmetric(root);
//     cout << "\nout\t" << o << endl;
// }