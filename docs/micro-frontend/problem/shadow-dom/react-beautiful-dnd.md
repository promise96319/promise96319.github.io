# react-beautify-dnd 库拖拽功能失效

## 背景

在微前端中，`App` 中的 `kit-dnd`、`react-beautify-dnd` 等库失效，无法进行拖动。
![](imgs/2025-04-30_14-35-43.png)

## 问题原因

通过调试发现，在 `shadow DOM` 内部， `react-beautify-dnd` 里在监听 `mouseEvent` 时，事件对象冒泡到最外层时，拿到的 `target` 的是 `shadowRoot`。因此，微前端里将事件对象 `target` 使用 `proxy` 进行了代理，而原生事件对象不支持 `Proxy` 对象，因此实际执行的时候报错”非法调用“。

## 解决方案

针对该问题，可以通过 `Object.defineProperty` 来代理 `event.target` 对象，这样就不用返回一个 `Proxy` 对象，使得函数调用不报错。

通过以上修改后，可以正常进行拖拽，但是拖拽后底部元素的动画丢失。排查原因为，`react-beautify-dnd` 中使用到了 `document.documentElement.scrollHeight`，而 `base` 中将 `documentElement` 指向的是 `app shadow DOM` 内部虚拟的 `html` 元素，导致 `dnd` 内部动画位置计算错误。

针对该问题，需要将 `documentElement` 指向全局的 `HTML`。因此后续使用 `documentElement` 时应以全局 `html` 为主。
