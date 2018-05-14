/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
//2018年5月14日21:38:58
//参考: https://leetcode.com/problems/add-two-numbers/discuss/1020/Javascript-solution 主要是参考了输入和输出格式.
//思路: 第一个while把所有的相同的部分加起来,第二个和第三个while是把单独多着的l1和l2算出来.最后,如果carry不是0,说明最后一次又进位,要加一.
var addTwoNumbers = function (l1, l2) {
    var List = new ListNode(0);
    var head = List;
    var carry = 0;
    var sum = 0;
    while (l1 !== null && l2 !== null) {
        sum = l1.val + l2.val + carry;
        carry = 0;
        if (sum >= 10) {
            sum -= 10;
            carry = 1;
        }
        head.next = new ListNode(sum);
        head = head.next;
        l1 = l1.next;
        l2 = l2.next;
    }
    while (l1 !== null) {
        sum = l1.val + carry;
        carry = 0;
        if (sum >= 10) {
            sum -= 10;
            carry = 1;
        }
        head.next = new ListNode(sum);
        head = head.next;
        l1 = l1.next;
    }
    while (l2 !== null) {
        sum = l2.val + carry;
        carry = 0;
        if (sum >= 10) {
            sum -= 10;
            carry = 1;
        }
        head.next = new ListNode(sum);
        head = head.next;
        l2 = l2.next;
    }
    if (carry === 1) {
        head.next = new ListNode(carry);
    }
    return List.next;
};