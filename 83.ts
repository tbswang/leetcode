/*
 * @lc app=leetcode.cn id=83 lang=typescript
 *
 * [83] 删除排序链表中的重复元素
 */
import { ListNode } from './labuladong/list'
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  // let dummy1 = new ListNode(-1001)
  // let dummy2 = new ListNode(-1002)
  if(!head) return null
  let dummy1 = head
  let dummy2 = head
  
  while (dummy2) {
    if (dummy1.val !== dummy2.val) {
      dummy1 = dummy1.next
      dummy1.val = dummy2.val
    }
    dummy2 = dummy2.next
  }
  dummy1.next = null
  return head
};
// @lc code=end

