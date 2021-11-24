# js 方法实现

## 防抖 debounce
延后一段时间执行，这段时间内触发了任何事件，都会重新开启一个延迟任务。
```javascript
const debounce = (fn, delay) => {
  let timer = null
  return function () {
    const _this = this
    const args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(_this, args)
    }, delay)
  }
}

const fn = () => console.log(1)
const wrappedFn = debounce(fn, 500)
wrappedFn()
wrappedFn()
wrappedFn()
```

## 节流 throttle
隔一段时间执行一次，如果在这段时间里又触发了事件，那么不会去执行该事件。
```javascript
const throttle = (fn, delay) => {
  let prev

  return function (args) {
    const _this = this
    let now = Date.now()

    if (!prev || now > prev + delay) {
      prev = now
      fn.apply(_this, args)
    }
  }
}

const fn = () => console.log(1)
const wrappedFn = throttle(fn, 500)
wrappedFn()
wrappedFn()
wrappedFn()
```

## new 操作符
:::tip 过程
创建一个空的简单JavaScript对象（即{}）；
为步骤1新创建的对象添加属性__proto__，将该属性链接至构造函数的原型对象 ；
将步骤1新创建的对象作为this的上下文 ；
如果该函数没有返回对象，则返回this。
:::
```javascript
const myNew = function (constructor) {
  const obj = {}
  // const obj = Object.create(null)

  const args = Array.prototype.slice.call(arguments, 1)
  const result = constructor.apply(obj, args)
  obj.__proto__ = constructor.prototype

  if (typeof result === 'object' && typeof result !== null) {
    return result
  }

  return obj
}

function Person(name) {
  this.name = name
  // return {
  //   name: 'other name',
  //   say: 'other say'
  // }
}

Person.prototype.say = () => {
  console.log('hello world')
}

// const person = new Person('name')
const person = myNew(Person, 'name')
console.log(person.name)
console.log(person.say)
```

:::tip 问题
这里无法使用 Object.create(null) 创建对象，否则的话修改 __proto__ 无效，导致原生上的属性方法无法继承。
:::

## bind实现
```javascript
Function.prototype.myBind = function (context = window, ...args1) {
  const _this = this
  return function F(...args2) {
    // 如果是构造函数
    if (this instanceof Function) {
      return new F(...args1, ...args2)
    }

    const fn = Symbol()
    context[fn] = _this
    // bind参数 + 追加参数
    const result = context[fn](...args1, ...args2)
    delete context[fn]
    return result
  }
}

function add(c, d) {
  return this.a + this.b + c + d
}

// const target = add.bind({ a: 1, b: 2 }, 3)
const target = add.myBind({ a: 1, b: 2 }, 3)
console.log(target(4, 5)) // 1 + 2 + 3 + 4 = 10
console.log(add(4)) // NaN
```

## call实现
```javascript
Function.prototype.myCall = function (context = window, ...args) {
  if (this === Function.prototype) {
    return undefined
  }

  const fn = Symbol()
  context[fn] = this
  const result = context[fn](...args)
  delete context[fn]

  return result
}

function add(c, d) {
  return this.a + this.b + c + d
}

// const result = add.call({ a: 1, b: 2 }, 3, 4)
const result = add.myCall({ a: 1, b: 2 }, 3, 4)
console.log(result)
```

## apply实现
```javascript
Function.prototype.myApply = function (context = window, args) {
  if (this === Function.prototype) {
    return undefined
  }

  const fn = Symbol()
  context[fn] = this
  const result = context[fn](...args)
  delete context[fn]

  return result
}

function add(c, d) {
  return this.a + this.b + c + d
}

// const result = add.apply({ a: 1, b: 2 }, [3, 4])
const result = add.myApply({ a: 1, b: 2 }, [3, 4])
console.log(result)
```
## EventEmitter实现
```javascript
class EventEmitter {
  constructor() {
    this.events = Object.create(null)
  }

  on(type, listener) {
    const listeners = this.events[type]
    if (listeners) {
      this.events[type].push(listener)
    } else {
      this.events[type] = [listener]
    }
  }

  off(type, listener) {
    const listeners = this.events[type]
    if (!listeners) {
      return
    }
    this.events[type] = listeners.filter(l => l !== listener && l.origin !== listener)

  }

  once(type, listener) {
    const fn = (...args) => {
      listener(...args)
      this.off(type, listener)
    }
    fn.origin = listener
    this.on(type, fn)
  }

  emit(type, ...args) {
    (this.events[type] || []).forEach((listener) => {
      listener(...args)
    })
  }
}

const event = new EventEmitter()
const fn1 = () => console.log(1)
const fn2 = () => console.log(2)
const fn3 = () => console.log(3)

event.once('click', fn3)
event.emit('click')
console.log('==============')
event.emit('click')
event.emit('click')
console.log('==============')
event.on('click', fn1)
event.on('click', fn2)
event.emit('click')
console.log('==============')
event.off('click', fn1)
event.emit('click')
```

## flat实现
```javascript
Array.prototype.myFlat = function (depth = 1) {
  // 输入：当前数组
  // 输出：一层扁平化处理
  // 边界条件：不是数组 or 层级不够
  const flat = (arr, level) => {
    if (!Array.isArray(arr)) {
      return [arr]
    }

    if (level >= depth) {
      return arr
    }

    return arr.reduce((prev, cur) => {
      return prev.concat(flat(cur, level + 1))
    }, [])
  }

  return flat(this, 0)
}

const arr = [1, 2, [3, 4, [5, 6]], 7]
// const result = arr.flat(Infinity)
const result = arr.myFlat(1)
console.log('result ==> ', result);
```

## map实现
```javascript
Array.prototype.myMap = function (fn) {
  return this.reduce((prev, cur, index, arr) => {
    // 注意：使用 concat 会对数组扁平化处理
    return prev.push(fn(cur, index, arr))
  }, [])
}

const arr = [1, 2, 3]
// const result = arr.map(x => x + 1)
const result = arr.myMap(x => x + 1)
console.log(result)
```

## instanceOf实现
```javascript
function myInstanceOf(instance, constructor) {
  let proto = instance.__proto__
  if (!proto) {
    return false
  }
  if (proto === constructor.prototype) {
    return true
  }
  return myInstanceOf(proto, constructor)
}

function a() { }
const b = {}

console.log(a instanceof Function)
console.log(b instanceof Function)
console.log(myInstanceOf(a, Function))
console.log(myInstanceOf(b, Function))
```
## 数组乱序
```javascript
// function disorder(arr) {
//   return arr.sort(() => Math.random() - 0.5)
// }

function disorder(arr) {
  let i = 0
  while (i < arr.length - 1) {
    const randomIndex = Math.floor(Math.random() * arr.length)
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]]
    i++
  }
  return arr
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(disorder(arr))
console.log(disorder(arr))
console.log(disorder(arr))
``