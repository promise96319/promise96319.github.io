# vite

## vite

- vite 和 webpack 对比 <https://juejin.cn/post/6860107020419530760>

## esbuild

### 介绍

- 文档 <https://esbuild.github.io/>
- vite esbuild <https://juejin.cn/post/7043777969051058183>
- 使用 <https://juejin.cn/post/6883862821289852936>

### 为什么快

- <https://www.imgeek.org/article/825357668>

### esm

- <https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules>

### 依赖

- [picocolors](https://www.npmjs.com/package/picocolors)
  - 作用：打印信息
  - 优点：无依赖，比 `chalk` 体积小，速度快
- [chokidar](https://www.npmjs.com/package/chokidar)
  - 作用：监测文件变化
  - 优点：修复了 `fs` 的一些问题。
- [connect](https://www.npmjs.com/package/connect)
  - 作用：给 `http server` 添加中间件的插件。

### 流程

- 本地服务
  - 启动 httpserver
    - 使用中间件
    - plugins 里有所有内置的 vite 插件，包括 import analysis
  - 请求发送时，会经过中间件
