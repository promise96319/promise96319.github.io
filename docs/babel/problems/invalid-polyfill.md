# 项目产物兼容性问题

## 问题描述

项目中遇到一个问题，项目中使用了 `String.replaceAll` 方法，并且在 `Webpack` 中配置了 `targets: { chrome: '54' }`，但是打包后的产物在 54 版本的 `Chrome` 浏览器中 `replaceAll` 还是会报错。 webpack 配置如下：
```js
{
  test: /\.(ts|js)x?$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: [
          [
            '@babel/preset-env',
            {
              targets: { chrome: '54' },
            }
          ]
        ],
      }
    },
    'ts-loader'
  ]
},
```

```js
// 实际代码
const str = 'aaabbb'.replaceAll('a', 'b')
```

## 问题原因
`@babel/preset-env` 其实做的是两件事：
  
  - 一件事是语法转换，当设置 `targets` 时，会根据浏览器版本将高级 `js` 语法转换为低版本 `js` 语法。比如 `const` 转换为 `var`，箭头函数转换为 `function`。
  - 第二件事就是 `API` 补齐。因为一些语法并不能直接转换为低版本语法，比如 `replaceAll/Promise.finally` 等。所以需要增加相关 API 定义，比如转换后在文件头部添加 `replaceAll` 的定义就可以解决了：

  ```js
  // 在文件头部添加
  String.prototype.replaceAll = function() {...}
  ```


实际上，设置 `targets` 只是做了第一件事，第二件事则需要设置 `useBuiltIns` 和 `corejs` 参数。

  - `corejs` 是一些低版本 `js` 语法定义的集合，`corejs3` 相较于 `corejs2` 支持更多的语法，体积更小，性能更好，所以一般采用 `corejs3`。最近 corejs 的作者发了一篇他的 [开源经历](https://github.com/zloirock/core-js/blob/master/docs/2023-02-14-so-whats-next.md)，感兴趣可以看看。
  - `useBuiltIns` 表示是否使用 `corejs` 中的 `API` 补齐。默认不使用，为 `usage` 是为按需引入。

``` js
[
  '@babel/preset-env',
  {
    targets: { chrome: '54' },
    useBuiltIns: 'usage',
    corejs: '3'
  }
]
```

当设置以上两个参数后，就能确保 `replaceAll` 方法在 `Chrome54` 版本浏览器上正常使用了。

但是实际项目在生产环境中又会报 `exports is not defined` 错误，排查原因是因为 `import` 和 `required` 共存导致 `Webpack` 打包时按 `es` 模块语法生成，未生成 `cjs` 语法相关的定义。但是在加入 `corejs` 相关配置前是没有这个问题的。

那么，为什么加入 corejs 配置后会出现 es 和 cjs 共存的情况呢？首先猜测是追加的 corejs 代码的引入方式与实际代码模块不一致。比如我们 tsconfig module 设置的是 cjs，那么 babel-loader 接收到的是 cjs 代码，此时如果 corejs 通过 es module 引入，就会导致该问题。

那么 corejs 代码是在哪注入的呢，查找到代码：
```js
injectGlobalImport(url) {
  cache.storeAnonymous(prog, url, (isScript, source) => {
    return isScript
      ? template.statement.ast`require(${source})`
      : t.importDeclaration([], source);
  });
}
```
当 isScript 为 true 时，使用的是 cjs，否则使用 es 语法。继续查找：
```js
// isScript 参数
programPath.node.sourceType === 'script'
```
isScript 与 sourceType 相关，查找 babel 文档 sourceType，默认情况下 sourceType 为 module，因此默认情况下注入的是 es 模块语法。证实了之前的猜想，因为 tsconfig.json 的 module 设置为了 commonjs 将代码转为 cjs 格式。在 babel-loader 中添加 es 模块的 corejs 代码，从而导致打包后的产物运行报错。

如何解决这个问题呢？答案是另外一个参数：modules。modules 表示是否允许将 es 模块语法转换为 cjs，为 false 时表示不将 es 语法转换为 cjs 语法，默认值为 auto。
```js
shouldTransformESM: modules !== 'auto' || !api.caller?.(supportsStaticESM)
```
[babel-loader 默认会设置 supportsStaticESM: true](https://github.com/babel/babel-loader/blob/main/src/injectCaller.js#L16)，也就以为着不会将 es 模块语法转换为 cjs 模块语法，导致最终打包后的产物运行报错。

所以解决方法可以有：

  - tsconfig.json 中 module 改为 esnext，让 ts 生成的为 es 代码。
  - 将 modules 设置为 cjs，这样 es 代码就可以全部转换为 cjs 代码了。




