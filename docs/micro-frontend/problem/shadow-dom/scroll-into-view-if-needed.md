# ScrollIntoViewIfNeeded 在微前端场景下失效

## 问题背景

`ScrollIntoViewIfNeeded` 在微前端下，滚动效果失效。

## 问题原因

原因是其内部使用 `parentNode === document` 判断是否在 `document` 场景下吗，但是实际上这里的 `document` 是一个 `proxyDocument`，非全局的 `document`，因此永远返回 `false`。

## 解决方案

<https://github.com/umijs/qiankun/pull/2415/files>

代理 `Node.prototype` 上的 `parentNode` 属性。如果当前处于子应用的运行环境，那么使用 `parentNode` 指向子应用的 `proxyDocument`，否则指向全局的 `document`。
判断子应用的运行环境的时候，通过 `window` 属性 `get/set` 的来全局设置。（这样虽然不一定准确，但是也没有更好的方法能去判断了）。

后来又产生问题：

在开发环境下，以上改动生效了，该库可以滚动。但是在生产环境下，这种改动却失效了。

原因是，在开发环境下，该库的代码是 `xx.parentNode === window.document`，但是在生产环境下，该库的代码是 `xx.parentNode === document`。当代码执行时，由于没有直接调用 `window.xxx`，没有触发 `window` 的 `get` 方法，导致没有将当前 `app` 的运行环境保存下来，导致最终的检测失败。

解决方案为，访问 `parentNode` 时，手动调用一下 `window.__NULL__` 触发一下 `get` 方法（hack way）。

## 后续问题

经过 `qiankun` 改造后，发现滚动又失效了。原因是，在 `qiankun` 沙盒中，会在 `bootstrap` 和 `mount` 生命周期里，分别创建 `proxyDocument`。这就导致 `bootstrap` 创建的沙盒，执行的 js 访问到的 document 指向的是 `bootstrap` 创建的 `proxyDocument`。但是等到 `App` 挂载完成后，`mount` 生命周期又创建了一个 `proxyDocument`。此时 `App bootstrap` 沙盒里的 js 访问的 `window.document` 指向的是 `mount` 生命周期的 `proxyDocument`。这就导致一个奇怪的现象：`document === window.document` 不成立。原因就在于 `window` 是同一个，但是 `document` 是多个。

解决方案为：如果 `window` 下已经存在了 `proxyDocument`，那么就不应该再创建 `document`，而是复用之前的 `proxyDocument`。
