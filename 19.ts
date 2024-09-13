/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
 *
 * https://leetcode.cn/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (49.11%)
 * Likes:    2935
 * Dislikes: 0
 * Total Accepted:    1.5M
 * Total Submissions: 3.1M
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3,4,5], n = 2
 * 输出：[1,2,3,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [1], n = 1
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：head = [1,2], n = 1
 * 输出：[1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中结点的数目为 sz
 * 1 <= sz <= 30
 * 0 <= Node.val <= 100
 * 1 <= n <= sz
 * 
 * 
 * 
 * 
 * 进阶：你能尝试使用一趟扫描实现吗？
 * 
 */
import { ListNode, makeList, travelList } from './labuladong/list'

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 * 解法 1： 使用双指针,虚拟节点，很有必要
 */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let p1 = new ListNode(-1)
  let p2 = new ListNode(-1)
  let dummy = p2
  p1.next = head
  p2.next = head
  let idx = 0
  while (p1) {
    if (idx > n) {
      p2 = p2?.next
    }
    idx++
    p1 = p1.next
  }
  // 1,2
  // 2
  if (p2?.next) {
    p2.next = p2?.next?.next || null
    return dummy.next
  }
  return null
};
// @lc code=end
console.log(travelList(removeNthFromEnd(makeList([1,2]), 2)))
