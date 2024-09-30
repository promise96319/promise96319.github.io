const articles = [
  {
    text: '文章',
    items: [
      { text: 'React Concurrency', link: '/articles/react-concurrency/index' },
      { text: 'React Server Component', link: '/articles/react-server-component/index' },
    ],
  },
]

const ai = [
  {
    text: 'AI',
    items: [
      { text: 'ChatGPT Register', link: '/ai/chatgpt-register' },
    ],
  },
]

const electron = [
  {
    text: 'Electron',
    items: [
      { text: '窗口机制', link: '/electron/window' },
      { text: '通信机制', link: '/electron/ipc' },
    ],
  },
]

// 框架系列
const vue3 = [
  {
    text: 'Vue3原理',
    items: [
      { text: '源码调试', link: '/vue3/源码调试' },
    ],
  },
]

const vue = [
  {
    text: 'Vue2原理',
    collapsed: false,
    items: [
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

const react = [
  {
    text: '原理',
    collapsed: false,
    items: [
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
  {
    text: '知识点',
    collapsed: false,
    items: [
      { text: '不同版本React事件机制', link: '/react/note/event-change' },
    ],
  },
]

// 基建系列
const webpack = [
  {
    text: '理论',
    collapsed: false,
    items: [
      { text: '指南', link: '/webpack/guide' },
    ],
  },
  {
    text: '原理',
    link: '/webpack/index',
    collapsed: false,
    items: [
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
      { text: 'Runtime', link: '/webpack/runtime' },
      { text: 'webpack优化', link: '/webpack/webpack优化' },
      { text: 'webpack官方文档', link: '/webpack/webpack官方文档' },
    ],
  },
]

const rollup = [
  {
    collapsed: false,
    text: '原理',
    items: [
      { text: '源码调试', link: '/rollup/源码调试' },
      { text: 'scope-hoist', link: '/rollup/scope-hoist' },
      { text: 'split-code', link: '/rollup/split-code' },
      { text: 'tree-shaking', link: '/rollup/tree-shaking' },
      { text: 'todo', link: '/rollup/todo' },
    ],
  },
]

const vite = [
  {
    text: '原理',
    items: [
      { text: '源码调试', link: '/vite/源码调试' },
    ],
  },
]

const babel = [
  {
    text: '入门',
    collapse: false,
    items: [
      { text: '概览', link: '/babel/guide/overview' },
      { text: '插件开发', link: '/babel/guide/plugin' },
    ],
  },
  {
    text: '实际问题',
    collapse: false,
    items: [
      { text: '项目产物兼容性问题', link: '/babel/problems/invalid-polyfill' },
    ],
  },
  { text: '阅读资料', link: '/babel/resource' },
]

// JS系列
const js = [
  {
    text: 'ES6',
    collapsed: false,
    items: [
      { text: '事件循环机制', link: '/javascript/事件循环机制' },
      { text: '浏览器一帧里做了什么', link: '/javascript/../react/浏览器一帧里做了什么' },
      { text: '手写Promise', link: '/javascript/手写Promise' },
      { text: 'co库', link: '/javascript/co库' },
      { text: 'js继承', link: '/javascript/js继承' },
      { text: 'js方法实现', link: '/javascript/js方法实现' },
      { text: 'es6', link: '/javascript/es6' },
      { text: '元素位置获取', link: '/javascript/元素位置获取' },
      { text: 'Input宽度问题', link: '/javascript/Input宽度问题' },
    ],
  },
]

const node = [
  {
    text: 'node',
    items: [
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

const typescript = [
  {
    text: 'typescript',
    items: [
      { link: '/typescript/utility-types', text: '内置类型' },
    ],
  },
]

// 计算机基础
const algorithms = [
  {
    text: '算法',
    collapsed: false,
    items: [
      { text: '动态规划', link: '/algorithms/动态规划' },
      { text: '回溯法', link: '/algorithms/回溯法' },
      { text: '排序汇总', link: '/algorithms/排序汇总' },
      { text: '数组', link: '/algorithms/数组' },
      { text: '字符串', link: '/algorithms/字符串' },
      { text: '二叉树', link: '/algorithms/二叉树' },
    ],
  },
  {
    text: '阅读资料',
    link: '/algorithms/阅读资料',
  },
]

const dataStructure = [
  {
    text: '数据结构',
    collapsed: false,
    items: [
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
  },
]

const designPattern = [
  {
    text: '设计模式',
    items: [
      { link: '/design-pattern/创建型模式', text: '创建型模式' },
      { link: '/design-pattern/结构型模式', text: '结构型模式' },
      { link: '/design-pattern/行为型模式', text: '行为型模式' },
      { link: '/design-pattern/阅读资料', text: '阅读资料' },
    ],
  },
]

const network = [
  {
    text: '网络',
    items: [
      { link: '/network/运输层', text: '运输层' },
      { link: '/network/应用层', text: '应用层' },
      { link: '/network/缓存', text: '缓存' },
    ],
  },
  {
    text: '阅读资料',
    link: '/network/阅读资料',
  },
]

const leetcode = [
  {
    text: 'leetcode',
    items: [
      { link: '/leetcode/1-20', text: '1-20' },
      { link: '/leetcode/21-40', text: '21-40' },
    ],
  },
]

const trend = [
  {
    text: '新技术',
    items: [
      { link: '/trend/bundle', text: 'bundleless' },
    ],
  },
]

const resources = [
  {
    text: '资源',
    items: [
      { link: '/resources/前端博客', text: '前端博客' },
      { link: '/resources/知识点', text: '知识点' },
    ],
  },
]

const tools = [
  {
    text: '工具',
    items: [
      { link: '/tools/img-library', text: 'img library' },
      { link: '/tools/iterm2-ohmyzsh', text: 'iterm2 + ohmyzsh' },
      { link: '/tools/jenkins', text: 'jenkins' },
      { link: '/tools/github-workflow', text: 'github workflow' },
    ],
  },
]

const config = [
  {
    text: '个人配置',
    items: [
      { link: '/config/draw-io', text: 'draw.io' },
      { link: '/config/bash', text: 'bash' },
      { link: '/config/vim', text: 'vim' },
    ],
  },
]

const project = [
  {
    text: '@qt/design',
    collapsed: false,
    items: [
      { link: '/project/react-runtime', text: '组件库 Playground' },
      { link: '/project/prefix-cls', text: '组件库样式覆盖问题' },
      { link: '/project/css-background-img', text: 'CSS 背景图片设置颜色' },
      { link: '/project/css-media', text: '媒体查询' },
      { link: '/project/auto-import', text: '自动引入' },
      { link: '/project/ellipsis-text', text: '省略文本' },
      { link: '/project/virtual-list', text: '虚拟滚动' },
      { link: '/project/drawer', text: '抽屉嵌套位移' },
      { link: '/project/space', text: '间距' },
      { link: '/project/semi-design', text: 'Semi Design 架构' },
    ],
  },
  {
    text: 'OS 项目',
    items: [
      { link: '/project/infra/compatibility', text: '项目产物兼容性问题' },
      { link: '/project/infra/sourcemap', text: 'Sourcemap 调试' },
    ],
  },
]

export const sidebar = {
  '/articles/': articles,
  '/ai/': ai,
  '/electron/': electron,
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
  '/resources/': resources,
  '/tools/': tools,
  '/config/': config,
  '/project/': project,
}
