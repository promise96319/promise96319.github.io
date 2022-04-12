#  jiti / unbuild / tsup

## jiti
[https://github.com/unjs/jiti](https://github.com/unjs/jiti)

> Runtime typescript and ESM support for Node.js (CommonJS)
用运行时的方式加载 typescript 和 ESM 文件。
``` typescript
// color.ts
interface Color {
  red: number,
  green: number,
  blue: number
}
export const color: Color = {
  red: 0,
  green: 0,
  blue: 0
}

console.log('color', color);
```
通过 `jiti color.ts` 命令，可以看到，运行时加载的文件是：
```
color { red: 0, green: 0, blue: 0 }
```
同时可以通过程序的方式加载：
```typescript
const jiti = require('jiti')(__filename)
jiti('./color.ts')
```
运行这段代码可以将 `color.ts` 文件中的内容输出到控制台。

## unbuild
[https://github.com/unjs/unbuild](https://github.com/unjs/unbuild)

### stub
`unbuild --stub` 命令会将文件转换为 `jiti` 程序形式:
``` javascript
// color.ts.mjs
import jiti from 'jiti';
export default jiti(null, { interopDefault: true })('/Users/qinguanghui/Desktop/tmp/jiti/a.ts');
```
对于库开发者来讲非常棒，省去了 `watch` 编译，直接 `unbuild --stub` 命令生成的产物等于引用 `typescript` 源码。
### mkdist
[https://github.com/unjs/mkdist](https://github.com/unjs/mkdist)
打包后生成结构化的文件

### untype
[https://github.com/unjs/untyped](https://github.com/unjs/untyped)
数据 => 解析数据结构 => 生成类型 => 生成 `markdown`
``` typescript
import { resolveSchema, generateTypes, generateMarkdown } from 'untyped'

const markdown = generateMarkdown(generateTypes(resolveSchema(defaultPlanet)))
```

## tsup
- 基于 `esbuild`
- 支持 `js/json/mjs/ts/tsx` 打包

## 参考
[https://antfu.me/posts/publish-esm-and-cjs](https://antfu.me/posts/publish-esm-and-cjs)
