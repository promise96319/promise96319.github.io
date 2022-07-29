import{_ as n,c as s,o as a,a as p}from"./app.f27e6278.js";const f='{"title":"compose","description":"","frontmatter":{},"headers":[{"level":2,"title":"compose\u65B9\u6CD5","slug":"compose\u65B9\u6CD5"},{"level":2,"title":"express next \u65B9\u6CD5","slug":"express-next-\u65B9\u6CD5"},{"level":2,"title":"koa-compose","slug":"koa-compose"}],"relativePath":"node/compose.md","lastUpdated":1659089884000}',t={},o=p(`<h1 id="compose" tabindex="-1">compose <a class="header-anchor" href="#compose" aria-hidden="true">#</a></h1><h2 id="compose\u65B9\u6CD5" tabindex="-1">compose\u65B9\u6CD5 <a class="header-anchor" href="#compose\u65B9\u6CD5" aria-hidden="true">#</a></h2><p>\u5B9E\u73B0\u76EE\u6807\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">m1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;middleware1 start&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;middleware1 end&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">m2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;middleware2 start&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;middleware2 end&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">m3</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;middleware3 start&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;middleware3 end&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> fn <span class="token operator">=</span> <span class="token function">compose</span><span class="token punctuation">(</span><span class="token punctuation">[</span>m1<span class="token punctuation">,</span> m2<span class="token punctuation">,</span> m3<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// middleware1 start</span>
<span class="token comment">// middleware2 start</span>
<span class="token comment">// middleware3 start</span>
<span class="token comment">// middleware3 end</span>
<span class="token comment">// middleware2 end</span>
<span class="token comment">// middleware1 end</span>
</code></pre></div><p><code>compose</code>\u51FD\u6570\u5177\u4F53\u5B9E\u73B0\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">compose</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">middlewares</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">dispatch</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> middlewares<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span>
      <span class="token keyword">const</span> fn <span class="token operator">=</span> middlewares<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
      <span class="token function">fn</span><span class="token punctuation">(</span><span class="token function">dispatch</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8BE5<code>compose</code>\u51FD\u6570\u91CC\u7684<code>dispatch</code>\u5B9E\u8D28\u4E0A\u4E0E<code>express</code>\u91CC\u7684<code>next</code>\u51FD\u6570\u5341\u5206\u76F8\u4F3C\uFF0C\u53EA\u4E0D\u8FC7\u5C01\u88C5\u5F97\u66F4\u7B80\u77ED\u4E00\u4E9B\u3002</p><h2 id="express-next-\u65B9\u6CD5" tabindex="-1">express next \u65B9\u6CD5 <a class="header-anchor" href="#express-next-\u65B9\u6CD5" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>m1<span class="token punctuation">)</span>
stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>m2<span class="token punctuation">)</span>
stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>m3<span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">handle</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> out</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> idx <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">function</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>idx <span class="token operator">&lt;</span> stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> fn <span class="token operator">=</span> stack<span class="token punctuation">[</span>idx<span class="token punctuation">]</span>
      idx <span class="token operator">+=</span> <span class="token number">1</span>
      <span class="token function">fn</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">out</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="koa-compose" tabindex="-1">koa-compose <a class="header-anchor" href="#koa-compose" aria-hidden="true">#</a></h2><p><code>koa-compose</code>\u652F\u6301<code>async/await</code>\u8BED\u6CD5\uFF0C\u56E0\u6B64<code>next</code>\u51FD\u6570\u5E94\u8BE5\u8FD4\u56DE\u4E00\u4E2A<code>Promise</code>\u5BF9\u8C61\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">compose</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">middlewares</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>middlewares<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;\u4E2D\u95F4\u4EF6\u5FC5\u987B\u662F\u6570\u7EC4\uFF01&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> middleware <span class="token keyword">of</span> middlewares<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> middleware <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;\u4E2D\u95F4\u4EF6\u6570\u7EC4\u5185\u90E8\u5143\u7D20\u5FC5\u987B\u662F\u51FD\u6570\uFF01&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
    <span class="token keyword">const</span> <span class="token function-variable function">dispatch</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u7B2C\u4E00\u6B21\u6267\u884C next \u7684\u65F6\u5019\u4F1A\u4F9D\u6B21\u6267\u884C\u540E\u7EED\u7684next</span>
      <span class="token comment">// \u56E0\u6B64 index \u53EF\u4EE3\u8868\u5DF2\u7ECF\u6267\u884C\u7684 next \u6570</span>
      <span class="token comment">// \u5982\u679C\u91CD\u590D\u6267\u884C next\uFF0C\u90A3\u4E48 i \u662F\u8981\u5C0F\u4E8E next\u6570\u7684</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;next()\u591A\u6B21\u6267\u884C\uFF01&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      index <span class="token operator">=</span> i

      <span class="token keyword">let</span> fn <span class="token operator">=</span> middlewares<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
      <span class="token comment">// \u6700\u540E\u4E00\u6B21\u4F7F\u7528 next \u6267\u884C</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> middlewares<span class="token punctuation">.</span>length<span class="token punctuation">)</span> fn <span class="token operator">=</span> next
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>fn<span class="token punctuation">)</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token function">dispatch</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,12),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var w=n(t,[["render",c]]);export{f as __pageData,w as default};
