/*
 * @lc app=leetcode.cn id=25 lang=cpp
 *
 * [25] K 个一组翻转链表
 */
#include <vector>
#include <iostream>
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
    // 递归
    ListNode *reverseKGroup(ListNode *head, int k)
    {
        ListNode *nextK = head;
        for (int i = 0; i < k - 1; i++)
        {
            if (nextK->next != nullptr)
                nextK = nextK->next;
            else
                return head;
        }

        ListNode *nextHead = reverseKGroup(nextK->next, k);
        nextK->next = nullptr;
        ListNode *newHead = reverse(head);
        ListNode *newTail = getTail(newHead);
        newTail->next = nextHead;
        return newHead;
    }
    ListNode *getTail(ListNode *head)
    {
        ListNode *tail = head;
        while (tail->next != nullptr)
        {
            tail = tail->next;
        }
        return tail;
    }
    ListNode *reverse(ListNode *head)
    {
        if (head->next == nullptr)
            return head;
        ListNode *last = reverse(head->next);
        head->next->next = head;
        head->next = nullptr;
        return last;
    }
};
// @lc code=end

int main()
{
    Solution s;
    vector<int> input = {1, 2, 3, 4, 5};
    ListNode *head = new ListNode(input[0]);
    ListNode *cur = head;
    for (int i = 1; i < input.size(); i++)
    {
        cur->next = new ListNode(input[i]);
        cur = cur->next;
    }
    head = s.reverseKGroup(head, 1);
    while (head != nullptr)
    {
        cout << head->val << ' ';
        head = head->next;
    }
    cout << endl;
}