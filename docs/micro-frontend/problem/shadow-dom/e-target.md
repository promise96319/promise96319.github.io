# shadowDOM 事件冒泡 e.target 错误问题

## 问题描述

在 `shadowDOM` 中，事件冒泡到 `document` 时，`event.target` 会指向 `shadow dom` 的根节点，导致事件处理函数无法正确获取 `target`。

## 解决方案

根据 MDN 文档：

- [Event.composed](https://developer.mozilla.org/en-US/docs/Web/API/Event/composed)
- [Event.composedPath](https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath)

事件对象上可以通过 `composedPath` 访问 `shadowDOM` 内部具体触发事件的节点。因此，可以覆写 `event.target` 对象，指向真正的事件触发节点。

解决方法：

```ts
// shadow dom 冒泡到 document 时，event.target 会指向 shadow dom 的根节点，导致事件处理函数无法正确获取 target
// https://developer.mozilla.org/en-US/docs/Web/API/Event/composed
// https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath
const rewriteShadowDomEventTarget = (listener: EventListenerOrEventListenerObject): EventListener => {
  return function proxyListener(this: typeof globalThis | Document, event: Event, ...args: any[]) {
    const newListener = typeof listener === 'function' ? listener : listener.handleEvent.bind(this);
 
    if (!event.composed) {
      return newListener.call(this, event, ...args);
    }
 
    const paths = event.composedPath();
    const actualTarget = paths[0];
    try {
      return newListener.call(
        this,
        new Proxy(event, {
          get: (target, key) => {
            if (key === 'target') {
              return actualTarget;
            }
            return Reflect.get(target, key);
          }
        }),
        ...args
      );
    } catch (e) {
      return newListener.call(this, event, ...args);
    }
  };
};
```
