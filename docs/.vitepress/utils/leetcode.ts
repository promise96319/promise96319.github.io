
import { readdirSync } from 'node:fs'
import { join } from 'node:path'
import process from 'node:process'

const solutionPath = join(process.cwd(), 'docs/leetcode/solutions/')

// 生成 leetcode sidebar 配置 
export const scanLeetcode = () => {
  const files = readdirSync(solutionPath)
  return files.map((file) => {
    const title = file.slice(0, -3)
    return {
      text: title,
      link: `/leetcode/` + title
    }
  })
}
