# es6

- [https://es6.ruanyifeng.com/#README](https://es6.ruanyifeng.com/#README)

## 怎么查看function源码？
通过 `toSource()`方法：
- 对于内置的方法，返回 native code 字符串。
  chrome的js引擎是c++写的, Function是JS中基础组件, 其中的方法应该都是c++实现的, 所以打印时直接告诉这是native code。
  ```javascript
  function Function() {
    [native code]
  }
  ```
- 对于自定义函数，返回该函数的js源码

