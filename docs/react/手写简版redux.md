# 手写简版redux

[实现代码](https://codesandbox.io/s/shou-xie-jian-ban-redux-k3p7z)

## createStore

1. `createStore`接收的第一个参数是`reducer`，需要返回`getState`，`dispatch`，`subscribe`等方法。
2. `getState`返回的是当前的状态，可以用一个变量保存该状态：`currentState`。
3.  `reducer`接收`state`和`action`作为参数，可以通过`action`匹配不同的方法改变`state`，最终返回新的`state`。
4. `dispatch`的参数`action`，作为执行`reducer`的参数，并将`reducer`返回的新的`state`更改为当前`state`。
5. `subscribe`用于收集回调函数，在`currentState`改变时触发。

```javascript
export const createStore = (reducer) => {
  let currentState
  let currentListeners = []

  const getState = () => {
    return currentState
  }

  const dispatch = (action) => {
    currentState = reducer(currentState, action)
    currentListeners.forEach(listener => listener())
  }

  const subscribe = (listener) => {
    currentListeners.push(listener)
    // 返回取消监听函数
    return () => {
      const index = currentListeners.indexOf(listener)
      currentListeners.splice(index, 1)
    }
  }

  // 更新初始化状态
  dispatch('@@redux/INIT-123456')

  return {
    getState,
    dispatch,
    subscribe
  }
}
```

## compose

将一个函数的返回结果作为另一个函数的参数，如：

```javascript
// 原始写法
fn1(fn2(fn3(args)))

// 使用compose 函数可以改写为
compose(fn1, fn2, fn3)(args)
```

`compose`函数的实现：

```javascript
export const compose = (...funcs) => {
  if (funcs.length === 0) {
    return args => args
  }

  if (funcs.length === 1) {
    return funcs[0]
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}
```

## 中间件

通过`applyMiddleware`方法应用中间件，将原有的`dispatch`方法进行增强。

基本使用方法：

```javascript
const store = createStore(countReducer, applyMiddleware(logger, thunk))
```

因此`createStore`可以新增一个参数，叫做`enhancer`：

```javascript
export const createStore = (reducer, enhancer) => {
  if (enhancer) {
    // 加强 store
    return enhancer(createStore)(reducer)
  }
  ...
}
```

接下来实现`applyMiddleware`方法：

```javascript
export const applyMiddleware = (...middlewares) => {
  // createStore，reducer作为参数传入
  return createStore => reducer => {
    // 获取原有的 store，以及原有的一些方法
    const store = createStore(reducer)
    const { dispatch, getState } = store
    // 进行加强
    const middlewareAPI = { getState, dispatch }
    // 给中间件参数中加入 getState,dispatch
    const chain = middlewares.map(middleware => middleware(middlewareAPI))
    // 增强dispatch方法
    const enhancedDispatch = compose(...chain)(dispatch)
    return {
      ...store,
      dispatch: enhancedDispatch
    }
  }
}
```

`redux-thunk`中间件实现：[github](https://github.com/reduxjs/redux-thunk/blob/master/src/index.js)

```javascript
export const thunk = () => {
  return dispatch => action => {
    if (typeof action === 'function') {
      return action(dispatch)
    } else {
      return dispatch(action)
    }
  }
}
```