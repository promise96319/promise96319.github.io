# webpack 优化

## 缓存
### [cache-loader](https://webpack.docschina.org/loaders/cache-loader/)
  - cache-loader 允许缓存 loaders 到（默认）磁盘或数据库(与babel-loader相似)。
  - 在一些性能开销较大的 loader 之前添加 cache-loader，以便将结果缓存到磁盘里。
### [babel-loader](https://webpack.docschina.org/loaders/babel-loader/)
  - cacheDirectory：用指定的目录将来缓存 loader 的执行结果。之后的 webpack 构建，将会尝试读取缓存，来避免在每次执行时，可能产生的、高性能消耗的 Babel 重新编译过程(recompilation process)
  - cacheCompression：默认值为 true。当设置此值时，会使用 Gzip 压缩每个 Babel transform 输出。
  - Babel 在每个文件都插入了辅助代码，使代码体积过大，可以引入 Babel runtime 作为一个独立模块，来避免重复引入。


## 多进程打包
### [tread-loader](https://webpack.docschina.org/loaders/thread-loader/#root)
  - 使用时，需将此 loader 放置在其他 loader 之前。放置在此 loader 之后的 loader 会在一个独立的 worker 池中运行。

## 文件查找过程(resolve)
减少文件查找过程（优化：make阶段 => factorizeModule阶段 => resolve 阶段）：
  - extensions
  - modules
  - alias
  - ...

## 打包体积
### webpack-bundle-analyzer
  - 进行打包体积分析
### css
  - optimize-css-assets-webpack-plugin 进行 css 压缩。
  - css-minimizer-webpack-plugin 优化、压缩 CSS。
  - mini-css-extract-plugin 将 CSS 提取到单独的文件中，为每个包含 CSS 的 JS 文件创建一个 CSS 文件，并且支持 CSS 和 SourceMaps 的按需加载。
### img
  - image-webpack-loader 进行图片压缩
### js
  - terser-webpack-plugin 压缩 js
  - compression-webpack-plugin gzip压缩
### externals
  - 将一些包分离出去，用CDN的方式引入
### split-chunks-plugin
  - 对公共包进行提取
  - 对包进行拆分合并
### tree shaking

## 其他
  - 使用动态导入进行分包，按需加载。
  - 将比较大的静态资源上传到 CDN。