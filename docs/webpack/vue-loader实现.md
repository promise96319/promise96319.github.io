# vue-loader实现

## 使用

[webpack loader 配置地址](https://webpack.docschina.org/configuration/module/)

[vue-loader 文档地址](https://vue-loader.vuejs.org/zh/guide/#vue-cli)

[github vue-loader](https://github.com/vuejs/vue-loader#how-it-works)

安装`vue-loader`以及`vue-template-compiler`:

```javascript
npm install -D vue-loader vue-template-compiler
```

`webpack`配置：

```javascript
// webpack.config.js 文件
const { VueLoaderPlugin } = require('vue-loader')
const config = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
}
```

## VueLoaderPlugin应用

找到`vue-loader/lib/plugin-webpack5.js`文件：

```javascript
class VueLoaderPlugin {
  apply (compiler) {
    // ...
    // 1. 定义 picther loader
    const pitcher = {
      loader: require.resolve('./loaders/pitcher'),
      resourceQuery: query => {
        if (!query) { return false }
        const parsed = qs.parse(query.slice(1))
        return parsed.vue != null
      },
      options: {
        cacheDirectory: vueLoaderUse.options.cacheDirectory,
        cacheIdentifier: vueLoaderUse.options.cacheIdentifier
      }
    }
    // 2. 替换 rules
    compiler.options.module.rules = [
      pitcher,
      ...clonedRules,
      ...rules
    ]
  }
}
```

该插件的主要作用是添加了一个`pitcher`的`loader`。该`loader`通过`resourceQuery`判断`query`是否存在，也就是文件请求路径是否带有查询参数。如果有查询参数，还需要解析`query`判断查询参数中是否有`vue`。因此，`pitcher loader`是在文件请求路径查询参数中包含`vue`时才会匹配。

## 解析 loaders

在`make`阶段的`factorizeModule`过程中，会进行文件的解析(`resolve`)。对于以`.vue`结尾的文件，根据`rules`规则，会匹配到`vue-loader`，从而解析出`vue-loader`的实际引用路径，类似如下：

```javascript
'/Users/xxx/xxx/node_modules/vue-loader/lib/index.js'
```

## loader-runner

在`make`阶段的`buildModule`过程中，`webpack`使用[loader-runner](https://github.com/webpack/loader-runner)库执行`loaders`。对于以`.vue`结尾的文件，此时只会执行`vue-loader`。

## vue-loader

找到`node_modules/vue-loader/lib/index.js`文件：

```javascript
module.exports = function (source) {
  // 1. 解析查询参数
  const loaderContext = this
  const { resourceQuery = ''} = loaderContext
  const rawQuery = resourceQuery.slice(1)
  const incomingQuery = qs.parse(rawQuery)

  // 2. 解析源码
  const descriptor = parse({
    source,
    compiler: options.compiler || loadTemplateCompiler(loaderContext),
    filename,
    sourceRoot,
    needMap: sourceMap
  })

  // 3. 如果参数中有 type ，使用对应的 loader 执行
  if (incomingQuery.type) {
    return selectBlock(
      descriptor,
      loaderContext,
      incomingQuery,
      !!options.appendExtension
    )
  }

  // 4. 其他，根据不同的 type，分别生成不同的代码
}
```

`vue-loader`会通过`component-compiler-utils`包对`.vue`文件代码解析，解析出来的格式为：

```javascript
{
  script: {
  	type: 'script'
    // ...
  },
	styles: [],
	template: {},
	customBlocks: [],
	errors: []
}
```

在首次加载时，没有查询参数，所以会进入到第四步，根据不同的`type`将解析出来的代码按照模块的形式引入，如：

```javascript
// type 为 template
'import { render, staticRenderFns } from "./component.vue?vue&type=template&id=a8ea6a18&scoped=true&"'

// type 为 script
'import script from "./component.vue?vue&type=script&lang=js&"\n
export * from "./component.vue?vue&type=script&lang=js&"'

// type 为 style
'import style0 from "./component.vue?vue&type=style&index=0&id=a8ea6a18&lang=css&scoped=true&"\n'
```

## pitch

[Picthing Loader 文档](https://webpack.docschina.org/api/loaders/#pitching-loader)

`vue-loader`代码转换后，下次加载这些模块的时候，由于请求路径参数带有`vue`，因此在`VueLoaderPlugin`插件中添加的`pitcher loader`也会匹配。所以对于`?vue&type=xxx`结尾的文件，会匹配`[pitcher loader, vue-loader]`这两个`loader`。首先执行的是`pitcher loader` 的`pitch`方法：

```javascript
if (query.type === `template`) {
  const request = genRequest([
    ...cacheLoader,
    ...postLoaders,
    templateLoaderPath + `??vue-loader-options`,
    ...preLoaders
  ])
  return `export * from ${request}`
}
```

该函数同样是根据不同的`type`对引用路径做不同的处理。比如`template`在加载时，由于还需要解析`template`内的代码，所以加入了`templateLoader`：

```javascript
const { compileTemplate } = require('@vue/component-compiler-utils')
const compiled = compileTemplate(finalOptions)
const { code } = compiled
return code + `\nexport { render, staticRenderFns }`
```

该`loader`会将`template`中`Vue`代码进行编译。（这里`template`中的代码则是由`vue-loader`中的`selectBlock`方法提供）

## vue热更新

[hot reload 源码](https://github.com/vuejs/vue-loader/blob/master/lib/codegen/hotReload.js)

[vue-hot-reload-api 源码](https://github.com/vuejs/vue-hot-reload-api/blob/master/src/index.js)

在`vue-loader/lib/index.js`文件中后半段，处理完`script/template/style`等代码之后，会添加热更新相关代码：

```javascript
// 整理属性，定义 component 变量
`/* normalize component */
import normalizer from ${stringifyRequest(`!${componentNormalizerPath}`)}
var component = normalizer(
script,
render,
staticRenderFns,
${hasFunctional ? `true` : `false`},
${/injectStyles/.test(stylesCode) ? `injectStyles` : `null`},
${hasScoped ? JSON.stringify(id) : `null`},
${isServer ? JSON.stringify(hash(request)) : `null`}
${isShadow ? `,true` : ``}
)
`.trim() + `\n`

// 添加 module.hot 代码
if (needsHotReload) {
  code += `\n` + genHotReloadCode(id, hasFunctional, templateRequest)
}
```

首先定义了`component`变量，随后通过`genHotReloadCode`方法添加热更新代码。

### genHotReloadCode

在`lib/codegen/hotReload.js`文件中找到`genHotReloadCode`方法：

```javascript
const hotReloadAPIPath = JSON.stringify(require.resolve('vue-hot-reload-api'))

exports.genHotReloadCode = (id, functional, templateRequest) => {
  return `
/* hot reload */
if (module.hot) {
  var api = require(${hotReloadAPIPath})
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('${id}')) {
      api.createRecord('${id}', component.options)
    } else {
      api.${functional ? 'rerender' : 'reload'}('${id}', component.options)
    }
    ${templateRequest ? genTemplateHotReloadCode(id, templateRequest) : ''}
  }
}
  `.trim()
}
```

### api.install

如果`module.hot`存在，首先会加载`vue-hot-reload-api`模块，然后调用其`install`方法：

```javascript
exports.install = function (vue, browserify) {
  if (installed) { return }
  installed = true
  Vue = vue.__esModule ? vue.default : vue
  version = Vue.version.split('.').map(Number)
  exports.compatible = version[0] >= 2
}
```

主要是处理一些版本兼容的问题，如`vue-hot-reload-api`只适合`Vue`版本大于`2`的情况。

### api.createRecord

其次如果`id`没有被记录的话，会执行`api.createRecord('${id}', component.options)`方法：

```javascript
exports.createRecord = function (id, options) {
  if(map[id]) { return }

  // 1. Ctor 为当前组件的构造函数
  var Ctor = null
  if (typeof options === 'function') {
    Ctor = options
    options = Ctor.options
  }
  // 2. 注入生命周期
  makeOptionsHot(id, options)
  // 3. 记录当前id 对应的构造函数等信息
  map[id] = {
    Ctor: Ctor,
    options: options,
    instances: []
  }
}
```

其中`makeOptionsHot`方法在不为函数组件时，会执行下列代码：

```javascript
// 注入 beforeCreate 生命周期回调
injectHook(options, initHookName, function() {
  var record = map[id]
  if (!record.Ctor) {
    record.Ctor = this.constructor
  }
  record.instances.push(this)
})

// 注入 beforeDestroy 生命周期回调
injectHook(options, 'beforeDestroy', function() {
  var instances = map[id].instances
  instances.splice(instances.indexOf(this), 1)
})
```

当注入了`beforeCreate`后，组件被实例化时，就会将组件实例添加到`instances`中。

### api.reload

当前自身模块发生变化时，如果该`component`已经被`record`了，那么会执行`api.reload`方法：

```javascript
// 继承新的 options
var newCtor = record.Ctor.super.extend(options)
newCtor.options._Ctor = record.options._Ctor
record.Ctor.options = newCtor.options
record.Ctor.cid = newCtor.cid
record.Ctor.prototype = newCtor.prototype

record.instances.slice().forEach(function (instance) {
  if (instance.$vnode && instance.$vnode.context) {
    instance.$vnode.context.$forceUpdate()
  }
}
```

该函数会替换原来记录的组件构造函数，并遍历相关实例进行更新。

### api.rerender

最后执行`genTemplateHotReloadCode`方法：

```javascript
const genTemplateHotReloadCode = (id, request) => {
  return `
    module.hot.accept(${request}, function () {
      api.rerender('${id}', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  `.trim()
}
```

该方法通过`module.hot.accept`监听组件中`template`的变化。如果`template`有变化，那么执行`api.rerender`方法：

```javascript
exports.rerender = tryWrap(function (id, options) {
  var record = map[id]
  if (record.Ctor) {
    record.Ctor.options.render = options.render
    record.Ctor.options.staticRenderFns = options.staticRenderFns
    record.instances.slice().forEach(function (instance) {
      instance.$options.render = options.render
      instance.$options.staticRenderFns = options.staticRenderFns
      
      var restore = patchScopedSlots(instance)
      instance.$forceUpdate()
      instance.$nextTick(restore)
    })
  }
}
```

此时会遍历收集到的`instances`，通过`$forceUpdate`方法强制更新组件。

## 总结

`vue-loader`的实现主要包括以下几个步骤：

1. 通过`VueLoaderPlugin`替换`webpack`中`module.rules`配置，添加一个`pitcher loader`，该`loader`会匹配路径参数中带有`vue`的文件。
2. 通过`loader-runner`对`.vue`文件解析。通过`component-compiler-utils`包将`.vue`文件解析为对象形式，然后根据不同的`type`（`script/template`等等），生成不同的查询参数，添加到`.vue`文件后。
3. 当下一次`build`时，遇到前面处理后带参数的`.vue`文件，会匹配到`VueLoaderPlugin`插件中添加的`pitcher loader`。首先会执行`pitcher loader`的`pitch`方法，该方法根据参数中不同的`type`为文件添加不同的`loader`进行处理。如`template`会添加`templateLoader`，`css`添加`css-loader`等。相当于根据路径的`type`为路径包装了一层。添加完成后，会移除`pitcher loader`。
4. 在下一次进入到`vue-loader`时，由于存在`type`，此时进入到`selectBlock`环节。根据不同的`type`对相应代码做不同的处理即可。



`vue-loader`热更新实现原理：

1. 通过`vue-loader`解析代码的末尾，将解析出来的属性整理成`component`对象，并添加热更新代码。
2. 热更新代码首先调用`createRecord`会为当前`component`注入`beforeCreate`等生命周期。当组件实例化时，会记录下组件实例。
3. 如果当前模块代码改变了，且`record`存在，此时调用`reload`方法更新组件构造函数，并重新渲染。
2. 如果`vue`组件中`template`代码改变了，此时调用`rerender`方法进行重新渲染。