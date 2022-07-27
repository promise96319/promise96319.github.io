Semi Design

[Semi Design - UI组件库如何分层设计，使其具备适配多种mvvm框架能力](https://bytedance.feishu.cn/wiki/wikcnOVYexosCS1Rmvb5qCsWT1f)


### 问题
不同的框架需要封装不同的组件，比如 `antd(react)` 需要使用到 `react` 版的 `rc-table`，如果需要在 vue 使用 `antd` ，那么需要重新写 `vue` 版的 `antd`，同时还需要写 `vue` 版的 `rc-table`。如果还需要放到 svelte 版本，那么所有基础组件内容都得重写一遍。

### 解决
`semi design` 通过 `Foundation/Adapter` 实现了组件逻辑上的复用，而不限于框架层面。其实就是适配器模式。

对于一个组件来讲，不同的框架，他们不同的地方主要在DOM结构的编写、状态的定义与修改上，其他内容都是共用的。

比如 `handleChange` 后的逻辑，对于不同的框架来讲都是共通的，不同的是最后触发更新 `state` 的方式不同。

因此，`F/A` 架构将这些共同的内容，也就是组件的逻辑封装到 `Foundation` 组件中，而不同的地方通过 `Adapter` 适配器的方式对状态，事件处理，`dom` 结构进行兼容处理。

**最后组件封装变为**： `data/state => onClick => foundation.handleClick => foundation 处理逻辑 => foundation 调用 adapter 变更状态 => adpter 通过 setState/this.data 更改状态`。

因此，对于不同框架版本的组件，最终只需要做不同版本的 `adapter` 即可。而组件内部的计算逻辑都能轻易复用。
