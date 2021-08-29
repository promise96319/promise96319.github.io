module.exports = {
  // base: '/silence/',
  // dest: 'dist',
  title: '秦光辉',
  description: '一个专注于前端开发的博客，逐行分析Vue源码，深入了解webpack和Node相关框架，攻克各个javascript核心知识点，致力于成为一名优秀的前端开发者',
  head: [
    [
      'meta',
      {

      }
    ],
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
  // serviceWorker: false,
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '@image': '/docs/.vuepress/public'
  //     }
  //   }
  // },
  // theme: '@vuepress/theme-vue',
  themeConfig: {
    logo: '/logo.png',
    // repo: 'ustbhuangyi/vue-analysis',
    // editLinks: true,
    // docsDir: 'docs',
    // editLinkText: '在 GitHub 上编辑此页',
    // displayAllHeaders: true,
    lastUpdated: '上次更新',
    nav: [
      {
        text: 'Vue源码解析',
        link: '/vue/'
      },
      {
        text: 'js知识点',
        link: '/javascript/'
      },
      {
        text: 'React',
        link: '/react/'
      },
      {
        text: 'Webpack',
        link: '/webpack/'
      },
      {
        text: 'Node',
        link: '/node/'
      },
      {
        text: '算法',
        items: [
          {
            text: '算法',
            link: '/algorithms/'
          },
          {
            text: '数据结构',
            link: '/data-structures/'
          },
          {
            text: '设计模式',
            link: '/design-pattern/'
          }
        ]
      },
      {
        text: '网络',
        link: '/network/'
      },
      // {
      //   text: '计算机',
      //   link: '/computer/'
      // },
      {
        text: '前端资源',
        link: '/resources/'
      },
      {
        text: '关于我',
        link: '/about/'
      }
    ],
    displayAllHeaders: false,
    sidebarDepth: 2,

    sidebar: {
      '/vue/': [
        '组成与设计.md',
        '选项合并.md',
        '响应式原理上篇.md',
        '响应式原理中篇.md',
        '响应式原理下篇.md',
        '编译原理上篇.md',
        '编译原理中篇.md',
        '编译原理下篇.md',
        '手写简版Vuex.md',
        '手写简版VueRouter.md',
        '阅读资料.md',
      ],
      '/react/': [
        '手写简版redux.md',
        '手写简版react-redux.md',
        'react源码调试.md',
        '阅读资料',
      ],
      '/javascript/': [
        '事件循环机制.md',
        '手写Promise.md',
        'co库.md'
      ],
      '/algorithms/': [
        '动态规划.md',
        '回溯法.md',
        '排序汇总',
      ],
      '/data-structures/': [
        '树状数组.md',
        '线段树.md',
        '红黑树.md',
        '平衡二叉树.md',
        '二叉查找树.md',
        '堆.md',
        '哈希表.md',
        '字典树.md',
        '并查集.md',
        '布隆过滤器.md',
      ],
      '/design-pattern/': [
        '创建型模式.md',
        '结构型模式.md',
        '行为型模式.md',
        '阅读资料.md',
      ],
      '/node/': [
        '手写简版express.md',
        'compose.md',
      ],
      '/network/': [
        '运输层.md',

      ],
      '/computer/': [
        '进程与线程.md'
      ],
      '/resources/': [
        '网络协议.md',
        '算法.md',
        '前端博客.md'
      ],
      '/about/': [],
    },
    nextLinks: true,
    prevLinks: true,
    smoothScroll: true
  },
  markdown: {
    lineNumbers: false
  },
  plugins: ['@vuepress/back-to-top'],
}
