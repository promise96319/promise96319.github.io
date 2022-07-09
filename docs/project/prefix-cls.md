# 组件库前缀

## 问题
公司内部通过 `webpack` 联邦模块将多个项目运行在一起，由于其中的一些项目会对 `@qt/design` 进行样式覆盖，最终运行在一起时会相互影响，导致样式异常。

## 解决方式
`@qt/design` 增加样式前缀，每一个项目可以配置自己的独有的项目前缀，这样在样式覆盖时就不会冲突。

## 方案
### 设置组件类名前缀
通过一个 `Context` 向下所有组件传递前缀，如：
``` tsx
<Config.Provider value={{ prefixCls: 'test-prefix' }}>
  <App />
</Config.Provider>
```
每一个组件都会根据这个前缀生成带前缀的类名。

### 设置样式前缀
在组件库中通过 `scss` 的样式变量定义前缀，在项目中覆盖该变量。如：
```scss
// @qt/design 中
$prefix: 'qtc'

.#{$prefix}-button { 
  // ... 
}

// 项目中覆盖前缀
$prefix: 'test-prefix'
```

## 一些问题
1. 组件类名前缀覆盖时，`ConfigContext` 不仅仅只提供 `prefixCls`，还可能会提供 `getPopupContainer` 等其他全局参数，如果单纯使用 `ConfigContext.Provider` 的话，那么不大方便处理提供的全局参数默认值问题。
  - 对全局的一些 `Context` 再进行一层封装，为 `ConfigProvider`，内部就可以针对全局参数处理一些其他逻辑了。

2. 样式前缀提供时，需要保留 `qtc`，也就是当外部传了 `test` 前缀时，需要是 `test-qtc-button`。没有传前缀时，需要是 `qtc-button`。如果直接拼接样式，那么就会选择器前多出一个 `-` 符号。
  - 通过 `scss` 函数的方式，来计算前缀，并且达到`延迟计算`的目的，方便后续覆盖。
  ``` scss
  // 定义
  $qtc-prefix: '' !default;

  @function add-prefix($componentName) {
    @if $qtc-prefix == '' {
      @return 'qtc-#{$componentName}';
    } @else {
      @return '#{$qtc-prefix}-qtc-#{$componentName}';
    }
  }

  // @qt/design button 使用
  .#{add-prefix('button')} {
    // ...
  }

  // 项目覆盖
  $qtc-prefix: 'test-prefix';
  ```

