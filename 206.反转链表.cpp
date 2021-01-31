/*
 * @lc app=leetcode.cn id=206 lang=cpp
 *
 * [206] 反转链表
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
    // 迭代
    // ListNode *reverseList(ListNode *head)
    // {
    //     ListNode* pre = nullptr;
    //     while (head)
    //     {
    //         ListNode* next = head->next;
    //         head->next = pre;
    //         pre = head;
    //         head = next;
    //     }
    //     return pre;
    // }

    // 递归
    ListNode *reverseList(ListNode *head)
    {
        if (head == nullptr || head->next == nullptr)
            return head;
        ListNode *newHead = reverseList(head->next);
        ListNode *cur = newHead;
        while (cur->next)
        {
            cur = cur->next;
        }
        cur->next = head;
        head->next = nullptr;
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
    ListNode *newHead = s.reverseList(head);
    // 输出链表
    while (newHead)
    {
        cout << newHead->val << ' ';
        newHead = newHead->next;
    }
}