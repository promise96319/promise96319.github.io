import { readFile, readdir } from 'node:fs/promises'
import { join } from 'node:path'

const solutionPath = join(__dirname, './solutions/')

const parseContent = (content: string) => {
  const regex = /\/\/ @lc code=start(?<code>[\s\S]*?)\/\/ @lc code=end/g;
  const matches = regex.exec(content)

  return matches?.groups ?? {}
} 

// 还需要生成对应的 sidebar
export default {
  async paths() {
    const files = await readdir(solutionPath)
    return Promise.all(files.map(async (file) => {
      const content = await readFile(join(solutionPath, file), 'utf-8')
      const title = file.slice(0, -3)
      const parsed =parseContent(content)
      const code = `\`\`\`ts${parsed.code}\`\`\``
      
      return {
        params: { title },
        content: `## 代码\n` + code
      }
    }))
  },
}
