import { readFile, readdir } from 'node:fs/promises'
import { join } from 'node:path'

const solutionPath = join(__dirname, './solutions/')

export default {
  async paths() {
    const files = await readdir(solutionPath)
    return Promise.all(files.map(async (file) => {
      const content = await readFile(join(solutionPath, file), 'utf-8')
      const title = file.slice(0, -3)
      return {
        params: { title },
        content,
      }
    }))
  },
}
