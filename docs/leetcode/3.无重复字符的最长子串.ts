/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  if (s.length <= 1) return s.length

  let max = 0
  let current: string = s[0]
  for (let i = 1; i < s.length; i++) {
    const index = current.indexOf(s[i])
    if (index === -1)
      current += s[i]
    else
      current = current.slice(index + 1) + s[i]

    max = Math.max(max, current.length)
  }
  return max
}
// @lc code=end
