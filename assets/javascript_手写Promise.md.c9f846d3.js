import{_ as n,c as s,o as a,a as p}from"./app.0eb009c8.js";const f='{"title":"\u624B\u5199Promise","description":"","frontmatter":{},"headers":[{"level":2,"title":"then","slug":"then"},{"level":2,"title":"\u5904\u7406resolve/reject\u7684\u8FD4\u56DE\u503C","slug":"\u5904\u7406resolve-reject\u7684\u8FD4\u56DE\u503C"},{"level":2,"title":"\u9759\u6001\u65B9\u6CD5resolve","slug":"\u9759\u6001\u65B9\u6CD5resolve"},{"level":2,"title":"\u9759\u6001\u65B9\u6CD5reject","slug":"\u9759\u6001\u65B9\u6CD5reject"},{"level":2,"title":"catch","slug":"catch"},{"level":2,"title":"finally","slug":"finally"},{"level":2,"title":"\u9759\u6001\u65B9\u6CD5all","slug":"\u9759\u6001\u65B9\u6CD5all"},{"level":2,"title":"\u9759\u6001\u65B9\u6CD5race","slug":"\u9759\u6001\u65B9\u6CD5race"},{"level":2,"title":"\u9759\u6001\u65B9\u6CD5any","slug":"\u9759\u6001\u65B9\u6CD5any"},{"level":2,"title":"\u9759\u6001\u65B9\u6CD5allSettled","slug":"\u9759\u6001\u65B9\u6CD5allsettled"},{"level":2,"title":"\u5B8C\u6574\u4EE3\u7801","slug":"\u5B8C\u6574\u4EE3\u7801"},{"level":2,"title":"\u6D4B\u8BD5","slug":"\u6D4B\u8BD5"},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003"}],"relativePath":"javascript/\u624B\u5199Promise.md","lastUpdated":1658362942000}',t={},o=p(`<h1 id="\u624B\u5199promise" tabindex="-1">\u624B\u5199Promise <a class="header-anchor" href="#\u624B\u5199promise" aria-hidden="true">#</a></h1><h2 id="then" tabindex="-1">then <a class="header-anchor" href="#then" aria-hidden="true">#</a></h2><ol><li>\u6BCF\u4E2A<code>promise</code>\u6709\u4E09\u4E2A\u72B6\u6001\uFF1A<code>pending</code>\uFF0C<code>fulfilled</code>\uFF0C<code>rejected</code>\u3002\u56E0\u6B64\u9700\u8981\u4E00\u4E2A\u53D8\u91CF\u6765\u4FDD\u5B58\u8BE5\u72B6\u6001\u3002</li><li>\u6267\u884C<code>new Promise</code>\u7684\u65F6\u5019\uFF0C\u4F1A\u4F20\u5165\u4E00\u4E2A\u53C2\u6570\u4E3A<code>resolve,reject</code>\u7684\u51FD\u6570\uFF0C\u5E76\u7ACB\u5373\u6267\u884C\u3002\u56E0\u6B64\u5728\u6784\u9020\u51FD\u6570\u91CC\u9700\u8981\u5C06\u8BE5\u51FD\u6570\u5F53\u505A\u53C2\u6570\u4F20\u9012\u5E76\u7ACB\u5373\u6267\u884C\u3002</li></ol><ul><li>\u5F53\u6267\u884C<code>resolve</code>\u7684\u65F6\u5019\uFF0C\u9700\u8981\u5C06\u72B6\u6001\u6539\u4E3A<code>fulfilled</code>\u3002</li><li>\u5F53\u6267\u884C<code>reject</code>\u7684\u65F6\u5019\uFF0C\u9700\u8981\u5C06\u72B6\u6001\u6539\u4E3A<code>rejected</code>\u3002</li><li>\u7531\u4E8E\u662F\u5F02\u6B65\u6267\u884C\uFF0C\u6267\u884C\u5B8C\u6210\u540E\uFF0C\u9700\u8981\u901A\u77E5\u5BF9\u5E94\u56DE\u8C03\u51FD\u6570\u6267\u884C\u3002\u56E0\u6B64\u53EF\u4EE5\u5728<code>then</code>\u65B9\u6CD5\u91CC\u6536\u96C6\u8FD9\u4E9B\u56DE\u8C03\u51FD\u6570\u3002</li></ul><ol start="3"><li>\u6267\u884C<code>then</code>\u65B9\u6CD5\u7684\u65F6\u5019\uFF0C\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684<code>promise</code>\uFF08\u4E3A\u4E86\u94FE\u5F0F\u8C03\u7528<code>then</code>\uFF09\u3002\u5728\u65B0\u7684<code>promise</code>\u91CC\u4F1A\u5224\u65AD\u5F53\u524D<code>promise</code>\u72B6\u6001\uFF1A</li></ol><ul><li>\u5982\u679C\u662F<code>fulfilled</code>\uFF0C\u90A3\u4E48\u8BF4\u660E\u5F02\u6B65\u5DF2\u7ECF\u6267\u884C\u5B8C\u6210\u3002\u53EF\u4EE5\u6267\u884C<code>then</code>\u7684<code>resolve</code>\u51FD\u6570\uFF0C\u5C06\u6267\u884C\u7ED3\u679C\u4F5C\u4E3A\u65B0\u7684<code>promise</code>\u7684\u7ED3\u679C\u4F20\u5165\u3002</li><li>\u5982\u679C\u662F<code>rejected</code>\uFF0C\u90A3\u4E48\u8BF4\u660E\u5F02\u6B65\u5DF2\u7ECF\u6267\u884C\u5B8C\u6210\u3002\u53EF\u4EE5\u6267\u884C<code>then</code>\u7684<code>reject</code>\u51FD\u6570\uFF0C\u5C06\u6267\u884C\u7ED3\u679C\u4F5C\u4E3A\u65B0\u7684<code>promise</code>\u7684\u7ED3\u679C\u4F20\u5165\u3002</li><li>\u5982\u679C\u662F<code>pending</code>\uFF0C\u90A3\u4E48\u8BF4\u660E\u5F02\u6B65\u6B63\u5728\u6267\u884C\u3002\u5C06<code>then</code>\u7684<code>resolve</code>\u548C<code>reject</code>\u51FD\u6570\u6536\u96C6\u8D77\u6765\uFF0C\u8FD9\u6837\u5728\u72B6\u6001\u6539\u53D8\u7684\u65F6\u5019\u5C31\u80FD\u6267\u884C\u4E86\u3002</li></ul><div class="language-javascript"><pre><code><span class="token comment">// \u7B80\u5355\u6A21\u62DF\u5FAE\u4EFB\u52A1</span>
<span class="token keyword">const</span> <span class="token function-variable function">microTask</span> <span class="token operator">=</span> <span class="token parameter">fn</span> <span class="token operator">=&gt;</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> status <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token constant">PENDING</span><span class="token operator">:</span> <span class="token string">&#39;pending&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">FULFILLED</span><span class="token operator">:</span> <span class="token string">&#39;fulfilled&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">REJECTED</span><span class="token operator">:</span> <span class="token string">&#39;rejected&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MyPromise</span> <span class="token punctuation">{</span>
  <span class="token comment">// promise \u72B6\u6001</span>
  status <span class="token operator">=</span> status<span class="token punctuation">.</span><span class="token constant">PENDING</span>
  <span class="token comment">// \u6536\u96C6\u72B6\u6001\u4E3A fulfilled \u65F6\u9700\u8981\u6267\u884C\u7684\u56DE\u8C03\u51FD\u6570</span>
  onFulfilled <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token comment">// \u6536\u96C6\u72B6\u6001\u4E3A rejected \u65F6\u9700\u8981\u6267\u884C\u7684\u56DE\u8C03\u51FD\u6570</span>
  onRejected <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token comment">// \u5B58\u653E resolve \u7684\u7ED3\u679C</span>
  value <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token comment">// \u5B58\u653E reject \u7684\u7ED3\u679C</span>
  reason <span class="token operator">=</span> <span class="token keyword">null</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">executor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">resolve</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">!==</span> status<span class="token punctuation">.</span><span class="token constant">PENDING</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">=</span> status<span class="token punctuation">.</span><span class="token constant">FULFILLED</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value
      <span class="token keyword">this</span><span class="token punctuation">.</span>onFulfilled<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">fn</span> <span class="token operator">=&gt;</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">reject</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">!==</span> status<span class="token punctuation">.</span><span class="token constant">PENDING</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">=</span> status<span class="token punctuation">.</span><span class="token constant">REJECTED</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>reason <span class="token operator">=</span> reason
      <span class="token keyword">this</span><span class="token punctuation">.</span>onRejected<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">fn</span> <span class="token operator">=&gt;</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token function">executor</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>


  <span class="token comment">// \u4E3B\u8981\u4EFB\u52A1\uFF1A</span>
  <span class="token comment">// 1. \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 promise</span>
  <span class="token comment">// 2. \u6839\u636E\u5F53\u524D promise \u72B6\u6001\uFF0C\u4E0D\u540C\u72B6\u6001\u8FDB\u884C\u4E0D\u540C\u5904\u7406</span>
  <span class="token comment">// 3. \u5C06\u5904\u7406\u540E\u7684\u7ED3\u679C\u4F5C\u4E3A\u53C2\u6570\u653E\u5165\u5230 \u65B0promise \u4E2D</span>
  <span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">resolveCallback<span class="token punctuation">,</span> rejectCallback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    resolveCallback <span class="token operator">=</span> <span class="token keyword">typeof</span> resolveCallback <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">?</span> <span class="token function-variable function">resolveCallback</span> <span class="token operator">:</span> <span class="token parameter">value</span> <span class="token operator">=&gt;</span> value
    rejectCallback <span class="token operator">=</span> <span class="token keyword">typeof</span> rejectCallback <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">?</span> <span class="token function-variable function">rejectCallback</span> <span class="token operator">:</span> <span class="token parameter">reason</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token keyword">throw</span> reason <span class="token punctuation">}</span>
    <span class="token keyword">const</span> _self <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token comment">// \u5F53\u524D promise \u72B6\u6001\uFF0C\u6765\u751F\u6210\u65B0\u7684 promise</span>
    <span class="token keyword">const</span> newPromise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyPromise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token function-variable function">resolveFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">microTask</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u5982\u679Cpromise \u4E3A fulfilled</span>
          <span class="token comment">// \u90A3\u4E48\u53EF\u4EE5\u62FF\u5230\u5F53\u524D then resolve \u7684\u7ED3\u679C</span>
          <span class="token keyword">const</span> prevValue <span class="token operator">=</span> <span class="token function">resolveCallback</span><span class="token punctuation">(</span>_self<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
          <span class="token comment">// \u8FD9\u4E2A\u7ED3\u679C\u53C8\u505A\u4E3A\u65B0 promise\u91CC</span>
          <span class="token comment">// resolve(prevValue)</span>
          <span class="token function">resolvePromise</span><span class="token punctuation">(</span>newPromise<span class="token punctuation">,</span> prevValue<span class="token punctuation">,</span> resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token keyword">const</span> <span class="token function-variable function">rejectFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">microTask</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> prevValue <span class="token operator">=</span> <span class="token function">rejectCallback</span><span class="token punctuation">(</span>_self<span class="token punctuation">.</span>reason<span class="token punctuation">)</span>
          <span class="token function">resolvePromise</span><span class="token punctuation">(</span>newPromise<span class="token punctuation">,</span> prevValue<span class="token punctuation">,</span> resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>_self<span class="token punctuation">.</span>status <span class="token operator">===</span> status<span class="token punctuation">.</span><span class="token constant">FULFILLED</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">resolveFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>_self<span class="token punctuation">.</span>status <span class="token operator">===</span> status<span class="token punctuation">.</span><span class="token constant">REJECTED</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">rejectFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>_self<span class="token punctuation">.</span>status <span class="token operator">===</span> status<span class="token punctuation">.</span><span class="token constant">PENDING</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5982\u679C\u662F pending \u7684\u8BDD\uFF0C\u5C06\u56DE\u8C03\u51FD\u6570\u6536\u96C6\u8D77\u6765</span>
        _self<span class="token punctuation">.</span>onFulfilled<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">resolveFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        _self<span class="token punctuation">.</span>onRejected<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">rejectFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// then \u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684 promise</span>
    <span class="token keyword">return</span> newPromise
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5904\u7406resolve-reject\u7684\u8FD4\u56DE\u503C" tabindex="-1">\u5904\u7406resolve/reject\u7684\u8FD4\u56DE\u503C <a class="header-anchor" href="#\u5904\u7406resolve-reject\u7684\u8FD4\u56DE\u503C" aria-hidden="true">#</a></h2><p>\u7531\u4E8E<code>then</code>\u91CC<code>resolve/reject</code>\u51FA\u6765\u7684\u7ED3\u679C\u53EF\u80FD\u662F<code>promise</code>\uFF0C\u5982\u679C\u662F<code>promise</code>\u9700\u8981\u7B49\u5F85<code>promise</code>\u6267\u884C\u5B8C\u6210\uFF0C\u5C06\u6267\u884C\u7ED3\u679C\u4F5C\u4E3A\u53C2\u6570\u4F20\u7ED9<code>then</code>\u8FD4\u56DE\u7684<code>promise</code>\u3002\u8FD9\u91CC\u7528\u4E00\u4E2A<code>resolvePromise</code>\u8FDB\u884C\u5904\u7406\uFF1A</p><ol><li>\u5982\u679C<code>resolve/reject</code>\u8FD4\u56DE\u7684<code>promise</code>\u548C<code>then</code>\u8FD4\u56DE\u7684<code>promise</code>\u662F\u540C\u4E00\u4E2A\uFF0C\u5B58\u5728\u5FAA\u73AF\u5F15\u7528\uFF0C\u76F4\u63A5\u62A5\u9519\u3002</li><li>\u5982\u679C\u8FD4\u56DE\u7684\u7ED3\u679C\u6CA1\u6709<code>then</code>\u65B9\u6CD5\uFF0C\u90A3\u4E48\u8BF4\u660E\u662F\u666E\u901A\u503C\uFF0C\u76F4\u63A5<code>resolve</code>\u3002</li><li>\u5982\u679C\u8FD4\u56DE\u7684\u7ED3\u679C\u6709<code>then</code>\u65B9\u6CD5\uFF0C\u90A3\u4E48\u6267\u884C<code>then</code>\u65B9\u6CD5\uFF0C\u5E76\u5728\u56DE\u8C03\u91CC\u9012\u5F52\u5904\u7406<code>resolve/reject</code>\u7684\u8FD4\u56DE\u503C\u3002</li></ol><p>\u6709\u4E24\u70B9\u9700\u8981\u6CE8\u610F\uFF1A</p><ol><li>\u9012\u5F52<code>resolvePromise</code>\u7684\u5B9E\u8D28\u662F\u5C06<code>resolve,reject</code>\u51FD\u6570\u900F\u4F20\u4E0B\u53BB\uFF0C\u76F4\u5230\u5F97\u5230\u6700\u7EC8\u7684\u7ED3\u679C\u3002</li><li>\u4E3A\u4E86\u907F\u514D<code>resolve,reject</code>\u591A\u6B21\u6267\u884C\uFF08\u4E5F\u5C31\u662F\u5728<code>promise</code>\u5185\u90E8\u591A\u6B21\u8C03\u7528<code>resolve,reject</code>\uFF09\uFF0C\u7528<code>used</code>\u53D8\u91CF\u6765\u63A7\u5236\u5F00\u5173\uFF0C\u4FDD\u8BC1\u53EA\u6709\u6700\u5148\u7684\u4E00\u4E2A<code>resolve/reject</code>\u80FD\u591F\u88AB\u6267\u884C\u3002</li></ol><div class="language-javascript"><pre><code><span class="token comment">// \u6839\u636E\u4E0A\u4E00\u4E2A then \u5904\u7406\u7684\u7ED3\u679C\u7B80\u5355\u6A21\u62DF</span>
<span class="token keyword">const</span> resolvePromise <span class="token operator">=</span> <span class="token punctuation">(</span>
  thenReturnPromise<span class="token punctuation">,</span> <span class="token comment">// then \u8FD4\u56DE\u7684 promise \u5BF9\u8C61</span>
  resolveReturnValue<span class="token punctuation">,</span> <span class="token comment">// resolve/reject \u8FD4\u56DE\u7684\u503C\uFF0C\u7C7B\u578B\u4E0D\u5B9A\uFF0C\u4E5F\u53EF\u80FD\u4E3Apromise\u5BF9\u8C61</span>
  resolve<span class="token punctuation">,</span>
  reject
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5982\u679C then \u8FD4\u56DE\u7684 promise \u4E0E resolve \u8FD4\u56DE\u7684 promise \u76F8\u540C</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>thenReturnPromise <span class="token operator">===</span> resolveReturnValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token function">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;Chaining cycle&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5982\u679C\u8FD4\u56DE\u7684\u662F object(\u5305\u62ECpromise \u7C7B\u578B) \u6216 function \u7C7B\u578B</span>
  <span class="token comment">// \u6CE8\u610F resolveReturnValue \u53EF\u80FD\u4E3A null</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>resolveReturnValue <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> resolveReturnValue <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> resolveReturnValue <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5728 promise \u91CC\u53EF\u80FD\u591A\u6B21\u8C03\u7528\u4E86 resolve/reject \u65B9\u6CD5</span>
    <span class="token comment">// \u8FD9\u79CD\u60C5\u51B5\u53EA\u53D6\u6700\u524D\u9762\u7684\u4E00\u6B21\u8C03\u7528</span>
    <span class="token keyword">let</span> used
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u770B\u6709\u6CA1\u6709\u5B9E\u73B0 then \u51FD\u6570</span>
      <span class="token keyword">const</span> then <span class="token operator">=</span> resolveReturnValue<span class="token punctuation">.</span>then
      <span class="token comment">// \u6CA1\u6709\u5B9E\u73B0 then \u51FD\u6570\u6216 then \u4E0D\u662F\u51FD\u6570\u65F6\uFF0C\u76F4\u63A5\u5C06\u503C\u8FD4\u56DE</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>then <span class="token operator">||</span> <span class="token keyword">typeof</span> then <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>used<span class="token punctuation">)</span> <span class="token keyword">return</span>
        used <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span>resolveReturnValue<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// \u6267\u884C then \u65B9\u6CD5\uFF0C\u5E76\u9012\u5F52\u53D6\u503C</span>
      <span class="token function">then</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>resolveReturnValue<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>used<span class="token punctuation">)</span> <span class="token keyword">return</span>
        used <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token comment">// \u5C06 resolve/reject \u51FD\u6570\u65E0\u9650\u5411\u4E0B\u4F20\u9012\uFF0C\u76F4\u5230\u503C\u8BA1\u7B97\u5B8C\u6BD5\u3002</span>
        <span class="token function">resolvePromise</span><span class="token punctuation">(</span>thenReturnPromise<span class="token punctuation">,</span> value<span class="token punctuation">,</span> resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>used<span class="token punctuation">)</span> <span class="token keyword">return</span>
        used <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>used<span class="token punctuation">)</span> <span class="token keyword">return</span>
      used <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u4E3A\u5176\u4ED6\u7C7B\u578B</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span>resolveReturnValue<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u9759\u6001\u65B9\u6CD5resolve" tabindex="-1">\u9759\u6001\u65B9\u6CD5resolve <a class="header-anchor" href="#\u9759\u6001\u65B9\u6CD5resolve" aria-hidden="true">#</a></h2><p><code>resolve</code>\u65B9\u6CD5\u63A5\u6536\u4E00\u4E2A\u53C2\u6570\uFF0C\u8FD4\u56DE\u4E00\u4E2A<code>promise</code>\u3002</p><ol><li>\u5982\u679C<code>value</code>\u662F<code>promise</code>\uFF0C\u90A3\u4E48\u76F4\u63A5\u8FD4\u56DE\u5C31\u884C\u4E86\u3002</li><li>\u5982\u679C<code>value</code>\u4E0D\u662F<code>promise</code>:</li></ol><ul><li>\u5982\u679C<code>value</code>\u5B9E\u73B0\u4E86<code>then</code>\u65B9\u6CD5\uFF0C\u6267\u884C<code>then</code>\u65B9\u6CD5\uFF0C\u5C06<code>value</code>\u6267\u884C\u7ED3\u679C\u76F4\u63A5\u7528<code>resolve,reject</code>\u5904\u7406\u5373\u53EF\u3002</li><li>\u5982\u679C\u6CA1\u6709\u5B9E\u73B0<code>then</code>\u65B9\u6CD5\uFF0C\u90A3\u4E48\u4E3A\u666E\u901A\u503C\uFF0C<code>resolve</code>\u8BE5\u503C\u3002</li></ul><div class="language-javascript"><pre><code><span class="token keyword">static</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token keyword">instanceof</span> <span class="token class-name">MyPromise</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> value
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MyPromise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5982\u679C value \u6709 then \u51FD\u6570\uFF0C\u6267\u884C\u8BE5\u51FD\u6570</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&amp;&amp;</span> value<span class="token punctuation">.</span>then <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> value<span class="token punctuation">.</span>then <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">microTask</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        value<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u5426\u5219\u76F4\u63A5\u8FD4\u56DE</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u9759\u6001\u65B9\u6CD5reject" tabindex="-1">\u9759\u6001\u65B9\u6CD5reject <a class="header-anchor" href="#\u9759\u6001\u65B9\u6CD5reject" aria-hidden="true">#</a></h2><p>\u8FD4\u56DE\u4E00\u4E2A\u72B6\u6001\u5373\u5C06\u53D8\u4E3A<code>rejected</code>\u7684<code>promise</code>\u3002</p><div class="language-javascript"><pre><code><span class="token keyword">static</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MyPromise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="catch" tabindex="-1">catch <a class="header-anchor" href="#catch" aria-hidden="true">#</a></h2><p>\u4F7F\u7528<code>then</code>\u65B9\u6CD5\u6765\u5B9E\u73B0\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">catch</span><span class="token punctuation">(</span>rejectCallback<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> rejectCallback<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="finally" tabindex="-1">finally <a class="header-anchor" href="#finally" aria-hidden="true">#</a></h2><p><code>finally</code>\u4E0D\u63A5\u53D7\u4F20\u503C\uFF0C\u5E76\u4E14\u9700\u8981\u5C06\u4E0A\u4E00\u4E2A<code>then</code>\u7684\u503C\u539F\u5C01\u4E0D\u52A8\u7684\u4F20\u7ED9\u8BE5<code>promise</code>\u3002</p><div class="language-javascript"><pre><code><span class="token function">finally</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5C06 then \u8FD4\u56DE\u7684 promise \u8FD4\u56DE\u3002</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u9700\u8981\u5C06 value \u503C\u4F20\u5230\u4E0B\u4E00\u4E2A then \u4E2D\u3002</span>
    <span class="token comment">// \u8FD9\u91CC\u8FD4\u56DE\u7ED3\u679C\u5B9E\u73B0\u4E86then\u65B9\u6CD5\uFF0C\u56E0\u6B64\u4E0B\u4E00\u4E2Athen\u53D6\u5230\u7684\u662Fvalue\u503C</span>
    <span class="token keyword">return</span> MyPromise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> MyPromise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> err
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u9759\u6001\u65B9\u6CD5all" tabindex="-1">\u9759\u6001\u65B9\u6CD5all <a class="header-anchor" href="#\u9759\u6001\u65B9\u6CD5all" aria-hidden="true">#</a></h2><p><code>promises</code>\u6570\u7EC4\u91CC\u6240\u6709<code>promise</code>\u72B6\u6001\u53D8\u4E3A<code>fulfilled</code>\u7684\u65F6\u5019\uFF0C\u8FD4\u56DE\u7684<code>promise</code>\u72B6\u6001\u624D\u4F1A\u53D8\u4E3A<code>fulfilled</code>:</p><div class="language-javascript"><pre><code><span class="token keyword">static</span> <span class="token function">all</span><span class="token punctuation">(</span><span class="token parameter">promises</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MyPromise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> resolvedLength <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token comment">// \u603B\u5171\u7684\u7ED3\u679C</span>
    <span class="token keyword">let</span> results <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>promises<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    promises<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">promise<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// promise \u53EF\u80FD\u4E3A\u666E\u901A\u503C</span>
      MyPromise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>promise<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        results<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> res
        resolvedLength <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>resolvedLength <span class="token operator">===</span> promises<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u8BF4\u660E\u90FD\u5904\u7406\u5B8C\u6BD5\u4E86</span>
          <span class="token function">resolve</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u53EA\u8981\u4E00\u4E2A\u62A5\u9519\uFF0C\u90A3\u4E48\u5C31\u4F1Areject</span>
        <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u9759\u6001\u65B9\u6CD5race" tabindex="-1">\u9759\u6001\u65B9\u6CD5race <a class="header-anchor" href="#\u9759\u6001\u65B9\u6CD5race" aria-hidden="true">#</a></h2><p>\u53EA\u8981\u6709\u4E00\u4E2A<code>promise</code>\u7684\u72B6\u6001\u6539\u53D8\uFF0C\u90A3\u4E48\u8FD4\u56DE\u7684<code>promise</code>\u72B6\u6001\u5C31\u4F1A\u6539\u53D8\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">static</span> <span class="token function">race</span><span class="token punctuation">(</span><span class="token parameter">promises</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MyPromise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>promises<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u4E00\u76F4\u5904\u4E8E pending \u72B6\u6001</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    promises<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">promise</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u4E0D\u7528\u62C5\u5FC3\u4E0B\u6B21resolve\uFF0C\u56E0\u4E3A\u5DF2\u7ECF\u5B9E\u73B0\u4E86 resolve \u53EA\u4F1A\u6267\u884C\u4E00\u6B21</span>
      MyPromise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>promise<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u9759\u6001\u65B9\u6CD5any" tabindex="-1">\u9759\u6001\u65B9\u6CD5any <a class="header-anchor" href="#\u9759\u6001\u65B9\u6CD5any" aria-hidden="true">#</a></h2><p>\u53EA\u8981\u6709\u4E00\u4E2A<code>promise</code>\u72B6\u6001\u4E3A<code>fulfilled</code>\uFF0C\u90A3\u4E48\u8FD4\u56DE\u7684<code>promise</code>\u72B6\u6001\u5C31\u4E3A<code>fulfilled</code>\uFF0C\u5426\u5219\u4E3A<code>rejected</code>\u3002</p><div class="language-javascript"><pre><code><span class="token keyword">static</span> <span class="token function">any</span><span class="token punctuation">(</span><span class="token parameter">promises</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MyPromise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> rejectedLength <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token comment">// \u53EA\u8981\u6709\u4E00\u4E2Aresolve</span>
    <span class="token keyword">let</span> errors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>promises<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span>errors<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    promises<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">promise<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// promise \u53EF\u80FD\u4E3A\u666E\u901A\u503C</span>
      MyPromise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>promise<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u8BB0\u5F55reject\u4E2A\u6570</span>
        rejectedLength <span class="token operator">+=</span> <span class="token number">1</span>
        errors<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> err
        <span class="token keyword">if</span> <span class="token punctuation">(</span>rejectedLength <span class="token operator">===</span> promises<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">reject</span><span class="token punctuation">(</span>errors<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u9759\u6001\u65B9\u6CD5allsettled" tabindex="-1">\u9759\u6001\u65B9\u6CD5allSettled <a class="header-anchor" href="#\u9759\u6001\u65B9\u6CD5allsettled" aria-hidden="true">#</a></h2><p>\u4E0D\u7BA1<code>promise</code>\u72B6\u6001\u662F\u600E\u6837\uFF0C\u53EA\u6709\u6240\u6709<code>promise</code>\u72B6\u6001\u90FD\u4E0D\u4E3A<code>pending</code>\u7684\u65F6\u5019\uFF0C\u8FD4\u56DE\u7684<code>promise</code>\u72B6\u6001\u624D\u4F1A\u6539\u53D8\u4E3A<code>fulfilled</code>\u3002</p><div class="language-javascript"><pre><code><span class="token keyword">static</span> <span class="token function">allSettled</span><span class="token punctuation">(</span><span class="token parameter">promises</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MyPromise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> handleLength <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">let</span> results <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>promises<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u4E00\u76F4\u5904\u4E8E pending \u72B6\u6001</span>
      <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleValue</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      results<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> value
      handleLength <span class="token operator">+=</span> <span class="token number">1</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>handleLength <span class="token operator">===</span> promises<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    promises<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">promise<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      MyPromise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>promise<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">handleValue</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> index<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">handleValue</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> index<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5B8C\u6574\u4EE3\u7801" tabindex="-1">\u5B8C\u6574\u4EE3\u7801 <a class="header-anchor" href="#\u5B8C\u6574\u4EE3\u7801" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">// \u7B80\u5355\u6A21\u62DF\u5FAE\u4EFB\u52A1</span>
<span class="token keyword">const</span> <span class="token function-variable function">microTask</span> <span class="token operator">=</span> <span class="token parameter">fn</span> <span class="token operator">=&gt;</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> status <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token constant">PENDING</span><span class="token operator">:</span> <span class="token string">&#39;pending&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">FULFILLED</span><span class="token operator">:</span> <span class="token string">&#39;fulfilled&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">REJECTED</span><span class="token operator">:</span> <span class="token string">&#39;rejected&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6839\u636E\u4E0A\u4E00\u4E2A then \u5904\u7406\u7684\u7ED3\u679C\u7B80\u5355\u6A21\u62DF</span>
<span class="token keyword">const</span> resolvePromise <span class="token operator">=</span> <span class="token punctuation">(</span>
  thenReturnPromise<span class="token punctuation">,</span> <span class="token comment">// then \u8FD4\u56DE\u7684 promise \u5BF9\u8C61</span>
  resolveReturnValue<span class="token punctuation">,</span> <span class="token comment">// resolve/reject \u8FD4\u56DE\u7684\u503C\uFF0C\u7C7B\u578B\u4E0D\u5B9A\uFF0C\u4E5F\u53EF\u80FD\u4E3Apromise\u5BF9\u8C61</span>
  resolve<span class="token punctuation">,</span>
  reject
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5982\u679C then \u8FD4\u56DE\u7684 promise \u4E0E resolve \u8FD4\u56DE\u7684 promise \u76F8\u540C</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>thenReturnPromise <span class="token operator">===</span> resolveReturnValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token function">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;Chaining cycle&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5982\u679C\u8FD4\u56DE\u7684\u662F object(\u5305\u62ECpromise \u7C7B\u578B) \u6216 function \u7C7B\u578B</span>
  <span class="token comment">// \u6CE8\u610F resolveReturnValue \u53EF\u80FD\u4E3A null</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>resolveReturnValue <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> resolveReturnValue <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> resolveReturnValue <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5728 promise \u91CC\u53EF\u80FD\u591A\u6B21\u8C03\u7528\u4E86 resolve/reject \u65B9\u6CD5</span>
    <span class="token comment">// \u8FD9\u79CD\u60C5\u51B5\u53EA\u53D6\u6700\u524D\u9762\u7684\u4E00\u6B21\u8C03\u7528</span>
    <span class="token keyword">let</span> used
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u770B\u6709\u6CA1\u6709\u5B9E\u73B0 then \u51FD\u6570</span>
      <span class="token keyword">const</span> then <span class="token operator">=</span> resolveReturnValue<span class="token punctuation">.</span>then
      <span class="token comment">// \u6CA1\u6709\u5B9E\u73B0 then \u51FD\u6570\u6216 then \u4E0D\u662F\u51FD\u6570\u65F6\uFF0C\u76F4\u63A5\u5C06\u503C\u8FD4\u56DE</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>then <span class="token operator">||</span> <span class="token keyword">typeof</span> then <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>used<span class="token punctuation">)</span> <span class="token keyword">return</span>
        used <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span>resolveReturnValue<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// \u6267\u884C then \u65B9\u6CD5\uFF0C\u5E76\u9012\u5F52\u53D6\u503C</span>
      <span class="token function">then</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>resolveReturnValue<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>used<span class="token punctuation">)</span> <span class="token keyword">return</span>
        used <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token comment">// \u5C06 resolve/reject \u51FD\u6570\u65E0\u9650\u5411\u4E0B\u4F20\u9012\uFF0C\u76F4\u5230\u503C\u8BA1\u7B97\u5B8C\u6BD5\u3002</span>
        <span class="token function">resolvePromise</span><span class="token punctuation">(</span>thenReturnPromise<span class="token punctuation">,</span> value<span class="token punctuation">,</span> resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>used<span class="token punctuation">)</span> <span class="token keyword">return</span>
        used <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>used<span class="token punctuation">)</span> <span class="token keyword">return</span>
      used <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u4E3A\u5176\u4ED6\u7C7B\u578B</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span>resolveReturnValue<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MyPromise</span> <span class="token punctuation">{</span>
  <span class="token comment">// promise \u72B6\u6001</span>
  status <span class="token operator">=</span> status<span class="token punctuation">.</span><span class="token constant">PENDING</span>
  <span class="token comment">// \u6536\u96C6\u72B6\u6001\u4E3A fulfilled \u65F6\u9700\u8981\u6267\u884C\u7684\u56DE\u8C03\u51FD\u6570</span>
  onFulfilled <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token comment">// \u6536\u96C6\u72B6\u6001\u4E3A rejected \u65F6\u9700\u8981\u6267\u884C\u7684\u56DE\u8C03\u51FD\u6570</span>
  onRejected <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token comment">// \u5B58\u653E resolve \u7684\u7ED3\u679C</span>
  value <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token comment">// \u5B58\u653E reject \u7684\u7ED3\u679C</span>
  reason <span class="token operator">=</span> <span class="token keyword">null</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">executor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">resolve</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">!==</span> status<span class="token punctuation">.</span><span class="token constant">PENDING</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">=</span> status<span class="token punctuation">.</span><span class="token constant">FULFILLED</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value
      <span class="token keyword">this</span><span class="token punctuation">.</span>onFulfilled<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">fn</span> <span class="token operator">=&gt;</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">reject</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">!==</span> status<span class="token punctuation">.</span><span class="token constant">PENDING</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">=</span> status<span class="token punctuation">.</span><span class="token constant">REJECTED</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>reason <span class="token operator">=</span> reason
      <span class="token keyword">this</span><span class="token punctuation">.</span>onRejected<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">fn</span> <span class="token operator">=&gt;</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token function">executor</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>


  <span class="token comment">// \u4E3B\u8981\u4EFB\u52A1\uFF1A</span>
  <span class="token comment">// 1. \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 promise</span>
  <span class="token comment">// 2. \u6839\u636E\u5F53\u524D promise \u72B6\u6001\uFF0C\u4E0D\u540C\u72B6\u6001\u8FDB\u884C\u4E0D\u540C\u5904\u7406</span>
  <span class="token comment">// 3. \u5C06\u5904\u7406\u540E\u7684\u7ED3\u679C\u4F5C\u4E3A\u53C2\u6570\u653E\u5165\u5230 \u65B0promise \u4E2D</span>
  <span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">resolveCallback<span class="token punctuation">,</span> rejectCallback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    resolveCallback <span class="token operator">=</span> <span class="token keyword">typeof</span> resolveCallback <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">?</span> <span class="token function-variable function">resolveCallback</span> <span class="token operator">:</span> <span class="token parameter">value</span> <span class="token operator">=&gt;</span> value
    rejectCallback <span class="token operator">=</span> <span class="token keyword">typeof</span> rejectCallback <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">?</span> <span class="token function-variable function">rejectCallback</span> <span class="token operator">:</span> <span class="token parameter">reason</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token keyword">throw</span> reason <span class="token punctuation">}</span>
    <span class="token keyword">const</span> _self <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token comment">// \u5F53\u524D promise \u72B6\u6001\uFF0C\u6765\u751F\u6210\u65B0\u7684 promise</span>
    <span class="token keyword">const</span> newPromise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyPromise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token function-variable function">resolveFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">microTask</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u5982\u679Cpromise \u4E3A fulfilled</span>
          <span class="token comment">// \u90A3\u4E48\u53EF\u4EE5\u62FF\u5230\u5F53\u524D then resolve \u7684\u7ED3\u679C</span>
          <span class="token keyword">const</span> prevValue <span class="token operator">=</span> <span class="token function">resolveCallback</span><span class="token punctuation">(</span>_self<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
          <span class="token comment">// \u8FD9\u4E2A\u7ED3\u679C\u53C8\u505A\u4E3A\u65B0 promise\u91CC</span>
          <span class="token comment">// resolve(prevValue)</span>
          <span class="token function">resolvePromise</span><span class="token punctuation">(</span>newPromise<span class="token punctuation">,</span> prevValue<span class="token punctuation">,</span> resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token keyword">const</span> <span class="token function-variable function">rejectFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">microTask</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> prevValue <span class="token operator">=</span> <span class="token function">rejectCallback</span><span class="token punctuation">(</span>_self<span class="token punctuation">.</span>reason<span class="token punctuation">)</span>
          <span class="token function">resolvePromise</span><span class="token punctuation">(</span>newPromise<span class="token punctuation">,</span> prevValue<span class="token punctuation">,</span> resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>_self<span class="token punctuation">.</span>status <span class="token operator">===</span> status<span class="token punctuation">.</span><span class="token constant">FULFILLED</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">resolveFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>_self<span class="token punctuation">.</span>status <span class="token operator">===</span> status<span class="token punctuation">.</span><span class="token constant">REJECTED</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">rejectFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>_self<span class="token punctuation">.</span>status <span class="token operator">===</span> status<span class="token punctuation">.</span><span class="token constant">PENDING</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5982\u679C\u662F pending \u7684\u8BDD\uFF0C\u5C06\u56DE\u8C03\u51FD\u6570\u6536\u96C6\u8D77\u6765</span>
        _self<span class="token punctuation">.</span>onFulfilled<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">resolveFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        _self<span class="token punctuation">.</span>onRejected<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">rejectFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// then \u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684 promise</span>
    <span class="token keyword">return</span> newPromise
  <span class="token punctuation">}</span>

  <span class="token keyword">catch</span><span class="token punctuation">(</span>rejectCallback<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> rejectCallback<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// finally \u540E\u8FD8\u53EF\u4EE5\u7EE7\u7EED\u6267\u884C\uFF0C\u5E76\u4E14\u5C06\u503C\u539F\u5C01\u4E0D\u52A8\u7684\u4F20\u7ED9\u540E\u8005</span>
  <span class="token comment">// finally \u4E0D\u63A5\u53D7\u4EFB\u4F55\u4F20\u503C</span>
  <span class="token function">finally</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5C06 then \u8FD4\u56DE\u7684 promise \u8FD4\u56DE\u3002</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u9700\u8981\u5C06 value \u503C\u4F20\u5230\u4E0B\u4E00\u4E2A then \u4E2D</span>
      <span class="token keyword">return</span> MyPromise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> MyPromise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> err
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u8FD4\u56DE\u4E00\u4E2A promise</span>
  <span class="token keyword">static</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token keyword">instanceof</span> <span class="token class-name">MyPromise</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> value
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MyPromise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5982\u679C value \u6709 then \u51FD\u6570\uFF0C\u6267\u884C\u8BE5\u51FD\u6570</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&amp;&amp;</span> value<span class="token punctuation">.</span>then <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> value<span class="token punctuation">.</span>then <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">microTask</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          value<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// \u5426\u5219\u76F4\u63A5\u8FD4\u56DE</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MyPromise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u72B6\u6001\u5168\u90E8\u53D8\u4E3A fulfilled \u7684\u65F6\u5019\u624D\u4F1A\u6267\u884C then</span>
  <span class="token comment">// \u4F1A\u8FD4\u56DE\u4E00\u4E2A promise</span>
  <span class="token keyword">static</span> <span class="token function">all</span><span class="token punctuation">(</span><span class="token parameter">promises</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MyPromise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> resolvedLength <span class="token operator">=</span> <span class="token number">0</span>
      <span class="token comment">// \u603B\u5171\u7684\u7ED3\u679C</span>
      <span class="token keyword">let</span> results <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>promises<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      promises<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">promise<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// promise \u53EF\u80FD\u4E3A\u666E\u901A\u503C</span>
        MyPromise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>promise<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          results<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> res
          resolvedLength <span class="token operator">+=</span> <span class="token number">1</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>resolvedLength <span class="token operator">===</span> promises<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u8BF4\u660E\u90FD\u5904\u7406\u5B8C\u6BD5\u4E86</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u53EA\u8981\u4E00\u4E2A\u62A5\u9519\uFF0C\u90A3\u4E48\u5C31\u4F1Areject</span>
          <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u53EA\u8981\u6709\u4E00\u4E2A\u4E3A fulfilled/rejected\uFF0C\u90A3\u4E48\u5C31\u4F1A resolve</span>
  <span class="token keyword">static</span> <span class="token function">race</span><span class="token punctuation">(</span><span class="token parameter">promises</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MyPromise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>promises<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u4E00\u76F4\u5904\u4E8E pending \u72B6\u6001</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      promises<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">promise</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u4E0D\u7528\u62C5\u5FC3\u4E0B\u6B21resolve\uFF0C\u56E0\u4E3A\u5DF2\u7ECF\u5B9E\u73B0\u4E86 resolve \u53EA\u4F1A\u6267\u884C\u4E00\u6B21</span>
        MyPromise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>promise<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token function">any</span><span class="token punctuation">(</span><span class="token parameter">promises</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MyPromise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> rejectedLength <span class="token operator">=</span> <span class="token number">0</span>
      <span class="token comment">// \u53EA\u8981\u6709\u4E00\u4E2Aresolve</span>
      <span class="token keyword">let</span> errors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>promises<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span>errors<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      promises<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">promise<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// promise \u53EF\u80FD\u4E3A\u666E\u901A\u503C</span>
        MyPromise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>promise<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u8BB0\u5F55reject\u4E2A\u6570</span>
          rejectedLength <span class="token operator">+=</span> <span class="token number">1</span>
          <span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> err
          <span class="token keyword">if</span> <span class="token punctuation">(</span>rejectedLength <span class="token operator">===</span> promises<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">reject</span><span class="token punctuation">(</span>errors<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token function">allSettled</span><span class="token punctuation">(</span><span class="token parameter">promises</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MyPromise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> handleLength <span class="token operator">=</span> <span class="token number">0</span>
      <span class="token keyword">let</span> results <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>promises<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u4E00\u76F4\u5904\u4E8E pending \u72B6\u6001</span>
        <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">const</span> <span class="token function-variable function">handleValue</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        results<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> value
        handleLength <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>handleLength <span class="token operator">===</span> promises<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">resolve</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      promises<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">promise<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        MyPromise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>promise<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token function">handleValue</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> index<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token function">handleValue</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> index<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u6D4B\u8BD5" tabindex="-1">\u6D4B\u8BD5 <a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a></h2><p>\u9996\u5148\u5728\u5B9E\u73B0MyPromise\u7684\u4EE3\u7801\u4E2D\uFF0C\u589E\u52A0\u4EE5\u4E0B\u4EE3\u7801:</p><div class="language-javascript"><pre><code>MyPromise<span class="token punctuation">.</span>defer <span class="token operator">=</span> MyPromise<span class="token punctuation">.</span><span class="token function-variable function">deferred</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> dfd <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  dfd<span class="token punctuation">.</span>promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyPromise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    dfd<span class="token punctuation">.</span>resolve <span class="token operator">=</span> resolve<span class="token punctuation">;</span>
    dfd<span class="token punctuation">.</span>reject <span class="token operator">=</span> reject<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> dfd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> MyPromise
</code></pre></div><p>\u5B89\u88C5\u6D4B\u8BD5\u811A\u672C\uFF1A</p><div class="language-javascript"><pre><code>npm install <span class="token operator">-</span>g promises<span class="token operator">-</span>aplus<span class="token operator">-</span>tests
</code></pre></div><p>\u5728\u5F53\u524D\u76EE\u5F55\u6267\u884C\u6D4B\u8BD5\u547D\u4EE4\uFF1A</p><div class="language-javascript"><pre><code>promises<span class="token operator">-</span>aplus<span class="token operator">-</span>tests my<span class="token operator">-</span>promise<span class="token punctuation">.</span>js
</code></pre></div><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><ul><li><a href="https://promisesaplus.com/" target="_blank" rel="noopener noreferrer">Promise/A+ \u89C4\u8303</a></li><li><a href="https://es6.ruanyifeng.com/#docs/promise" target="_blank" rel="noopener noreferrer">\u962E\u4E00\u5CF0 es6 Promise</a></li><li><a href="https://github.com/YvetteLau/Blog/issues/2" target="_blank" rel="noopener noreferrer">YvetteLau \u535A\u5BA2</a></li></ul>`,50),e=[o];function c(l,u,k,r,i,d){return a(),s("div",null,e)}var y=n(t,[["render",c]]);export{f as __pageData,y as default};
