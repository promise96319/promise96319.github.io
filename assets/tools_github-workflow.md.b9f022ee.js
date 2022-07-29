import{_ as n,c as a,o as s,a as e}from"./app.f27e6278.js";const m='{"title":"Github workflow","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u90E8\u7F72 vitepress","slug":"\u90E8\u7F72-vitepress"},{"level":2,"title":"Github actions","slug":"github-actions"},{"level":2,"title":"\u8BBE\u7F6E token","slug":"\u8BBE\u7F6E-token"},{"level":2,"title":"\u8BBE\u7F6E\u57DF\u540D","slug":"\u8BBE\u7F6E\u57DF\u540D"}],"relativePath":"tools/github-workflow.md","lastUpdated":1659089884000}',t={},o=e(`<h1 id="github-workflow" tabindex="-1">Github workflow <a class="header-anchor" href="#github-workflow" aria-hidden="true">#</a></h1><h2 id="\u90E8\u7F72-vitepress" tabindex="-1">\u90E8\u7F72 vitepress <a class="header-anchor" href="#\u90E8\u7F72-vitepress" aria-hidden="true">#</a></h2><div class="language-yaml"><pre><code><span class="token comment"># \u4EFB\u52A1\u540D\u79F0</span>
<span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy blog

<span class="token comment"># \u4EFB\u52A1\u89E6\u53D1\u4E8B\u4EF6</span>
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> master

<span class="token comment"># \u4EFB\u52A1</span>
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token comment"># \u6253\u5305\u548C\u90E8\u7F72\u4EFB\u52A1</span>
  <span class="token key atrule">build-and-deploy</span><span class="token punctuation">:</span>
    <span class="token comment"># \u8FD0\u884C\u5728 ubuntu \u4E0A</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token comment"># \u590D\u5236\u4E00\u4E2A\u65B0\u7684\u9879\u76EE</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout a new repository
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3

      <span class="token comment"># \u4F7F\u7528 node \u73AF\u5883</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Node environment
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">&#39;16&#39;</span>

      <span class="token comment"># \u5B89\u88C5\u4F9D\u8D56</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install packages
        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm i

      <span class="token comment"># \u6253\u5305 vitepress</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build  site
        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run build

      <span class="token comment"># \u5C06\u6253\u5305\u540E\u7684\u9759\u6001\u6587\u4EF6\u4E0A\u4F20\u5230 gp-pages \u5206\u652F\u4E0A</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Publish to github pages
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@v4.3.3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
          <span class="token key atrule">folder</span><span class="token punctuation">:</span> docs/.vitepress/dist
</code></pre></div><h2 id="github-actions" tabindex="-1">Github actions <a class="header-anchor" href="#github-actions" aria-hidden="true">#</a></h2><p>\u53EF\u4EE5\u5728 <code>actions</code> \u5E02\u573A\u91CC\u67E5\u627E\u4E00\u4E9B\u5DF2\u6709\u7684 actions \u6765\u7B80\u5316\u90E8\u7F72\u6D41\u7A0B\u3002</p><ul><li><a href="https://github.com/marketplace?category=deployment&amp;query=github+pages+sort%3Apopularity-desc&amp;type=actions&amp;verification=" target="_blank" rel="noopener noreferrer">Github actions \u5E02\u573A</a></li></ul><h2 id="\u8BBE\u7F6E-token" tabindex="-1">\u8BBE\u7F6E token <a class="header-anchor" href="#\u8BBE\u7F6E-token" aria-hidden="true">#</a></h2><p>\u89E6\u53D1\u4E8B\u4EF6\u65F6\u9700\u8981\u8BBE\u7F6E <code>github token</code>\uFF0C\u5E76\u4E14 <code>token</code> \u9700\u8981\u6709 <code>workflow</code> \u6743\u9650\u3002</p><ul><li><a href="https://github.com/settings/tokens/674290866" target="_blank" rel="noopener noreferrer">\u8BBE\u7F6E\u63A8\u9001\u7684token</a></li></ul><h2 id="\u8BBE\u7F6E\u57DF\u540D" tabindex="-1">\u8BBE\u7F6E\u57DF\u540D <a class="header-anchor" href="#\u8BBE\u7F6E\u57DF\u540D" aria-hidden="true">#</a></h2><p>\u90E8\u7F72\u540E\uFF0C\u9ED8\u8BA4 <code>xxx.github.io</code> \u9879\u76EE\u7684 <code>gh-pages</code> \u5206\u652F\u5BF9\u5E94\u4E8E\u6839\u9879\u76EE\uFF0C\u5176\u4ED6\u4ED3\u5E93\u7684 <code>gh-pages</code> \u5206\u652F\u90E8\u7F72\u540E\u4E3A <code>xxx.github.io/repository_name/</code> \u8DEF\u5F84\u3002\u56E0\u6B64\u53EA\u9700\u8981\u8BBE\u7F6E <code>xxx.github.io</code> \u7684\u57DF\u540D\u6620\u5C04\u5373\u53EF\u3002</p><ul><li><a href="https://docs.github.com/cn/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages" target="_blank" rel="noopener noreferrer">\u57DF\u540D\u8BBE\u7F6E</a></li></ul>`,12),p=[o];function c(l,u,i,r,k,d){return s(),a("div",null,p)}var g=n(t,[["render",c]]);export{m as __pageData,g as default};
