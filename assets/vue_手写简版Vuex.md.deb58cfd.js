import{_ as n,c as s,o as a,a as t}from"./app.0eb009c8.js";const m='{"title":"\u624B\u5199\u7B80\u7248Vuex","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7B80\u5355\u4F7F\u7528","slug":"\u7B80\u5355\u4F7F\u7528"},{"level":2,"title":"\u5B9E\u73B0\u6548\u679C","slug":"\u5B9E\u73B0\u6548\u679C"},{"level":2,"title":"\u5B9E\u73B0\u601D\u8DEF","slug":"\u5B9E\u73B0\u601D\u8DEF"},{"level":2,"title":"\u7B80\u5316\u7248\u5B9E\u73B0\u4EE3\u7801","slug":"\u7B80\u5316\u7248\u5B9E\u73B0\u4EE3\u7801"},{"level":2,"title":"\u95EE\u9898","slug":"\u95EE\u9898"}],"relativePath":"vue/\u624B\u5199\u7B80\u7248Vuex.md","lastUpdated":1658362942000}',p={},o=t(`<h1 id="\u624B\u5199\u7B80\u7248vuex" tabindex="-1">\u624B\u5199\u7B80\u7248Vuex <a class="header-anchor" href="#\u624B\u5199\u7B80\u7248vuex" aria-hidden="true">#</a></h1><h2 id="\u7B80\u5355\u4F7F\u7528" tabindex="-1">\u7B80\u5355\u4F7F\u7528 <a class="header-anchor" href="#\u7B80\u5355\u4F7F\u7528" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>

<span class="token keyword">const</span> store <span class="token operator">=</span>  <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    user<span class="token punctuation">,</span>
    app<span class="token punctuation">,</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  getters
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
  store<span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> App <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u5B9E\u73B0\u6548\u679C" tabindex="-1">\u5B9E\u73B0\u6548\u679C <a class="header-anchor" href="#\u5B9E\u73B0\u6548\u679C" aria-hidden="true">#</a></h2><p><a href="https://codesandbox.io/s/polished-dust-r04fj?file=/src/vuex/index.js" target="_blank" rel="noopener noreferrer">vuex \u5B9E\u73B0\u6548\u679C\u9884\u89C8</a></p><h2 id="\u5B9E\u73B0\u601D\u8DEF" tabindex="-1">\u5B9E\u73B0\u601D\u8DEF <a class="header-anchor" href="#\u5B9E\u73B0\u601D\u8DEF" aria-hidden="true">#</a></h2><ol><li><p><code>vuex</code>\u662F\u901A\u8FC7<code>Vue.use</code>\u4F7F\u7528\u7684\uFF0C\u6240\u4EE5\u9700\u8981\u5B9E\u73B0<code>install</code>\u65B9\u6CD5\uFF1A</p><ul><li><code>install</code> \u91CC\u9700\u8981\u5728<code>Vue</code>\u5168\u5C40\u6302\u8F7D<code>$store</code>\u65B9\u6CD5\uFF0C\u56E0\u6B64\u53EF\u4EE5\u7528<code>Vue.mixin</code>\u5168\u5C40\u6DF7\u5165\u914D\u7F6E\u3002</li></ul></li><li><p>\u901A\u8FC7<code>$store.state</code>\u53EF\u4EE5\u8BBF\u95EE\u72B6\u6001\uFF0C\u72B6\u6001\u6539\u53D8\u65F6\uFF0C\u9700\u8981\u66F4\u65B0\u89C6\u56FE\u3002\u6240\u4EE5<code>state</code>\u9700\u8981\u8BBE\u7F6E\u4E3A\u54CD\u5E94\u5F0F\uFF0C\u8FD9\u6837\u5728\u89C6\u56FE\u4E2D\u4F7F\u7528<code>state</code>\u7684\u65F6\u5019\u4F1A\u8FDB\u884C\u4F9D\u8D56\u6536\u96C6\uFF0C\u7ED1\u5B9A<code>state</code>\u548C\u76F8\u5E94<code>Watcher</code>\u7684\u5173\u7CFB\u3002\u4E4B\u540E<code>state</code>\u6539\u53D8\u5C31\u4F1A\u89E6\u53D1<code>Watcher</code>\u66F4\u65B0\u3002</p><ul><li>\u4E00\u79CD\u65B9\u6CD5\u662F\u901A\u8FC7\u5B9E\u4F8B\u5316<code>Vue</code>\uFF0C\u5C06<code>state</code>\u4F5C\u4E3A<code>data</code>\u8FDB\u884C\u54CD\u5E94\u5F0F\u5904\u7406\u3002</li><li>\u4E00\u79CD\u65B9\u5F0F\u662F\u7528<code>Vue.observable</code>\u5C06<code>state</code>\u5BF9\u8C61\u8BBE\u7F6E\u4E3A\u54CD\u5E94\u5F0F\u3002</li></ul></li><li><p>\u89E6\u53D1\u66F4\u65B0\uFF1A</p><ul><li><code>commit</code>\u5904\u7406\u540C\u6B65\uFF0C\u627E\u5230<code>mutations</code>\u91CC\u7684\u5BF9\u5E94\u51FD\u6570\uFF0C\u7136\u540E\u6267\u884C\u51FD\u6570\u66F4\u65B0<code>state</code>\u3002</li><li><code>dispatch</code>\u5904\u7406\u5F02\u6B65\uFF0C\u627E\u5230<code>actions</code>\u91CC\u7684\u5BF9\u5E94\u51FD\u6570\uFF0C\u7136\u540E\u6267\u884C\u51FD\u6570\u66F4\u65B0<code>state</code>\u3002</li></ul></li><li><p><code>getters</code>\u5177\u5907\u8BA1\u7B97\u5C5E\u6027\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>Vue</code>\u4E2D\u7684<code>computed</code>\u6765\u8FDB\u884C\u5904\u7406\uFF08\u53EF\u80FD\u8FD9\u4E5F\u662F<code>Vuex</code>\u7528\u5B9E\u4F8B\u5316\u65B9\u5F0F\u5904\u7406<code>state</code>\u54CD\u5E94\u5F0F\u7684\u539F\u56E0\uFF09\u3002</p></li><li><p><code>modules</code>\u7684\u5B9E\u73B0\u662F\u6839\u636E<code>store</code>\u914D\u7F6E\u9012\u5F52\u5EFA\u7ACB\u76F8\u5E94\u7684<code>module</code>\uFF0C\u5E76\u4E14\u5EFA\u7ACB<code>module</code>\u4E4B\u95F4\u7684\u7236\u5B50\u5173\u7CFB\u3002\u518D\u6839\u636E<code>namespace</code>\u6765\u5206\u5272\u5404\u4E2A\u6A21\u5757\uFF0C\u4F7F\u5F97<code>commit/dispatch</code>\u7684\u65F6\u5019\u9700\u8981\u6307\u5B9A\u6A21\u5757\u7684<code>namespace</code>\u3002</p></li></ol><h2 id="\u7B80\u5316\u7248\u5B9E\u73B0\u4EE3\u7801" tabindex="-1">\u7B80\u5316\u7248\u5B9E\u73B0\u4EE3\u7801 <a class="header-anchor" href="#\u7B80\u5316\u7248\u5B9E\u73B0\u4EE3\u7801" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token keyword">let</span> _Vue

<span class="token keyword">class</span> <span class="token class-name">Store</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> state<span class="token punctuation">,</span> mutations<span class="token punctuation">,</span> actions<span class="token punctuation">,</span> getters <span class="token punctuation">}</span> <span class="token operator">=</span> options
    <span class="token keyword">this</span><span class="token punctuation">.</span>mutations <span class="token operator">=</span> mutations
    <span class="token keyword">this</span><span class="token punctuation">.</span>actions <span class="token operator">=</span> actions
    <span class="token keyword">this</span><span class="token punctuation">.</span>getters <span class="token operator">=</span> getters
    
    <span class="token keyword">let</span> computed <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token comment">// \u901A\u8FC7 computed \u6765\u5B9E\u73B0 getters</span>
    Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>getters<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>getterName<span class="token punctuation">,</span> getter<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      computed<span class="token punctuation">[</span>getterName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5C01\u88C5\u4E00\u5C42\uFF0C\u6DFB\u52A0 this.state \u4F5C\u4E3A\u53C2\u6570</span>
        <span class="token keyword">return</span> <span class="token function">getter</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// \u8BBF\u95EE getters \u7684 key \u5C31\u662F\u8BBF\u95EE computed \u7684 key</span>
      Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>getters<span class="token punctuation">,</span> getterName<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> self<span class="token punctuation">.</span>_vm<span class="token punctuation">[</span>getterName<span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>_vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">_Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">$$state</span><span class="token operator">:</span> state
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>computed
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// \u540C\u6837\u53EF\u4EE5\u5B9E\u73B0\u54CD\u5E94\u5F0F\uFF0C\u4F46\u662F getters \u5B9E\u73B0\u53C8\u9700\u8981\u5355\u72EC\u5904\u7406\uFF0C\u6BD4\u8F83\u9EBB\u70E6</span>
    <span class="token comment">// this.$$state = _Vue.observable(state)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">get</span> <span class="token function">state</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_vm<span class="token punctuation">.</span>_data<span class="token punctuation">.</span>$$state
  <span class="token punctuation">}</span>

  <span class="token keyword">set</span> <span class="token function">state</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;\u65E0\u6CD5\u76F4\u63A5\u4FEE\u6539 state&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">commit</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>mutations<span class="token punctuation">[</span>type<span class="token punctuation">]</span>
    <span class="token function">handler</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">,</span> payload<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u8FD9\u91CC\u6CA1\u505A\u592A\u591A\u5904\u7406</span>
  <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>actions<span class="token punctuation">[</span>type<span class="token punctuation">]</span>
    <span class="token keyword">return</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">,</span> payload<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">install</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7C7B\u4F3C\u4E8E\u5355\u4F8B\u6A21\u5F0F</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>_Vue <span class="token operator">===</span> Vue<span class="token punctuation">)</span> <span class="token keyword">return</span>
  _Vue <span class="token operator">=</span> Vue
  Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">beforeCreate</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$options
      <span class="token comment">// \u6CE8\u5165 $store \u53D8\u91CF</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>store<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$store <span class="token operator">=</span> options<span class="token punctuation">.</span>store
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>parent <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span>parent<span class="token punctuation">.</span>$store<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$store <span class="token operator">=</span> options<span class="token punctuation">.</span>parent<span class="token punctuation">.</span>$store
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  Store<span class="token punctuation">,</span>
  install
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u95EE\u9898" tabindex="-1">\u95EE\u9898 <a class="header-anchor" href="#\u95EE\u9898" aria-hidden="true">#</a></h2><h4 id="q-\u4E3A\u4EC0\u4E48\u8981commit-dispatch\u4E24\u79CD\u5F62\u5F0F\u6765\u5904\u7406\uFF0C\u90FD\u4F7F\u7528dispatch\u4E0D\u884C\u5417\uFF1F" tabindex="-1">Q:\u4E3A\u4EC0\u4E48\u8981commit/dispatch\u4E24\u79CD\u5F62\u5F0F\u6765\u5904\u7406\uFF0C\u90FD\u4F7F\u7528dispatch\u4E0D\u884C\u5417\uFF1F <a class="header-anchor" href="#q-\u4E3A\u4EC0\u4E48\u8981commit-dispatch\u4E24\u79CD\u5F62\u5F0F\u6765\u5904\u7406\uFF0C\u90FD\u4F7F\u7528dispatch\u4E0D\u884C\u5417\uFF1F" aria-hidden="true">#</a></h4><ul><li>\u4E00\u79CD\u53EF\u80FD\u7684\u539F\u56E0\u662F\u5355\u4E00\u804C\u8D23\uFF0C<code>commit</code>\u4E3B\u8981\u5904\u7406\u540C\u6B65\u4EFB\u52A1\uFF0C\u89E6\u53D1\u72B6\u6001\u66F4\u65B0\uFF1B<code>dispatch</code>\u4E3B\u8981\u5904\u7406\u5F02\u6B65\u4EFB\u52A1</li><li>\u53E6\u4E00\u79CD\u539F\u56E0\u662F\u65B9\u4FBF<code>devtools</code>\u8FFD\u8E2A\u72B6\u6001\u53D8\u5316\u3002\u53C2\u8003<a href="https://juejin.cn/post/6844904054108192776" target="_blank" rel="noopener noreferrer">\u8FD9\u91CC\u7684\u8BC4\u8BBA</a>\u3002</li></ul>`,12),e=[o];function c(u,l,i,k,r,d){return a(),s("div",null,e)}var y=n(p,[["render",c]]);export{m as __pageData,y as default};
