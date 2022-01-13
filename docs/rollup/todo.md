# module bundlers todo

## rollup
### 介绍
- https://github.com/xitu/gold-miner/blob/master/TODO/rollup-interview.md

### rollup vs webpack
- https://juejin.cn/post/6844903473700405261
- https://juejin.cn/post/6971970604010307620
  - 优点：
    - scope hoist: 生成的代码作用域提升，代码合并，代码更清晰，代码体积更小。
    - tree shaking: 自动支持 tree shake（标记清除法）。
    - split code: 支持 split code，手动分配 > 动态导入 > 默认。
  - 缺点：
    - 主要针对纯js模块打包，如果加载其他文件，需要对应的插件处理。
    - 不支持 HMR，因为作用域提升代码被合并(重名内容会进行重命名)。
  - 应用：
    - rollup 主要应用于js库，webpack主要应用于应用程序

### 源码
- https://segmentfault.com/a/1190000023820306

### 插件开发
- https://rollupjs.org/guide/en/#plugins-overview



## parcel（待定）

## gulp / glob

## WebAssembly



