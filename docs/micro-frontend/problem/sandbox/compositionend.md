# React compositionend 事件未触发问题

## 问题背景

采用 `window` 代理后，`UiSearch` 里输入中文拼音时存在问题，出现输入内容和实际内容对不上的问题。排查发现 `React` 的 `onCompositionEnd` 事件未触发，而 `onCompositionStart` 事件触发的 `nativeEvent` 是 `keydown` 事件，而非 `compositionstart` 事件。

## 问题原因

查看 `React` 源码发现，`React` 内部做了 `CompositionEvent in window` 的判断：如果支持 `CompositionEvent` 这个 `API`， 那么就使用 `composition` 原生事件监听。否则，采用降级方案，也就是 `keydown/up` 等事件，从而导致触发的时机不对。

## 解决方案

解决方案为在使用沙箱代理 `window` 时，`WindowProxy` 对象的 `has` 方法中加入 `key in window` 的判断，让代理 `window` 也支持所有 `window` 原生支持的内容。
