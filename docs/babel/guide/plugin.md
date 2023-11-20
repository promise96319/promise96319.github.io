# 插件开发

## plugin
babel 提供了插件机制允许我们修改 AST。插件一般存在两种形式：函数形式和对象形式，函数形式返回的也是对象，这里主要以函数形式为例：
```js
export default function (babel, options, dirname) {
  return {
    inherits: parentPlugin,
    manipulateOptions(options, parserOptions) {},
    pre(file) {},
    visitor: {},
    post(file) {}
  }
}
```
其中 visitor 就是遍历 AST 时，对 AST 节点的访问，在这里可以做一些节点的修改。比如以 const 转换为 var 为例：
```js
// 插件
module.exports = (babel) => {
  return {
    visitor: {
      VariableDeclaration(path) {
        if (path.node.kind === 'const')
          path.node.kind = 'var'
      },
    },
  }
}

// 源码
const a = 1
// 生成代码
var a = 1
 ```

 通过上面的例子可以看出 babel 可以通过插件，对代码进行各种各样的转换，因此我们需要使用新语法时只需要增加新语法的转换插件即可，比如装饰器 @babel/plugin-proposal-decorators，可选链 @babel/plugin-proposal-optional-chaining 等等。

## preset
plugin 是单个转换功能的实现，当 plugin 比较多或者 plugin 的 options 比较多的时候就会导致使用成本升高。这时候可以封装成一个 preset，用户可以通过 preset 来批量引入 plugin 并进行一些配置。

preset 就是对配置和插件的一层封装，其中最常见的就是 @babel/preset-env， 包含了一系列的语法转换插件，用户只需要指定相应的浏览器环境，它就提供相对应的语法转换插件。

preset 和 plugin 从形式上差不多，但是应用顺序不同。 babel 会按照如下顺序处理插件和 preset：
  - 先执行 plugin，再执行 preset
  - plugin 从前到后，preset 从后到前

## path
visitor 中的每个方法都会传入一个 path 对象，path 对象是对当前节点的抽象，它提供了一系列的方法来操作当前节点，比如修改节点、删除节点、插入节点等等。path 对象的属性和方法如下：

```js
path {
  // 属性：
  node // 节点
  parent // 父节点
  parentPath // 父 path
  scope // 作用域
  hub // 可以通过 path.hub.file 拿到最外层 File 对象， path.hub.getScope 拿到最外层作用域，path.hub.getCode 拿到源码字符串
  container // 当前 AST 节点所在的父节点属性的属性值
  key // 当前 AST 节点所在父节点属性的属性名或所在数组的下标
  listKey // 当前 AST 节点所在父节点属性的属性值为数组时 listkey 为该属性名，否则为 undefined
  
  // 方法
  inList() // 判断节点是否在数组中，如果 container 为数组，也就是有 listkey 的时候，返回 true
  get(key) // 获取某个属性的 path
  set(key, node) // 设置某个属性的值
  getSibling(key) // 获取某个下标的兄弟节点
  getNextSibling() // 获取下一个兄弟节点
  getPrevSibling() // 获取上一个兄弟节点
  getAllPrevSiblings() // 获取之前的所有兄弟节点
  getAllNextSiblings() // 获取之后的所有兄弟节点

  isXxx(opts) // 判断当前节点是否是某个类型，可以传入属性和属性值进一步判断，比如path.isIdentifier({name: 'a'})
  assertXxx(opts) // 同 isXxx，但是不返回布尔值，而是抛出异常

  find(callback) // 从当前节点到根节点来查找节点（包括当前节点），调用 callback（传入 path）来决定是否终止查找
  findParent(callback) // 从当前节点到根节点来查找节点（不包括当前节点），调用 callback（传入 path）来决定是否终止查找
  
  insertBefore(nodes) // 在之前插入节点，可以是单个节点或者节点数组
  insertAfter(nodes) // 在之后插入节点，可以是单个节点或者节点数组
  replaceWith(replacement) // 用某个节点替换当前节点
  replaceWithMultiple(nodes) // 用多个节点替换当前节点
  replaceWithSourceString(replacement) // 解析源码成 AST，然后替换当前节点
  remove() // 删除当前节点
  
  traverse(visitor, state) // 遍历当前节点的子节点，传入 visitor 和 state（state 是不同节点间传递数据的方式）
  skip() // 跳过当前节点的子节点的遍历
  stop() // 结束所有遍历
}
```

## path.scope
path.scope 是当前节点的作用域，它提供了一些方法来操作当前作用域，比如获取当前作用域的变量、绑定变量、生成唯一标识符等等。scope 对象的属性和方法如下：

```js
scope.bindings // 当前作用域内声明的所有变量
scope.block // 生成作用域的 block，详见下文
scope.path // 生成作用域的节点对应的 path
scope.references // 所有 binding 的引用对应的 path，详见下文
scope.dump() // 打印作用域链的所有 binding 到控制台
scope.parentBlock // 父级作用域的 block
getAllBindings() // 从当前作用域到根作用域的所有 binding 的合并
getBinding(name) // 查找某个 binding，从当前作用域一直查找到根作用域
getOwnBinding(name) // 从当前作用域查找 binding
parentHasBinding(name, noGlobals) // 查找某个 binding，从父作用域查到根作用域，不包括当前作用域。可以通过 noGlobals 参数指定是否算上全局变量（比如console，不需要声明就可用），默认是 false
removeBinding(name) // 删除某个 binding
hasBinding(name, noGlobals) // 从当前作用域查找 binding，可以指定是否算上全局变量，默认是 false
moveBindingTo(name, scope) // 把当前作用域中的某个 binding 移动到其他作用域
generateUid(name) // 生成作用域内唯一的名字，根据 name 添加下划线，比如 name 为 a，会尝试生成 _a，如果被占用就会生成 __a，直到生成没有被使用的名字i
 ```

path.scope.bindings 如下：
```js
bindings: {
  a: {
    constant: true, // 是否被修改过
    constantViolations: [], // 所有修改过的语句的 path
    identifier: {type: 'Identifier', ...}
    kind:'const', // 声明变量的形式
    path: {node,...}
    referenced: false  // 是否被引用
    referencePaths: [], // 引用的语句对应的 path
    references: 0, // 引用的数目
    scope: ...
  }
}
```



