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


- babel 学习（完成）
  - 介绍：https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/user-handbook.md
  - plugin 开发：https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md
  - 官方文档：https://www.babeljs.cn/docs/
  - 思路
    - parse 成 ast(acorn => babylon => @babel/parser)
    - ast 转换
      - plugin 从前到后执行（更改ast）
        - 写插件使用 visitor 访问节点，然后用 @babel/types 修改节点。
      - presets 从后到前执行（生成对应环境下的ast）
        - 通常已经提供了相关的preset，只需要整合即可。如 @babel/preset-env、@babel/preset-react、@babel/preset-typescript等
        - es6和es2015+的关系：https://es6.ruanyifeng.com/#docs/intro 目前大部分浏览器已经兼容es6大部分语法了。
    - generate 代码
  - 搞两个 babel 的插件学习一下


- lodash 学习

- vite / go 语言

- node / express / koa / egg / graphql / mysql / mongodb / redis / docker

- （支付宝技术体验） umi4 => 新功能点
- （支付宝技术体验） npm 包优化 npm => yarn => cnpm => pnpm => 阿里npm


## preact