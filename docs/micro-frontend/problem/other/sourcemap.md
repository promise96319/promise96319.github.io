# sourcemap 失效问题

## 背景

在微前端中，采用 `eval` 函数来执行子 App 的 js 代码。

`eval(code)` 执行代码的时候，在浏览器中没有相应的 `js` 文件以及 `sourcemap` 文件，对于调试来讲十分困难。

## 解决方案

在执行 `eval(code)` 的时候，添加 `sourceMappingURL`，类似如下：

```js
//# sourceMappingURL=<http://example.com/path/to/your/sourcemap.map>
```

添加完成后，浏览器在加载的时候会出现 `app` 的 `js` 代码。

但是还存在另外一个问题，`app` 的 `js` 代码外层包裹了一些代理 `window` 等代码。导致 `sourcemap` 的映射关系出现偏差。当把外层包裹的代码拍平成一行时，可以让 `sourcemap` 位置正确。

但是后来又发现：偶尔会出现断点变量对不上的问题，以及偶尔会出现控制台崩溃的问题。大概率是 `sourcemap` 对不上导致的，`qiankun` 同样存在这样的问题：[https://github.com/umijs/qiankun/issues/1088](https://github.com/umijs/qiankun/issues/1088)。看评论可以通过 webpack.BannerPlugin 在开发环境下给 `js` 文件添加一行注释，这样 `js` 的 `sourcemap` 从第二行开始就没有问题了。
