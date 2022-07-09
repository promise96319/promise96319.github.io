import{_ as n,c as s,o as a,a as p}from"./app.cb1b5bc1.js";var t="/assets/middleware.e8ce35af.jpg";const w='{"title":"\u624B\u5199\u7B80\u7248express","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7B80\u5355\u4F7F\u7528","slug":"\u7B80\u5355\u4F7F\u7528"},{"level":2,"title":"listen\u65B9\u6CD5","slug":"listen\u65B9\u6CD5"},{"level":2,"title":"\u4E2D\u95F4\u4EF6\u673A\u5236","slug":"\u4E2D\u95F4\u4EF6\u673A\u5236"},{"level":2,"title":"Layer\u7C7B","slug":"layer\u7C7B"},{"level":2,"title":"get/post\u7B49\u65B9\u6CD5","slug":"get-post\u7B49\u65B9\u6CD5"},{"level":2,"title":"use\u65B9\u6CD5","slug":"use\u65B9\u6CD5"},{"level":2,"title":"handle \u65B9\u6CD5","slug":"handle-\u65B9\u6CD5"},{"level":2,"title":"\u5B8C\u6574\u4EE3\u7801","slug":"\u5B8C\u6574\u4EE3\u7801"},{"level":2,"title":"\u6267\u884C\u7ED3\u679C","slug":"\u6267\u884C\u7ED3\u679C"},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3"}],"relativePath":"node/\u624B\u5199\u7B80\u7248express.md","lastUpdated":1657370879000}',o={},e=p(`<h1 id="\u624B\u5199\u7B80\u7248express" tabindex="-1">\u624B\u5199\u7B80\u7248express <a class="header-anchor" href="#\u624B\u5199\u7B80\u7248express" aria-hidden="true">#</a></h1><h2 id="\u7B80\u5355\u4F7F\u7528" tabindex="-1">\u7B80\u5355\u4F7F\u7528 <a class="header-anchor" href="#\u7B80\u5355\u4F7F\u7528" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;middleware start&#39;</span><span class="token punctuation">)</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;middleware end&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;home page&#39;</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;I am home page.&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span>

<span class="token comment">// \u6253\u5370</span>
<span class="token comment">// middleware start</span>
<span class="token comment">// home page</span>
<span class="token comment">// middleware end</span>
</code></pre></div><p>\u53EF\u4EE5\u770B\u51FA\uFF0C<code>express</code>\u53EF\u4EE5\u88AB\u5B9E\u4F8B\u5316\uFF0C\u4E14\u5305\u542B<code>use/get/listen</code>\u7B49\u65B9\u6CD5\u3002\u800C\u4E14<code>use/get</code>\u65B9\u6CD5\u5185\u90E8\u5B58\u5728\u4E00\u5B9A\u7684\u6267\u884C\u987A\u5E8F\uFF0C\u8FD9\u4E2A\u6267\u884C\u987A\u5E8F\u7B26\u5408\u201C\u6D0B\u8471\u6A21\u578B\u201D\uFF1A\u4ECE\u5916\u5230\u5185\u518D\u4ECE\u5185\u5230\u5916\u3002</p><p><img src="`+t+`" alt=""></p><h2 id="listen\u65B9\u6CD5" tabindex="-1">listen\u65B9\u6CD5 <a class="header-anchor" href="#listen\u65B9\u6CD5" aria-hidden="true">#</a></h2><p>\u9996\u5148\u5B9E\u73B0<code>listen</code>\u65B9\u6CD5\uFF0C<code>express</code>\u7684\u670D\u52A1\u662F\u5EFA\u7ACB\u5728<code>http</code>\u6A21\u5757\u4E4B\u4E0A\u7684\u3002\u56E0\u6B64\uFF0C\u53EF\u4EE5\u5BF9<code>http</code>\u8FDB\u884C\u4E00\u5C42\u5C01\u88C5\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">Express</span> <span class="token punctuation">{</span>
  <span class="token function">listen</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// handle \u662F\u53D1\u9001\u8BF7\u6C42\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6\uFF0C\u540E\u7EED\u4F1A\u8FDB\u884C\u5B9E\u73B0</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>server <span class="token operator">=</span> server
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u4E2D\u95F4\u4EF6\u673A\u5236" tabindex="-1">\u4E2D\u95F4\u4EF6\u673A\u5236 <a class="header-anchor" href="#\u4E2D\u95F4\u4EF6\u673A\u5236" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">m1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;middleware1 start&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;middleware1 end&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">m2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;middleware2 start&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;middleware2 end&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">m3</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;middleware3 start&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;middleware3 end&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4EE5\u4E0A\u4EE3\u7801\u5982\u4F55\u624D\u80FD\u6309\u7167\u4EE5\u4E0B\u987A\u5E8F\u6267\u884C\u5462\uFF1F</p><div class="language-javascript"><pre><code><span class="token comment">// middleware1 start</span>
<span class="token comment">// middleware2 start</span>
<span class="token comment">// middleware3 start</span>
<span class="token comment">// middleware3 end</span>
<span class="token comment">// middleware2 end</span>
<span class="token comment">// middleware1 end</span>
</code></pre></div><p><code>express</code>\u91CC\u662F\u4F7F\u7528\u4E00\u4E2A<code>next</code>\u65B9\u6CD5\u8FDB\u884C\u5B9E\u73B0\u7684\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
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

<span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// middleware1 start</span>
<span class="token comment">// middleware2 start</span>
<span class="token comment">// middleware3 start</span>
<span class="token comment">// end</span>
<span class="token comment">// middleware3 end</span>
<span class="token comment">// middleware2 end</span>
<span class="token comment">// middleware1 end</span>
</code></pre></div><p>\u6574\u4E2A\u4E2D\u95F4\u4EF6\u673A\u5236\u7684\u6838\u5FC3\u4EE3\u7801\u53EA\u6709\u51E0\u884C\uFF01</p><h2 id="layer\u7C7B" tabindex="-1">Layer\u7C7B <a class="header-anchor" href="#layer\u7C7B" aria-hidden="true">#</a></h2><p>\u6839\u636E\u4E0A\u9762\u7684<code>next</code>\u7684\u4EE3\u7801\u53EF\u4EE5\u5F97\u77E5\uFF0C\u5728\u5B9E\u73B0\u4E2D\u95F4\u4EF6\u4E4B\u524D\uFF0C\u9700\u8981\u7EF4\u62A4\u4E00\u4E2A\u6570\u7EC4\uFF0C\u8FD9\u4E2A\u6570\u7EC4\u91CC\u7684\u5143\u7D20\u5305\u542B<code>(req, res, next) =&gt; {}</code>\u3002\u53E6\u5916\u7531\u4E8E\u4E2D\u95F4\u4EF6\u548C\u8BF7\u6C42\u5728\u6267\u884C\u65F6\uFF0C\u9700\u8981\u5339\u914D\u8DEF\u5F84\u548C\u65B9\u6CD5\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u5B9A\u4E49\u4E00\u4E2A<code>Layer</code>\u7C7B\uFF0C\u7528\u4E8E\u7BA1\u7406\u8DEF\u5F84\u5339\u914D\u548C\u65B9\u6CD5\u6267\u884C\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">class</span> <span class="token class-name">Layer</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">path<span class="token punctuation">,</span> method<span class="token punctuation">,</span> handle</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>path <span class="token operator">=</span> path
    <span class="token keyword">this</span><span class="token punctuation">.</span>method <span class="token operator">=</span> method
    <span class="token keyword">this</span><span class="token punctuation">.</span>handle <span class="token operator">=</span> handle
  <span class="token punctuation">}</span>
  <span class="token comment">// 1. \u8FDB\u884C\u8DEF\u5F84\u5339\u914D</span>
  <span class="token function">match</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> method<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8FD9\u91CC\u7B80\u5355\u5339\u914D\u4E00\u4E0B</span>
    <span class="token comment">// \u5982\u679C\u662F\u4E2D\u95F4\u4EF6\uFF0Cpath\u4E0D\u5B58\u5728\u65F6\uFF0C\u7B26\u5408\u8981\u6C42</span>
    <span class="token comment">// \u5982\u679C\u662F\u4E2D\u95F4\u4EF6\uFF0Cpath\u5B58\u5728\u4E14\u5339\u914D\u65F6\uFF0C\u7B26\u5408\u8981\u6C42</span>
    <span class="token keyword">const</span> isMiddleware <span class="token operator">=</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>path
      <span class="token operator">||</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>method <span class="token operator">&amp;&amp;</span> path<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>path<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span>
    <span class="token comment">// \u5982\u679C\u662F\u8BF7\u6C42\uFF0Cpath \u548C method \u5747\u5339\u914D\u65F6\u7B26\u5408\u8981\u6C42</span>
    <span class="token keyword">const</span> isRequestMatch <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>path<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span>
      <span class="token operator">&amp;&amp;</span> method<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>method
    <span class="token keyword">return</span> isMiddleware <span class="token operator">||</span> isRequestMatch
  <span class="token punctuation">}</span>
  <span class="token comment">// 2. \u8FDB\u884C\u6267\u884C\u65B9\u6CD5</span>
  <span class="token function">handleMethod</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">next</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>stack</code>\u91CC\u5B58\u653E\u7684\u5C31\u662F\u8FD9\u4E9B<code>layer</code>\u3002\u5728\u7528\u4E8E\u53D1\u9001\u8BF7\u6C42\u65F6\uFF0C\u53EA\u9700\u8981\u904D\u5386<code>stack</code>\u6267\u884C<code>layer.handleMethod</code>\u65B9\u6CD5\u5373\u53EF\u5B9E\u73B0\u4E2D\u95F4\u4EF6\u7684\u6548\u679C\u3002\u4E0B\u4E00\u6B65\uFF0C\u6211\u4EEC\u5219\u662F\u5B9A\u4E49\u4E2D\u95F4\u4EF6\u548C\u8BF7\u6C42\u65B9\u6CD5\u3002</p><h2 id="get-post\u7B49\u65B9\u6CD5" tabindex="-1">get/post\u7B49\u65B9\u6CD5 <a class="header-anchor" href="#get-post\u7B49\u65B9\u6CD5" aria-hidden="true">#</a></h2><p>\u904D\u5386<code>methods</code>\uFF0C\u8FDB\u884C\u65B9\u6CD5\u6CE8\u518C\u3002\u8FD9\u6837\u5728\u4F7F\u7528<code>app.get/post/...</code>\u7684\u65F6\u5019\u5C31\u4F1A\u6536\u96C6\u76F8\u5E94\u7684\u56DE\u8C03\u51FD\u6570\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">class</span> <span class="token class-name">Express</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6267\u884C\u51FD\u6570\u6570\u7EC4\uFF0C\u5B58\u653E\u7684\u662F layer</span>
  stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8BF7\u6C42\u65B9\u6CD5\uFF1Aget\u3001post\u7B49\u7B49</span>
    <span class="token keyword">const</span> methods <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;put&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;delete&#39;</span><span class="token punctuation">]</span>
    methods<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">method</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">[</span>method<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">path<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> layer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Layer</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> method<span class="token punctuation">,</span> callback<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>layer<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="use\u65B9\u6CD5" tabindex="-1">use\u65B9\u6CD5 <a class="header-anchor" href="#use\u65B9\u6CD5" aria-hidden="true">#</a></h2><p><code>use</code>\u65B9\u6CD5\u4E0E<code>methods</code>\u7C7B\u4F3C\uFF0C\u4E5F\u662F\u6536\u96C6\u56DE\u8C03\u51FD\u6570\u7684\u8FC7\u7A0B\u3002\u8FD9\u91CC\u5C06\u4F20\u9012\u7684\u53C2\u6570\u7B80\u5355\u5206\u4E3A\u4E863\u79CD\u5F62\u5F0F\uFF1A</p><div class="language-javascript"><pre><code><span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter">middlewares</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token string">&#39;/&#39;</span>
  <span class="token keyword">let</span> fns <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> middlewares <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1. \u5F62\u5F0F1\uFF1Aapp.use(middleware)</span>
    fns <span class="token operator">=</span> <span class="token punctuation">[</span>middlewares<span class="token punctuation">]</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>middlewares<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 2. \u5F62\u5F0F2\uFF1Aapp.use([middleware])</span>
    fns <span class="token operator">=</span> middlewares
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 3. app.use(path, [middleware])</span>
    path <span class="token operator">=</span> \u5F62\u5F0F<span class="token number">3</span>\uFF1Amiddlewares
    fns <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>arguments<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">?</span> arguments<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">[</span>arguments<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>fns <span class="token operator">||</span> fns<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;app.use() requires a middleware function&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  fns<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">middleware</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> layer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Layer</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> middleware<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>layer<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="handle-\u65B9\u6CD5" tabindex="-1">handle \u65B9\u6CD5 <a class="header-anchor" href="#handle-\u65B9\u6CD5" aria-hidden="true">#</a></h2><p>\u524D\u9762\u901A\u8FC7<code>methods</code>\u548C\u4E2D\u95F4\u4EF6\u5DF2\u7ECF\u5C06\u56DE\u8C03\u90FD\u6536\u96C6\u5230<code>stack</code>\u5F53\u4E2D\u4E86\uFF0C\u63A5\u4E0B\u6765\u5C31\u662F\u7528\u6237\u8BF7\u6C42\u7684\u65F6\u5019\uFF0C\u53BB<code>stack</code>\u4E2D\u5339\u914D\u76F8\u5E94\u8DEF\u5F84\uFF0C\u7136\u540E\u6309\u4E2D\u95F4\u4EF6\u7684\u5F62\u5F0F\u6267\u884C\u56DE\u8C03\u51FD\u6570\u3002</p><div class="language-javascript"><pre><code><span class="token comment">// \u8BF7\u6C42\u65F6\uFF0C\u5339\u914Durl\uFF0C\u7136\u540E\u627E\u5230\u5BF9\u5E94\u7684\u65B9\u6CD5</span>
<span class="token function">handle</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> out</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> idx <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stack
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">function</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4ECE stack \u91CC\u5339\u914D\u5BF9\u5E94\u7684\u6267\u884C\u51FD\u6570</span>
    <span class="token keyword">let</span> match <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token keyword">let</span> layer <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>idx <span class="token operator">&lt;</span> stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      layer <span class="token operator">=</span> stack<span class="token punctuation">[</span>idx<span class="token punctuation">]</span>
      idx <span class="token operator">+=</span> <span class="token number">1</span>
      <span class="token comment">// \u8FD9\u91CC\u7B80\u5355\u5339\u914D\u8DEF\u5F84</span>
      match <span class="token operator">=</span> layer<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url <span class="token operator">||</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> req<span class="token punctuation">.</span>method<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>match<span class="token punctuation">)</span> <span class="token keyword">break</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>match<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> out <span class="token operator">&amp;&amp;</span> <span class="token function">out</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    layer<span class="token punctuation">.</span><span class="token function">handleMethod</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5B8C\u6574\u4EE3\u7801" tabindex="-1">\u5B8C\u6574\u4EE3\u7801 <a class="header-anchor" href="#\u5B8C\u6574\u4EE3\u7801" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">Layer</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">path<span class="token punctuation">,</span> method<span class="token punctuation">,</span> handle</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>path <span class="token operator">=</span> path
    <span class="token keyword">this</span><span class="token punctuation">.</span>method <span class="token operator">=</span> method
    <span class="token keyword">this</span><span class="token punctuation">.</span>handle <span class="token operator">=</span> handle
  <span class="token punctuation">}</span>
  <span class="token function">match</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> method<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8FD9\u91CC\u7B80\u5355\u5339\u914D\u4E00\u4E0B</span>
    <span class="token comment">// \u5982\u679C\u662F\u4E2D\u95F4\u4EF6\uFF0Cpath\u4E0D\u5B58\u5728\u65F6\uFF0C\u7B26\u5408\u8981\u6C42</span>
    <span class="token comment">// \u5982\u679C\u662F\u4E2D\u95F4\u4EF6\uFF0Cpath\u5B58\u5728\u4E14\u5339\u914D\u65F6\uFF0C\u7B26\u5408\u8981\u6C42</span>
    <span class="token keyword">const</span> isMiddleware <span class="token operator">=</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>path
      <span class="token operator">||</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>method <span class="token operator">&amp;&amp;</span> path<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>path<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span>
    <span class="token comment">// \u5982\u679C\u662F\u8BF7\u6C42\uFF0Cpath \u548C method \u5747\u5339\u914D\u65F6\u7B26\u5408\u8981\u6C42</span>
    <span class="token keyword">const</span> isRequestMatch <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>path<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span>
      <span class="token operator">&amp;&amp;</span> method<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>method
    <span class="token keyword">return</span> isMiddleware <span class="token operator">||</span> isRequestMatch
  <span class="token punctuation">}</span>
  <span class="token function">handleMethod</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">next</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Express</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u670D\u52A1</span>
  server <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token comment">// \u6267\u884C\u51FD\u6570\u961F\u5217</span>
  stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8BF7\u6C42\u65B9\u6CD5\uFF1Aget\u3001post\u7B49\u7B49</span>
    <span class="token keyword">const</span> methods <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;put&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;delete&#39;</span><span class="token punctuation">]</span>
    methods<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">method</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">[</span>method<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">path<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> layer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Layer</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> method<span class="token punctuation">,</span> callback<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>layer<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter">middlewares</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token string">&#39;/&#39;</span>
    <span class="token keyword">let</span> fns <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> middlewares <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 1. app.use(middleware)</span>
      fns <span class="token operator">=</span> <span class="token punctuation">[</span>middlewares<span class="token punctuation">]</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>middlewares<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 2. app.use([middleware])</span>
      fns <span class="token operator">=</span> middlewares
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 3. app.use(path, [middleware])</span>
      path <span class="token operator">=</span> middlewares
      fns <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>arguments<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">?</span> arguments<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">[</span>arguments<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>fns <span class="token operator">||</span> fns<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;app.use() requires a middleware function&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    fns<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">middleware</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> layer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Layer</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> middleware<span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>layer<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u8BF7\u6C42\u65F6\uFF0C\u5339\u914Durl\uFF0C\u7136\u540E\u627E\u5230\u5BF9\u5E94\u7684\u65B9\u6CD5</span>
  <span class="token function">handle</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> out</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> idx <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stack
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">function</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u4ECE stack \u91CC\u5339\u914D\u5BF9\u5E94\u7684\u6267\u884C\u51FD\u6570</span>
      <span class="token keyword">let</span> match <span class="token operator">=</span> <span class="token boolean">false</span>
      <span class="token keyword">let</span> layer <span class="token operator">=</span> <span class="token keyword">null</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>idx <span class="token operator">&lt;</span> stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        layer <span class="token operator">=</span> stack<span class="token punctuation">[</span>idx<span class="token punctuation">]</span>
        idx <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token comment">// \u8FD9\u91CC\u7B80\u5355\u5339\u914D\u8DEF\u5F84</span>
        match <span class="token operator">=</span> layer<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url <span class="token operator">||</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> req<span class="token punctuation">.</span>method<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>match<span class="token punctuation">)</span> <span class="token keyword">break</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>match<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> out <span class="token operator">&amp;&amp;</span> <span class="token function">out</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      layer<span class="token punctuation">.</span><span class="token function">handleMethod</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">listen</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>server <span class="token operator">=</span> server
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> Express
</code></pre></div><h2 id="\u6267\u884C\u7ED3\u679C" tabindex="-1">\u6267\u884C\u7ED3\u679C <a class="header-anchor" href="#\u6267\u884C\u7ED3\u679C" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token keyword">const</span> Express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./lib/express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">m1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;middleware1 start&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;middleware1 end&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">m2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;middleware2 start&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;middleware2 end&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">m3</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;middleware3 start&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;middleware3 end&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>m1<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;/a&#39;</span><span class="token punctuation">,</span> m2<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;/b&#39;</span><span class="token punctuation">,</span> m3<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/a&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;page a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;page a&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/b&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;page b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;page b&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;server is running...&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u8BBF\u95EE /a \u65F6\uFF1A</span>
<span class="token comment">// middleware1 start</span>
<span class="token comment">// middleware2 start</span>
<span class="token comment">// page a</span>
<span class="token comment">// middleware2 end</span>
<span class="token comment">// middleware1 end</span>
<span class="token comment">// middleware1 start // \u8FD9\u662F\u7531\u4E8E\u8BBF\u95EE favicon.ico \u5BFC\u81F4\u7684\uFF0C\u53EF\u5FFD\u7565\u3002</span>
<span class="token comment">// middleware1 end   // \u8FD9\u662F\u7531\u4E8E\u8BBF\u95EE favicon.ico \u5BFC\u81F4\u7684\uFF0C\u53EF\u5FFD\u7565\u3002</span>
</code></pre></div><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u8FD9\u91CC\u5B9E\u73B0\u7684\u4EE3\u7801\u6BD4\u8F83\u7B80\u5355\uFF0C\u6CA1\u6709\u6D89\u53CA\u5230<code>router</code>\u7684\u5904\u7406\uFF0C\u4E3B\u8981\u662F\u6982\u62EC\u4E86<code>express</code>\u4E2D\u95F4\u4EF6\u7684\u5B9E\u73B0\u539F\u7406\u3002<strong>\u6838\u5FC3\u539F\u7406\u5927\u81F4\u662F\uFF1A\u5C06use\u548Cget/post/...\u7B49\u65B9\u6CD5\u6CE8\u518C\u7684\u56DE\u8C03\u51FD\u6570\u5C01\u88C5\u6210layer\u5F62\u5F0F\uFF0C\u5E76\u63A8\u5230stack\u5F53\u4E2D\u3002\u7B49\u7528\u6237\u53D1\u9001\u8BF7\u6C42\u65F6\uFF0C\u53BBstack\u4E2D\u4F9D\u6B21\u6309\u7167\u8DEF\u5F84\u548C\u65B9\u6CD5\u540D\u5339\u914D\u5BF9\u5E94\u7684layer\u3002\u7136\u540E\u6309\u7167\u201C\u6D0B\u8471\u6A21\u578B\u201D\u6267\u884C\u5339\u914D\u5230\u7684layer\u3002</strong></p>`,34),c=[e];function u(l,k,i,r,d,m){return a(),s("div",null,c)}var f=n(o,[["render",u]]);export{w as __pageData,f as default};
