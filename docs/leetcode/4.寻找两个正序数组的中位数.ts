/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const totalNums = nums1.length + nums2.length
  if (totalNums === 0)
    return 0
  if (totalNums === 1)
    return nums1[0] === undefined ? nums2[0] : nums1[0]
  let i = -1
  let j = -1
  const isOdd = totalNums % 2 === 1
  let cur = 0
  while (i < nums1.length || j < nums2.length) {
    // 1. 奇数个数：如果 i + 1 + j + 1 = total + 1 / 2
    if (isOdd && (i + j + 2) === (totalNums + 1) / 2)
      return cur

    const nextNum1 = nums1[i + 1]
    const nextNum2 = nums2[j + 1]

    // 2. 偶数个数：
    if (!isOdd && (i + j + 2) === totalNums / 2) {
      const min = nextNum1 === undefined ? nextNum2 : nextNum2 === undefined ? nextNum1 : Math.min(nextNum1, nextNum2)
      return (cur + min) / 2
    }

    if (nextNum1 !== undefined && nextNum1 < (nextNum2 === undefined ? Infinity : nextNum2)) {
      i++
      cur = nextNum1
    }
    else {
      j++
      cur = nextNum2
    }
  }
  return cur
}
// @lc code=end
