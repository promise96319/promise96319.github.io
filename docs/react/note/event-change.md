# 不同版本 React 事件触发顺序不一致问题

## 背景

在开发弹出面板时，需要在 body/document 上绑定事件判断是否需要隐藏打开的面板。最后发现不同版本的 react 表现行为不一致。

``` html
document.addEventListener('click', xxx)  // 原生事件
document.body.addEventListener('click', xxx)  // 原生事件 
<div onClick={xxx} /> // React 合成事件
```

在 `React16` 时，执行顺序为 `body => div => document`

在 `React17`/18 时，执行顺序为 `div => body => document`

# 不同版本React事件触发顺序不一致问题

## 原因

`React 16` 事件委托到 `document` 上，`react 17+` 委托到 `rootNode` 上：

![](https://img-blog.csdnimg.cn/f00c7bb1f3114b1c9e5a64c31c5e6292.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5p-S5ZCb,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

在 16 的情况下，先冒泡到 `body`，触发 `body`。再冒泡到 `document`，触发 `document` 上绑定的合成事件，再触发绑定在 `document` 上的原生事件。可以通过 `e.nativeEvent.stopImmediatePropagation` 阻止 `document` 上的原生事件触发。

在 17+ 的情况下，先冒泡到 `rootNode`，触发合成事件，再冒泡到 `body => document` 。

# 不同版本React事件触发顺序不一致问题

## React 为什么要将事件从 document 改为 rootNode？

如果存在多个版本的 `React` 组件嵌套时，如果冒泡到 `document`，可能存在一个版本的组件 `e.stopPropagation()` 影响到另外一个版本组件（其他的事件行为可能也会被影响）。

如果改为 `rootNode`，不同版本的 `react` 组件间事件就不会相互影响。

# 不同版本React事件触发顺序不一致问题

## 为什么需要合成事件？

1. 内部做了浏览器事件兼容。
2. 减少绑定卸载事件的开销。
3. 统一管理事件，比如更新优先级可以在这里统一设置。
