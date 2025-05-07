# 组件库样式覆盖问题

## 问题背景

目前公司内部通过联邦模块将项目架构分为三层：

- `Platform`：为项目底座，实现项目的一些通用功能。
- `App`：各个项目。
- `Widget`：动态业务组件。

三者的渲染关系相当于：

```jsx
<Platform>
  <App>
    <Widget />
  </App>
</Platform>
```

由于 `Platform/App/Widget` 都会引入 `@qt/design` 组件库，当它们对组件库的样式进行覆盖时，就会相互影响，导致样式异常，并且这种影响是不可控的。

为了解决样式覆盖相互影响的问题，需要对组件库添加类名前缀用于样式覆盖。

## 业界方案

- Ant Design：
  - v4.x：
    - js 层面：组件类名通过 `ConfigProvider` 下传，组件将前缀进行拼接。
    - css 层面： 通过 `less-loader` 自带的 `modifyVars` 参数对 `css` 变量进行替换。
  - v5.x：采用 `css in js` 的方案，运行时即可将 js/css 前缀进行替换。
- Arco Design / Semi Design / TDesign
  - 这些开源组件库的样式前缀方案大都与 Ant Design v4.x 实现思路相同。

## 采取方案

`@qt/design` 同样采取 `ConfigProvider` 的方式，来给组件库添加类名前缀。具体实现如下：

### 组件库 js

通过 `ConfigProvider` 向下传递 `prefixCls`，组件库内部通过 `ConfigContext` 获取 `prefixCls`，并且将前缀拼接到组件类名上。

### 组件库 css

组件库内部样式定义均以 `$qtc-prefix` 变量开头，项目中提供该 `$qtc-prefix` 变量即可。

### 项目中使用

每个独立的 `App` 都需要添加自己的类名前缀及样式前缀，覆盖时通过带有前缀的类名进行覆盖，这样多个项目间的样式覆盖就不会互相影响了，最终项目的渲染关系如下：

```jsx
<Config.Provider value={{ prefixCls: 'platform' }}>
  <Platform />
  <Config.Provider value={{ prefixCls: 'app' }}>
    <App />
    <Config.Provider value={{ prefixCls: 'widget' }}>
      <Widget />
    </Config.Provider>
  </Config.Provider>
</Config.Provider>
```

## 其他问题

### 静态方法问题

对于组件库的静态方法（如 `Modal.confirm()/Message.success()`）来讲， `Config Context` 无法透传到这些静态方法上，导致类名前缀失效。目前其他开源库主要有两种处理方案：

#### 全局变量

大多数开源组件库采用的是全局变量的方法，将 `Config Context` 在 `ConfigProvider` 的时候存到全局变量中，当调用静态方法时，从全局变量中获取 `Config Context`。

这种方法能在一定的程度上解决 `Context 断开的问题`，但是实际上项目中使用到的其他  `context` 遇到静态方法时，同样会遇到 `Context 断开的问题`。

#### 通过 `useModal/useMessage` 等方法来代替静态方法

 Ant Design v5.x：使用 `useModal/useMessage` 等方法来代替这些静态方法，将 hook 中返回的 `placeholder` 节点放到 `jsx` 中，这样就能关联到 `jsx` 的上下文 ，从而获取到 `Config Context` 了。

 这种方法的好处是不会丢失上下文，其他任何 `context` 都能透传到 `hook` 调用的方法中。缺点是使用起来没有静态方法方便，静态方法可以在任何位置调用。并且这种方法在组件的用法上需要做许多的改动，因此公司内组件库采用”全局变量“的方案来解决。

### 多份 css 问题

前面提到业务中会采用 `Widget` 的方式来动态加载业务组件。一个 `App` 中可能会存在多个 `Widget`，如果每个 `Widget` 都包含自己的组件库，那么会导致最终产物的体积会变得非常大。

因此，我们希望 `Widget` 能直接使用宿主 `App` 的组件库，而不单独打包一份。（实际上 App 同样也可以使用 Platform 这个宿主的组件库，但是由于目前项目里组件库版本还未真正统一，所以会存在一定的问题。当然，同一份 widget 在不同的宿主环境中也会出现问题，目前暂不考虑）。

共享组件库在实现上并不难，在联邦模块中，可以通过 `shared` 共享组件库，使 `Widget` 使用 `App` 的组件库。但是共享后发现一个问题，由于前面静态方法采用 `全局变量` 的方案解决，当组件库被共享时，`Widget/App` 中的 `Config Context` 就会被相互覆盖，导致类名前缀不符合预期。

并且通过类名前缀的方式覆盖样式时，需要 `Widget/App` 各自生成一份自己的 `css` 文件，同样会使打包后的产物体积变大。

因此，我们需要找到一种方式，能够让 `Widget/App` 共享组件库，同时又能够保证类名前缀不会相互覆盖，最终只生成一份 `css` 文件。

基于此，我们将组件库的样式覆盖进行修改：

- 当组件库被共享时，依旧使用原始的类名前缀，不做任何修改，保留组件库原有的样式。
- 当需要覆盖组件库样式时，组件库提供一个 `Context`，可以设置类名作用空间，如 `namespace`，其下的所有节点的类名都会附带这个类名空间，当进行样式覆盖时，通过 `原始类名.类名空间` 的方式进行覆盖，这样就不会影响到其他组件库的样式了。

使用如下：

```jsx
<Config.Provider value={{ namespace: 'app' }}>
  <App />
  <Config.Provider value={{ namespace: 'widget' }}>
    <Widget />
  </Config.Provider>
</Config.Provider>
```

当需要覆盖样式时，比如覆盖 `App` 的 `card` 时，渲染的结果如下：

```jsx
<div class="qtc-card app">
  {' '}
  // 对于 app 内的类名都会附加 app 类名空间
  <div class="qtc-card widget">
    {' '}
    // 对于 widget 内的类名都会附加 app 类名空间
  </div>
</div>
```

对样式覆盖时，只需要指定相应的类名空间即可：

``` css
.qtc-button.app { 
  color: red;
}
```

对于静态方法，如果要进行样式覆盖，可以给每个静态方法提供一个 `namespace` 的参数，用于设置类名空间，如：

```jsx
Modal.confirm({ namespace: 'app-namespace' })
```

由于此时是有明确的样式覆盖需求，所以在这里指定相应的类名空间也不会显得突兀。
