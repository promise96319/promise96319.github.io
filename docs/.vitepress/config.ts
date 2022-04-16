import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '秦光辉',
  description: '专注于前端开发，关注新技术，坚持学习。',
  lang: 'zh-CN',
  head: [
    ['meta',{}],
    // 百度统计
    ['script', {}, `
      var _hmt = _hmt || [];
      (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?41a9a03811977ee15c69366a880d1296";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
      })();
    `]
  ],
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.png',
    repo: 'promise96319/blog',
    lastUpdated: '最近更新',
   
    sidebar: 'auto',
    // displayAllHeaders: false,
    // sidebarDepth: 2,
    // sidebar: [
    //   {
    //     text: 'Vue',
    //     link: '/vue/',
    //     collapsable: true,
    //     children: [
    //       {
    //         text: '关于我',
    //         link: '/vue/about/'
    //       }
    //     ]
    //   }
    // ],

    // sidebar: {
    //   '/vue/': [
    //     '组成与设计.md',
    //     '选项合并.md',
    //     '响应式原理上篇.md',
    //     '响应式原理中篇.md',
    //     '响应式原理下篇.md',
    //     '编译原理上篇.md',
    //     '编译原理中篇.md',
    //     '编译原理下篇.md',
    //     '插槽实现原理.md',
    //     '组件实现原理.md',
    //     '一些原理汇总.md',
    //     '手写简版Vuex.md',
    //     '手写简版VueRouter.md',
    //     '../webpack/vue-loader实现.md',
    //     '阅读资料.md',
    //   ],
    //   '/vue3/': [
    //     '源码调试.md',
    //   ],
    //   '/react/': [
    //     'react源码调试-next.md',
    //     'react源码调试.md',
    //     'react源码起始篇.md',
    //     'Lanes模型.md',
    //     'Fiber.md',
    //     '浏览器一帧里做了什么.md',
    //     '任务调度.md',
    //     'UpdateQueue.md',
    //     'beginWork-fiber创建.md',
    //     'beginWork-fiber更新.md',
    //     'completeWork.md',
    //     'hooks实现.md',
    //     'commitWork.md',
    //     'Suspense实现.md',
    //     '事件系统.md',
    //     '手写简版redux.md',
    //     '手写简版react-redux.md',
    //     '阅读资料.md',
    //   ],
    //   '/webpack/': [
    //     'webpack源码调试.md',
    //     '流程开始.md',
    //     'make阶段.md',
    //     'factorizeModule.md',
    //     'addModule.md',
    //     'buildModule.md',
    //     'seal阶段.md',
    //     'emit阶段.md',
    //     'import().md',
    //     'TreeShaking原理.md',
    //     'SplitChunksPlugin.md',
    //     'watch实现.md',
    //     'vue-loader实现.md',
    //     '热更新实现原理.md',
    //     'Tapable.md',
    //     'webpack优化.md',
    //     'webpack官方文档.md'
    //   ],
    //   '/rollup/': [
    //     '源码调试.md',
    //     'todo.md',
    //   ],
    //   '/vite/': [
    //     '源码调试.md',
    //   ],
    //   '/babel/': [],
    //   '/javascript/': [
    //     '事件循环机制.md',
    //     '../react/浏览器一帧里做了什么.md',
    //     '手写Promise.md',
    //     'co库.md',
    //     'js继承.md',
    //     'js方法实现.md',
    //     'es6.md'
    //   ],
    //   '/algorithms/': [
    //     '动态规划.md',
    //     '回溯法.md',
    //     '排序汇总',
    //     '数组.md',
    //     '字符串.md',
    //     '二叉树.md'
    //   ],
    //   '/leetcode/': [
    //     '1-20.md',
    //     '21-40.md',
    //   ],
    //   '/data-structures/': [
    //     '树状数组.md',
    //     '线段树.md',
    //     '红黑树.md',
    //     '平衡二叉树.md',
    //     '二叉查找树.md',
    //     '堆.md',
    //     '哈希表.md',
    //     '字典树.md',
    //     '并查集.md',
    //     '布隆过滤器.md',
    //   ],
    //   '/design-pattern/': [
    //     '创建型模式.md',
    //     '结构型模式.md',
    //     '行为型模式.md',
    //     '阅读资料.md',
    //   ],
    //   '/node/': [
    //     '手写简版express.md',
    //     'compose.md',
    //     '进程与线程.md',
    //     '资料.md'
    //   ],
    //   '/trend/': [
    //     'bundleless.md'
    //   ],
    //   '/network/': [
    //     '运输层.md',
    //     '应用层.md',
    //     '缓存.md',
    //   ],
    //   '/computer/': [
    //   ],
    //   '/resources/': [
    //     '网络协议.md',
    //     '算法.md',
    //     '前端博客.md'
    //   ],
    //   '/linux/': [
    //     'bash.md',
    //     'ssh.md',
    //     'vim.md',
    //   ],
    //   '/about/': [],
    //   '/knowledge-points/': [],
    //   // 静态资源
    //   '/static/': [],
    //   '/tools/': [
    //     'img-library.md',
    //     'iterm2+ohmyzsh.md',
    //     'jinkins.md',
    //   ],
    //   '/project/': [
    //     'css-background-img.md',
    //     'drawer.md',
    //     'space.md',
    //     'css-media.md'
    //   ],
    //   '/studying/': [
    //     'typescript.md'
    //   ]
    // },
    nextLinks: true,
    prevLinks: true,
    editLinkText: '编辑'
    // smoothScroll: true
  },
  markdown: {
    lineNumbers: true,
     // options for markdown-it-table-of-contents
    toc: { includeLevel: [1, 2] },
  },
  // plugins: ['@vuepress/back-to-top'],
})

