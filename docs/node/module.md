# node:module

## api
  - `builtinModules`：返回 `node` 所有内置模块的名称，返回值为 `string[]` 形式。
  - `createRequire`：生成 `require`。
  - `isBuiltin`：是否是内置模块
  - `syncBuiltinESMExports`：同步 `cjs` 对内置模块的变更到 `esm` 上。比如 `cjs` 删除 `fs.readFile`，通过同步变更，会使得 `import('node:fs')` 引入的模块中也没有 `readFile`。
  - SourceMap（试验性）
