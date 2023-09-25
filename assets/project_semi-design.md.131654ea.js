import{_ as e,o as a,c as s,Q as n}from"./chunks/framework.c610f10c.js";const u=JSON.parse('{"title":"Semi Design","description":"","frontmatter":{},"headers":[],"relativePath":"project/semi-design.md","filePath":"project/semi-design.md","lastUpdated":1695632838000}'),o={name:"project/semi-design.md"},t=n(`<h1 id="semi-design" tabindex="-1">Semi Design <a class="header-anchor" href="#semi-design" aria-label="Permalink to &quot;Semi Design&quot;">​</a></h1><p><a href="https://bytedance.feishu.cn/wiki/wikcnOVYexosCS1Rmvb5qCsWT1f" target="_blank" rel="noreferrer">Semi Design - UI组件库如何分层设计，使其具备适配多种mvvm框架能力</a></p><h2 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题&quot;">​</a></h2><p>对于组件库而言，使用不同的框架时需要封装不同的组件。比如 <code>Antd（React 版）</code> 需要使用到 <code>React</code> 版的 <code>rc-table</code>，如果需要在 <code>Vue</code> 使用 <code>Antd</code>，又需要重新写 <code>Vue</code> 版的 <code>Antd</code>，同时还需要写 <code>Vue</code> 版的 <code>rc-table</code>。</p><p>依次类推，如果需要在 <code>Svelte</code> 中使用该组件库，那么所有基础组件内容都得重写一遍。</p><p>但是实际上，不同框架封装的组件库在交互逻辑上是一致的，多次重复封装无疑增加了开发成本。</p><h2 id="解决" tabindex="-1">解决 <a class="header-anchor" href="#解决" aria-label="Permalink to &quot;解决&quot;">​</a></h2><p><code>Semi Design</code> 通过 <code>Foundation/Adapter</code> 的架构实现了组件逻辑上的复用，而不限于框架层面。它通过适配器模式来处理不同框架 <code>Api</code> 语法上的不同。</p><p>对于一个组件来讲，不同的框架，他们不同的地方主要在 <code>DOM</code> 结构的编写、状态的定义和修改上，其他内容都是共用的。</p><p>比如对于 <code>select</code> 来讲，<code>onChange</code> 后的逻辑，对于不同的框架都是共通的，不同的是最后触发更新 <code>state</code> 的方式不同。</p><p>因此，<code>F/A</code> 架构将这些通用的内容，也就是组件的交互逻辑封装到 <code>Foundation</code> 组件中。而不同的地方通过 <code>Adapter</code> 适配器的方式对状态，事件处理，<code>dom</code> 结构进行兼容处理。</p><p><strong>最后组件封装变为</strong>：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">data/state 渲染 =&gt; onClick 触发事件 =&gt; </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">触发 foundation.handleClick =&gt; foundation 处理逻辑 =&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">foundation 调用 adapter 变更状态 =&gt; </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">adpter 通过 setState/this.data 更改状态</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">data/state 渲染 =&gt; onClick 触发事件 =&gt; </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">触发 foundation.handleClick =&gt; foundation 处理逻辑 =&gt;</span></span>
<span class="line"><span style="color:#24292e;">foundation 调用 adapter 变更状态 =&gt; </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">adpter 通过 setState/this.data 更改状态</span></span></code></pre></div><p>因此，对于不同框架的组件而言，只需要开发不同版本的 <code>adapter</code> 即可，而组件内部的处理逻辑都能进行复用。</p>`,14),c=[t];function d(p,l,i,r,h,g){return a(),s("div",null,c)}const _=e(o,[["render",d]]);export{u as __pageData,_ as default};