import{_ as n,c as a,o as s,a as t}from"./app.d5a482e8.js";var p="/assets/container-root-fiber.9a7afa97.jpeg";const f='{"title":"React\u6E90\u7801\u8D77\u59CB\u7BC7","description":"","frontmatter":{},"headers":[{"level":2,"title":"createRoot","slug":"createroot"},{"level":2,"title":"jsx","slug":"jsx"},{"level":2,"title":"createElement","slug":"createelement"},{"level":2,"title":"render","slug":"render"},{"level":2,"title":"updateContainer","slug":"updatecontainer"},{"level":2,"title":"scheduleUpdateOnFiber","slug":"scheduleupdateonfiber"},{"level":2,"title":"ensureRootIsScheduled","slug":"ensurerootisscheduled"}],"relativePath":"react/react\u6E90\u7801\u8D77\u59CB\u7BC7.md","lastUpdated":1657366488000}',o={},e=t(`<h1 id="react\u6E90\u7801\u8D77\u59CB\u7BC7" tabindex="-1">React\u6E90\u7801\u8D77\u59CB\u7BC7 <a class="header-anchor" href="#react\u6E90\u7801\u8D77\u59CB\u7BC7" aria-hidden="true">#</a></h1><h2 id="createroot" tabindex="-1">createRoot <a class="header-anchor" href="#createroot" aria-hidden="true">#</a></h2><p><code>React</code>\u4E2D\u5982\u679C\u60F3\u4F7F\u7528<code>ConcurrentMode</code>\uFF0C\u9700\u8981\u4F7F\u7528<code>createRoot</code>\u51FD\u6570\u6765\u521B\u5EFA\u5E94\u7528\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">const</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5728 <code>react-dom/src/client/ReactDomRoot.js</code>\u6587\u4EF6\u4E2D\u627E\u5230<code>createRoot</code>\u5B9A\u4E49\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createRoot</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">container</span><span class="token operator">:</span> Container<span class="token punctuation">,</span>
  options<span class="token operator">?</span><span class="token operator">:</span> CreateRootOptions<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> RootType <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>

  <span class="token comment">// 1. \u521B\u5EFA\u5B8C\u6210\u4E86\u6839\u8282\u70B9\uFF0C\u8FD4\u56DE\u7684\u662F FiberRoot\uFF0C\u4E3A ConcurrentRoot \u6A21\u5F0F</span>
  <span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token function">createContainer</span><span class="token punctuation">(</span>
    container<span class="token punctuation">,</span>
    ConcurrentRoot<span class="token punctuation">,</span>
    hydrate<span class="token punctuation">,</span>
    hydrationCallbacks<span class="token punctuation">,</span>
    isStrictMode<span class="token punctuation">,</span>
    concurrentUpdatesByDefaultOverride<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 2. node \u8282\u70B9 \u548C rootFiber \u7684\u5173\u7CFB</span>
  <span class="token comment">//  container[&#39;__reactContainer$&#39; + randomKey] = root.current</span>
  <span class="token function">markContainerAsRoot</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>current<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> rootContainerElement <span class="token operator">=</span>
    container<span class="token punctuation">.</span>nodeType <span class="token operator">===</span> <span class="token constant">COMMENT_NODE</span> <span class="token operator">?</span> container<span class="token punctuation">.</span>parentNode <span class="token operator">:</span> container<span class="token punctuation">;</span>
  <span class="token comment">// 3. \u5728 container \u4E0A\u6DFB\u52A0\u539F\u751F\u4E8B\u4EF6</span>
  <span class="token function">listenToAllSupportedEvents</span><span class="token punctuation">(</span>rootContainerElement<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u5B9E\u4F8B\u5316 root\uFF0Croot\u4E0A\u6302\u8F7D\u4E86 render, unmount \u65B9\u6CD5</span>
  <span class="token comment">// this._internalRoot = internalRoot</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ReactDOMRoot</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>createRoot</code>\u65B9\u6CD5\u4E3B\u8981\u505A\u4E86\u4E24\u4EF6\u4E8B\u60C5\uFF1A</p><ol><li>\u6839\u636E<code>rootContainer</code>\u521B\u5EFA<code>FiberRoot</code>\u3002</li><li>\u5728<code>container</code>\u4E0A\u6DFB\u52A0\u539F\u751F\u4E8B\u4EF6\u3002</li></ol><p><code>React</code>\u5B9E\u73B0\u4E86\u4E00\u5957\u81EA\u5DF1\u7684\u4E8B\u4EF6\u7CFB\u7EDF\uFF0C\u51E0\u4E4E\u6240\u6709\u539F\u751F\u4E8B\u4EF6\u90FD\u7ED1\u5B9A\u5728<code>container</code>\u4E0A\uFF0C\u901A\u8FC7\u4E8B\u4EF6\u5192\u6CE1\u7684\u65B9\u5F0F\u6355\u6349\u5177\u4F53\u7684\u4E8B\u4EF6\uFF0C\u8BE6\u7EC6\u7684\u5185\u5BB9\u5C06\u5728<code>React</code>\u4E8B\u4EF6\u7CFB\u7EDF\u7AE0\u8282\u8BB2\u89E3\u3002\u8FD9\u91CC\u4E3B\u8981\u8BA8\u8BBA<code>createContainer</code>\uFF0C\u627E\u5230<code>react-reconciler/src/ReactFiberRoot.new.js</code>\u6587\u4EF6\u4E2D\u7684<code>createFiberRoot</code>\u51FD\u6570\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createFiberRoot</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">containerInfo</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  <span class="token literal-property property">tag</span><span class="token operator">:</span> RootTag<span class="token punctuation">,</span>
  <span class="token literal-property property">hydrate</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>
  <span class="token literal-property property">hydrationCallbacks</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> SuspenseHydrationCallbacks<span class="token punctuation">,</span>
  <span class="token literal-property property">isStrictMode</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>
  <span class="token literal-property property">concurrentUpdatesByDefaultOverride</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> boolean<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> FiberRoot <span class="token punctuation">{</span>
  <span class="token comment">// 1. \u521B\u5EFAFiber root</span>
  <span class="token keyword">const</span> <span class="token literal-property property">root</span><span class="token operator">:</span> FiberRoot <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FiberRootNode</span><span class="token punctuation">(</span>containerInfo<span class="token punctuation">,</span> tag<span class="token punctuation">,</span> hydrate<span class="token punctuation">)</span><span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 2. \u521B\u5EFA\u4E00\u4E2A tag \u4E3A HostRoot \u7684 RootFiber</span>
  <span class="token comment">// \u5E76\u4E14\u5E26\u4E0A\u5F53\u524D\u7684\u6A21\u5F0F\uFF08tag\u5C31\u662F\u5BF9\u5E94\u7684\u6A21\u5F0F\uFF0C\u5F53\u7136\u8FD8\u4F1A\u8FDB\u884C\u66F4\u4E00\u5C42\u7684\u5224\u65AD\uFF09</span>
  <span class="token keyword">const</span> uninitializedFiber <span class="token operator">=</span> <span class="token function">createHostRootFiber</span><span class="token punctuation">(</span>
    tag<span class="token punctuation">,</span>
    isStrictMode<span class="token punctuation">,</span>
    concurrentUpdatesByDefaultOverride<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 3. \u5EFA\u7ACB fiberRoot \u548C rootFiber\u7684\u5173\u7CFB</span>
  root<span class="token punctuation">.</span>current <span class="token operator">=</span> uninitializedFiber<span class="token punctuation">;</span>
  uninitializedFiber<span class="token punctuation">.</span>stateNode <span class="token operator">=</span> root<span class="token punctuation">;</span>

  <span class="token keyword">const</span> initialState <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  uninitializedFiber<span class="token punctuation">.</span>memoizedState <span class="token operator">=</span> initialState<span class="token punctuation">;</span>

  <span class="token comment">// 4. \u521D\u59CB\u5316 update queue</span>
  <span class="token function">initializeUpdateQueue</span><span class="token punctuation">(</span>uninitializedFiber<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>createContainer</code>\u8C03\u7528\u7684\u662F<code>createFiberRoot</code>\u51FD\u6570\uFF0C\u4E3B\u8981\u4F5C\u7528\u4E3A\uFF1A</p><ol><li>\u6839\u636E<code>container</code>\u521B\u5EFA<code>FiberRoot</code>\u3002</li><li>\u521B\u5EFA\u4E00\u4E2A<code>tag</code>\u4E3A<code>HostRoot</code>\u7684<code>RootFiber</code>\u3002</li><li>\u5EFA\u7ACB<code>FiberRoot</code>\u548C<code>RootFiber</code>\u7684\u8054\u7CFB\u3002</li></ol><p>\u6574\u4E2A\u8FC7\u7A0B\u521B\u5EFA\u5B8C\u6210\u540E\uFF0C\u4F1A\u5F62\u6210\u5982\u4E0B\u7684\u7ED3\u6784\uFF1A</p><p><img src="`+p+`" alt=""></p><p>\u5176\u4E2D\u591A\u51FA\u6765\u7684<code>workInProgressFiber</code>\u662F\u540E\u7EED<code>render</code>\u65F6\u624D\u4F1A\u521B\u5EFA\u3002</p><p>\u6267\u884C\u5B8C<code>createRoot</code>\u51FD\u6570\u540E\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u80FD\u591F\u83B7\u53D6\u5230<code>ReactDomRoot</code>\u7684\u5B9E\u4F8B\u4E86\uFF0C\u63A5\u4E0B\u6765\u5C31\u662F\u6267\u884C<code>render</code>\u51FD\u6570\u4E86\u3002</p><div class="language-javascript"><pre><code>ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="jsx" tabindex="-1">jsx <a class="header-anchor" href="#jsx" aria-hidden="true">#</a></h2><p>\u5728<code>React</code>\u4E2D\uFF0C<code>JSX</code>\u8BED\u6CD5\u5728\u7F16\u8BD1\u65F6\u4F1A\u88AB<code>Babel</code>\u7F16\u8BD1\u4E3A<code>React.createElement</code>\u65B9\u6CD5\u3002\u8FD9\u5C31\u662F\u4E3A\u4EC0\u4E48\u5728\u6BCF\u4E2A\u4F7F\u7528\u4E86<code>jsx</code>\u8BED\u6CD5\u7684\u6587\u4EF6\u4E2D\uFF0C\u5FC5\u987B\u663E\u793A\u7684\u5F15\u5165<code>React</code>\u7684\u539F\u56E0\uFF0C\u5426\u5219\u5728\u8FD0\u884C\u7684\u65F6\u5019\u4F1A\u65E0\u6CD5\u627E\u5230<code>React.createElement</code>\u65B9\u6CD5\u3002</p><p><code>JSX</code>\u5E76\u4E0D\u662F\u53EA\u80FD\u88AB\u7F16\u8BD1\u4E3A<code>React.createElement</code>\u65B9\u6CD5\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7<a href="https://babeljs.io/docs/en/babel-plugin-transform-react-jsx" target="_blank" rel="noopener noreferrer">@babel/plugin-transform-react-jsx(opens new window)</a>\u63D2\u4EF6\u663E\u5F0F\u544A\u8BC9<code>Babel</code>\u7F16\u8BD1\u65F6\u9700\u8981\u5C06<code>JSX</code>\u7F16\u8BD1\u4E3A\u5176\u4ED6\u51FD\u6570\u7684\u8C03\u7528\uFF08\u9ED8\u8BA4\u4E3A<code>React.createElement</code>\uFF09\u3002</p><h4 id="\u6807\u7B7E\u540D\u4E3A\u5C0F\u5199\u65F6" tabindex="-1">\u6807\u7B7E\u540D\u4E3A\u5C0F\u5199\u65F6 <a class="header-anchor" href="#\u6807\u7B7E\u540D\u4E3A\u5C0F\u5199\u65F6" aria-hidden="true">#</a></h4><p><code>JSX</code>\u7F16\u8BD1\u65F6\u53EA\u8981\u5206\u4E3A\u4E24\u79CD\u60C5\u51B5\uFF0C\u4E00\u79CD\u662F\u6807\u7B7E\u540D\u4E3A\u5C0F\u5199\u65F6\uFF0C\u5982\uFF1A</p><div class="language-javascript"><pre><code><span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;normal-tag&quot;</span><span class="token operator">&gt;</span>content<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre></div><p>\u4F1A\u88AB\u7F16\u8BD1\u6210\uFF1A</p><div class="language-javascript"><pre><code>React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>
  <span class="token string">&quot;div&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">className</span><span class="token operator">:</span> <span class="token string">&quot;normal-tag&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">&quot;content&quot;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>\u6CE8\u610F\uFF0C\u6B64\u65F6\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u5B57\u7B26\u4E32\u5F62\u5F0F\u3002</strong></p><h4 id="\u6807\u7B7E\u540D\u4E3A\u5927\u5199\u65F6" tabindex="-1">\u6807\u7B7E\u540D\u4E3A\u5927\u5199\u65F6 <a class="header-anchor" href="#\u6807\u7B7E\u540D\u4E3A\u5927\u5199\u65F6" aria-hidden="true">#</a></h4><p>\u4F8B\u5982\u7F16\u8BD1\u51FD\u6570\u5F0F\u7EC4\u4EF6\u65F6\uFF1A</p><div class="language-javascript"><pre><code><span class="token operator">&lt;</span>App className<span class="token operator">=</span><span class="token string">&quot;function-component&quot;</span><span class="token operator">&gt;</span>content<span class="token operator">&lt;</span><span class="token operator">/</span>App<span class="token operator">&gt;</span>
</code></pre></div><p>\u4F1A\u88AB\u7F16\u8BD1\u4E3A\uFF1A</p><div class="language-javascript"><pre><code>React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>
  App<span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">className</span><span class="token operator">:</span> <span class="token string">&quot;function-component&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">&quot;content&quot;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>\u6CE8\u610F\u6B64\u65F6\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u53D8\u91CF\uFF0C\u8FD9\u4E00\u70B9\u5C24\u4E3A\u91CD\u8981\uFF0C\u56E0\u4E3A\u51FD\u6570\u5F0F\u7EC4\u4EF6\uFF0C\u7C7B\u7EC4\u4EF6\uFF0Clazy\u7EC4\u4EF6\u7B49\u7EC4\u4EF6\u7684\u6E32\u67D3\u8FC7\u7A0B\u90FD\u4E0E\u8FD9\u4E2A\u53D8\u91CF\u76F8\u5173\u3002</strong></p><p><code>jsx</code>\u7684\u7F16\u8BD1\u7ED3\u679C\u53EF\u4EE5\u901A\u8FC7<a href="https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&amp;build=&amp;builtIns=false&amp;corejs=3.6&amp;spec=false&amp;loose=false&amp;code_lz=DwQQDmAEDGA2CGBnRA5eBbApgXgEQDsB7AJ3XlgFoAXeAc1wD5pD8rNXgB6cMBoA&amp;debug=false&amp;forceAllTransforms=false&amp;shippedProposals=false&amp;circleciRepo=&amp;evaluate=true&amp;fileSize=false&amp;timeTravel=false&amp;sourceType=module&amp;lineWrap=true&amp;presets=env%2Creact&amp;prettier=true&amp;targets=&amp;version=7.15.6&amp;externalPlugins=&amp;assumptions=%7B%7D" target="_blank" rel="noopener noreferrer">\u8FD9\u91CC</a>\u8FDB\u884C\u9884\u89C8\u8C03\u8BD5\u3002</p><h2 id="createelement" tabindex="-1">createElement <a class="header-anchor" href="#createelement" aria-hidden="true">#</a></h2><p><code>JSX</code>\u7F16\u8BD1\u540E\u5C31\u4F1A\u8C03\u7528<code>createElement</code>\u65B9\u6CD5\u4E86\uFF0C\u8BE5\u65B9\u6CD5\u662F\u5728<code>React/src/ReactElement.js</code>\u6587\u4EF6\u4E2D\u5B9A\u4E49\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> config<span class="token punctuation">,</span> children</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> propName<span class="token punctuation">;</span>

  <span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> key <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> ref <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> self <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> source <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token comment">// 1. \u5904\u7406 props</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>config <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4E3A\u4E86\u7B80\u5316\u4EE3\u7801\uFF0C\u90E8\u5206\u4EE3\u7801\u5DF2\u5220\u9664</span>
    ref <span class="token operator">=</span> config<span class="token punctuation">.</span>ref<span class="token punctuation">;</span>
    key <span class="token operator">=</span> <span class="token string">&#39;&#39;</span> <span class="token operator">+</span> config<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>propName <span class="token keyword">in</span> config<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      props<span class="token punctuation">[</span>propName<span class="token punctuation">]</span> <span class="token operator">=</span> config<span class="token punctuation">[</span>propName<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 2. \u5904\u7406 children\uFF0C\u5982\u679C children \u957F\u5EA6\u5927\u4E8E1\uFF0C\u5F62\u6210\u6570\u7EC4\u5F62\u5F0F</span>
  <span class="token keyword">const</span> childrenLength <span class="token operator">=</span> arguments<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>childrenLength <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    props<span class="token punctuation">.</span>children <span class="token operator">=</span> children<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>childrenLength <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> childArray <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span>childrenLength<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> childrenLength<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      childArray<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arguments<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    props<span class="token punctuation">.</span>children <span class="token operator">=</span> childArray<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 3. \u5904\u7406 default props</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">&amp;&amp;</span> type<span class="token punctuation">.</span>defaultProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> defaultProps <span class="token operator">=</span> type<span class="token punctuation">.</span>defaultProps<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>propName <span class="token keyword">in</span> defaultProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>props<span class="token punctuation">[</span>propName<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        props<span class="token punctuation">[</span>propName<span class="token punctuation">]</span> <span class="token operator">=</span> defaultProps<span class="token punctuation">[</span>propName<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">ReactElement</span><span class="token punctuation">(</span>
    type<span class="token punctuation">,</span>
    key<span class="token punctuation">,</span>
    ref<span class="token punctuation">,</span>
    self<span class="token punctuation">,</span>
    source<span class="token punctuation">,</span>
    ReactCurrentOwner<span class="token punctuation">.</span>current<span class="token punctuation">,</span>
    props<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>type</code>\u8868\u793A\u7684\u662F<code>jsx</code>\u7F16\u8BD1\u540E\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u53EF\u80FD\u4E3A\u666E\u901A\u5B57\u7B26\u4E32\uFF0C\u4E5F\u53EF\u80FD\u662F\u4E00\u4E2A\u53D8\u91CF\u3002\u7B2C\u4E8C\u4E2A\u53C2\u6570<code>config</code>\u5219\u662F\u7F16\u8BD1\u540E\u8282\u70B9\u4E0A\u7684\u5C5E\u6027\u3002\u7B2C\u4E09\u4E2A\u53CA\u4E4B\u540E\u7684\u53C2\u6570\u8868\u793A\u8BE5\u8282\u70B9\u7684<code>children</code>\u8282\u70B9\uFF0C\u5982\u679C\u5B50\u8282\u70B9\u6570\u76EE\u5927\u4E8E1\uFF0C\u8F6C\u6362\u4E3A\u6570\u7EC4\u5F62\u5F0F\u3002\u6700\u7EC8\uFF0C\u7ECF\u8FC7<code>props,children</code>\u7684\u5904\u7406\u540E\uFF0C\u4F1A\u8FD4\u56DE\u4E00\u4E2A<code>ReactElement</code>\u5BF9\u8C61\u3002</p><h2 id="render" tabindex="-1">render <a class="header-anchor" href="#render" aria-hidden="true">#</a></h2><p>\u63A5\u4E0B\u6765\u662F\u6B63\u5F0F\u7684<code>render</code>\u9636\u6BB5\u3002\u627E\u5230<code>ReactDOMRoot.js</code>\u6587\u4EF6\uFF1A</p><div class="language-javascript"><pre><code><span class="token class-name">ReactDOMRoot</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">render</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">children</span><span class="token operator">:</span> ReactNodeList</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_internalRoot<span class="token punctuation">;</span>
  <span class="token function">updateContainer</span><span class="token punctuation">(</span>children<span class="token punctuation">,</span> root<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><code>render</code>\u51FD\u6570\u5F88\u7B80\u5355\uFF0C\u7B2C\u4E00\u4E2A\u662F\u627E\u5230<code>FiberRoot</code>\uFF0C\u7136\u540E\u8C03\u7528<code>updateContainer</code>\u65B9\u6CD5\u5904\u7406\u4F20\u5165\u7684<code>children</code>\uFF08\u4E5F\u5C31\u662F<code>&lt;App/&gt;</code>\u7F16\u8BD1\u540E\u5BF9\u5E94\u7684<code>ReactElement</code>\u8282\u70B9\uFF09\u3002</p><h2 id="updatecontainer" tabindex="-1">updateContainer <a class="header-anchor" href="#updatecontainer" aria-hidden="true">#</a></h2><p>\u5728<code>react-reconciler/src/ReactFiberReconciler.new.js</code>\u6587\u4EF6\u4E2D\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">updateContainer</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">element</span><span class="token operator">:</span> ReactNodeList<span class="token punctuation">,</span>
  <span class="token literal-property property">container</span><span class="token operator">:</span> OpaqueRoot<span class="token punctuation">,</span>
  <span class="token literal-property property">parentComponent</span><span class="token operator">:</span> <span class="token operator">?</span>React$Component<span class="token operator">&lt;</span>any<span class="token punctuation">,</span> any<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">callback</span><span class="token operator">:</span> <span class="token operator">?</span>Function<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> Lane <span class="token punctuation">{</span>
  <span class="token comment">// 1. \u62FF\u5230 RootFiber</span>
  <span class="token keyword">const</span> current <span class="token operator">=</span> container<span class="token punctuation">.</span>current<span class="token punctuation">;</span>
  
  <span class="token comment">// 2. \u83B7\u53D6 current time</span>
  <span class="token keyword">const</span> eventTime <span class="token operator">=</span> <span class="token function">requestEventTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 3. \u83B7\u53D6\u5BF9\u5E94\u7684 lane</span>
  <span class="token comment">// \u7B2C\u4E00\u6B21\u8FDB\u6765\uFF0CconcurrentMode\uFF0C\u8FD4\u56DE\u7684 lane \u4E3A DefaultLane</span>
  <span class="token keyword">const</span> lane <span class="token operator">=</span> <span class="token function">requestUpdateLane</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 4. \u6839\u636E \u65F6\u95F4 + \u4F18\u5148\u7EA7 \u521B\u5EFA\u4E00\u4E2A\u66F4\u65B0\u5BF9\u8C61</span>
  <span class="token keyword">const</span> update <span class="token operator">=</span> <span class="token function">createUpdate</span><span class="token punctuation">(</span>eventTime<span class="token punctuation">,</span> lane<span class="token punctuation">)</span><span class="token punctuation">;</span>
  update<span class="token punctuation">.</span>payload <span class="token operator">=</span> <span class="token punctuation">{</span> element <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// \u5982\u679C\u4F20\u4E86 callback\uFF0C\u5C06 callback \u653E\u5165\u5230 update \u4E2D</span>
  callback <span class="token operator">=</span> callback <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> callback<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>callback <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    update<span class="token punctuation">.</span>callback <span class="token operator">=</span> callback<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 5. update \u5EFA\u7ACB\u6210\u5FAA\u73AF\u94FE\u8868</span>
  <span class="token comment">// \u5E76\u5B58\u653E\u5230 fiber.updateQueue.shared.pending \u5F53\u4E2D</span>
  <span class="token function">enqueueUpdate</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> update<span class="token punctuation">,</span> lane<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 6. \u5F00\u59CB\u8C03\u5EA6</span>
  <span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token function">scheduleUpdateOnFiber</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> lane<span class="token punctuation">,</span> eventTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">entangleTransitions</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> current<span class="token punctuation">,</span> lane<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> lane<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u7B2C\u4E8C\u6B65\u4E2D\uFF0C<code>requestEventTime</code>\u83B7\u53D6\u5F53\u524D\u7684\u65F6\u95F4\uFF0C\u901A\u5E38\u4F7F\u7528<code>preformance.now()</code>\u83B7\u53D6\uFF0C\u7528\u4E8E\u8868\u793A\u8BE5\u4EFB\u52A1\u6267\u884C\u7684\u8D77\u59CB\u65F6\u95F4\u3002\u8BE5\u65F6\u95F4\u4F1A\u5728\u4F18\u5148\u7EA7\u8C03\u5EA6\u4E2D\u7528\u5230\uFF0C\u7528\u4E8E\u5224\u65AD\u4EFB\u52A1\u662F\u5426\u8FC7\u671F\u3002</p><p>\u7B2C\u4E09\u6B65\u4E2D\uFF0C<code>requestUpdateLane</code>\u83B7\u53D6\u672C\u6B21\u66F4\u65B0\u7684<code>lane</code>\uFF0C\u4E0D\u540C\u7684<code>lane</code>\u5BF9\u5E94\u4E8E\u4E0D\u540C\u7684\u4F18\u5148\u7EA7\u3002\u5177\u4F53<code>lane</code>\u7684\u63CF\u8FF0\u5728<code>lane</code>\u6A21\u578B\u7AE0\u8282\u4E2D\u63D0\u5230\u3002</p><p>\u7B2C\u56DB\u6B65\u548C\u7B2C\u4E94\u6B65\u4E3B\u8981\u662F\u521B\u5EFA\u4E00\u4E2A<code>update</code>\uFF0C\u7136\u540E\u5C06\u8BE5<code>update</code>\u653E\u5230<code>updateQueue</code>\u4E2D\uFF0C\u7528\u4E8E\u8868\u793A\u672C\u6B21\u66F4\u65B0\u7684\u5185\u5BB9\u3002</p><p>\u7B2C\u516D\u6B65\u5C31\u8981\u5F00\u59CB\u6B63\u5F0F\u7684\u8C03\u5EA6\u8FC7\u7A0B\uFF0C\u4E5F\u5C31\u662F\u6B63\u5F0F\u7684\u4EFB\u52A1\u8C03\u5EA6\u548C\u6E32\u67D3\u73AF\u8282\u3002<code>class</code>\u7EC4\u4EF6\u4E2D\u7684<code>setState/forceUpdate</code>\u65B9\u6CD5\u6700\u540E\u90FD\u4F1A\u6267\u884C\u8BE5\u51FD\u6570\u8FDB\u884C\u8C03\u5EA6\uFF0C\u56E0\u6B64\u5341\u5206\u91CD\u8981\u3002</p><h2 id="scheduleupdateonfiber" tabindex="-1">scheduleUpdateOnFiber <a class="header-anchor" href="#scheduleupdateonfiber" aria-hidden="true">#</a></h2><p>\u627E\u5230<code>react-reconciler/src/ReactFiberWorkLoop.new.js</code>\u6587\u4EF6\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">scheduleUpdateOnFiber</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">fiber</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">lane</span><span class="token operator">:</span> Lane<span class="token punctuation">,</span>
  <span class="token literal-property property">eventTime</span><span class="token operator">:</span> number<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> FiberRoot <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
  <span class="token function">checkForNestedUpdates</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">warnAboutRenderPhaseUpdatesInDEV</span><span class="token punctuation">(</span>fiber<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u4ECE fiber \u4E00\u76F4\u5411\u4E0A\u5408\u5E76 lanes\uFF0C\u66F4\u6539\u4E86 lanes , childLanes</span>
  <span class="token comment">// \u5F53\u5411\u4E0A\u5BFB\u627Efiber \u6700\u7EC8\u627E\u5230 rootFiber \u65F6\uFF0C\u4F1A\u8FD4\u56DE\u5BF9\u5E94\u7684 fiberRoot</span>
  <span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token function">markUpdateLaneFromFiberToRoot</span><span class="token punctuation">(</span>fiber<span class="token punctuation">,</span> lane<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u66F4\u65B0 fiber root \u4E0A pendingLanes\uFF0C\u52A0\u5165\u5F53\u524D lane</span>
  <span class="token comment">// \u8BA1\u7B97 lane \u6240\u5728\u4F4D\u7F6E\uFF0832\u6761lane\u4E2D\u7684\u7B2C\u51E0\u7EA7\uFF09\uFF0C\u5E76\u5C06 eventTime \u653E\u5230 eventTimes \u91CC</span>
  <span class="token comment">// eventTime \u8868\u793A\u521B\u5EFA\u8FD9\u4E2A update \u7684\u65F6\u95F4\u3002\u4E5F\u662F lane \u5BF9\u5E94\u7684\u65F6\u95F4\u3002</span>
  <span class="token function">markRootUpdated</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> lane<span class="token punctuation">,</span> eventTime<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u5F00\u59CB\u8C03\u5EA6\u4EFB\u52A1</span>
  <span class="token function">ensureRootIsScheduled</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> eventTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u9996\u5148\u4F1A\u5411\u4E0A\u9012\u5F52\u66F4\u65B0\u6BCF\u4E2A<code>fiber</code>\u7684<code>lanes</code>\u548C<code>childLanes</code>\uFF0C\u5E76\u8FD4\u56DE<code>fiberRoot</code>\u3002\u968F\u540E\u6807\u8BB0\u5F53\u524D\u4EFB\u52A1\u7684\u65F6\u95F4\uFF0C\u8BA1\u7B97\u5F53\u524D<code>lane</code>\u5904\u4E8E\u54EA\u6761\u201D\u8D5B\u9053\u201C\uFF0C\u5E76\u5728\u5BF9\u5E94\u8D5B\u9053\u4E0A\u8BB0\u5F55\u4E0B\u672C\u6B21\u66F4\u65B0\u7684\u8D77\u59CB\u65F6\u95F4\uFF1A</p><div class="language-javascript"><pre><code>root<span class="token punctuation">.</span>eventTimes<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> eventTime
</code></pre></div><p>\u6700\u540E\u8C03\u7528<code>ensureRootIsScheduled</code>\u65B9\u6CD5\u5F00\u59CB\u771F\u6B63\u7684\u8C03\u5EA6\u8FC7\u7A0B\u3002</p><h2 id="ensurerootisscheduled" tabindex="-1">ensureRootIsScheduled <a class="header-anchor" href="#ensurerootisscheduled" aria-hidden="true">#</a></h2><p>\u8FD8\u662F\u5728<code>ReactFiberWorkLoop.new.js</code>\u6587\u4EF6\u4E2D\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">function</span> <span class="token function">ensureRootIsScheduled</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">root</span><span class="token operator">:</span> FiberRoot<span class="token punctuation">,</span> <span class="token literal-property property">currentTime</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1. root.callbackNode \u662F\u5728\u6BCF\u6B21\u8C03\u5EA6\u5B8C\u8D4B\u503C\u7684\uFF0C\u4E5F\u5C31\u662F\u672C\u51FD\u6570\u7684\u672B\u5C3E</span>
  <span class="token comment">// \u5B83\u4EE3\u8868\u5F53\u524D\u7684\u4EFB\u52A1\uFF08scheduler\u4E2D\u8FD4\u56DE\u7684\u4EFB\u52A1\uFF09</span>
  <span class="token keyword">const</span> existingCallbackNode <span class="token operator">=</span> root<span class="token punctuation">.</span>callbackNode<span class="token punctuation">;</span>

  <span class="token comment">// 2. \u9012\u5F52 pendingLanes\uFF0C\u5982\u679C lane \u8FC7\u671F\u4E86\u4F1A\u52A0\u5165\u5230 expiredLanes \u4E2D</span>
  <span class="token comment">// \u5982\u679C\u8001\u4EFB\u52A1\u4E00\u76F4\u88AB\u6253\u65AD\uFF0C\u4F46\u662F\u8001\u4EFB\u52A1\u65F6\u95F4\u5230\u4E86\uFF0C\u5C31\u4F1A\u5C06\u5176\u7F6E\u4E3A\u8FC7\u671F\uFF0C\u8FD9\u6837\u4E0B\u6B21\u5C31\u53EF\u4EE5\u4EE5\u6700\u9AD8\u4F18\u5148\u7EA7\u8FDB\u884C\u66F4\u65B0\u4E86\u3002</span>
  <span class="token function">markStarvedLanesAsExpired</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> currentTime<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 3. \u6839\u636E\u4F18\u5148\u7EA7\u6765\u5224\u65AD\u4E0B\u4E00\u4E2A\u5E94\u8BE5\u6267\u884C\u7684 lane\uFF08\u9009\u53D6\u4F18\u5148\u7EA7\u6700\u9AD8\u7684 lane\uFF09</span>
  <span class="token keyword">const</span> nextLanes <span class="token operator">=</span> <span class="token function">getNextLanes</span><span class="token punctuation">(</span>
    root<span class="token punctuation">,</span>
    root <span class="token operator">===</span> workInProgressRoot <span class="token operator">?</span> workInProgressRootRenderLanes <span class="token operator">:</span> NoLanes<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 4. \u8BF4\u660E\u6CA1\u6709\u8981\u6267\u884C\u7684\u4EFB\u52A1</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>nextLanes <span class="token operator">===</span> NoLanes<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>existingCallbackNode <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u53D6\u6D88\u5F53\u524D\u4EFB\u52A1</span>
      <span class="token function">cancelCallback</span><span class="token punctuation">(</span>existingCallbackNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    root<span class="token punctuation">.</span>callbackNode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    root<span class="token punctuation">.</span>callbackPriority <span class="token operator">=</span> NoLane<span class="token punctuation">;</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 5. \u83B7\u53D6 nextLanes \u4E2D\u7684\u6700\u9AD8\u4F18\u5148\u7EA7</span>
  <span class="token keyword">const</span> newCallbackPriority <span class="token operator">=</span> <span class="token function">getHighestPriorityLane</span><span class="token punctuation">(</span>nextLanes<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// \u5F53\u524D\u6267\u884C\u4EFB\u52A1\u7684\u4F18\u5148\u7EA7</span>
  <span class="token keyword">const</span> existingCallbackPriority <span class="token operator">=</span> root<span class="token punctuation">.</span>callbackPriority<span class="token punctuation">;</span>
  <span class="token comment">// \u5982\u679C\u4E0E\u5F53\u524D\u4F18\u5148\u7EA7\u6CA1\u6709\u53D8\u5316\uFF0C\u90A3\u4E48\u76F4\u63A5\u8FD4\u56DE\u3002</span>
  <span class="token comment">// \u8FD9\u5C31\u662F\u4E3A\u4EC0\u4E48\u80FD\u5B9E\u73B0\u6279\u91CF\u66F4\u65B0\u7684\u539F\u7406\uFF1A</span>
  <span class="token comment">// \u9996\u5148 setState \u4F1A\u8FDB\u884C schedule\uFF0C\u518D\u4E0B\u4E00\u6B21 setState \u7684\u65F6\u5019\uFF0C\u7531\u4E8E\u4F18\u5148\u7EA7\u76F8\u540C\uFF0C\u4E0D\u4F1A\u8FDB\u884C schedule</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>existingCallbackPriority <span class="token operator">===</span> newCallbackPriority<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 6. \u4F18\u5148\u7EA7\u53D8\u5316\u4E86\uFF0C\u7531\u4E8E\u6BCF\u6B21\u90FD\u662F\u53D6\u7684\u6700\u9AD8\u4F18\u5148\u7EA7\uFF0C\u6240\u4EE5\u4E00\u5B9A\u662F\u4F18\u5148\u7EA7\u66F4\u9AD8\u7684\u4EFB\u52A1\u8FDB\u6765\u4E86\u3002</span>
  <span class="token comment">// \u90A3\u4E48\u53D6\u6D88\u4E0A\u4E00\u4E2A\u4EFB\u52A1</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>existingCallbackNode <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// cancelCallback \u4E3B\u8981\u64CD\u4F5C\u5C31\u662F\u5C06 \u4EFB\u52A1\u7684 callback \u7F6E\u7A7A\u4E86\u3002</span>
    <span class="token function">cancelCallback</span><span class="token punctuation">(</span>existingCallbackNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 7. \u8C03\u5EA6</span>
  <span class="token keyword">let</span> newCallbackNode<span class="token punctuation">;</span>
  <span class="token comment">// \u5982\u679C\u4F18\u5148\u7EA7\u4E3A\u540C\u6B65\u4F18\u5148\u7EA7</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>newCallbackPriority <span class="token operator">===</span> SyncLane<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 17\u7248\u672C\u4E3A concurrentMode \u6A21\u5F0F\u3002\u641C\u96C6\u9700\u8981\u540C\u6B65\u6267\u884C\u7684\u51FD\u6570</span>
    <span class="token function">scheduleSyncCallback</span><span class="token punctuation">(</span><span class="token function">performSyncWorkOnRoot</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> root<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>supportsMicrotasks<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token comment">// \u5982\u679C\u652F\u6301\u5FAE\u4EFB\u52A1\uFF0C\u90A3\u4E48\u7528\u5FAE\u4EFB\u52A1\u6267\u884C flushSyncCallbacks</span>
       <span class="token function">scheduleMicrotask</span><span class="token punctuation">(</span>flushSyncCallbacks<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">scheduleCallback</span><span class="token punctuation">(</span>ImmediateSchedulerPriority<span class="token punctuation">,</span> flushSyncCallbacks<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    newCallbackNode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5982\u679C\u4F18\u5148\u7EA7\u4E0D\u4E3A\u540C\u6B65</span>
    <span class="token keyword">let</span> schedulerPriorityLevel<span class="token punctuation">;</span>
    <span class="token comment">// \u5C06 lanes \u8F6C\u5316\u4E3A scheduler \u5E93\u7684\u4F18\u5148\u7EA7</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token function">lanesToEventPriority</span><span class="token punctuation">(</span>nextLanes<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token literal-property property">DiscreteEventPriority</span><span class="token operator">:</span>
        schedulerPriorityLevel <span class="token operator">=</span> ImmediateSchedulerPriority<span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token literal-property property">ContinuousEventPriority</span><span class="token operator">:</span>
        schedulerPriorityLevel <span class="token operator">=</span> UserBlockingSchedulerPriority<span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token literal-property property">DefaultEventPriority</span><span class="token operator">:</span>
        schedulerPriorityLevel <span class="token operator">=</span> NormalSchedulerPriority<span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token literal-property property">IdleEventPriority</span><span class="token operator">:</span>
        schedulerPriorityLevel <span class="token operator">=</span> IdleSchedulerPriority<span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">default</span><span class="token operator">:</span>
        schedulerPriorityLevel <span class="token operator">=</span> NormalSchedulerPriority<span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u8C03\u5EA6\u8FC7\u7A0B\u3002\u8BA1\u7B97\u8FC7\u671F\u65F6\u95F4\uFF0C\u63A8\u5165\u5230\u4EFB\u52A1\u961F\u5217\uFF0C\u6267\u884C\u4EFB\u52A1\u961F\u5217\uFF0C</span>
    <span class="token comment">// \u6267\u884C callback\uFF0C\u5E76\u4E14\u5C01\u88C5\u6210\u4E3A\u4E00\u4E2A\u4EFB\u52A1\uFF0C\u8FDB\u884C\u8FD4\u56DE =\u300B newCallbackNode</span>
    newCallbackNode <span class="token operator">=</span> <span class="token function">scheduleCallback</span><span class="token punctuation">(</span>
      schedulerPriorityLevel<span class="token punctuation">,</span>
      <span class="token function">performConcurrentWorkOnRoot</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> root<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 8. \u8FDB\u884C\u8D4B\u503C</span>
  root<span class="token punctuation">.</span>callbackPriority <span class="token operator">=</span> newCallbackPriority<span class="token punctuation">;</span>
  root<span class="token punctuation">.</span>callbackNode <span class="token operator">=</span> newCallbackNode<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD9\u91CC\u6D89\u53CA\u5230\u201D\u9965\u997F\u95EE\u9898\u201C\u4EE5\u53CA\u4EFB\u52A1\u88AB\u6253\u65AD\u7684\u8FC7\u7A0B\u3002\u4E3E\u4E2A\u4F8B\u5B50\u6765\u8BB2\uFF0C\u73B0\u5728\u6B63\u5728\u6267\u884C\u4E00\u4E2A\u4F18\u5148\u7EA7\u4E3A<code>A</code>\u7684<code>A</code>\u66F4\u65B0\u4EFB\u52A1\uFF0C\u7136\u540E\u53C8\u8FDB\u6765\u4E86\u4E00\u4E2A\u4F18\u5148\u7EA7\u4E3A<code>B</code>\u7684<code>B</code>\u4EFB\u52A1\uFF0C\u7531\u4E8E\u4EFB\u52A1<code>B</code>\u7684\u4F18\u5148\u7EA7\u9AD8\u4E8E<code>A</code>\uFF0C\u90A3\u4E48<code>nextLanes</code>\u53D6\u7684\u662F\u4EFB\u52A1<code>B</code>\u7684\u4F18\u5148\u7EA7\uFF0C\u56E0\u6B64\u4F1A\u6253\u65AD\u4EFB\u52A1<code>A</code>\uFF0C\u6267\u884C<code>cancelCallback</code>\uFF0C\u7136\u540E\u5F00\u59CB\u4EFB\u52A1<code>B</code>\u7684\u8C03\u5EA6<code>scheduleCallback</code>\u3002\u5982\u679C\u4E0B\u4E00\u6B21\u4EFB\u52A1<code>C</code>\u8FDB\u6765\u53C8\u6BD4\u4EFB\u52A1<code>A</code>\u4F18\u5148\u7EA7\u9AD8\uFF0C\u5BFC\u81F4\u4EFB\u52A1<code>A</code>\u53C8\u6CA1\u6709\u88AB\u6267\u884C\uFF0C\u5E76\u4E14\u4EFB\u52A1<code>A</code>\u5DF2\u7ECF\u8FBE\u5230\u4E86\u9884\u5B9A\u7684\u8FC7\u671F\u65F6\u95F4\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5C31\u4F1A\u5BFC\u81F4<code>\u9965\u997F\u95EE\u9898</code>\u3002\u89E3\u51B3\u529E\u6CD5\u5C31\u662F\u6267\u884C<code>markStarvedLanesAsExpired</code>\u65B9\u6CD5\uFF0C\u5C06\u4EFB\u52A1<code>A</code>\u6807\u8BB0\u4E3A\u8FC7\u671F\uFF0C\u8FD9\u6837\u4E0B\u4E00\u6B21\u5B83\u7684\u6267\u884C\u4F18\u5148\u7EA7\u5C31\u4E3A\u6700\u9AD8\u4E86\uFF0C\u4E5F\u5C31\u80FD\u591F\u5F97\u5230\u6267\u884C\u3002</p><p>\u60F3\u8981\u7406\u89E3\u8FD9\u4E2A\u4F8B\u5B50\uFF0C\u9700\u8981\u5148\u7406\u89E3\u4EFB\u52A1\u8C03\u5EA6\uFF0C\u4F18\u5148\u7EA7\u4EE5\u53CA\u8FC7\u671F\u65F6\u95F4\u7B49\u6982\u5FF5\uFF0C\u8FD9\u4E9B\u5728\u8C03\u5EA6\u7AE0\u8282\u4F1A\u8FDB\u884C\u8BE6\u7EC6\u8BB2\u89E3\u3002</p>`,59),c=[e];function l(r,u,k,i,d,m){return s(),a("div",null,c)}var h=n(o,[["render",l]]);export{f as __pageData,h as default};
