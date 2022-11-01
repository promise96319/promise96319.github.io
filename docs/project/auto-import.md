# 自动引入方案

## 背景
对于一些通用库和共用文件，每个文件都需要重复引入一遍，比较麻烦。另外引入内容过多时，代码的可读性不强。

## 解决目标
对于通用文件可以无需引入即可使用相关 api：
  - 通用库：比如 `react/react-dom/mobx/classnames/...` 等等。
  - 内部私有库： 比如 `@qt/design、@qt/ui、@qt/style、@qt/shared` 等等。
  - 公用文件：比如 `common/` 文件夹下的公用组件等。 

## 解决方法
使用 `auto-import-plugin` 插件：https://github.com/antfu/unplugin-auto-import
  1. 根据文档在 `webpack` 配置中添加 `auto-import-plugin` 插件。
  2. `tsconfig.json` 引入插件生成的类型声明文件。
  3. `.eslintrc` 引入插件生成的 `global` 声明文件。

## 一些问题
1. 是否支持按需引入？
  - 支持，插件内部会判断是否使用了某个库的某个变量，来决定是否引入该库。

2. 是否支持类型提示？
  - 支持，但是会多一层类型声明，点击跳转的时候会多点一次，不够理想。

3. 是否有 `eslint` 错误？
  - 没有。插件内部会将相应的变量在 `eslint global` 中声明，所以不会存在 `no-undef` 错误。但是 `react/jsx-no-undef` 会存在错误，需要开启 `allowGlobal: true` 配置，允许全局定义的变量解决。

## 案例
  - [Element Plus](https://element-plus.org/zh-CN/guide/quickstart.html#%E6%8C%89%E9%9C%80%E5%AF%BC%E5%85%A5)
