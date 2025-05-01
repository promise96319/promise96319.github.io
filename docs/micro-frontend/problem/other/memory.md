# 微前端内存泄露排查

## 问题描述

- App 切换后，内存一直在累加。App 强制刷新后内存同样一直累加。
- 看板页面创建多个 widget 内存暴增，并且切换 widget 内存不被释放，最终导致页面崩溃。

## 解决过程

- 该问题是否是 5.0 新增？
  - 查看 4.0 项目，发现 app 切换内存也有少量内存泄露，但是总体影响较小，可以忽略不计。
- 初步排查，采用内存分析工具进行分析，看哪些占用内存：
  - chrome 内存分析工具，并且主要查看 string 和 detached 相关内容
    - performance monitor
    - memory
  - 排查后发现执行的代码一直没有消失，一直占用内存，主要是三个点。
    - history.pushState/replaceState
    - widget-head.js 中的 proxyListener
    - 其他
  - 尝试将上面部分内容改写和注释，没有作用。而且部分内容是在第三方库里面的内容，没法进行处理。
- 为什么内存会泄露呢？可能导致内存泄露的原因有哪些：
  - 内存泄露
    - 全局变量
    - console.log 的对象不能被垃圾回收
    - 闭包
    - DOM 泄露：引用未被释放
    - timers：未清理定时器等
    - window/dom 的 event listener
  - 因此，又尝试将微前端代码中有可能导致内存泄露的代码改写或者注释，但实际上没有作用，还是未排查出微前端哪里写得有问题导致的内存泄露。
- 业界是否有相关的解决方案？有没有快速解决的方法？
  - 业界内存问题
    - qiankun: [https://github.com/umijs/qiankun/issues?q=memory](https://github.com/umijs/qiankun/issues?q=memory)
    - micro-app: [https://github.com/micro-zoe/micro-app/issues/1070](https://github.com/micro-zoe/micro-app/issues/1070)
    - wujie: [https://github.com/Tencent/wujie/issues/593](https://github.com/Tencent/wujie/issues/593)
  - 又根据他们的一些 issue 里的解决方法进行处理
    - 安装 zone.js，但是没有效果。
    - eval 改为 Function，实际 base 改了之后仍然无效。
- 保底方案
  - 由于 5.0 要上线，但是看板页面多次加载、切换会直接导致页面崩溃，问题比较严重。而 App 切换导致的内存泄露相对看板页面的问题好一些。所以优先解决看板页面崩溃的问题，其次再解决切换 app 的内存泄露问题。
  - 保底方案：将 widget 还原为动态组件的加载方式，不再创建 js 沙箱执行。
- 继续排查
  - 是否是 app 自身内存泄露的问题？
    - 由于之前的测试都是基于项目本身来测试的，没有排除 app 本身可能存在的影响。
    - 采用最简单的 app 来运行，发现内存还是会泄露。排除 app 本身内存泄露的影响，应该是微前端加载方式导致的内存泄露。
  - 微前端代码可能哪里有内存泄露？
    - eval 改为 funciton，即使是最简的 app 仍然存在内存泄露。
    - 使用 GPT 优化 js 在代理环境下执行的代码，仍然存在内存泄露。
    - 注释掉 document 代理运行，仍然存在内存泄露。
    - 优化部分微前端代码，主动在销毁时对事件、节点等进行移除，仍然存在内存泄露。
    - ...
- 经过一系列的尝试，
  - qiankun 是否同样会有内存泄露？以及 qiankun 是如何解决的？
    - 使用 qiankun 运行最简单的 app，发现几乎没有内存泄露。是否是 qiankun 的 js 沙箱做了更好的处理呢？
    - 使用 qiankun 运行我们的 app，发现依然存在内存泄露，只是内存泄露增加得慢一点。那 qiankun 是有什么区别呢？
    - 深入 qiankun 实现
      - 发现 qiankun 与 5.0 微前端主要不同是:
        - 5.0 项目每次切换 App 时，都会销毁上一次的 App，并且销毁上一次的沙箱。 但是由于沙箱内存没有释放，所以每切换一次 App 都会累加一次创建 App 的内存。
        - qiankun 在 App 切换时，未对上一次的 App 沙箱进行销毁。下次进来时，直接复用上一次的沙箱，也就没有增加新创建 App 的内存。即 qiankun 将所有 App 的沙箱一直驻留在内存当中，因此只有在首次进入 app 时需要内存，下次进入时只需要少量内存即可。
      - 再次查看开源库的解决方案
        - 开源库问题集：
          - qiankun: [https://github.com/umijs/qiankun/issues?q=memory](https://github.com/umijs/qiankun/issues?q=memory)
          - micro-app: [https://github.com/micro-zoe/micro-app/issues/1070](https://github.com/micro-zoe/micro-app/issues/1070)
          - wujie: [https://github.com/Tencent/wujie/issues/593](https://github.com/Tencent/wujie/issues/593)
        - 开源库解决方案：
          - qiankun 沙箱销毁：[https://github.com/umijs/qiankun/pull/2829/files](https://github.com/umijs/qiankun/pull/2829/files)（测试并未将内存完全释放）
          - qiankun 沙箱驻留：[https://github.com/umijs/qiankun/pull/715](https://github.com/umijs/qiankun/pull/715)
          - micro-app 内存问题：[https://github.com/micro-zoe/micro-app/issues/1017](https://github.com/micro-zoe/micro-app/issues/1017)

- qiankun 调试时发现打开控制台的内存行为和不开控制台的行为不一致。
  - 当打开控制台的时候，由于 chrome 调试，对部分内存不会进行释放，此时引用时 GC Root。而在关闭控制台下会进行释放。（那么什么情况下会标记为 GC Root 呢）

## 结论

- App 的刷新内存泄露
  - 在不打开控制的情况下，刷新 App，内存会被释放，不会造成内存泄露。
  - 在打开控制台的情况下，刷新 App，内存不会被释放，会标记为 GC Root，存在内存泄露。
- App 的切换内存泄露
  - 沙箱内存代码字符串内存驻留问题暂时无解决方案，即 App 卸载内存无法得到完全释放。
  - 可以通过 app 沙箱不销毁的方式，让 App 创建的内存不至于累加过快。
- 沙箱编写代码时，尽可能主动对内存进行释放，如:
  - react unmount()
  - proxy.recovable()
  - listener 等等
- 最终方案：采用 qiankun js 沙箱，添加对应的 document 代理，app 卸载时不卸载沙箱。
