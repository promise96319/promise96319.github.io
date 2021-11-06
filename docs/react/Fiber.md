# Fiber

## 起源

在`React15`及以前的版本中，`React`采用递归的方式创建虚拟`DOM`，这个递归过程是不能中断的。如果组件树的层级很深，需要耗费大量时间创建递归创建`DOM`，那么就会阻塞线程，导致界面卡顿。

为了解决这个问题，`React16`引入了`Fiber`，重写了底层架构，将`React`的更新改为了**异步可中断的更新**。

## 结构

在 `react-reconciler/src/ReactFiber.new.js`中，定义了 `Fiber`的结构：

```javascript
function FiberNode(
  tag: WorkTag,
  pendingProps: mixed,
  key: null | string,
  mode: TypeOfMode,
) {
  // ====== 节点相关 =====
  // react 中的一套自己定义的标签
  this.tag = tag;
  // 节点的 key 值
  this.key = key;
  // jsx 解析出来的标签的类型，可以为 字符串，对象等形式。
  this.elementType = null;
  // 大部分情况下与 elementType 相同，但是有时候会被处理为其他值。
  this.type = null;
  // 对于 普通标签，如 div，存储着对应的真实节点
  // 对于 class 组件，存储着对应的 实例
  // 对于 RootFiber，指向的是 FiberRoot
  this.stateNode = null;

  // ====== fiber 结构相关 =====
  // 指向父fiber
  this.return = null;
  // 指向子fiber
  this.child = null;
  // 指向后一个兄弟fiber
  this.sibling = null;
  // fiber 的index，用于 diff 算法对比是否需要移动
  this.index = 0;

  // ref
  this.ref = null;

  // ====== 状态相关 =====
  // 新的 props
  this.pendingProps = pendingProps;
  // 老的 props
  this.memoizedProps = null;
  // 更新队列，保存着所有update，可以通过该队列来改变 state 等
  // 注意：不同类型的节点，他们的更新队列存储的内容可能不一致
  this.updateQueue = null;
  // 老 state
  this.memoizedState = null;
  // 使用了 React.createContext 的 context 时，会将 context 记录下来。
  this.dependencies = null;

  // 当前 react 模式，react18 将默认采用 ConcurrentMode
  this.mode = mode;

  // ====== effect 副作用 =====
  // 当前 fiber 对应的操作
  this.flags = NoFlags;
  // 子fiber 对应的操作
  this.subtreeFlags = NoFlags;
  // 存储哪些 老fiber 下的 子fiber 需要删除
  this.deletions = null;

  // ====== 调度相关 =====
  // 当前 fiber 操作优先级
  this.lanes = NoLanes;
  // 子fiber 操作优先级
  this.childLanes = NoLanes;

  // 指向对应的另一个fiber，构成双缓存结构
  this.alternate = null;
}
```

## Fiber树

每一个节点对应一个 `ReactElement`，每一个`ReactElement`对应一个 `Fiber`。根据节点所在的具体位置，可以通过`Fiber`的`return/child/sibling`三个属性将所有的`Fiber`构建成一颗`Fiber`树。

![img](./imgs/fiber-structure.png)

## 双缓存

在`React`中最多会同时存在两颗`Fiber`树，当前屏幕中已经显示的`Fiber`树在`React`源码中通常以变量`current`表示。当界面更新时，会在内存中构建另一颗`Fiber`树，在源码中以`workInProgress`表示。它们之间可以通过`alternate`变量来访问。具体代码在`react-reconciler/src/ReactFiber.new.js`的`createWorkInProgress`中：

```javascript
workInProgress.alternate = current
current.alternate = workInProgress
```

构建完成后的双缓存结构具体如下：

![img](./imgs/fiber-double-cache.png)

该结构在`reconcile`阶段有着非常重要的作用，后续会在`beginWork`和`completeWork`中会提到具体的执行过程。

## 资料

- [fiber 介绍动画视频](https://www.bilibili.com/video/BV1it411p7v6?from=search&seid=3508901752524570226)
- [inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react](https://indepth.dev/posts/1008/inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react)

- [Fiber 架构工作原理 - 卡颂](https://react.iamkasong.com/process/doubleBuffer.html#什么是-双缓存)