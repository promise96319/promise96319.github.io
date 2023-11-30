# Runtime

## __webpack_require__

根据模块 id 导入模块

```js
function __webpack_require__(moduleId) {
  if (__webpack_modules__[moduleId])
    return __webpack_module_cache__[moduleId].exports

  const module = __webpack_module_cache__[moduleId] = {
    exports: {}
  }
  __webpack_modules__[moduleId](module, module.exports, __webpack_require__)
  return module.exports
}
```

## __webpack_require__.m

所有模块。每个模块是一个数组，数组的第一项是模块的代码，第二项是模块的导出，第三项是模块的 promise。

```js
__webpack_require__.m = __webpack_modules__
```

## __webpack_require__.c

模块缓存

```js
__webpack_require__.c = __webpack_module_cache__
```

## __webpack_require__.n

获取 default 导出

```js
__webpack_require__.n = (module) => {
  const getter = module && module.__esModule
    ? () => module.default
    : () => module
  __webpack_require__.d(getter, { a: getter })
  return getter
}
```

## __webpack_require__.d

给对象定义属性

```js
__webpack_require__.d = (exports, definition) => {
  for (const key in definition) {
    if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key))
      Object.defineProperty(exports, key, { enumerable: true, get: definition[key] })
  }
}
```

## __webpack_require__.o

判断对象是否有属性

```js
__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
```

## __webpack_require__.f

异步加载模块

```js
__webpack_require__.f = {}
```

## __webpack_require__.e

执行 __webpack_require__.f 中的所有函数，返回处理后的得到的 promises，然后使用 Promise.all 等到所有的 promises 都执行完毕后再返回。

```js
__webpack_require__.e = (chunkId) => {
  return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
    __webpack_require__.f[key](chunkId, promises)
    return promises
  }, []))
}
```

## __webpack_require__.u

获取 chunk 文件名称

```js
__webpack_require__.u = (chunkId) => {
  return `${chunkId}.js`
}
```

## __webpack_require__.l

通过 script 标签加载 chunk 文件

```js
__webpack_require__.l = (url, done, key, chunkId) => {
  if (__webpack_require__.o(__webpack_require__.m, key)) {
    done()
    return
  }
  const script = document.createElement('script')
  const onScriptComplete = () => {
    script.onerror = script.onload = null
    clearTimeout(timeout)
    const chunk = __webpack_require__.m[key]
    if (chunk !== 0) {
      if (chunk)
        chunk[1](new Error('Loading chunk failed'))
      __webpack_require__.m[key] = undefined
    }
  }
  let timeout = setTimeout(onScriptComplete, 120000)
  script.onerror = script.onload = onScriptComplete
  script.src = url
  document.head.appendChild(script)
}
```

## __webpack_require__.r

给 exports 定义 `__esModule` 属性

```js
__webpack_require__.r = (exports) => {
  if (typeof Symbol !== 'undefined' && Symbol.toStringTag)
    Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })

  Object.defineProperty(exports, '__esModule', { value: true })
}
```

## __webpack_require__.p

公共路径

```js
__webpack_require__.p = ''
```

## __webpack_require__.f.j

异步加载模块的函数

```js
// 0 表示加载完成，[resolve, reject, promise] 表示正在加载
const installedChunks = { app: 0 }
__webpack_require__.f.j = (chunkId, promises) => {
  let installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined
  if (installedChunkData !== 0) {
    if (installedChunkData) {
      promises.push(installedChunkData[2])
    }
    else {
      if (chunkId != 'webpack_container_remote_mfe-c_Component2') {
        const promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]))
        promises.push(installedChunkData[2] = promise)

        const url = __webpack_require__.p + __webpack_require__.u(chunkId)

        const error = new Error()
        const loadingEnded = (event) => {
          if (__webpack_require__.o(installedChunks, chunkId)) {
            installedChunkData = installedChunks[chunkId]
            if (installedChunkData !== 0)
              installedChunks[chunkId] = undefined
            if (installedChunkData) {
              const errorType = event && (event.type === 'load' ? 'missing' : event.type)
              const realSrc = event && event.target && event.target.src
              error.message = `Loading chunk ${chunkId} failed.\n(${errorType}: ${realSrc})`
              error.name = 'ChunkLoadError'
              error.type = errorType
              error.request = realSrc
              installedChunkData[1](error)
            }
          }
        }
        __webpack_require__.l(url, loadingEnded, `chunk-${chunkId}`, chunkId)
      }
      else { installedChunks[chunkId] = 0 }
    }
  }
}
```

## webpackJsonpCallback

异步加载模块的回调函数

```js
function webpackJsonpCallback(parentChunkLoadingFunction, data) {
  const [chunkIds, moreModules, runtime] = data
  // add "moreModules" to the modules object,
  // then flag all "chunkIds" as loaded and fire callback
  let moduleId; let chunkId; let i = 0

  // 如果 chunkIds 中有一个 chunk 还没有加载完毕，就把 moreModules 添加到 __webpack_require__.m 中
  if (chunkIds.some(id => (installedChunks[id] !== 0))) {
    for (moduleId in moreModules) {
      if (__webpack_require__.o(moreModules, moduleId))
        __webpack_require__.m[moduleId] = moreModules[moduleId]
    }
    if (runtime)
      var result = runtime(__webpack_require__)
  }

  if (parentChunkLoadingFunction)
    parentChunkLoadingFunction(data)

  // 把 chunk 标记为已经加载完毕
  for (;i < chunkIds.length; i++) {
    chunkId = chunkIds[i]
    if (__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId])
      installedChunks[chunkId][0]()

    installedChunks[chunkId] = 0
  }
}

const chunkLoadingGlobal = self.webpackChunkmodule_federation_aaa = self.webpackChunkmodule_federation_aaa || []

// 对每一项执行 webpackJsonpCallback
chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0))
// 当 push 的时候执行 webpackJsonpCallback
chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal))
```
