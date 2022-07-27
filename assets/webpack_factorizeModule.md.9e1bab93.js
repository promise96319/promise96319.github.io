import{_ as n,c as s,o as a,a as t}from"./app.f27e6278.js";var o="/assets/webpack-resolve.26cbc3e8.png";const g='{"title":"factorizeModule","description":"","frontmatter":{},"headers":[{"level":2,"title":"_factorizeModule\u65B9\u6CD5","slug":"factorizemodule\u65B9\u6CD5"},{"level":2,"title":"getResolver","slug":"getresolver"},{"level":2,"title":"createResolver","slug":"createresolver"},{"level":2,"title":"resolver.resolve","slug":"resolver-resolve"},{"level":2,"title":"loader \u5339\u914D","slug":"loader-\u5339\u914D"},{"level":2,"title":"createModule","slug":"createmodule"},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3"}],"relativePath":"webpack/factorizeModule.md","lastUpdated":1658881380000}',e={},p=t(`<h1 id="factorizemodule" tabindex="-1">factorizeModule <a class="header-anchor" href="#factorizemodule" aria-hidden="true">#</a></h1><p><code>make</code>\u9636\u6BB5\u7B2C\u4E00\u6B65\u505A\u7684\u4E8B\u662F\u901A\u8FC7<code>factorizeModule</code>\u5C06<code>dependency</code>\u521B\u5EFA\u6210\u76F8\u5E94\u7684<code>module</code>\u3002</p><h2 id="factorizemodule\u65B9\u6CD5" tabindex="-1">_factorizeModule\u65B9\u6CD5 <a class="header-anchor" href="#factorizemodule\u65B9\u6CD5" aria-hidden="true">#</a></h2><p>\u627E\u5230<code>_factorizeModule</code>\u65B9\u6CD5\u7684\u5B9A\u4E49\uFF1A</p><div class="language-javascript"><pre><code><span class="token function">_factorizeModule</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> factory <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  factory<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> result</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8BE5\u65B9\u6CD5\u5B9E\u9645\u4E0A\u8C03\u7528\u7684\u662F<code>factory</code>\u65B9\u6CD5\u3002<code>factory</code>\u65B9\u6CD5\u662F\u4E00\u4E2A\u5DE5\u5382\u51FD\u6570\uFF0C\u7528\u4E8E\u521B\u5EFA<code>module</code>\u3002\u8FD9\u91CC\u4EE5<code>NormalModuleFactory</code>\u4E3A\u4F8B\u3002\u627E\u5230<code>webpack/lib/NormalModuleFactory.js</code>\u6587\u4EF6\u4E2D<code>create</code>\u65B9\u6CD5\u7684\u5B9A\u4E49\uFF0C\u8BE5\u65B9\u6CD5\u6700\u7EC8\u4F1A\u8D70\u5230<code>hooks.factorize</code>:</p><div class="language-javascript"><pre><code><span class="token keyword">this</span><span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>factorize<span class="token punctuation">.</span><span class="token function">callAsync</span><span class="token punctuation">(</span>resolveData<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> module</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u800C\u5728<code>NormalModuleFactory</code>\u7684<code>constructor</code>\u4E2D\u6B63\u597D\u5B9A\u4E49\u4E86<code>factorize.tapAsync</code>\uFF0C\u5E76\u4F1A\u6267\u884C<code>hooks.resolve.callAsync()</code>\uFF0C\u8FDB\u5165\u5230<code>resolve</code>\u7684\u56DE\u8C03\u51FD\u6570\u3002\u56DE\u8C03\u51FD\u6570\u5185\u4E3B\u8981\u7531\u4E24\u6BB5\u903B\u8F91\uFF0C\u4E00\u6BB5\u662F\u5BF9<code>dependency</code>\u8FDB\u884C<code>resolve</code>\uFF0C\u53E6\u4E00\u6BB5\u903B\u8F91\u662F\u5904\u7406<code>loader</code>\u3002</p><h2 id="getresolver" tabindex="-1">getResolver <a class="header-anchor" href="#getresolver" aria-hidden="true">#</a></h2><p>\u5728<code>resolve</code>\u4E4B\u524D\uFF0C\u4F1A\u5148\u83B7\u53D6\u5904\u7406<code>dependency</code>\u7684<code>resolver</code>\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">const</span> normalResolver <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getResolver</span><span class="token punctuation">(</span>
  <span class="token string">&quot;normal&quot;</span><span class="token punctuation">,</span>
  dependencyType
  <span class="token operator">?</span> <span class="token function">cachedSetProperty</span><span class="token punctuation">(</span>
    resolveOptions <span class="token operator">||</span> <span class="token constant">EMPTY_RESOLVE_OPTIONS</span><span class="token punctuation">,</span>
    <span class="token string">&quot;dependencyType&quot;</span><span class="token punctuation">,</span>
    dependencyType
  <span class="token punctuation">)</span>
  <span class="token operator">:</span> resolveOptions
<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token function">getResolver</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> resolveOptions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>resolverFactory<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> resolveOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>resolverFactory</code>\u5728<code>compiler</code>\u5BF9\u8C61\u521D\u59CB\u5316\u65F6\u5C31\u5DF2\u7ECF\u5B9E\u4F8B\u5316\u3002\u627E\u5230<code>webpack/lib/ResolverFactory.js</code>\uFF0C\u8C03\u7528<code>get</code>\u65B9\u6CD5\u65F6\u5982\u679C\u7F13\u5B58\u4E2D\u6CA1\u6709<code>resolver</code>\uFF0C\u5C31\u4F1A\u8C03\u7528<code>_create</code>\u65B9\u6CD5\u521B\u5EFA\u4E00\u4E2A<code>resolver</code>\u3002</p><div class="language-javascript"><pre><code><span class="token function">_create</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> resolveOptionsWithDepType</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> resolver <span class="token operator">=</span> <span class="token comment">/** @type {ResolverWithOptions} */</span> <span class="token punctuation">(</span>Factory<span class="token punctuation">.</span><span class="token function">createResolver</span><span class="token punctuation">(</span>
    resolveOptions
  <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
  <span class="token keyword">return</span> resolver<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="createresolver" tabindex="-1">createResolver <a class="header-anchor" href="#createresolver" aria-hidden="true">#</a></h2><p>\u627E\u5230<code>node_modules/enhanced-resolve/lib/ResolverFactory.js</code>\u6587\u4EF6\uFF0C\u91CC\u9762\u5B9A\u4E49\u4E86<code>createResolver</code>\u65B9\u6CD5\u3002\u8BE5\u65B9\u6CD5\u5728\u5B9E\u4F8B\u5316<code>Resolver</code>\u540E\uFF0C\u5B9A\u4E49\u4E86\u4E00\u7CFB\u5217\u7684\u94A9\u5B50\uFF0C\u7528\u4E8E\u6574\u4E2A<code>dependency</code>\u7684<code>resolve</code>\u8FC7\u7A0B\u3002</p><div class="language-javascript"><pre><code>resolver<span class="token punctuation">.</span><span class="token function">ensureHook</span><span class="token punctuation">(</span><span class="token string">&quot;resolve&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
resolver<span class="token punctuation">.</span><span class="token function">ensureHook</span><span class="token punctuation">(</span><span class="token string">&quot;internalResolve&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
resolver<span class="token punctuation">.</span><span class="token function">ensureHook</span><span class="token punctuation">(</span><span class="token string">&quot;newInteralResolve&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
resolver<span class="token punctuation">.</span><span class="token function">ensureHook</span><span class="token punctuation">(</span><span class="token string">&quot;parsedResolve&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
resolver<span class="token punctuation">.</span><span class="token function">ensureHook</span><span class="token punctuation">(</span><span class="token string">&quot;describedResolve&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
resolver<span class="token punctuation">.</span><span class="token function">ensureHook</span><span class="token punctuation">(</span><span class="token string">&quot;internal&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
resolver<span class="token punctuation">.</span><span class="token function">ensureHook</span><span class="token punctuation">(</span><span class="token string">&quot;rawModule&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
resolver<span class="token punctuation">.</span><span class="token function">ensureHook</span><span class="token punctuation">(</span><span class="token string">&quot;module&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
resolver<span class="token punctuation">.</span><span class="token function">ensureHook</span><span class="token punctuation">(</span><span class="token string">&quot;resolveAsModule&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
resolver<span class="token punctuation">.</span><span class="token function">ensureHook</span><span class="token punctuation">(</span><span class="token string">&quot;undescribedResolveInPackage&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
resolver<span class="token punctuation">.</span><span class="token function">ensureHook</span><span class="token punctuation">(</span><span class="token string">&quot;resolveInPackage&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
resolver<span class="token punctuation">.</span><span class="token function">ensureHook</span><span class="token punctuation">(</span><span class="token string">&quot;resolveInExistingDirectory&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
resolver<span class="token punctuation">.</span><span class="token function">ensureHook</span><span class="token punctuation">(</span><span class="token string">&quot;relative&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
resolver<span class="token punctuation">.</span><span class="token function">ensureHook</span><span class="token punctuation">(</span><span class="token string">&quot;describedRelative&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
resolver<span class="token punctuation">.</span><span class="token function">ensureHook</span><span class="token punctuation">(</span><span class="token string">&quot;directory&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
resolver<span class="token punctuation">.</span><span class="token function">ensureHook</span><span class="token punctuation">(</span><span class="token string">&quot;undescribedExistingDirectory&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
resolver<span class="token punctuation">.</span><span class="token function">ensureHook</span><span class="token punctuation">(</span><span class="token string">&quot;existingDirectory&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
resolver<span class="token punctuation">.</span><span class="token function">ensureHook</span><span class="token punctuation">(</span><span class="token string">&quot;undescribedRawFile&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
resolver<span class="token punctuation">.</span><span class="token function">ensureHook</span><span class="token punctuation">(</span><span class="token string">&quot;rawFile&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
resolver<span class="token punctuation">.</span><span class="token function">ensureHook</span><span class="token punctuation">(</span><span class="token string">&quot;file&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
resolver<span class="token punctuation">.</span><span class="token function">ensureHook</span><span class="token punctuation">(</span><span class="token string">&quot;finalFile&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
resolver<span class="token punctuation">.</span><span class="token function">ensureHook</span><span class="token punctuation">(</span><span class="token string">&quot;existingFile&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
resolver<span class="token punctuation">.</span><span class="token function">ensureHook</span><span class="token punctuation">(</span><span class="token string">&quot;resolved&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u540C\u65F6\uFF0C\u540E\u9762\u8FD8\u5728\u5BF9\u5E94\u7684\u94A9\u5B50\u4E0A\u5E94\u7528\u4E86\u4E00\u4E9B\u63D2\u4EF6\u7528\u4E8E<code>resolve</code>\u3002\u6BD4\u5982\uFF1A</p><div class="language-javascript"><pre><code><span class="token comment">// \u5904\u7406 resolve \u7F13\u5B58</span>
plugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
  <span class="token keyword">new</span> <span class="token class-name">UnsafeCachePlugin</span><span class="token punctuation">(</span>
    source<span class="token punctuation">,</span>
    cachePredicate<span class="token punctuation">,</span>
    unsafeCache<span class="token punctuation">,</span>
    cacheWithContext<span class="token punctuation">,</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">new-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>source<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5904\u7406 \u8DEF\u5F84</span>
plugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
  <span class="token keyword">new</span> <span class="token class-name">ParsePlugin</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">new-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>source<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> resolveOptions<span class="token punctuation">,</span> <span class="token string">&quot;parsed-resolve&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5904\u7406 \u63CF\u8FF0\u6587\u4EF6</span>
plugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
  <span class="token keyword">new</span> <span class="token class-name">DescriptionFilePlugin</span><span class="token punctuation">(</span>
    <span class="token string">&quot;parsed-resolve&quot;</span><span class="token punctuation">,</span>
    descriptionFiles<span class="token punctuation">,</span>
    <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token string">&quot;described-resolve&quot;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5904\u7406 \u522B\u540D</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>alias<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  plugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">AliasPlugin</span><span class="token punctuation">(</span><span class="token string">&quot;normal-resolve&quot;</span><span class="token punctuation">,</span> alias<span class="token punctuation">,</span> <span class="token string">&quot;internal-resolve&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7B49\u7B49\u5176\u4ED6\u63D2\u4EF6...</span>
</code></pre></div><p>\u8FD9\u4E9B\u63D2\u4EF6\u6B63\u597D\u5BF9\u5E94\u4E86<code>webpack</code>\u4E2D\u7684<code>resolve</code>\u914D\u7F6E\uFF1A<a href="https://webpack.docschina.org/configuration/resolve/" target="_blank" rel="noopener noreferrer">webpack resolve \u914D\u7F6E</a></p><p><img src="`+o+`" alt=""></p><h2 id="resolver-resolve" tabindex="-1">resolver.resolve <a class="header-anchor" href="#resolver-resolve" aria-hidden="true">#</a></h2><p>\u83B7\u53D6\u5B8C<code>resolver</code>\u540E\u4F1A\u8C03\u7528<code>resolver.resolve</code>\u89E3\u6790<code>dependency</code>\uFF0C\u5305\u62EC\u6587\u4EF6\u5F15\u7528\u8DEF\u5F84\u89E3\u6790\uFF08\u6BD4\u5982\u662F\u7EDD\u5BF9\u8DEF\u5F84\u8FD8\u662F\u76F8\u5BF9\u8DEF\u5F84\u8FD8\u662F\u6A21\u5757\uFF0C\u6709\u54EA\u4E9B\u53C2\u6570\u7B49\u7B49\uFF09\uFF0C\u6587\u4EF6\u8DEF\u5F84\u67E5\u627E\uFF0C\u6587\u4EF6\u63CF\u8FF0\u6587\u4EF6\u8BFB\u53D6\uFF0C\u6587\u4EF6\u522B\u540D\u66FF\u6362\u7B49\u7B49\u64CD\u4F5C\u3002</p><h2 id="loader-\u5339\u914D" tabindex="-1">loader \u5339\u914D <a class="header-anchor" href="#loader-\u5339\u914D" aria-hidden="true">#</a></h2><p>\u89E3\u6790\u5B8C\u5F53\u524D<code>dependency</code>\u4E4B\u540E\u8FDB\u5165\u5230\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD9\u91CC\u8C03\u7528\u7684\u662F<code>continueCallback</code>\u65B9\u6CD5\u3002</p><div class="language-javascript"><pre><code><span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ruleSet<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">resource</span><span class="token operator">:</span> resourceDataForRules<span class="token punctuation">.</span>path<span class="token punctuation">,</span>
  <span class="token literal-property property">realResource</span><span class="token operator">:</span> resourceData<span class="token punctuation">.</span>path<span class="token punctuation">,</span>
  <span class="token literal-property property">resourceQuery</span><span class="token operator">:</span> resourceDataForRules<span class="token punctuation">.</span>query<span class="token punctuation">,</span>
  <span class="token literal-property property">resourceFragment</span><span class="token operator">:</span> resourceDataForRules<span class="token punctuation">.</span>fragment<span class="token punctuation">,</span>
  <span class="token literal-property property">mimetype</span><span class="token operator">:</span> matchResourceData <span class="token operator">?</span> <span class="token string">&quot;&quot;</span> <span class="token operator">:</span> resourceData<span class="token punctuation">.</span>data<span class="token punctuation">.</span>mimetype <span class="token operator">||</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">dependency</span><span class="token operator">:</span> dependencyType<span class="token punctuation">,</span>
  <span class="token literal-property property">descriptionData</span><span class="token operator">:</span> matchResourceData
  <span class="token operator">?</span> <span class="token keyword">undefined</span>
  <span class="token operator">:</span> resourceData<span class="token punctuation">.</span>data<span class="token punctuation">.</span>descriptionFileData<span class="token punctuation">,</span>
  <span class="token literal-property property">issuer</span><span class="token operator">:</span> contextInfo<span class="token punctuation">.</span>issuer<span class="token punctuation">,</span>
  <span class="token literal-property property">compiler</span><span class="token operator">:</span> contextInfo<span class="token punctuation">.</span>compiler<span class="token punctuation">,</span>
  <span class="token literal-property property">issuerLayer</span><span class="token operator">:</span> contextInfo<span class="token punctuation">.</span>issuerLayer <span class="token operator">||</span> <span class="token string">&quot;&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u8BE5\u65B9\u6CD5\u4F1A\u5BF9<code>dependency</code>\u548C<code>loader</code>\u7684\u914D\u7F6E\u8FDB\u884C\u5339\u914D\uFF0C\u8FD4\u56DE\u8BE5<code>dependency</code>\u4F7F\u7528\u5230\u7684<code>loaders</code>\u3002\u968F\u540E\u4F7F\u7528<code>loaderResolver</code>\u5BF9\u6BCF\u4E2A<code>loader</code>\u8FDB\u884C\u6587\u4EF6\u89E3\u6790\uFF0C\u8FD4\u56DE<code>loader</code>\u7684\u6587\u4EF6\u8DEF\u5F84\u3002</p><div class="language-javascript"><pre><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">resolveRequestArray</span><span class="token punctuation">(</span>
  contextInfo<span class="token punctuation">,</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">,</span>
  useLoadersPost<span class="token punctuation">,</span>
  loaderResolver<span class="token punctuation">,</span>
  resolveContext<span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> result</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    postLoaders <span class="token operator">=</span> result<span class="token punctuation">;</span>
    <span class="token function">continueCallback</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="createmodule" tabindex="-1">createModule <a class="header-anchor" href="#createmodule" aria-hidden="true">#</a></h2><p>\u5F53<code>dependency</code>\u89E3\u6790\u5B8C\u6210\u540E\uFF0C\u6267\u884C<code>resolve</code>\u56DE\u8C03\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">this</span><span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>factorize<span class="token punctuation">.</span><span class="token function">tapAsync</span><span class="token punctuation">(</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;NormalModuleFactory&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">stage</span><span class="token operator">:</span> <span class="token number">100</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">resolveData<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>resolve<span class="token punctuation">.</span><span class="token function">callAsync</span><span class="token punctuation">(</span>resolveData<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> result</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>afterResolve<span class="token punctuation">.</span><span class="token function">callAsync</span><span class="token punctuation">(</span>resolveData<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> result</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> createData <span class="token operator">=</span> resolveData<span class="token punctuation">.</span>createData<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>createModule<span class="token punctuation">.</span><span class="token function">callAsync</span><span class="token punctuation">(</span>
          createData<span class="token punctuation">,</span>
          resolveData<span class="token punctuation">,</span>
          <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> createdModule</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>createdModule<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              createdModule <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NormalModule</span><span class="token punctuation">(</span>createData<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            createdModule <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>hooks<span class="token punctuation">.</span><span class="token function">module</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>
              createdModule<span class="token punctuation">,</span>
              createData<span class="token punctuation">,</span>
              resolveData
            <span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">return</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> createdModule<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u6700\u7EC8\u4F1A\u901A\u8FC7<code>createdModule = new NormalModule(createData)</code>\u521B\u5EFA\u4E00\u4E2A<code>module</code>\uFF0C\u5E76\u5C06\u8BE5<code>module</code>\u4F5C\u4E3A\u56DE\u8C03\u51FD\u6570\u7684\u53C2\u6570\u4F20\u9012\u7ED9\u4E0B\u4E00\u9636\u6BB5\uFF0C\u4E5F\u5C31\u662F<code>addModule</code>\u9636\u6BB5\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p><code>factorizeModule</code>\u8C03\u7528<code>xxxModuleFactory.create</code>\u65B9\u6CD5\u5C06<code>dependency</code>\u8F6C\u5316\u6210<code>module</code>\u3002</p><p>\u5728\u8FD9\u4E2A\u8FC7\u7A0B\u4E2D\u4F1A\u5B9E\u4F8B\u5316<code>resolver</code>\uFF0C\u901A\u8FC7\u4E0D\u540C\u7684<code>resolver</code>\u5BF9<code>dependency</code>\u8FDB\u884C\u89E3\u6790\uFF0C\u5305\u62EC\u6587\u4EF6\u8DEF\u5F84\uFF0C\u6587\u4EF6\u63CF\u8FF0\uFF0C\u6587\u4EF6\u522B\u540D\u7B49\u7B49\u8FDB\u884C\u89E3\u6790\u3002</p><p>\u89E3\u6790\u5B8C\u6210\u540E\u4E0E\u914D\u7F6E\u7684<code>loader</code>\u5339\u914D\u89C4\u5219\u8FDB\u884C\u5339\u914D\u3002\u5982\u679C\u4E0E\u8BE5<code>dependency</code>\u5339\u914D\u6210\u529F\uFF0C\u90A3\u4E48\u4F1A\u4F7F\u7528<code>loaderResolver</code>\u89E3\u6790<code>loader</code>\u6587\u4EF6\u8DEF\u5F84\uFF0C\u5B58\u653E\u5230<code>createData.loaders</code>\u5F53\u4E2D\u3002</p><p>\u6700\u540E\u6839\u636E\u89E3\u6790\u597D\u7684<code>createData</code>\u521B\u5EFA\u4E00\u4E2A<code>module</code>\u3002</p>`,36),c=[p];function u(l,r,i,k,d,v){return a(),s("div",null,c)}var f=n(e,[["render",u]]);export{g as __pageData,f as default};