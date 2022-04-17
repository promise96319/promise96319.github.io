import { expect, test } from 'vitest'

function transform(name: string, arr: string[]) {
  const result = {
    text: `/${name}/`,
    link: `/${name}/index`,
    children: arr.map((item) => {
      item = item.replace(/\.md/g, '')
      return {
        text: item,
        link: `/${name}/${item}`,
      }
    }),
  }
  return [result]
}

test('transform', () => {
  const name = 'studying'
  const arr = [
    'typescript.md',
  ]
  const result = transform(name, arr)
  expect(result).toMatchInlineSnapshot(`
    [
      {
        "children": [
          {
            "link": "/studying/typescript",
            "text": "typescript",
          },
        ],
        "link": "/studying/index",
        "text": "/studying/",
      },
    ]
  `)
})
