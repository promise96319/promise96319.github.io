const daily = [
  {
    text: '2022',
    link: '/daily/index',
    children: [
      { text: '5月', link: '/daily/2022/05' },
      { text: '6月', link: '/daily/2022/06' },
      { text: '7月', link: '/daily/2022/07' },
      { text: '8月', link: '/daily/2022/08' },
      { text: '9月', link: '/daily/2022/09' },
    ],
  },
]

const articles = [
  {
    text: '文章',
    link: '/articles/index',
    children: [
      { text: 'React 并发原理', link: 'articles/react-concurrency' },
      { text: 'todo', link: 'articles/todo' },
    ],
  },
]

const vue = [
  {
    text: '原理',
    link: '/vue/index',
    children: [
      { text: '组成与设计', link: '/vue/组成与设计' },
      { text: '选项合并', link: '/vue/选项合并' },
      { text: '响应式原理上篇', link: '/vue/响应式原理上篇' },
      { text: '响应式原理中篇', link: '/vue/响应式原理中篇' },
      { text: '响应式原理下篇', link: '/vue/响应式原理下篇' },
      { text: '编译原理上篇', link: '/vue/编译原理上篇' },
      { text: '编译原理中篇', link: '/vue/编译原理中篇' },
      { text: '编译原理下篇', link: '/vue/编译原理下篇' },
      { text: '插槽实现原理', link: '/vue/插槽实现原理' },
      { text: '组件实现原理', link: '/vue/组件实现原理' },
      { text: '一些原理汇总', link: '/vue/一些原理汇总' },
      { text: '手写简版Vuex', link: '/vue/手写简版Vuex' },
      { text: '手写简版VueRouter', link: '/vue/手写简版VueRouter' },
      // { text: 'vue-loader实现', link: '/vue/../webpack/vue-loader实现.md' },
      { text: '阅读资料', link: '/vue/阅读资料.md' },
    ],
  },
]

const leetcode = [
  {
    text: 'leetcode',
    link: '/leetcode/index',
    children: [
      { link: '/leetcode/leetcode', text: '汇总' },
      { link: '/leetcode/1-20', text: '1-20' },
      { link: '/leetcode/21-40', text: '21-40' },
    ],
  },
]

const vue3 = [
  {
    text: '原理',
    link: '/vue3/index',
    children: [
      { text: '源码调试', link: '/vue3/源码调试' },
    ],
  },
]

const react = [
  {
    text: '原理',
    link: '/react/index',
    children: [
      { text: 'react源码调试环境构建', link: '/react/react源码调试-next' },
      { text: 'react源码调试', link: '/react/react源码调试' },
      { text: 'react源码起始篇', link: '/react/react源码起始篇' },
      { text: 'Lanes模型', link: '/react/Lanes模型' },
      { text: 'Fiber', link: '/react/Fiber' },
      { text: '浏览器一帧里做了什么', link: '/react/浏览器一帧里做了什么' },
      { text: '任务调度', link: '/react/任务调度' },
      { text: 'UpdateQueue', link: '/react/UpdateQueue' },
      { text: 'beginWork-fiber创建', link: '/react/beginWork-fiber创建' },
      { text: 'beginWork-fiber更新', link: '/react/beginWork-fiber更新' },
      { text: 'completeWork', link: '/react/completeWork' },
      { text: 'hooks实现', link: '/react/hooks实现' },
      { text: 'commitWork', link: '/react/commitWork' },
      { text: 'Suspense实现', link: '/react/Suspense实现' },
      { text: '事件系统', link: '/react/事件系统' },
      { text: '手写简版redux', link: '/react/手写简版redux' },
      { text: '手写简版react-redux', link: '/react/手写简版react-redux' },
      { text: '阅读资料', link: '/react/阅读资料' },
    ],
  },
]

const webpack = [
  {
    text: '原理',
    link: '/webpack/index',
    children: [
      { text: 'webpack源码调试', link: '/webpack/webpack源码调试' },
      { text: '流程开始', link: '/webpack/流程开始' },
      { text: 'make阶段', link: '/webpack/make阶段' },
      { text: 'factorizeModule', link: '/webpack/factorizeModule' },
      { text: 'addModule', link: '/webpack/addModule' },
      { text: 'buildModule', link: '/webpack/buildModule' },
      { text: 'seal阶段', link: '/webpack/seal阶段' },
      { text: 'emit阶段', link: '/webpack/emit阶段' },
      { text: 'import', link: '/webpack/import' },
      { text: 'TreeShaking原理', link: '/webpack/TreeShaking原理' },
      { text: 'SplitChunksPlugin', link: '/webpack/SplitChunksPlugin' },
      { text: 'watch实现', link: '/webpack/watch实现' },
      { text: 'vue-loader实现', link: '/webpack/vue-loader实现' },
      { text: '热更新实现原理', link: '/webpack/热更新实现原理' },
      { text: 'Tapable', link: '/webpack/Tapable' },
      { text: 'webpack优化', link: '/webpack/webpack优化' },
      { text: 'webpack官方文档', link: '/webpack/webpack官方文档' },
    ],
  },
]

const rollup = [
  {
    text: '原理',
    link: '/rollup/index',
    children: [
      { text: '源码调试', link: '/rollup/rollup源码调试' },
      { text: 'todo', link: '/rollup/todo' },
    ],
  },
]

const vite = [
  {
    text: '原理',
    link: '/vite/index',
    children: [
      { text: '源码调试', link: '/vite/vite源码调试' },
    ],
  },
]

const babel = [
  {
    text: 'Babel',
    link: 'babel/index',
    children: [
      { text: '基础知识', link: '/babel/babel' },
      { text: '资料', link: '/babel/resource' },
    ],
  },
]

const js = [
  {
    text: 'js',
    link: '/javascript/index',
    children: [
      { text: '事件循环机制', link: '/javascript/事件循环机制' },
      // { text: '../react/浏览器一帧里做了什么', link: '/javascript/../react/浏览器一帧里做了什么' },
      { text: '手写Promise', link: '/javascript/手写Promise' },
      { text: 'co库', link: '/javascript/co库' },
      { text: 'js继承', link: '/javascript/js继承' },
      { text: 'js方法实现', link: '/javascript/js方法实现' },
      { text: 'es6', link: '/javascript/es6' },
    ],
  },
]

const node = [
  {
    text: 'node',
    link: '/node/index',
    children: [
      { text: '手写简版express', link: '/node/手写简版express' },
      { text: 'compose', link: '/node/compose' },
      { text: '进程与线程', link: '/node/进程与线程' },
      { text: '资料', link: '/node/资料' },
      { text: 'cjs', link: '/node/cjs' },
      { text: 'esm', link: '/node/esm' },
      { text: 'module', link: '/node/module' },
      { text: 'package', link: '/node/package' },
    ],
  },
]

const algorithms = [
  {
    text: '算法',
    link: '/node/index',
    children: [
      { text: '动态规划', link: '/algorithms/动态规划' },
      { text: '回溯法', link: '/algorithms/回溯法' },
      { text: '排序汇总', link: '/algorithms/排序汇总' },
      { text: '数组', link: '/algorithms/数组' },
      { text: '字符串', link: '/algorithms/字符串' },
      { text: '二叉树', link: '/algorithms/二叉树' },
    ],
  },
]

const dataStructure = [
  {
    children: [
      { link: '/data-structures/树状数组', text: '树状数组' },
      { link: '/data-structures/线段树', text: '线段树' },
      { link: '/data-structures/红黑树', text: '红黑树' },
      { link: '/data-structures/平衡二叉树', text: '平衡二叉树' },
      { link: '/data-structures/二叉查找树', text: '二叉查找树' },
      { link: '/data-structures/堆', text: '堆' },
      { link: '/data-structures/哈希表', text: '哈希表' },
      { link: '/data-structures/字典树', text: '字典树' },
      { link: '/data-structures/并查集', text: '并查集' },
      { link: '/data-structures/布隆过滤器', text: '布隆过滤器' },
    ],
    link: '/data-structures/index',
    text: '数据结构',
  },
]

const designPattern = [
  {
    children: [
      { link: '/design-pattern/创建型模式', text: '创建型模式' },
      { link: '/design-pattern/结构型模式', text: '结构型模式' },
      { link: '/design-pattern/行为型模式', text: '行为型模式' },
      { link: '/design-pattern/阅读资料', text: '阅读资料' },
    ],
    link: '/design-pattern/index',
    text: '设计模式',
  },
]

const trend = [
  {
    children: [
      { link: '/trend/bundle', text: 'bundleless' },
    ],
    link: '/trend/index',
    text: '新技术',
  },
]

const network = [
  {
    children: [
      { link: '/network/运输层', text: '运输层' },
      { link: '/network/应用层', text: '应用层' },
      { link: '/network/缓存', text: '缓存' },
    ],
    link: '/network/index',
    text: '网络',
  },
]

const computer = []

const resources = [
  {
    children: [
      { link: '/resources/网络协议', text: '网络协议' },
      { link: '/resources/算法', text: '算法' },
      { link: '/resources/前端博客', text: '前端博客' },
    ],
    link: '/resources/index',
    text: '资源',
  },
]

const linux = [
  {
    children: [
      { link: '/linux/bash', text: 'bash' },
      { link: '/linux/ssh', text: 'ssh' },
      { link: '/linux/vim', text: 'vim' },
    ],
    link: '/linux/index',
    text: 'linux',
  },
]

const tools = [
  {
    children: [
      { link: '/tools/img-library', text: 'img library' },
      { link: '/tools/iterm2-ohmyzsh', text: 'iterm2 + ohmyzsh' },
      { link: '/tools/jenkins', text: 'jenkins' },
      { link: '/tools/github-workflow', text: 'github workflow' },
    ],
    link: '/tools/index',
    text: '工具',
  },
]

const project = [
  {
    text: '@qt/design',
    link: '/project/index',
    children: [
      { link: '/project/css-background-img', text: 'css-background-img' },
      { link: '/project/drawer', text: 'drawer' },
      { link: '/project/space', text: 'space' },
      { link: '/project/css-media', text: 'css-media' },
      { link: '/project/prefix-cls', text: '组件库前缀' },
    ],
  },
  {
    text: 'semi design',
    link: '/project/index',
    children: [
      { link: '/project/semi-design', text: 'semi-design' },
    ],
  },
]

const typescript = [
  {
    text: 'typescript',
    link: '/typescript/index',
    children: [
      { link: '/typescript/utility-types', text: 'Utility Types' },
    ],

  },
]

export const sidebar = {
  '/articles/': articles,
  '/daily/': daily,
  '/vue/': vue,
  '/vue3/': vue3,
  '/react/': react,
  '/webpack/': webpack,
  '/rollup/': rollup,
  '/vite/': vite,
  '/babel/': babel,
  '/javascript/': js,
  '/typescript/': typescript,
  '/node/': node,
  '/algorithms/': algorithms,
  '/leetcode/': leetcode,
  '/data-structures/': dataStructure,
  '/design-pattern/': designPattern,
  '/trend/': trend,
  '/network/': network,
  '/computer/': computer,
  '/resources/': resources,
  '/linux/': linux,
  '/tools/': tools,
  '/project/': project,
}
