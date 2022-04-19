/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

// @lc code=start

// class ListNode {
//   val: number
//   next: ListNode | null
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = (val === undefined ? 0 : val)
//     this.next = (next === undefined ? null : next)
//   }
// }

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let head: ListNode | null = null
  let result: ListNode | null = null
  let needAddOne = false
  while (l1 || l2 || needAddOne) {
    const val1 = (l1 && l1.val) || 0
    const val2 = (l2 && l2.val) || 0
    const val = val1 + val2 + (needAddOne ? 1 : 0)
    needAddOne = val >= 10

    if (result)
      result = result.next = new ListNode(val % 10)
    else
      head = result = new ListNode(val % 10)

    l1 = l1 && l1.next
    l2 = l2 && l2.next
  }
  return head
}
// @lc code=end
