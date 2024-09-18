export class TreeNode {
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
export function makeTree(array: (number | null)[]): TreeNode | null {
  if (array.length <= 0) return null
  const root = new TreeNode(array[0])
  let i = 1
  let queue = [root]
  while (i < array.length) {
    let cur = queue.shift()
    if (cur) {
      cur.left = array[i] ? new TreeNode(array[i]) : null
      queue.push(cur.left)
      i++
      if (i < array.length) {
        cur.right = array[i] ? new TreeNode(array[i]) : null
        queue.push(cur.right)
      }
      i++
    }
  }
  return root
}

makeTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1])