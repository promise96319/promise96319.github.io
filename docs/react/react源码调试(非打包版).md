# react源码调试（非打包版）

## 问题
之前调试 `react` 源码时，都是将 `react` 打包后进行调试。这种方案虽然也能达到调试的目的，但是相较于直接调试源代码，还是不够直观方便。

## 思路
将 `react` 源码作为本地文件引入，然后用 `webpack` 配合 `sourcemap`，这样就能跟踪到源代码。但是在这个过程中还有一些任务需要处理。

### 1.拉取 `react` 源码：

```shell
git clone https://github.com/facebook/react.git
```

拿到 `react` 源代码(后面以目录名`react-main`为例)，其中 `packages` 目录包含所有 `react` 相关的包。

### 2. 新建一个 `webpack` 打包项目
`webpack.config.js`配置如下：

``` javascript
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const resolve = target => path.join(__dirname, target)

module.exports = {
  // 入口文件目录
  entry: [
    './src/index.js'
  ],
  module: {
    rules: [
      // 处理 js 文件
      {
        test: /\.js$/,
        include: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            // 添加 react 和 flow preset，用于解析 flow 和 react 语法
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow'],
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      // 这里可以添加一些自己想要调试的源码包，路径为我们 clone 的源代码路径
      'react': resolve('../react-main/packages/react'),
      'react-dom': resolve('../react-main/packages/react-dom'),
      'react-reconciler': resolve('../react-main/packages/react-reconciler'),
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: './index.html'
    }),
    // 在 `react` 中会有一些环境变量，这里需要单独去设置。
    new DefinePlugin({
      '__DEV__': true,
      '__PROFILE__': false,
      '__EXPERIMENTAL__': true,
      '__UMD__': true
    }),
  ],
  devServer: {
    static: './dist',
    port: 8080,
  },
  // 设置 sourcemap，用于关联源代码。
  devtool: 'inline-cheap-module-source-map',
  hot: true,
  mode: 'development'
}
```

其中需要安装的开发包有：

``` json
{
  "devDependencies": {
    "@babel/core": "^7.17.5",
    "@babel/preset-env": "^7.16.11",
    "@babel/preset-flow": "^7.16.7",
    "@babel/preset-react": "^7.16.7",
    "babel-loader": "^8.2.3",
    "html-webpack-plugin": "^5.5.0",
    "webpack": "^5.70.0",
    "webpack-cli": "^4.9.2",
    "webpack-dev-server": "^4.7.4"
  }
}
```

## 处理 `react` 报错
在实际运行时，`react` 内还有一些变量方法由于没有“进行打包”会报错，需要手动进行处理。

### 修改 `ReactSharedInternals`
修改 `/react-reconciler/src/ReactFiberHostConfig.js`，原有内容注释掉， 添加一行：
```javascript
export * from './forks/ReactFiberHostConfig.dom';
```

### 关闭函数 `invariant`
修改 `/shared/invariant.js`，直接 `return`。不让报错：
```javascript
export default function invariant(condition, format, a, b, c, d, e, f) {
  return
  throw new Error(
    'Internal React error: invariant() is meant to be replaced at compile ' +
      'time. There is no runtime version.',
  );
}
```

### 将 `React` 和 `ReactDOM` 默认导出
`react/index.js`：
```javascript
import * as React from './src/React'
export default React
```
`react-dom/index.js`：
```javascript
import * as ReactDOM from './src/client/ReactDOM'
export default ReactDOM
```

## `chrome` 调试
最后正常启动 `webpack` 项目，在 `chrome` 的 `source` 目录中就可以调试源代码了。

## `vscode` 调试
详情参见 `vscode` 的 [debug 插件](https://github.com/microsoft/vscode-js-debug)。仅需点击运行的命令链接即可在 `vscode` 中调试。

## 参考
- [react-source-code-debug](https://github.com/neroneroffy/react-source-code-debug/blob/master/docs/setUpDebugEnv.md)
