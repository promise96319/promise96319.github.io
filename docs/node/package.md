# packages

## 决定使用何种 module
  - ESM 
    - `.mjs` 后缀
    - `.js` 后缀并且 `package.json` 的 `type` 为 `module`。
    - Strings passed in as an argument to --eval, or piped to node via STDIN, with the flag --input-type=module.
  - CJS
    - `.cjs` 后缀
    - `.js` 后缀并且 `package.json` 的 `type` 为 `commonjs`（或者不指定）。
    - Strings passed in as an argument to --eval or --print, or piped to node via STDIN, with the flag --input-type=commonjs.

## 加载
  - CJS
    - 同步加载
    - 支持将文件夹当做模块
    - 支持加载 `.js/.json/.node` 文件
    - `.json` 文件会被当做文本处理
    - 可以缺省文件后缀
  - ESM
    - 异步加载
    - 文件路径必须完整
    - 仅支持加载 `.js/.mjs/.cjs` 文件

## 入口
  - `main`： 指定 `package` 入口
  - `exports`：指定多个入口
    - 其他未指定的入口如果被其他项目引用则会报错。
    - 可以通过 `import/require` 来指定不同的引入方式需要加载的文件。这样的特定属性包括：
      - `node-addons`
      - `node`：`node` 环境下加载
      - `import`：`import/import()` 下加载
      - `require`：`require` 下加载
      - `default`：默认，比其他的加载方式优先级低
  - `imports`：有点像包的别名，可以通过 `#pkgName` 的方式引入某个包的某些文件。


