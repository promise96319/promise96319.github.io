import{_ as n,c as s,o as a,a as t}from"./app.943409a9.js";const f='{"title":"completeWork \u9636\u6BB5","description":"","frontmatter":{},"headers":[{"level":2,"title":"bubbleProperties","slug":"bubbleproperties"},{"level":2,"title":"HostComponent","slug":"hostcomponent"},{"level":3,"title":"\u771F\u5B9E\u8282\u70B9\u53EF\u590D\u7528\u65F6","slug":"\u771F\u5B9E\u8282\u70B9\u53EF\u590D\u7528\u65F6"},{"level":3,"title":"\u771F\u5B9E\u8282\u70B9\u4E0D\u53EF\u590D\u7528\u65F6","slug":"\u771F\u5B9E\u8282\u70B9\u4E0D\u53EF\u590D\u7528\u65F6"}],"relativePath":"react/completeWork.md","lastUpdated":1654651027000}',o={},p=t(`<h1 id="completework-\u9636\u6BB5" tabindex="-1">completeWork \u9636\u6BB5 <a class="header-anchor" href="#completework-\u9636\u6BB5" aria-hidden="true">#</a></h1><p><code>performUnitOfWork</code>\u7684\u7B2C\u4E8C\u6B65\u5C31\u662F<code>completeWork</code>\u9636\u6BB5\uFF0C\u6BCF\u6B21\u90FD\u4F1A\u6267\u884C<code>completeUnitOfWork</code>\u65B9\u6CD5\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">function</span> <span class="token function">performUnitOfWork</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">unitOfWork</span><span class="token operator">:</span> Fiber</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
	<span class="token comment">// ...</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>next <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5982\u679C\u6CA1\u6709 next child\uFF0C\u90A3\u4E48\u5F00\u59CB complete.</span>
    <span class="token comment">// \u521B\u5EFA\u53EF\u771F\u5B9E\u8282\u70B9</span>
    <span class="token function">completeUnitOfWork</span><span class="token punctuation">(</span>unitOfWork<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5982\u679C\u5B58\u5728 next,\u8BF4\u660E\u8FD8\u6709 child,\u7EE7\u7EED\u5411\u4E0B\u9012\u5F52 beginWork</span>
    workInProgress <span class="token operator">=</span> next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="bubbleproperties" tabindex="-1">bubbleProperties <a class="header-anchor" href="#bubbleproperties" aria-hidden="true">#</a></h2><p>\u5BF9\u4E8E\u6240\u6709\u7684<code>fiber</code>\u90FD\u4F1A\u8FDB\u884C<code>bubbleProperties</code>\u5904\u7406\u3002\u8BE5\u51FD\u6570\u7684\u4F5C\u7528\u662F\u904D\u5386<code>workInProgress</code>\u7684\u7B2C\u4E00\u5C42\u5B50\u8282\u70B9\uFF0C\u5C06\u6240\u6709<code>child.lanes</code>\u548C<code>child.childLanes</code>\u5408\u5E76\u5230\u5F53\u524D\u7684<code>childLanes</code>\u4E0A\u3002\u5C06\u6240\u6709<code>child.subtreeFlags</code>\u548C<code>child.flags</code>\u5408\u5E76\u5230\u5F53\u524D<code>subtreeFlags</code>\u4E0A\u3002</p><h2 id="hostcomponent" tabindex="-1">HostComponent <a class="header-anchor" href="#hostcomponent" aria-hidden="true">#</a></h2><p>\u76F8\u8F83\u4E8E\u5176\u4ED6\u8282\u70B9\uFF0C<code>HostComponent</code>\u8282\u70B9\u6BD4\u8F83\u7279\u6B8A\u3002</p><div class="language-javascript"><pre><code><span class="token comment">// \u5C06\u5F53\u524D fiber \u79FB\u51FA</span>
<span class="token function">popHostContext</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u83B7\u53D6\u7684\u662F\u5F53\u524D\u7684 RootHostContainer</span>
<span class="token keyword">const</span> rootContainerInstance <span class="token operator">=</span> <span class="token function">getRootHostContainer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u9996\u5148\u4F1A\u79FB\u9664\u5F53\u524D\u7684<code>HostContext</code>\uFF0C\u5176\u6B21\u662F\u83B7\u53D6<code>container</code>\u8282\u70B9\u3002\u4E3A\u4EC0\u4E48\u80FD\u83B7\u53D6\u5230\u771F\u5B9E\u8282\u70B9\u5462\uFF1F\u8FD9\u662F\u56E0\u4E3A\u5728<code>beginWork</code>\u4E2D\u5BF9\u4E8E<code>HostRoot</code>\u548C<code>HostPortal</code>\u8282\u70B9\u90FD\u4F1A\u5C06\u771F\u5B9E\u8282\u70B9<code>container</code>\u5168\u5C40\u5B58\u50A8\u5230<code>rootInstanceStackCursor.current</code>\uFF0C\u800C\u5728<code>completeWork</code>\u9636\u6BB5\u5C06\u5176\u79FB\u51FA\u3002\u5728\u8BBF\u95EE\u5B50\u8282\u70B9\u65F6\u5C31\u80FD\u6B63\u786E\u83B7\u53D6\u5230\u5B83\u6240\u5728\u7684\u5BB9\u5668\u4E86\u3002</p><h3 id="\u771F\u5B9E\u8282\u70B9\u53EF\u590D\u7528\u65F6" tabindex="-1">\u771F\u5B9E\u8282\u70B9\u53EF\u590D\u7528\u65F6 <a class="header-anchor" href="#\u771F\u5B9E\u8282\u70B9\u53EF\u590D\u7528\u65F6" aria-hidden="true">#</a></h3><p>\u63A5\u4E0B\u6765\u5C31\u662F\u6E32\u67D3\u771F\u5B9E\u8282\u70B9\u7684\u8FC7\u7A0B\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> workInProgress<span class="token punctuation">.</span>stateNode <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u5982\u679C\u771F\u5B9E\u8282\u70B9\u5B58\u5728\uFF0C\u90A3\u4E48\u8FDB\u884C\u66F4\u65B0</span>
	<span class="token function">updateHostComponent</span><span class="token punctuation">(</span>
		current<span class="token punctuation">,</span>
		workInProgress<span class="token punctuation">,</span>
		type<span class="token punctuation">,</span>
		newProps<span class="token punctuation">,</span>
		rootContainerInstance<span class="token punctuation">,</span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>ref <span class="token operator">!==</span> workInProgress<span class="token punctuation">.</span>ref<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">markRef</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5982\u679C\u8001<code>fiber</code>\u5B58\u5728\u4E14<code>stateNode</code>\u5B58\u5728\uFF0C\u8BF4\u660E\u5DF2\u7ECF\u590D\u7528\u4E86<code>fiber</code>\u4E14\u5177\u5907\u771F\u5B9E\u8282\u70B9\u3002\u8FD9\u4E2A\u65F6\u5019\u53EA\u9700\u8981\u66F4\u65B0\u5C5E\u6027\u5373\u53EF\uFF1A</p><div class="language-javascript"><pre><code><span class="token function-variable function">updateHostComponent</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token comment">//...) {</span>
  <span class="token comment">// ...</span>
  
  <span class="token comment">// \u7C7B\u4F3C\u7ED3\u6784\uFF1A[&#39;name&#39;, &#39;\u5F20\u4E09&#39;, &#39;id&#39;, 333, &#39;style&#39;, { color: &#39;red&#39; }]</span>
  <span class="token keyword">const</span> updatePayload <span class="token operator">=</span> <span class="token function">prepareUpdate</span><span class="token punctuation">(</span>
    instance<span class="token punctuation">,</span>
    type<span class="token punctuation">,</span>
    oldProps<span class="token punctuation">,</span>
    newProps<span class="token punctuation">,</span>
    rootContainerInstance<span class="token punctuation">,</span>
    currentHostContext<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  workInProgress<span class="token punctuation">.</span>updateQueue <span class="token operator">=</span> <span class="token punctuation">(</span>updatePayload<span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u6807\u8BB0\u4E3A Update</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>updatePayload<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">markUpdate</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u8FD9\u4E2A\u66F4\u65B0\u7684\u8FC7\u7A0B\u6B63\u5982<code>UpdateQueue</code>\u7AE0\u8282\u4E2D\u63D0\u5230\u7684\uFF0C\u4E3B\u8981\u662F\u901A\u8FC7<code>prepareUpdate</code>\u65B9\u6CD5\u5BF9\u6BD4\u8282\u70B9\u7684\u65B0\u65E7<code>props</code>\uFF0C\u6700\u540E\u5C06\u6539\u53D8\u4E86\u7684\u5C5E\u6027\u8BB0\u5F55\u6210\u6570\u7EC4\u5F62\u5F0F\u3002\u5176\u4E2D\u5076\u6570<code>index</code>\u4E3A\u952E\uFF0C\u5947\u6570<code>index</code>\u4E3A\u503C\u3002\u7ED3\u6784\u7C7B\u4F3C\u5982\u4E0B\uFF1A</p><div class="language-javascript"><pre><code><span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5F20\u4E09&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token number">333</span><span class="token punctuation">,</span> <span class="token string">&#39;style&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre></div><h3 id="\u771F\u5B9E\u8282\u70B9\u4E0D\u53EF\u590D\u7528\u65F6" tabindex="-1">\u771F\u5B9E\u8282\u70B9\u4E0D\u53EF\u590D\u7528\u65F6 <a class="header-anchor" href="#\u771F\u5B9E\u8282\u70B9\u4E0D\u53EF\u590D\u7528\u65F6" aria-hidden="true">#</a></h3><p>\u7B2C\u4E8C\u79CD\u60C5\u51B5\u662F<code>current</code>\u4E0D\u5B58\u5728\u6216\u8005\u662F<code>stateNode</code>\u4E0D\u5B58\u5728\uFF0C\u90A3\u4E48\u771F\u5B9E\u8282\u70B9\u5C31\u65E0\u6CD5\u590D\u7528\u4E86\uFF0C\u9700\u8981\u91CD\u65B0\u521B\u5EFA\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token function">createInstance</span><span class="token punctuation">(</span>
  type<span class="token punctuation">,</span>
  newProps<span class="token punctuation">,</span>
  rootContainerInstance<span class="token punctuation">,</span>
  currentHostContext<span class="token punctuation">,</span>
  workInProgress<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createInstance</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">type</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> Props<span class="token punctuation">,</span>
  <span class="token literal-property property">rootContainerInstance</span><span class="token operator">:</span> Container<span class="token punctuation">,</span>
  <span class="token literal-property property">hostContext</span><span class="token operator">:</span> HostContext<span class="token punctuation">,</span>
  <span class="token literal-property property">internalInstanceHandle</span><span class="token operator">:</span> Object<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> Instance <span class="token punctuation">{</span>

  <span class="token comment">// \u521B\u5EFA\u4E86 element</span>
  <span class="token keyword">const</span> <span class="token literal-property property">domElement</span><span class="token operator">:</span> Instance <span class="token operator">=</span> <span class="token function">createElement</span><span class="token punctuation">(</span>
    type<span class="token punctuation">,</span>
    props<span class="token punctuation">,</span>
    rootContainerInstance<span class="token punctuation">,</span>
    parentNamespace<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u5EFA\u7ACB\u5173\u7CFB node . &#39;__reactFiber$&#39; + randomKey = fiber</span>
  <span class="token function">precacheFiberNode</span><span class="token punctuation">(</span>internalInstanceHandle<span class="token punctuation">,</span> domElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u5EFA\u7ACB\u5173\u7CFB node . &#39;__reactProps$&#39; + randomKey = props</span>
  <span class="token function">updateFiberProps</span><span class="token punctuation">(</span>domElement<span class="token punctuation">,</span> props<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> domElement<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>createInstance</code>\u65B9\u6CD5\u4F1A\u521B\u5EFA\u4E00\u4E2A\u771F\u5B9E\u8282\u70B9\uFF0C\u5E76\u4E14\u5EFA\u7ACB\u771F\u5B9E\u8282\u70B9\u4E0E<code>fiber</code>\u548C<code>props</code>\u7684\u5173\u7CFB\u3002\u968F\u540E\u6DFB\u52A0\u6240\u6709\u5B50\u8282\u70B9\uFF1A</p><div class="language-javascript"><pre><code><span class="token function">appendAllChildren</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> workInProgress<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u5982\u679C\u662F\u666E\u901A\u8282\u70B9\u7684\u8BDD\uFF0C\u4F1A\u5C06 stateNode \u5B58\u8D77\u6765</span>
<span class="token comment">// \u4E0E fiber \u5EFA\u7ACB\u4E86\u8054\u7CFB\uFF0C\u771F\u5B9E\u8282\u70B9\u5B58\u653E\u5728 stateNode \u4E0A</span>
workInProgress<span class="token punctuation">.</span>stateNode <span class="token operator">=</span> instance
</code></pre></div><p><code>appendAllChildren</code>\u65B9\u6CD5\u4F1A\u5C06\u80FD\u6E32\u67D3\u7684\u5B50\u8282\u70B9\u5168\u90E8\u6DFB\u52A0\u5230\u5F53\u524D\u521B\u5EFA\u7684\u8282\u70B9<code>instance</code>\u4E0A\uFF0C\u8FD9\u6837\u4F9D\u6B21\u5411\u4E0A\u8FDB\u884C<code>completeWork</code>\u65F6\uFF0C\u5C31\u4F1A\u5F62\u6210\u4E00\u68F5\u5177\u6709\u771F\u5B9E\u8282\u70B9\u6811\u3002</p>`,22),e=[p];function c(r,l,u,i,k,d){return a(),s("div",null,e)}var h=n(o,[["render",c]]);export{f as __pageData,h as default};
