export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

/**
 * 根据数组构建 list
 */
export  function makeList(array: number[]) {
  let dummy = new ListNode(-1)
  let p = dummy
  for (let i = 0; i < array.length; i++) {
    dummy.next = new ListNode(array[i])
    dummy = dummy.next
  }
  return p.next
}

export function travelList(root: ListNode | null) {
  const res = []
  while (root) {
    res.push(root.val)
    root = root.next
  }
  return res
}
