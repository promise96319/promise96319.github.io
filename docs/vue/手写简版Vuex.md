# 手写简版Vuex

## 简单使用
```javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store =  new Vuex.Store({
  modules: {
    user,
    app,
    // ...
  },
  getters
})

new Vue({
  el: '#app',
  store,
  components: { App },
  render: (h) => h(App)
})
```

## 实现效果

[vuex 实现效果预览](https://codesandbox.io/s/polished-dust-r04fj?file=/src/vuex/index.js)

## 实现思路

1. `vuex`是通过`Vue.use`使用的，所以需要实现`install`方法：
   - `install` 里需要在`Vue`全局挂载`$store`方法，因此可以用`Vue.mixin`全局混入配置。
2. 通过`$store.state`可以访问状态，状态改变时，需要更新视图。所以`state`需要设置为响应式，这样在视图中使用`state`的时候会进行依赖收集，绑定`state`和相应`Watcher`的关系。之后`state`改变就会触发`Watcher`更新。
   -  一种方法是通过实例化`Vue`，将`state`作为`data`进行响应式处理。
   - 一种方式是用`Vue.observable`将`state`对象设置为响应式。

3. 触发更新：
   - `commit`处理同步，找到`mutations`里的对应函数，然后执行函数更新`state`。
   - `dispatch`处理异步，找到`actions`里的对应函数，然后执行函数更新`state`。

4. `getters`具备计算属性，可以通过`Vue`中的`computed`来进行处理（可能这也是`Vuex`用实例化方式处理`state`响应式的原因）。
5. `modules`的实现是根据`store`配置递归建立相应的`module`，并且建立`module`之间的父子关系。再根据`namespace`来分割各个模块，使得`commit/dispatch`的时候需要指定模块的`namespace`。

## 简化版实现代码

```javascript
let _Vue

class Store {
  constructor(options = {}) {
    const { state, mutations, actions, getters } = options
    this.mutations = mutations
    this.actions = actions
    this.getters = getters
    
    let computed = {}
    const self = this
    // 通过 computed 来实现 getters
    Object.entries(getters).map(([getterName, getter]) => {
      computed[getterName] = () => {
        // 封装一层，添加 this.state 作为参数
        return getter(this.state)
      }
      // 访问 getters 的 key 就是访问 computed 的 key
      Object.defineProperty(this.getters, getterName, {
        get() {
          return self._vm[getterName]
        }
      })
    })

    this._vm = new _Vue({
      data: {
        $$state: state
      },
      computed: {
        ...computed
      }
    })

    // 同样可以实现响应式，但是 getters 实现又需要单独处理，比较麻烦
    // this.$$state = _Vue.observable(state)
  }

  get state () {
    return this._vm._data.$$state
  }

  set state (val) {
    throw new Error('无法直接修改 state')
  }

  commit(type, payload) {
    const handler = this.mutations[type]
    handler(this.state, payload)
  }

  // 这里没做太多处理
  dispatch(type, payload) {
    const handler = this.actions[type]
    return handler(this.state, payload)
  }
}

const install = (Vue) => {
  // 类似于单例模式
  if (_Vue === Vue) return
  _Vue = Vue
  Vue.mixin({
    beforeCreate () {
      const options = this.$options
      // 注入 $store 变量
      if (options.store) {
        this.$store = options.store
      } else if (options.parent && options.parent.$store) {
        this.$store = options.parent.$store
      }
    }
  })
}

export default {
  Store,
  install
}
```

## 问题

#### Q:为什么要commit/dispatch两种形式来处理，都使用dispatch不行吗？
   - 一种可能的原因是单一职责，`commit`主要处理同步任务，触发状态更新；`dispatch`主要处理异步任务
   - 另一种原因是方便`devtools`追踪状态变化。参考[这里的评论](https://juejin.cn/post/6844904054108192776)。