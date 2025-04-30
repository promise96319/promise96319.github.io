# svg-sprite-loader 节点挂载错误

## 问题描述

即使微前端通过 `ProxyWindow` 和 `ShadowDOM` 隔离了 `App` 的 `js` 和 `css，` 但是 `App` 的 `svg-sprite-loader` 还是会将 `svg` 节点挂载到全局的 `body` 上。不符合预期。

## 问题原因

排查后发现，`Platform` 中 `svg-sprite-loader` 会在  `window` 上设置一个 `__SVG_SPRITE__` 变量，然后将挂载节点设置为 `body`。

当 `App` 执行的时候，发现 `window` 上有 `__SVG_SPRITE__` 变量，就会直接使用 `platform` 中设置的挂载节点。

## 解决方案

以上问题出现的原因是，`platform` 在 `window` 上设置了一个变量，但是 `app` 能访问这个变量。理论上两者应该是隔离的，各自设置各自的才是最合理的。但是实际上还是将 `platform` 当做基座来处理，也就是 `app` 在加载时克隆 `platform` 的一份环境。

解决方案是，在 `window` 代理时，将 `__SVG_SPRITE__` 这个变量进行特殊处理，将其当做隔离变量，让 `app` 无法访问 `platform` 的这个变量。
