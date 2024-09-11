/*
 * @lc app=leetcode.cn id=707 lang=typescript
 *
 * [707] 设计链表
 *
 * https://leetcode.cn/problems/design-linked-list/description/
 *
 * algorithms
 * Medium (34.54%)
 * Likes:    1050
 * Dislikes: 0
 * Total Accepted:    335.4K
 * Total Submissions: 971K
 * Testcase Example:  '["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get"]\n' +
  '[[],[1],[3],[1,2],[1],[1],[1]]'
 *
 * 你可以选择使用单链表或者双链表，设计并实现自己的链表。
 * 
 * 单链表中的节点应该具备两个属性：val 和 next 。val 是当前节点的值，next 是指向下一个节点的指针/引用。
 * 
 * 如果是双向链表，则还需要属性 prev 以指示链表中的上一个节点。假设链表中的所有节点下标从 0 开始。
 * 
 * 实现 MyLinkedList 类：
 * 
 * 
 * MyLinkedList() 初始化 MyLinkedList 对象。
 * int get(int index) 获取链表中下标为 index 的节点的值。如果下标无效，则返回 -1 。
 * void addAtHead(int val) 将一个值为 val
 * 的节点插入到链表中第一个元素之前。在插入完成后，新节点会成为链表的第一个节点。
 * void addAtTail(int val) 将一个值为 val 的节点追加到链表中作为链表的最后一个元素。
 * void addAtIndex(int index, int val) 将一个值为 val 的节点插入到链表中下标为 index 的节点之前。如果
 * index 等于链表的长度，那么该节点会被追加到链表的末尾。如果 index 比长度更大，该节点将 不会插入 到链表中。
 * void deleteAtIndex(int index) 如果下标有效，则删除链表中下标为 index 的节点。
 * 
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入
 * ["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get",
 * "deleteAtIndex", "get"]
 * [[], [1], [3], [1, 2], [1], [1], [1]]
 * 输出
 * [null, null, null, null, 2, null, 3]
 * 
 * 解释
 * MyLinkedList myLinkedList = new MyLinkedList();
 * myLinkedList.addAtHead(1);
 * myLinkedList.addAtTail(3);
 * myLinkedList.addAtIndex(1, 2);    // 链表变为 1->2->3
 * myLinkedList.get(1);              // 返回 2
 * myLinkedList.deleteAtIndex(1);    // 现在，链表变为 1->3
 * myLinkedList.get(1);              // 返回 3
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= index, val <= 1000
 * 请不要使用内置的 LinkedList 库。
 * 调用 get、addAtHead、addAtTail、addAtIndex 和 deleteAtIndex 的次数不超过 2000 。
 * 
 * 
 */

// @lc code=start
class NodeItem {
    val: number = -1
    next: NodeItem | null = null
    pre: NodeItem | null = null
    constructor(val: number, next: NodeItem | null, pre: NodeItem | null,) {
        this.val = val
        this.next = next
        this.pre = pre
    }
}
class MyLinkedList {
    // 虚拟头节点
    head: NodeItem
    // 虚拟尾节点
    tail: NodeItem
    size = 0
    constructor() {
        this.head = new NodeItem(-1, null, null)
        this.tail = new NodeItem(-1, null, null)
        this.head.next = this.tail
        this.tail.pre = this.head
        this.size = 0
    }

    get(index: number): number {
        if(!this.isElementIndex(index)) return -1
        //head, 0,1,2,3,4, tail
        let tmp = this.head
        for (let i = 0; i <= index; i++) {
            if (!tmp?.next) return -1
            tmp = tmp.next
        }
        return tmp.val
    }

    travel() {
        let tmp = this.head.next
        const list: number[] = []
        while (tmp && tmp !== this.tail) {
            list.push(tmp.val)
            tmp = tmp.next
        }
        return list.join(',')
    }

    addAtHead(val: number): void {
        // head , x, 0,1, tail
        const x = new NodeItem(val, this.head.next, this.head)
        this.head.next.pre = x
        this.head.next = x

        this.size += 1

    }

    addAtTail(val: number): void {
        // val, x, tail
        const x = new NodeItem(val, this.tail, this.tail.pre)
        x.next.pre = x
        x.pre.next = x
        this.size += 1
    }

    addAtIndex(index: number, val: number): void {
        if(!this.isPositionIndex(index)) return
        if (index < 0 || index > this.size) return
        // head, 0, 1,2,x,3 ,tail
        let pre = this.head
        for (let i = 0; i < index; i++) {
            if (!pre?.next) return
            pre = pre.next
        }
        // if(pre.next === this.tail)

        let next = pre.next // next = 3
        const x = new NodeItem(val, next, pre)
        pre.next = x
        // TODO
        next!.pre = x
        this.size +=1
    }

    deleteAtIndex(index: number): void {
        if(!this.isElementIndex(index)) return
        if (index < 0 || index > this.size) return
        // head, 0, 1,2,x,3 ,tail
        let pre = this.head
        for (let i = 0; i < index; i++) {
            if (!pre?.next) return
            pre = pre.next
        }
        let next = pre.next?.next

        pre.next = next
        next.pre = pre
        this.size -=1
    }
    isElementIndex(index: number){
        return index >= 0 && index < this.size
    }
    isPositionIndex(index: number){
        return index >= 0 && index <= this.size
    }
}


/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

const myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
console.log(myLinkedList.travel())
myLinkedList.addAtTail(3);
console.log(myLinkedList.travel())
myLinkedList.addAtIndex(1, 2);    // 链表变为 1->2->3
console.log(myLinkedList.travel())
console.log(myLinkedList.get(1))// 返回 2
myLinkedList.deleteAtIndex(1);    // 现在，链表变为 1->3
console.log(myLinkedList.travel())
console.log(myLinkedList.get(1)) // 返回 3