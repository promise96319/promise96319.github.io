# ESM 模块

## 导入

- `file:URLs`：`import './foo.mjs?query=1'`通过路径导入
- `data:imports`：`import 'data:text/javascript,console.log("hello!");';` 导入时指定数据类型（`assert` 处于试验阶段）
- `node:imports`：`import fs from 'node:fs/promises'` 导入内置模块

## import.meta

- `url`：文件的绝对路径，包含文件名称。
- `resolve`：(试验阶段)，返回路径的`Promise`。

## 与 CJS 不同点

- 没有 `require/exports/module.exports` 等内容，可以通过 `node:module` 里的 `createRequire` 来生成 `require`。
- 没有 `__filename/__dirname`

## 试验阶段

- 引入 `json/wasm` 模块
- `https:/http:` 模块
- `Loaders` 类似于 `webpack loader`
