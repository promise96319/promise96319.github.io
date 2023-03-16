# SSR 

## 传统服务端渲染 SSR
- 前后端代码杂糅在一起，不利于维护。
- 前后端存在两种语言，代码复用率低。
- 用户每次切换页面都会刷新页面，体验不好。

<!-- ## ajax 充当的作用 -->

## 客户端渲染 CSR
- 优点
  - 单页面应用，无感切换页面，用户体验号
  - 前后端分离，维护方便
- 缺点
  - 首屏渲染慢，白屏时间长
  - SEO 不友好

## Node 服务端渲染 SSR
- 优点
  - 首屏渲染快，白屏时间短
  - SEO 友好
  - 前后端技术栈统一，代码复用率高，维护方便。
- 缺点
  - 服务端压力大，性能不稳定
  - 服务端渲染代码复杂，维护成本高
  - 用户每次切换页面都会刷新页面，体验不好。

## 同构渲染
首次渲染使用服务端渲染，后续流程都采用客户端渲染。这个过程需要进行 hydrate 操作，为已渲染的 html 注入事件等内容，同时转换为客户端渲染形态。
同构渲染，也就是一套代码既可以在客户端运行，也能在服务端运行。
- 优点：结合客户端渲染，服务端渲染优点。
  - SEO 友好
  - 首屏较快
  - 技术栈统一，代码复用率高，维护方便
  - 服务端渲染压力适中
  - 用户体验较好
- 缺点：
  - hydrate 过程复杂。
  - 服务端渲染有一定的限制，比如没有 mount 等钩子、window 等对象等，与客户端渲染有一定的差别。

## 流式渲染
react 采取流式渲染，动态获取的内容可以稍后再加载，而不需要在第一次（首屏）时渲染。
### React API
- client -> hydrate
- server -> renderToString/renderToPipeableStream
- react 流式传输

### Web Stream
- [Web Streams API](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API)
- [精读 web streams](https://juejin.cn/post/7022807505856102408)


## Astro 选择性流式渲染
astro 采取的是选择式渲染，能标明哪些内容是动态获取的。

## 边缘渲染 ESR
边缘渲染，静态内容通过 CDN 节点获取，动态内容向中心服务器获取。