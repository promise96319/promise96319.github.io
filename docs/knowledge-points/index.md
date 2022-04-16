# 知识点

## todo list
- umd amd esm cjs 的区别及应用场景？（完成）
  - https://juejin.cn/post/6844903978333896718
  - https://juejin.cn/post/6935973925004247077
  - amd => 客户端 异步
  - cjs => 服务端 同步
  - esm => 异步 可树摇
  - umd => 通用 兼容性写法：amd, cjs等，作为备用
- scss 高级用法 （完成）
- css BEM 规范 （完成）
  - block / element / modifier
  - block-block__element--modifier {}
- bisheng 框架怎么使用？(完成)
  - 自己定义主题模板，渲染 md 数据。
- npm 包配置（完成）

- npm 包管理工具 npm cnpm pnpm yarn lernajs.cn
  - pnpm对比npm和yarn https://xingyahao.com/c/pnpm-npm-yarn.html
- webpack chain 写法 (完成)
  - https://github.com/Yatoo2018/webpack-chain/tree/zh-cmn-Hans

- react props.children 和 组件实例 的写法区别(完成)
  - 为什么不会影响 props.children的更新却会影响组件的更新。
  - 主要区别在于 ReactElement 重新生成了，导致 props 发生变化（虽然内容一样，但是是一个新的对象指针）

- react 热更新
  - 基于 react-refresh： https://github.com/pmmmwh/react-refresh-webpack-plugin
  - react 提供的热更新：https://www.npmjs.com/package/react-refresh




- lodash 学习

- vite / go 语言

- node / express / koa / egg / graphql / mysql / mongodb / redis / docker

- （支付宝技术体验） umi4 => 新功能点
- （支付宝技术体验） npm 包优化 npm => yarn => cnpm => pnpm => 阿里npm

- preact 打包体积小？


## todo

- vite 学习
  - yaml 学习
  - npm-run-all 包
    - https://segmentfault.com/a/1190000017282417
    - run-s 顺序，run-p 并行，run
  - git hooks
  - json5 包
    - 支持类似于对象的写法！
    - https://zhuanlan.zhihu.com/p/108119490
  - api extractor
    - ts types 整理和 文档
    - https://zhuanlan.zhihu.com/p/434565485
  - cac 包
    - 与commander类似，提供相关命令
  - chokidar 包
    - 处理文件
    - https://www.npmjs.com/package/chokidar