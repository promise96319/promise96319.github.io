# 手写简版VueRouter

## 简单使用

```javascript
import Router from 'vue-router'

export const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
]

const router = new Router({
  routes: routes,
  mode: 'history',
  base: '/dashboard',
})

new Vue({
  el: '#app',
  router,
  components: { App },
  render: (h) => h(App)
})

// 模板
<router-view></router-view>
```

## 实现效果

[简版VueRouter效果](https://codesandbox.io/s/shouxiejianbanvuerouter-7mmxc?file=/src/main.js)

## 实现思路

1. 当`push`的时候使用`h5`新特性[pushState](https://developer.mozilla.org/zh-CN/docs/Web/API/History/pushState)更改当前浏览器地址，并在`history`中添加一条记录。
2. 解析当前浏览器地址，并与我们写的路由配置`routes`进行匹配，得到匹配到的`route`，这个`route`里就包含我们要展示的`component`。
3. 注册一个`router-view`组件，该组件可以根据当前匹配到的`route`去显示相应的`component`。所以这里可以将当前`route`设置为响应式，这样在`route`变化时就会触发相应的渲染逻辑。
4. 监听[popState](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/popstate_event)事件，处理回退等操作，重复`url`匹配及组件更新步骤。

## 简化版实现代码

#### router-view.js

```javascript
export default {
  name: "RouterView",
  props: {
    name: {
      type: String,
      default: ""
    }
  },
  render(h) {
    // _route 改变时，触发更新
    // 匹配到的 route
    const route = this._route;
    const props = this.$options.propsData;
    let component;
    if (route && route.component) {
      // 如果有name，需要与当前路由匹配才显示
      if (props && props.name) {
        if (route.name === props.name) {
          component = route.component;
        }
      } else {
        // 否则就直接当前匹配路由下的组件
        component = route.component;
      }
    }
    // 渲染匹配到的 component
    return h(component);
  }
};
```

#### index.js

```javascript
import RouterView from "./router-view";

let _Vue;

const install = (Vue) => {
  _Vue = Vue;
  Vue.mixin({
    beforeCreate() {
      // 全局注入 $router 变量
      const options = this.$options;
      if (options.router) {
        this.$router = options.router;
      } else {
        this.$router = this.$parent.$router;
      }
      this.$router.init(this);
      // 将 _route 设置为响应式，以便当前route改变时触发视图更新
      Vue.util.defineReactive(this, "_route", this.$router.currentRoute);
    }
  });
  // 全局注册 router-view 组件
  Vue.component("RouterView", RouterView);
};

class Route {
  constructor({ name, path, component }) {
    this.name = name;
    this.path = path;
    this.component = component;
  }
}

class History {
  constructor(router) {
    this.router = router;
  }

  // path or name
  push(location, cb) {
    // 路径改变，去用户定义的 routes 中匹配对应的 route
    const route = this.router.match(location);
    history.pushState({ time: Date.now() }, null, route.path);
    cb && cb(route);
  }
}

class VueRouter {
  constructor(options) {
    this.routes = options.routes;
    this.app = null;
    this.apps = [];
    this.history = new History(this);
  }

  match(location) {
    const matched = this.routes.find((route) => {
      return route.path === location || route.name === location.name;
    }) || { path: "/" };
    return new Route(matched);
  }

  // 记录所有的 Vue 实例
  init(app) {
    this.app = app;
    this.apps.push(app);
  }

  push(location) {
    this.history.push(location, (route) => {
      // 当前route
      this.currentRoute = route;
      // 更新所有实例当前的 _route 变量
      this.apps.forEach((app) => {
        app._route = route;
      });
    });
  }
}

VueRouter.install = install;

export default VueRouter;
```

## 问题

#### Q:单页面为什么能有像多页面跳转的效果？

就如同实现思路中所提到的一样，实际上Vue是通过判断当前的路径，然后匹配到当前的路由，最后通过router-view组件呈现当前匹配到的路由对应的组件。跳转的本质是匹配到不同的组件而已。当然，这里实现得比较简单，具体的逻辑可以看看源码是如何实现的。

#### Q:vue-router大致是如何实现的？

1. 当push的时候，通过history.pushState api向浏览器添加一条历史记录，此时没有任何跳转。
2. 然后对新push的值进行解析，并且与用户自定义的routes配置进行匹配，最终会得到相应的路径和匹配到的component。
3. 匹配完后，将每个Vue实例的_route属性更改为匹配到的route。
4. 在router-view组件内部监听_route属性，当发生变化时，看自身配置是否与route匹配。如果匹配，直接渲染匹配到的component。

#### Q:hash和history的区别？

1. 调用 push 时，首先会改变当前的 url
   1. 如果 history api 可以使用，那么就使用 pushState/replaceState 改变。
   2. 如果是 hash 模式，且 history 不可使用，那么使用 location.hash 改变。
2. 解析 url，匹配路由，更改当前的匹配组件，router-view监听路由变化重新渲染。
3. 对于浏览器的前进/后退按钮，会监听 hashchange/popState 事件。
