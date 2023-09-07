# 响应式检测

- 方案一：`@media` 媒体查询，在 `css`中使用。
- 方案二：`window.matchMedia` 媒体查询，在 `js`中使用
  - 比较灵活
  - 相较于监听窗口变化，性能更好

```javascript
window.matchMedia('(max-width: 600px)').addListener(function(e) {
  // 当窗口宽度变化经过 600px 时，执行该回调。
  // 参数中有 matches 判断窗口是否 match。
  console.log(e)
});
```

案例见：[antd responsiveObserve](https://github.com/ant-design/ant-design/blob/master/components/_util/responsiveObserve.ts)
