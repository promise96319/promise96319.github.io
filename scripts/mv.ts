import { existsSync, statSync } from 'fs'
import { readFile, readdir, unlink, writeFile } from 'fs/promises'
import { resolve } from 'path'

async function move(path: string) {
  try {
    const dir = resolve(__dirname, path)
    const files = await readdir(dir)
    files.forEach(async (file) => {
      const path = resolve(dir, `${file}/README.md`)
      const target = resolve(dir, `${file}/index.md`)
      if (!existsSync(path) || !statSync(resolve(dir, file)).isDirectory())
        return
      const content = await readFile(path)
      await writeFile(target, content)
      await unlink(path)
    })
  }
  catch (e) {
    console.log('e', e)
  }
}

move(resolve(__dirname, '../docs'))
