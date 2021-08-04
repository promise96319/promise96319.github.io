# 手写简版VueRouter

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
      // 注入 $router 变量
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
  // 注册 router-view 组件
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

  init(app) {
    this.app = app;
    this.apps.push(app);
  }

  push(location) {
    this.history.push(location, (route) => {
      // 当前route
      this.currentRoute = route;
      // 更新所有实例当前的route
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

就如同实现思路中所提到的一样，实际上Vue是通过判断当前的路径，然后匹配到当前的路由，然后通过router-view组件呈现当前匹配到的路由对应的组件。跳转的本质是匹配到不同的组件而已。当然，这里实现得比较简单，具体的逻辑可以看看源码是如何实现的。