/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const map: Record<number, number> = {}
  for (let i = 0; i < nums.length; i++) {
    const delta = target - nums[i]
    if (map[delta] || map[delta] === 0)
      return [map[delta], i]
    map[nums[i]] = i
  }
  return []
}
// @lc code=end
