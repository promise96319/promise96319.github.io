module.exports = {
    // base: '/silence/',
    // dest: 'dist',
    title: '秦光辉',
    description: '一个专注于前端开发的博客，逐行分析Vue源码，深入了解webpack和Node相关框架，攻克各个javascript核心知识点，致力于成为一名合格的前端开发者',
    head: [
        [
            'meta',
            {

            }
        ],
        // 百度统计
        ['script', {},`
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
                text: 'js核心知识点',
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
            '阅读资料.md',
          ],
          '/javascript/': [
            '事件循环机制.md'
          ],
          '/about/': []
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
