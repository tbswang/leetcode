/**
 * 将链表的前 n 个节点反转（n <= 链表长度）
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
class Solution
{
public:
    ListNode *reverseN(ListNode *head, int n)
    {
    }
};

int main()
{
    Solution s;
    // 构建链表;
    vector<int> input = {1, 2, 3,4,5};
    ListNode *head = new ListNode(input[0]);
    ListNode *cur = head;
    ListNode *pre = nullptr;
    for (int i = 1; i < input.size(); i++)
    {
        cur->next = new ListNode(input[i]);
        cur = cur->next;
    }

    ListNode *newHead = s.reverseN(head, 3);
    // 输出链表
    while (newHead)
    {
        cout << newHead->val << ' ';
        newHead = newHead->next;
    }
}