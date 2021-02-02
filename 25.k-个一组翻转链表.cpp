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
    }
};
// @lc code=end

int main()
{
    vector<int> input = {1, 2, 3, 4, 5};
    ListNode *head = new ListNode(input[0]);
    ListNode *cur = head;
    for (int i = 1; i < input.size(); i++)
    {
        cur->next = new ListNode(input[i]);
        cur = cur->next;
    }
    while (head)
    {
        cout << head->val << ' ';
        cout << endl;
    }
}