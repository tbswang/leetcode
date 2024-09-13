/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode.cn/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (66.96%)
 * Likes:    3592
 * Dislikes: 0
 * Total Accepted:    1.8M
 * Total Submissions: 2.7M
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：l1 = [1,2,4], l2 = [1,3,4]
 * 输出：[1,1,2,3,4,4]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：l1 = [], l2 = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：l1 = [], l2 = [0]
 * 输出：[0]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 两个链表的节点数目范围是 [0, 50]
 * -100 
 * l1 和 l2 均按 非递减顺序 排列
 * 
 * 
 */
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}
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
 * 解法 1： 2024.09.12
 * 使用 dummy
 */
// function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
//   // 使用虚拟头节点
//   let p = new ListNode(-1)
//   let dummy = p
//   while(list1 && list2){
//     if(list1.val < list2.val){
//       p.next = list1
//       list1 = list1.next
//     }else{
//       p.next = list2
//       list2= list2.next
//     }
//     p = p.next
//   }
//   if(list1){
//     p.next = list1
//   }
//   if(list2){
//     p.next = list2
//   }
//   return dummy.next
// };

/**
 * 解法 2：2024.09.12
 * 不使用dummy
 * emmm， 感觉好复杂
 */
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  // if(list1 && list2)
}
// @lc code=end

