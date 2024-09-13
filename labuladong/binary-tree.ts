class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

/**
 * 根据层序构建二叉树
 */
export function makeTree(array: number[]): TreeNode {
  const root = new TreeNode(array[0])
  function makerLevelTree(array: number[], level){
    const array.slice(2**level - 1, 2**(level +1)-1)
  }
  return root
}