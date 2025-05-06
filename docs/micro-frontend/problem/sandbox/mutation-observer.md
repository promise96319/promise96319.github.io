# Chrome 57 版本 MutationObserver 报错

## 问题描述

在 `Chrome 57` 版本下，`Platform` 加载 `App` 时报错: `MutationObserver observer` 的第一个参数节点不是 Node。

## 问题原因

该问题产生的原因是 `document` 被重写为 `ProxyDocument` 导致的，`App` 内部访问到的 `document` 实际上是一个 `Proxy` 对象，导致 `observer` 函数访问的一个参数不是 `Node` 节点，从而报错。

## 解决方案

将 `MutationObserver.prototype.observer` 进行重写，判断监听的元素是否是 `proxyDocument`。如果是的话，将其代理到 `nativeDocument`。

```typescript
const nativeMutationObserverObserveEn = MutationObserver.prototype.observe;

const observe = function observe(this: MutationObserver, target: Node | typeof Proxy, options: MutationObserverInit) {
  const realTarget = isProxyDocument(target) ? globalEnv.rawDocument : target;
  return nativeMutationObserverObserveEn.call(this, realTarget, options);
};

MutationObserver.prototype.observe = observe;
```
