# 资料

- [官方使用手册](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/user-handbook.md)
  - parse 成 ast(acorn => babylon => @babel/parser)
  - ast 转换 ast
    - plugin 从前到后执行。
      - 写插件使用 visitor 访问节点，然后用 @babel/types 修改节点。
    - presets 从后到前执行（生成对应环境下的ast）
      - 通常已经提供了相关的preset，只需要整合即可。如 @babel/preset-env、@babel/preset-react、@babel/preset-typescript等
      - es6和es2015+的关系：https://es6.ruanyifeng.com/#docs/intro 目前大部分浏览器已经兼容es6大部分语法了。
  - generate 代码

- [ast 实时转换工具](https://astexplorer.net/)
- [.babelrc 和 babel.config.js 的区别](https://github.com/willson-wang/Blog/issues/100)
- [babel 插件开发](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md)
