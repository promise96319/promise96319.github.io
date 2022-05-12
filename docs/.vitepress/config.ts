import { defineConfig } from 'vitepress'
import { navbar } from './navbar'
import { sidebar } from './sidebar'

export default defineConfig({
  title: '秦光辉',
  description: '专注于前端开发，关注新技术，坚持学习。',
  lang: 'zh-CN',
  head: [
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no, minimal-ui' }],
    // 百度统计
    ['script', {}, `
      var _hmt = _hmt || [];
      (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?41a9a03811977ee15c69366a880d1296";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
      })();
    `],
  ],
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.png',
    repo: 'promise96319',
    lastUpdated: '最近更新',
    nav: navbar,
    sidebar,
    nextLinks: true,
    prevLinks: true,
    editLinkText: '编辑',
    algolia: {
      appId: 'ME3PPTXK7S',
      apiKey: '3ff6e86abc1d6b6def15d19bca7c8067',
      indexName: 'qinguanghui',
    },
  },
  markdown: {
    toc: { includeLevel: [1, 2, 3] },
  },
})
