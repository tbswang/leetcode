/*
 * @lc app=leetcode.cn id=112 lang=typescript
 *
 * [112] 路径总和
 */
import { TreeNode } from './labuladong/binary-tree'

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  function dp(root: TreeNode | null, targetSum: number): boolean {
    if (!root?.left && !root?.right) return root?.val === targetSum
    return dp(root?.left, targetSum - root?.val) || dp(root?.right, targetSum - root?.val)
  }

  return dp(root, targetSum)
};
// @lc code=end

