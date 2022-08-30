# Tree Shaking 原理和组件库按需加载实践
![tree shaking](./tree-shaking.svg)

## Tree Shaking 是什么

## Tree Shaking 原理

  - 将 `Webpack Tree Shaking` 

## 组件库按需加载
### ES module
  - 组件库导出需要有 `es` 模块。如 `dist/es/组件内容`
  - 外部引入时，需要可以指向 `es`，通过 `package.json` 里的 `module` 字段制定。
  - `package.json` 中需要指定 `sideEffects`，标识副作用。
  - 项目中使用时，需要保证编译后都是 `es` 模块。比如 `tsconfig.json` 里的 `module`、`@babel/preset-env` 里的 `module` 属性， 都有可能更改模块形式。
  - 例如：`lodash` => `lodash-es`

### babel-plugin-import
将 `import { Button } from 'xxx'` 改写为 `import { Button } from 'xxx/button'`
  - 类型可以不考虑，因为经过 `ts-loader` 后，类型被剔除了。
  - 对于不规则的组件名称，需要通过 `customName` 方法来自定义相应的引入路径。  
  - 例如：`loadash` 引入路径转换

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
