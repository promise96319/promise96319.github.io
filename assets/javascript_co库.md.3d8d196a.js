import{_ as n,c as s,o as a,a as t}from"./app.e6e38190.js";const m='{"title":"co\u5E93","description":"","frontmatter":{},"headers":[{"level":2,"title":"generator\u4F7F\u7528","slug":"generator\u4F7F\u7528"},{"level":2,"title":"\u751F\u6210\u5668","slug":"\u751F\u6210\u5668"},{"level":2,"title":"\u6267\u884C\u5668","slug":"\u6267\u884C\u5668"},{"level":2,"title":"\u8C03\u7528","slug":"\u8C03\u7528"},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003"}],"relativePath":"javascript/co\u5E93.md","lastUpdated":1660086839000}',e={},p=t(`<h1 id="co\u5E93" tabindex="-1">co\u5E93 <a class="header-anchor" href="#co\u5E93" aria-hidden="true">#</a></h1><h2 id="generator\u4F7F\u7528" tabindex="-1">generator\u4F7F\u7528 <a class="header-anchor" href="#generator\u4F7F\u7528" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">yield</span> <span class="token number">1</span>
  <span class="token keyword">yield</span> <span class="token number">2</span>
  <span class="token keyword">yield</span> <span class="token number">3</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> g <span class="token operator">=</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u6253\u5370\u4EE5\u4E0B\u5185\u5BB9</span>
<span class="token comment">// { value: 1, done: false }</span>
<span class="token comment">// { value: 2, done: false }</span>
<span class="token comment">// { value: 3, done: false }</span>
<span class="token comment">// { value: undefined, done: true }</span>
</code></pre></div><h2 id="\u751F\u6210\u5668" tabindex="-1">\u751F\u6210\u5668 <a class="header-anchor" href="#\u751F\u6210\u5668" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">yield</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">yield</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token keyword">yield</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// { value: Promise { 1 }, done: false }</span>
<span class="token comment">// { value: Promise { 2 }, done: false }</span>
<span class="token comment">// { value: Promise { 3 }, done: false }</span>
<span class="token comment">// { value: undefined, done: true }</span>
</code></pre></div><h2 id="\u6267\u884C\u5668" tabindex="-1">\u6267\u884C\u5668 <a class="header-anchor" href="#\u6267\u884C\u5668" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">co</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">generator</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">next</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">.</span>done<span class="token punctuation">)</span> <span class="token keyword">return</span>
    Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">next</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u8C03\u7528" tabindex="-1">\u8C03\u7528 <a class="header-anchor" href="#\u8C03\u7528" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token function">co</span><span class="token punctuation">(</span><span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// promise \u4F9D\u6B21\u88AB\u6267\u884C</span>
<span class="token comment">// 1</span>
<span class="token comment">// 2</span>
<span class="token comment">// 3</span>
</code></pre></div><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><ul><li><a href="https://github.com/tj/co" target="_blank" rel="noopener noreferrer">co\u5E93github\u5730\u5740</a></li><li><a href="https://es6.ruanyifeng.com/#docs/generator" target="_blank" rel="noopener noreferrer">generator</a></li></ul>`,11),o=[p];function c(l,u,i,r,k,d){return a(),s("div",null,o)}var h=n(e,[["render",c]]);export{m as __pageData,h as default};
