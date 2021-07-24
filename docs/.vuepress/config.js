module.exports = {
    // base: '/silence/',
    // dest: 'dist',
    title: '秦光辉',
    // head: [
    //    ['link', { rel: 'icon', href: `/assets/logo.png` }]
    // ],
    // serviceWorker: false,
    // configureWebpack: {
    //   resolve: {
    //     alias: {
    //       '@image': '/docs/.vuepress/public'
    //     }
    //   }
    // },
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
                text: 'React',
                link: '/react/'
            },
            {
                text: 'Webpack',
                link: '/webpack/'
            },
        ],
        displayAllHeaders: true,
        sidebar: {
          '/vue/': [
            '组成与设计.md',
            '选项合并.md',
            '响应式原理上篇.md',
            '响应式原理中篇.md',
          ],
        }
    },
    markdown: {
      lineNumbers: true
    },
    plugins: ['@vuepress/back-to-top'],
}
