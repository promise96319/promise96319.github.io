# js 方法实现

## 防抖 debounce
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
```javascript
const throttle = (fn, delay) => {
  let timer = null
  return function () {
    const _this = this
    const args = arguments
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      fn.apply(_this, args)
      timer = null
    }, delay)
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
Function.prototype.myBind = function (context) {
  const args1 = Array.prototype.slice.call(arguments, 1)
  return (...args2) => {
    context.fn = this
    // bind参数 + 追加参数
    return context.fn(...args1, ...args2)
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

## 节流
```javascript
```

## 节流
```javascript
```
## 节流
```javascript
```

## 节流
```javascript
```

## 节流
```javascript
```

## 节流
```javascript
```
## 节流
```javascript
```

## 节流
```javascript
```

## 节流
```javascript
```

## 节流
```javascript
```
## 节流
```javascript
```

## 节流
```javascript
```

## 节流
```javascript
```

## 节流
```javascript
```