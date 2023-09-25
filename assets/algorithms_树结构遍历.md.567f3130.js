import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.c610f10c.js";const v=JSON.parse('{"title":"树结构遍历","description":"","frontmatter":{},"headers":[],"relativePath":"algorithms/树结构遍历.md","filePath":"algorithms/树结构遍历.md","lastUpdated":1695631559000}'),p={name:"algorithms/树结构遍历.md"},o=l(`<h1 id="树结构遍历" tabindex="-1">树结构遍历 <a class="header-anchor" href="#树结构遍历" aria-label="Permalink to &quot;树结构遍历&quot;">​</a></h1><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">root</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  val: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  left: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    val: </span><span style="color:#79B8FF;">23</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    left: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      val: </span><span style="color:#79B8FF;">5</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  right: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    val: </span><span style="color:#79B8FF;">15</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    left: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      val: </span><span style="color:#79B8FF;">3</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    right: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      val: </span><span style="color:#79B8FF;">6</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">root</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  val: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  left: {</span></span>
<span class="line"><span style="color:#24292E;">    val: </span><span style="color:#005CC5;">23</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    left: {</span></span>
<span class="line"><span style="color:#24292E;">      val: </span><span style="color:#005CC5;">5</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  right: {</span></span>
<span class="line"><span style="color:#24292E;">    val: </span><span style="color:#005CC5;">15</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    left: {</span></span>
<span class="line"><span style="color:#24292E;">      val: </span><span style="color:#005CC5;">3</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    right: {</span></span>
<span class="line"><span style="color:#24292E;">      val: </span><span style="color:#005CC5;">6</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="前序遍历" tabindex="-1">前序遍历 <a class="header-anchor" href="#前序遍历" aria-label="Permalink to &quot;前序遍历&quot;">​</a></h2><h2 id="中序遍历" tabindex="-1">中序遍历 <a class="header-anchor" href="#中序遍历" aria-label="Permalink to &quot;中序遍历&quot;">​</a></h2><h2 id="后续遍历" tabindex="-1">后续遍历 <a class="header-anchor" href="#后续遍历" aria-label="Permalink to &quot;后续遍历&quot;">​</a></h2><h2 id="广度遍历" tabindex="-1">广度遍历 <a class="header-anchor" href="#广度遍历" aria-label="Permalink to &quot;广度遍历&quot;">​</a></h2><h2 id="深度遍历" tabindex="-1">深度遍历 <a class="header-anchor" href="#深度遍历" aria-label="Permalink to &quot;深度遍历&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">traverse</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">traverse</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span></span></code></pre></div>`,8),e=[o];function t(c,r,i,E,y,d){return a(),n("div",null,e)}const _=s(p,[["render",t]]);export{v as __pageData,_ as default};
