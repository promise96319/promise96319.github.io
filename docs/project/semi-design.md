# Semi Design

[Semi Design - UI组件库如何分层设计，使其具备适配多种mvvm框架能力](https://bytedance.feishu.cn/wiki/wikcnOVYexosCS1Rmvb5qCsWT1f)

## 问题

对于组件库而言，使用不同的框架时需要封装不同的组件。比如 `Antd（React 版）` 需要使用到 `React` 版的 `rc-table`，如果需要在 `Vue` 使用 `Antd`，又需要重新写 `Vue` 版的 `Antd`，同时还需要写 `Vue` 版的 `rc-table`。

依次类推，如果需要在 `Svelte` 中使用该组件库，那么所有基础组件内容都得重写一遍。

但是实际上，不同框架封装的组件库在交互逻辑上是一致的，多次重复封装无疑增加了开发成本。

## 解决

`Semi Design` 通过 `Foundation/Adapter` 的架构实现了组件逻辑上的复用，而不限于框架层面。它通过适配器模式来处理不同框架 `Api` 语法上的不同。

对于一个组件来讲，不同的框架，他们不同的地方主要在 `DOM` 结构的编写、状态的定义和修改上，其他内容都是共用的。

比如对于 `select` 来讲，`onChange` 后的逻辑，对于不同的框架都是共通的，不同的是最后触发更新 `state` 的方式不同。

因此，`F/A` 架构将这些通用的内容，也就是组件的交互逻辑封装到 `Foundation` 组件中。而不同的地方通过 `Adapter` 适配器的方式对状态，事件处理，`dom` 结构进行兼容处理。

**最后组件封装变为**：

```text
data/state 渲染 => onClick 触发事件 => 

触发 foundation.handleClick => foundation 处理逻辑 =>
foundation 调用 adapter 变更状态 => 

adpter 通过 setState/this.data 更改状态

```

因此，对于不同框架的组件而言，只需要开发不同版本的 `adapter` 即可，而组件内部的处理逻辑都能进行复用。
