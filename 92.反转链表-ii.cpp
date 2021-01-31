/*
 * @lc app=leetcode.cn id=92 lang=cpp
 *
 * [92] 反转链表 II
 */
#include <iostream>
#include <vector>
using namespace std;

struct ListNode
{
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};
// @lc code=start
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution
{
public:
    ListNode *reverseBetween(ListNode *head, int m, int n)
    {
        if (m == n)
            return head;
        if (head == nullptr)
            return head;
        int curIdx = 1;
        ListNode *newHead = head;
        ListNode *pre = nullptr;

        ListNode *reHead = nullptr;
        ListNode *reTail = nullptr;

        ListNode *start = nullptr;
        ListNode *end = nullptr;

        ListNode *next = nullptr;
        while (head)
        {
            next = head->next;
            if (curIdx == m - 1)
            {
                start = head;
            }
            if (curIdx == m)
                reTail = head;
            if (curIdx == n + 1)
                end = head;
            if (curIdx >= m && curIdx <= n)
            {
                head->next = pre;
                pre = head;
                // head = next;
            }
            curIdx++;
            head = next;
        }
        if (start != nullptr)
            start->next = pre;
        else
            newHead = pre;
        if (reTail != nullptr)
            reTail->next = end;
        return newHead;
    }
};
// @lc code=end

int main()
{
    Solution s;
    // 构建链表;
    vector<int> input = {1, 2, 3};
    ListNode *head = new ListNode(input[0]);
    ListNode *cur = head;
    ListNode *pre = nullptr;
    for (int i = 1; i < input.size(); i++)
    {
        cur->next = new ListNode(input[i]);
        cur = cur->next;
    }

    ListNode *newHead = s.reverseBetween(head, 1, 2);
    // 输出链表
    while (newHead)
    {
        cout << newHead->val << ' ';
        newHead = newHead->next;
    }
}