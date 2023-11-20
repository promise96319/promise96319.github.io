import { join, resolve } from 'node:path'
import { readdir, writeFile } from 'node:fs/promises'
import process from 'node:process'

// dir 相对根路径
export async function generteMarkdownFromTs(dir: string, title: string, mdName: string) {
  const path = resolve(process.cwd(), dir)
  const files = await readdir(path)
  const mdLines = [`# ${title}`]
  files
    .filter((file: string) => file.endsWith('.ts'))
    .sort((a: string, b: string) => {
      return Number(a.split('.')[0]) - Number(b.split('.')[0])
    })
    .forEach((file: string) => {
      const name = file.replace(/\.ts$/, '')
      mdLines.push(`## ${name}`)
      mdLines.push(`<<< ./${join(dir, file)}`)
    })

  await writeFile(join(dir, `${mdName}.md`), mdLines.join('\n'))
}

// leetcode
generteMarkdownFromTs('docs/leetcode', 'leetcode', 'leetcode')
