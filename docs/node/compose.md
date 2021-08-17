# compose

## compose方法

实现目标：

```javascript
const m1 = (next) => {
  console.log('middleware1 start');
  next()
  console.log('middleware1 end');
}

const m2 = (next) => {
  console.log('middleware2 start');
  next()
  console.log('middleware2 end');
}

const m3 = (next) => {
  console.log('middleware3 start');
  next()
  console.log('middleware3 end');
}

const fn = compose([m1, m2, m3])
fn()
// middleware1 start
// middleware2 start
// middleware3 start
// middleware3 end
// middleware2 end
// middleware1 end
```

`compose`函数具体实现：

```javascript
const compose = (middlewares) => {
  return () => {
    const dispatch = (i) => {
      if (i >= middlewares.length) return
      const fn = middlewares[i]
      fn(dispatch.bind(null, i + 1))
    }
    return dispatch(0)
  }
}
```

该`compose`函数里的`dispatch`实质上与`express`里的`next`函数十分相似，只不过封装得更简短一些。

## express next 方法

```javascript
const stack = []
stack.push(m1)
stack.push(m2)
stack.push(m3)

function handle(req, res, out) {
  let idx = 0
  next()
  function next() {
    if (idx < stack.length) {
      const fn = stack[idx]
      idx += 1
      fn(req, res, next)
    } else {
      out()
    }
  }
}
```

## koa-compose

`koa-compose`支持`async/await`语法，因此`next`函数应该返回一个`Promise`对象：

```javascript
const compose = (middlewares) => {
  if (!Array.isArray(middlewares)) {
    throw new TypeError('中间件必须是数组！')
  }
  for (let middleware of middlewares) {
    if (typeof middleware !== 'function') {
      throw new TypeError('中间件数组内部元素必须是函数！')
    }
  }

  return (ctx, next) => {
    let index = -1
    const dispatch = (i) => {
      // 第一次执行 next 的时候会依次执行后续的next
      // 因此 index 可代表已经执行的 next 数
      // 如果重复执行 next，那么 i 是要小于 next数的
      if (i <= index) {
        return Promise.reject(new Error('next()多次执行！'))
      }
      index = i

      let fn = middlewares[i]
      // 最后一次使用 next 执行
      if (i === middlewares.length) fn = next
      if (!fn) Promise.resolve()
      try {
        return Promise.resolve(fn(ctx, dispatch.bind(null, i + 1)))
      } catch (err) {
        return Promise.reject(err)
      }
    }
    return dispatch(0)
  }
}
```