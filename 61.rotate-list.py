#
# date: 2019-09-10 23:43:43
# 思路：一开始可以相当的办法是，封装一个rotateOnce的方法，k有几次，就调用几次方法。优点： 逻辑简单，缺点： 计算复杂
# 另一种方法是，将链表看作一个环形链表，从尾部开始移动k个指针，然后遍历输出。环形链表可以通过数组求余数模拟, 这种方法还是有点性能浪费
# @lc app=leetcode id=61 lang=python3
#
# [61] Rotate List
#
# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def rotateRight(self, head: ListNode, k: int) -> ListNode:
        if head is None:
            return head
        if head.next is None:
            return head
        if k == 0:
            return head
        if k is None:
            return head
        nodes = []
        while head is not None:
            nodes.append(head)
            head = head.next
        nodeLen = len(nodes)
        firstIndex = nodeLen - k % nodeLen
        outList = None
        preNode = outList
        for node in nodes[firstIndex:]:
            curNode = ListNode(node.val)
            if outList is None:
                outList = preNode = curNode
            preNode.next = curNode
            preNode = curNode
        for node in nodes[:firstIndex]:
            curNode = ListNode(node.val)
            if outList is None:
                outList = preNode = curNode
            preNode.next = curNode
            preNode = curNode
        return outList

# s = Solution()
# arr = [1,2]
# k = 2
# head = None
# preNode = None
# for i in arr:
#     curNode = ListNode(i)
#     if head is None:
#         head = preNode = curNode
#         continue
#     preNode.next = curNode
#     preNode = curNode

    
    
# out = s.rotateRight(head,k)
# while out is not None:
#     print(out.val)
#     out = out.next