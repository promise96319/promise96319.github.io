import process from 'node:process'
import { navbar } from './navbar'
import { sidebar } from './sidebar'

export default {
  title: 'promise96319',
  description: '前端开发',
  lang: 'zh-CN',
  head: [
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no, minimal-ui' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'zh' }],
    ['meta', { name: 'og:site_name', content: '前端开发' }],
    // 百度统计
    ['script', {}, `
      if (${process.env.NODE_ENV !== 'development'}) {
        var _hmt = _hmt || [];
        (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?41a9a03811977ee15c69366a880d1296";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
        })();
      }
    `],
  ],
  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    logo: '/logo.png',
    nav: navbar,
    sidebar,

    outline: [2, 3],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/promise96319' },
    ],

    editLink: {
      pattern: 'https://github.com/promise96319/promise96319.github.io/tree/master/docs/:path',
      text: 'Suggest changes to this page',
    },

    algolia: {
      appId: 'ME3PPTXK7S',
      apiKey: '3ff6e86abc1d6b6def15d19bca7c8067',
      indexName: 'qinguanghui',
    },
  },
}
