# RSC

## 前端

- 用户体验好，速度快
- 开发体验好，节约开发成本
- 好维护，节约维护成本

## 渲染指标

- 第一个字节到达
- 渲染的内容
- 可交互

## 浏览器渲染

- 传统 ssr
- spa
- ssr/ssg + spa
- ssr/ssg + spa + rsc

## rsc 是什么，解决了什么问题

[https://github.com/reactjs/rfcs/blob/main/text/0188-server-components.md#avoiding-the-abstraction-tax](https://github.com/reactjs/rfcs/blob/main/text/0188-server-components.md#avoiding-the-abstraction-tax)

- 优点：

  - 有完全的服务端能力，离数据源比较近，减少请求时间
  - 0 bundled js，第三包不会打包进来，减小包体积，减少传输时间
  - 自动代码分割，根据 client/server/suspense 自动分割
  - 没有瀑布流，不用等待上层组件
  - 减小抽象语法带来的传输消耗，比如以前传输 React.createElement(FunctionComponent)，现在已经打包成 html/rsc 了，体积会减小。
  - 同一语言，同一框架。

- 一些概念
  - client component/ server component 不是物理上的 client/server，而是 react 组件内部自己定义的。
  - 以前的组件都是 client component，包括 ssr 渲染的组件，这些组件最终都是会在客户端再次渲染一遍。
  - rsc 组件是新定义的组件，该部分组件其实主要处理的就是没有交互的内容。
  - rsc 是打包后以特定的格式返回到客户端，客户端只需要组合响应的 html 更新即可。
  - rsc 格式实际上是类似于 ReactElement 的一种变体，所以 rsc 其实也是不利于 seo 的。因此 rsc 可以与 ssr 进行配合。ssr 负责首次渲染，rsc 负责静态内容渲染更新。

## 怎么解决的，部分实现原理

-

## React api 介绍

- 指令
  - use server
  - use client
  
- hooks
  - use
  - useOptimistic
  - useFormState
  - useFormStatus

- api
  - cache

- 组件
  - form

## Next.js 案例，有哪些不一样的体验，有哪些坑
  
## 其他渲染方式

## 其他人的看法
