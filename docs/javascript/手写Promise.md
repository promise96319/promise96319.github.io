# 手写Promise

## then

1. 每个`promise`有三个状态：`pending`，`fulfilled`，`rejected`。因此需要一个变量来保存该状态。
2. 执行`new Promise`的时候，会传入一个参数为`resolve,reject`的函数，并立即执行。因此在构造函数里需要将该函数当做参数传递并立即执行。
  - 当执行`resolve`的时候，需要将状态改为`fulfilled`。
  - 当执行`reject`的时候，需要将状态改为`rejected`。
  - 由于是异步执行，执行完成后，需要通知对应回调函数执行。因此可以在`then`方法里收集这些回调函数。

3. 执行`then`方法的时候，会返回一个新的`promise`（为了链式调用`then`）。在新的`promise`里会判断当前`promise`状态：
  - 如果是`fulfilled`，那么说明异步已经执行完成。可以执行`then`的`resolve`函数，将执行结果作为新的`promise`的结果传入。
  - 如果是`rejected`，那么说明异步已经执行完成。可以执行`then`的`reject`函数，将执行结果作为新的`promise`的结果传入。
  - 如果是`pending`，那么说明异步正在执行。将`then`的`resolve`和`reject`函数收集起来，这样在状态改变的时候就能执行了。

```javascript
// 简单模拟微任务
const microTask = fn => setTimeout(() => fn())

const status = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected'
}

class MyPromise {
  // promise 状态
  status = status.PENDING
  // 收集状态为 fulfilled 时需要执行的回调函数
  onFulfilled = []
  // 收集状态为 rejected 时需要执行的回调函数
  onRejected = []

  // 存放 resolve 的结果
  value = null
  // 存放 reject 的结果
  reason = null

  constructor(executor) {
    const resolve = (value) => {
      if (this.status !== status.PENDING) return
      this.status = status.FULFILLED
      this.value = value
      this.onFulfilled.forEach(fn => fn())
    }

    const reject = (reason) => {
      if (this.status !== status.PENDING) return
      this.status = status.REJECTED
      this.reason = reason
      this.onRejected.forEach(fn => fn())
    }

    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }


  // 主要任务：
  // 1. 创建一个新的 promise
  // 2. 根据当前 promise 状态，不同状态进行不同处理
  // 3. 将处理后的结果作为参数放入到 新promise 中
  then(resolveCallback, rejectCallback) {
    resolveCallback = typeof resolveCallback === 'function' ? resolveCallback : value => value
    rejectCallback = typeof rejectCallback === 'function' ? rejectCallback : reason => { throw reason }
    const _self = this
    // 当前 promise 状态，来生成新的 promise
    const newPromise = new MyPromise((resolve, reject) => {
      const resolveFn = () => microTask(() => {
        try {
          // 如果promise 为 fulfilled
          // 那么可以拿到当前 then resolve 的结果
          const prevValue = resolveCallback(_self.value)
          // 这个结果又做为新 promise里
          // resolve(prevValue)
          resolvePromise(newPromise, prevValue, resolve, reject)
        } catch (err) {
          reject(err)
        }
      })

      const rejectFn = () => microTask(() => {
        try {
          const prevValue = rejectCallback(_self.reason)
          resolvePromise(newPromise, prevValue, resolve, reject)
        } catch (err) {
          reject(err)
        }
      })

      if (_self.status === status.FULFILLED) {
        return resolveFn()
      }

      if (_self.status === status.REJECTED) {
        return rejectFn()
      }

      if (_self.status === status.PENDING) {
        // 如果是 pending 的话，将回调函数收集起来
        _self.onFulfilled.push(() => resolveFn())
        _self.onRejected.push(() => rejectFn())
      }
    })

    // then 返回一个新的 promise
    return newPromise
  }
}
```

## 处理resolve/reject的返回值

由于`then`里`resolve/reject`出来的结果可能是`promise`，如果是`promise`需要等待`promise`执行完成，将执行结果作为参数传给`then`返回的`promise`。这里用一个`resolvePromise`进行处理：

1. 如果`resolve/reject`返回的`promise`和`then`返回的`promise`是同一个，存在循环引用，直接报错。
2. 如果返回的结果没有`then`方法，那么说明是普通值，直接`resolve`。
3. 如果返回的结果有`then`方法，那么执行`then`方法，并在回调里递归处理`resolve/reject`的返回值。

有两点需要注意：
1. 递归`resolvePromise`的实质是将`resolve,reject`函数透传下去，直到得到最终的结果。
2. 为了避免`resolve,reject`多次执行（也就是在`promise`内部多次调用`resolve,reject`），用`used`变量来控制开关，保证只有最先的一个`resolve/reject`能够被执行。

```javascript
// 根据上一个 then 处理的结果简单模拟
const resolvePromise = (
  thenReturnPromise, // then 返回的 promise 对象
  resolveReturnValue, // resolve/reject 返回的值，类型不定，也可能为promise对象
  resolve,
  reject
) => {
  // 如果 then 返回的 promise 与 resolve 返回的 promise 相同
  if (thenReturnPromise === resolveReturnValue) {
    throw TypeError('Chaining cycle')
  }

  // 如果返回的是 object(包括promise 类型) 或 function 类型
  // 注意 resolveReturnValue 可能为 null
  if (resolveReturnValue && typeof resolveReturnValue === 'object' || typeof resolveReturnValue === 'function') {
    // 在 promise 里可能多次调用了 resolve/reject 方法
    // 这种情况只取最前面的一次调用
    let used
    try {
      // 看有没有实现 then 函数
      const then = resolveReturnValue.then
      // 没有实现 then 函数或 then 不是函数时，直接将值返回
      if (!then || typeof then !== 'function') {
        if (used) return
        used = true
        return resolve(resolveReturnValue)
      }
      // 执行 then 方法，并递归取值
      then.call(resolveReturnValue, (value) => {
        if (used) return
        used = true
        // 将 resolve/reject 函数无限向下传递，直到值计算完毕。
        resolvePromise(thenReturnPromise, value, resolve, reject)
      }, (err) => {
        if (used) return
        used = true
        reject(err)
      })
    } catch (err) {
      if (used) return
      used = true
      reject(err)
    }
    return
  }

  // 为其他类型
  resolve(resolveReturnValue)
}
```

## 静态方法resolve

`resolve`方法接收一个参数，返回一个`promise`。

1. 如果`value`是`promise`，那么直接返回就行了。
2. 如果`value`不是`promise`:
  - 如果`value`实现了`then`方法，执行`then`方法，将`value`执行结果直接用`resolve,reject`处理即可。
  - 如果没有实现`then`方法，那么为普通值，`resolve`该值。

```javascript
static resolve(value) {
  if (value instanceof MyPromise) {
    return value
  }
  return new MyPromise((resolve, reject) => {
    // 如果 value 有 then 函数，执行该函数
    if (value && value.then && typeof value.then === 'function') {
      microTask(() => {
        value.then(resolve, reject)
      })
      return
    }
    // 否则直接返回
    resolve(value)
  })
}
```

## 静态方法reject

返回一个状态即将变为`rejected`的`promise`。

```javascript
static reject(err) {
  return new MyPromise((_, reject) => {
    reject(err)
  })
}
```

## catch

使用`then`方法来实现：

```javascript
catch(rejectCallback) {
  this.then(null, rejectCallback)
}
```

## finally

`finally`不接受传值，并且需要将上一个`then`的值原封不动的传给该`promise`。

```javascript
finally(callback) {
  // 将 then 返回的 promise 返回。
  return this.then((value) => {
    // 需要将 value 值传到下一个 then 中。
    // 这里返回结果实现了then方法，因此下一个then取到的是value值
    return MyPromise.resolve(callback()).then(() => value)
  }, (err) => {
    return MyPromise.reject(callback()).then(() => {
      throw err
    })
  })
}
```

## 静态方法all

`promises`数组里所有`promise`状态变为`fulfilled`的时候，返回的`promise`状态才会变为`fulfilled`:

```javascript
static all(promises) {
  return new MyPromise((resolve, reject) => {
    let resolvedLength = 0
    // 总共的结果
    let results = []
    if (promises.length === 0) {
      return resolve(results)
    }

    promises.forEach((promise, index) => {
      // promise 可能为普通值
      MyPromise.resolve(promise).then((res) => {
        results[index] = res
        resolvedLength += 1
        if (resolvedLength === promises.length) {
          // 说明都处理完毕了
          resolve(results)
        }
      }, (err) => {
        // 只要一个报错，那么就会reject
        reject(err)
      })
    })
  })
}
```

## 静态方法race

只要有一个`promise`的状态改变，那么返回的`promise`状态就会改变：

```javascript
static race(promises) {
  return new MyPromise((resolve, reject) => {
    if (promises.length === 0) {
      // 一直处于 pending 状态
      return
    }
    promises.forEach((promise) => {
      // 不用担心下次resolve，因为已经实现了 resolve 只会执行一次
      MyPromise.resolve(promise).then(resolve, reject)
    })
  })
}
```

## 静态方法any

只要有一个`promise`状态为`fulfilled`，那么返回的`promise`状态就为`fulfilled`，否则为`rejected`。

```javascript
static any(promises) {
  return new MyPromise((resolve, reject) => {
    let rejectedLength = 0
    // 只要有一个resolve
    let errors = []
    if (promises.length === 0) {
      return reject(errors)
    }

    promises.forEach((promise, index) => {
      // promise 可能为普通值
      MyPromise.resolve(promise).then(resolve, (err) => {
        // 记录reject个数
        rejectedLength += 1
        errors[index] = err
        if (rejectedLength === promises.length) {
          reject(errors)
        }
      })
    })
  })
}
```

## 静态方法allSettled

不管`promise`状态是怎样，只有所有`promise`状态都不为`pending`的时候，返回的`promise`状态才会改变为`fulfilled`。

```javascript
static allSettled(promises) {
  return new MyPromise((resolve, reject) => {
    let handleLength = 0
    let results = []
    if (promises.length === 0) {
      // 一直处于 pending 状态
      return resolve(results)
    }

    const handleValue = (value, index) => {
      results[index] = value
      handleLength += 1
      if (handleLength === promises.length) {
        resolve(results)
      }
    }

    promises.forEach((promise, index) => {
      MyPromise.resolve(promise).then((value) => {
        handleValue(value, index)
      }, (err) => {
        handleValue(err, index)
      })
    })
  })
}
```

## 完整代码

```javascript
// 简单模拟微任务
const microTask = fn => setTimeout(() => fn())

const status = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected'
}

// 根据上一个 then 处理的结果简单模拟
const resolvePromise = (
  thenReturnPromise, // then 返回的 promise 对象
  resolveReturnValue, // resolve/reject 返回的值，类型不定，也可能为promise对象
  resolve,
  reject
) => {
  // 如果 then 返回的 promise 与 resolve 返回的 promise 相同
  if (thenReturnPromise === resolveReturnValue) {
    throw TypeError('Chaining cycle')
  }

  // 如果返回的是 object(包括promise 类型) 或 function 类型
  // 注意 resolveReturnValue 可能为 null
  if (resolveReturnValue && typeof resolveReturnValue === 'object' || typeof resolveReturnValue === 'function') {
    // 在 promise 里可能多次调用了 resolve/reject 方法
    // 这种情况只取最前面的一次调用
    let used
    try {
      // 看有没有实现 then 函数
      const then = resolveReturnValue.then
      // 没有实现 then 函数或 then 不是函数时，直接将值返回
      if (!then || typeof then !== 'function') {
        if (used) return
        used = true
        return resolve(resolveReturnValue)
      }
      // 执行 then 方法，并递归取值
      then.call(resolveReturnValue, (value) => {
        if (used) return
        used = true
        // 将 resolve/reject 函数无限向下传递，直到值计算完毕。
        resolvePromise(thenReturnPromise, value, resolve, reject)
      }, (err) => {
        if (used) return
        used = true
        reject(err)
      })
    } catch (err) {
      if (used) return
      used = true
      reject(err)
    }
    return
  }

  // 为其他类型
  resolve(resolveReturnValue)
}

class MyPromise {
  // promise 状态
  status = status.PENDING
  // 收集状态为 fulfilled 时需要执行的回调函数
  onFulfilled = []
  // 收集状态为 rejected 时需要执行的回调函数
  onRejected = []

  // 存放 resolve 的结果
  value = null
  // 存放 reject 的结果
  reason = null

  constructor(executor) {
    const resolve = (value) => {
      if (this.status !== status.PENDING) return
      this.status = status.FULFILLED
      this.value = value
      this.onFulfilled.forEach(fn => fn())
    }

    const reject = (reason) => {
      if (this.status !== status.PENDING) return
      this.status = status.REJECTED
      this.reason = reason
      this.onRejected.forEach(fn => fn())
    }

    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }


  // 主要任务：
  // 1. 创建一个新的 promise
  // 2. 根据当前 promise 状态，不同状态进行不同处理
  // 3. 将处理后的结果作为参数放入到 新promise 中
  then(resolveCallback, rejectCallback) {
    resolveCallback = typeof resolveCallback === 'function' ? resolveCallback : value => value
    rejectCallback = typeof rejectCallback === 'function' ? rejectCallback : reason => { throw reason }
    const _self = this
    // 当前 promise 状态，来生成新的 promise
    const newPromise = new MyPromise((resolve, reject) => {
      const resolveFn = () => microTask(() => {
        try {
          // 如果promise 为 fulfilled
          // 那么可以拿到当前 then resolve 的结果
          const prevValue = resolveCallback(_self.value)
          // 这个结果又做为新 promise里
          // resolve(prevValue)
          resolvePromise(newPromise, prevValue, resolve, reject)
        } catch (err) {
          reject(err)
        }
      })

      const rejectFn = () => microTask(() => {
        try {
          const prevValue = rejectCallback(_self.reason)
          resolvePromise(newPromise, prevValue, resolve, reject)
        } catch (err) {
          reject(err)
        }
      })

      if (_self.status === status.FULFILLED) {
        return resolveFn()
      }

      if (_self.status === status.REJECTED) {
        return rejectFn()
      }

      if (_self.status === status.PENDING) {
        // 如果是 pending 的话，将回调函数收集起来
        _self.onFulfilled.push(() => resolveFn())
        _self.onRejected.push(() => rejectFn())
      }
    })

    // then 返回一个新的 promise
    return newPromise
  }

  catch(rejectCallback) {
    return this.then(null, rejectCallback)
  }

  // finally 后还可以继续执行，并且将值原封不动的传给后者
  // finally 不接受任何传值
  finally(callback) {
    // 将 then 返回的 promise 返回。
    return this.then((value) => {
      // 需要将 value 值传到下一个 then 中
      return MyPromise.resolve(callback()).then(() => value)
    }, (err) => {
      return MyPromise.reject(callback()).then(() => {
        throw err
      })
    })
  }

  // 返回一个 promise
  static resolve(value) {
    if (value instanceof MyPromise) {
      return value
    }
    return new MyPromise((resolve, reject) => {
      // 如果 value 有 then 函数，执行该函数
      if (value && value.then && typeof value.then === 'function') {
        microTask(() => {
          value.then(resolve, reject)
        })
        return
      }
      // 否则直接返回
      resolve(value)
    })
  }

  static reject(err) {
    return new MyPromise((_, reject) => {
      reject(err)
    })
  }

  // 状态全部变为 fulfilled 的时候才会执行 then
  // 会返回一个 promise
  static all(promises) {
    return new MyPromise((resolve, reject) => {
      let resolvedLength = 0
      // 总共的结果
      let results = []
      if (promises.length === 0) {
        return resolve(results)
      }

      promises.forEach((promise, index) => {
        // promise 可能为普通值
        MyPromise.resolve(promise).then((res) => {
          results[index] = res
          resolvedLength += 1
          if (resolvedLength === promises.length) {
            // 说明都处理完毕了
            resolve(results)
          }
        }, (err) => {
          // 只要一个报错，那么就会reject
          reject(err)
        })
      })
    })
  }

  // 只要有一个为 fulfilled/rejected，那么就会 resolve
  static race(promises) {
    return new MyPromise((resolve, reject) => {
      if (promises.length === 0) {
        // 一直处于 pending 状态
        return
      }
      promises.forEach((promise) => {
        // 不用担心下次resolve，因为已经实现了 resolve 只会执行一次
        MyPromise.resolve(promise).then(resolve, reject)
      })
    })
  }

  static any(promises) {
    return new MyPromise((resolve, reject) => {
      let rejectedLength = 0
      // 只要有一个resolve
      let errors = []
      if (promises.length === 0) {
        return reject(errors)
      }

      promises.forEach((promise, index) => {
        // promise 可能为普通值
        MyPromise.resolve(promise).then(resolve, (err) => {
          // 记录reject个数
          rejectedLength += 1
          [index] = err
          if (rejectedLength === promises.length) {
            reject(errors)
          }
        })
      })
    })
  }

  static allSettled(promises) {
    return new MyPromise((resolve, reject) => {
      let handleLength = 0
      let results = []
      if (promises.length === 0) {
        // 一直处于 pending 状态
        return resolve(results)
      }

      const handleValue = (value, index) => {
        results[index] = value
        handleLength += 1
        if (handleLength === promises.length) {
          resolve(results)
        }
      }

      promises.forEach((promise, index) => {
        MyPromise.resolve(promise).then((value) => {
          handleValue(value, index)
        }, (err) => {
          handleValue(err, index)
        })
      })
    })
  }
}
```

## 测试

首先在实现MyPromise的代码中，增加以下代码:

```javascript
MyPromise.defer = MyPromise.deferred = function () {
  let dfd = {};
  dfd.promise = new MyPromise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
}

module.exports = MyPromise
```

安装测试脚本：

```javascript
npm install -g promises-aplus-tests
```

在当前目录执行测试命令：

```javascript
promises-aplus-tests my-promise.js
```

## 参考

- [Promise/A+ 规范](https://promisesaplus.com/)
- [阮一峰 es6 Promise](https://es6.ruanyifeng.com/#docs/promise)
- [YvetteLau 博客](https://github.com/YvetteLau/Blog/issues/2)