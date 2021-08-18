# co库

## generator使用

```javascript
function* gen() {
  yield 1
  yield 2
  yield 3
}

const g = gen()
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())

// 打印以下内容
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: undefined, done: true }
```

## 生成器

```javascript
function* gen() {
  yield Promise.resolve(1)
  yield Promise.resolve(2)
  yield Promise.resolve(3)
}

// { value: Promise { 1 }, done: false }
// { value: Promise { 2 }, done: false }
// { value: Promise { 3 }, done: false }
// { value: undefined, done: true }
```

## 执行器

```javascript
const co = (generator) => {
  const next = (val) => {
    const result = generator.next(val)
    if (result.done) return
    Promise.resolve(result.value).then((res) => {
      next(res)
    })
  }
  next()
}
```

## 调用

```javascript
co(gen())
// promise 依次被执行
// 1
// 2
// 3
```

## 参考

- [co库github地址](https://github.com/tj/co)
- [generator](https://es6.ruanyifeng.com/#docs/generator)