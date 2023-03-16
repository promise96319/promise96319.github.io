
# 模块踩坑


## 测试
### 环境一
- ids
```json
{
  "name": "ids",
  "version": "1.0.0",
  "main": "dist/index.js",
  "module": "dist/index.esm.js"
}
```

- tsconfig.json
```json
{
  "module": "commonjs"
}
```

- webpack.config.js
```js
module: {
  rules: [
    {
      test: /\.(ts|js)x?$/,
      exclude: /node_modules/,
      use: [
        'babel-loader',
        'ts-loader',
      ],
    },
  ],
}
```

### 结果分析
#### 情景一
``` ts
// 源码
import ids from 'ids'
console.log(ids)
```
- 结果：打印 `ids` 构造函数。
- 原因：ts 将 `import` 转换为 `require`，require(ids) 查找到 module 对应的 esm 代码，esm 代码中 `export default` 转换为 `module.exports =`，并且 default 改写为一个属性，因此打印出来的是一个对象。
```js
'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const ids_1 = require('ids')
console.log(ids_1.default)
```

#### 情景二
``` ts
// 源码
const ids = require('ids')
console.log(ids)
```
- 结果：打印内容为 `ids` 的 `package.json` 中的 `module` 字段对应的文件内容，如下：
```js
{
  __esModule: true,
  default: [Function: Ids],
  ...
}
```

- 分析：require(ids) 查找到 module 对应的 esm 代码，esm 代码中 `export default` 转换为 `module.exports =`，并且 default 改写为一个属性，打印的时候是打印完整对象。

### 环境二
- ids
```json
{
  "name": "ids",
  "version": "1.0.0",
  "main": "dist/index.js",
  "module": "dist/index.esm.js",
  "exports": {
    ".": {
      "import": "./dist/index.esm.js",
      "require": "./dist/index.js"
    }
  }
}
```
其余配置上环境一。

### 结果分析
#### 情景一
``` ts
// 源码
import ids from 'ids'
console.log(ids)
```
- 结果：打印 `undefined`。
- 原因：ts 将 `import` 转换为 `require`，require(ids) 查找到 exports 找到 cjs 文件，返回 ids 构造函数，但是打印的内容是 ids_1.default，因此是 undefined。
```js
'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const ids_1 = require('ids')
console.log(ids_1.default)
```

#### 情景二
``` ts
// 源码
const ids = require('ids')
console.log(ids)
```
- 结果：打印内容为 `ids` 构造函数：
- 分析：require(ids) 查找到 exports 中对应的 cjs 文件，返回 ids 构造函数并打印。

### 总结
- webpack mainFields 查找顺序为 exports > module > main，如果有匹配到的资源，则加载相应的资源。
- require 一个 es 模块时，es 模块的 default 会转换为对象的 default 属性。
- ts 将 es 模块转换为 cjs 模块时，会处理 default 属性的使用问题。
