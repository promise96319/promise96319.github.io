# Tree Shaking 和 按需加载

## side effects
  - package.json side effects
    - 引入外部模块 `import 'test'` 会查找外部模块的 `package.json` 看是否有 `sideEffects`。
    - 引入没有导出：`import './index.js'` 会查找自身 `package.json` 看是否有 `sideEffects` 。
    - 导出了但是没有使用：`export { xx } from 'xxx'` 会查找自身 `package.json` 看是否有 `sideEffects`。
    - 如果导出被使用或者有 `sideEffects` 的文件会被计算分析。

## 参考
- [lodash-es](https://www.npmjs.com/package/lodash-es)
- [webpack tree shaking](https://webpack.js.org/guides/tree-shaking/)
- [从 Tree Shaking 来走进 Babel 插件开发者的世界](https://jishuin.proginn.com/p/763bfbd6d79a)
- [package.json 中 你还不清楚的 browser，module，main 字段优先级](https://github.com/SunshowerC/blog/issues/8)
- [webpack concatenated module](https://www.webpackjs.com/plugins/module-concatenation-plugin/)
- [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env#modules)
- [package.json 别名](https://github.com/jht6/blogs/issues/63)
- [side effects](https://blog.csdn.net/u012961419/article/details/107094056)
- [webpack mark-the-file-as-side-effect-free](https://webpack.js.org/guides/tree-shaking/#mark-the-file-as-side-effect-free)
