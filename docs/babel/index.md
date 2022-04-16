# babel

- [插件开发](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md)

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



  ## 文章框架
  - 背景需求是什么？
   
  - 为什么会需要 babel？babel 解决了什么问题 ?
    - babel-loader 加载
    - react-refresh/babel-runtime react 热更新
    - babel-import-plugin 按需加载

  - babel 详细介绍
    - 使用方式
      - @babel/cli
      - .babelrc

    - babel 核心包
      - 整合包 cli/polyfill/plugin-transform-runtime/register/standalone
      - 工具包 parser/core/generator/code-frame/runtime/template/traverse/types
      - 

    - presets
      - 为什么会有 presets?
      - 什么是preset？
      - @babel/preset-env
      - @babel/preset-react
      - @babel/preset-typescript
      - @babel/preset-flow

    - plugins
      - 为什么会有plugin?
      - 怎么写一个plugin?

  - 插件开发（按需加载为例）
