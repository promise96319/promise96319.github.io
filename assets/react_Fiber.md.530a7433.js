import{_ as n,c as s,o as a,a as e}from"./app.e6e38190.js";var t="/assets/fiber-structure.cb228ac9.png",o="/assets/fiber-double-cache.b570d550.png";const f='{"title":"Fiber","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8D77\u6E90","slug":"\u8D77\u6E90"},{"level":2,"title":"\u7ED3\u6784","slug":"\u7ED3\u6784"},{"level":2,"title":"Fiber\u6811","slug":"fiber\u6811"},{"level":2,"title":"\u53CC\u7F13\u5B58","slug":"\u53CC\u7F13\u5B58"},{"level":2,"title":"\u8D44\u6599","slug":"\u8D44\u6599"}],"relativePath":"react/Fiber.md","lastUpdated":1660271823000}',p={},c=e(`<h1 id="fiber" tabindex="-1">Fiber <a class="header-anchor" href="#fiber" aria-hidden="true">#</a></h1><h2 id="\u8D77\u6E90" tabindex="-1">\u8D77\u6E90 <a class="header-anchor" href="#\u8D77\u6E90" aria-hidden="true">#</a></h2><p>\u5728<code>React15</code>\u53CA\u4EE5\u524D\u7684\u7248\u672C\u4E2D\uFF0C<code>React</code>\u91C7\u7528\u9012\u5F52\u7684\u65B9\u5F0F\u521B\u5EFA\u865A\u62DF<code>DOM</code>\uFF0C\u8FD9\u4E2A\u9012\u5F52\u8FC7\u7A0B\u662F\u4E0D\u80FD\u4E2D\u65AD\u7684\u3002\u5982\u679C\u7EC4\u4EF6\u6811\u7684\u5C42\u7EA7\u5F88\u6DF1\uFF0C\u9700\u8981\u8017\u8D39\u5927\u91CF\u65F6\u95F4\u521B\u5EFA\u9012\u5F52\u521B\u5EFA<code>DOM</code>\uFF0C\u90A3\u4E48\u5C31\u4F1A\u963B\u585E\u7EBF\u7A0B\uFF0C\u5BFC\u81F4\u754C\u9762\u5361\u987F\u3002</p><p>\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C<code>React16</code>\u5F15\u5165\u4E86<code>Fiber</code>\uFF0C\u91CD\u5199\u4E86\u5E95\u5C42\u67B6\u6784\uFF0C\u5C06<code>React</code>\u7684\u66F4\u65B0\u6539\u4E3A\u4E86<strong>\u5F02\u6B65\u53EF\u4E2D\u65AD\u7684\u66F4\u65B0</strong>\u3002</p><h2 id="\u7ED3\u6784" tabindex="-1">\u7ED3\u6784 <a class="header-anchor" href="#\u7ED3\u6784" aria-hidden="true">#</a></h2><p>\u5728 <code>react-reconciler/src/ReactFiber.new.js</code>\u4E2D\uFF0C\u5B9A\u4E49\u4E86 <code>Fiber</code>\u7684\u7ED3\u6784\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">function</span> <span class="token function">FiberNode</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">tag</span><span class="token operator">:</span> WorkTag<span class="token punctuation">,</span>
  <span class="token literal-property property">pendingProps</span><span class="token operator">:</span> mixed<span class="token punctuation">,</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> string<span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> TypeOfMode<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ====== \u8282\u70B9\u76F8\u5173 =====</span>
  <span class="token comment">// react \u4E2D\u7684\u4E00\u5957\u81EA\u5DF1\u5B9A\u4E49\u7684\u6807\u7B7E</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>tag <span class="token operator">=</span> tag<span class="token punctuation">;</span>
  <span class="token comment">// \u8282\u70B9\u7684 key \u503C</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>key <span class="token operator">=</span> key<span class="token punctuation">;</span>
  <span class="token comment">// jsx \u89E3\u6790\u51FA\u6765\u7684\u6807\u7B7E\u7684\u7C7B\u578B\uFF0C\u53EF\u4EE5\u4E3A \u5B57\u7B26\u4E32\uFF0C\u5BF9\u8C61\u7B49\u5F62\u5F0F\u3002</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>elementType <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token comment">// \u5927\u90E8\u5206\u60C5\u51B5\u4E0B\u4E0E elementType \u76F8\u540C\uFF0C\u4F46\u662F\u6709\u65F6\u5019\u4F1A\u88AB\u5904\u7406\u4E3A\u5176\u4ED6\u503C\u3002</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token comment">// \u5BF9\u4E8E \u666E\u901A\u6807\u7B7E\uFF0C\u5982 div\uFF0C\u5B58\u50A8\u7740\u5BF9\u5E94\u7684\u771F\u5B9E\u8282\u70B9</span>
  <span class="token comment">// \u5BF9\u4E8E class \u7EC4\u4EF6\uFF0C\u5B58\u50A8\u7740\u5BF9\u5E94\u7684 \u5B9E\u4F8B</span>
  <span class="token comment">// \u5BF9\u4E8E RootFiber\uFF0C\u6307\u5411\u7684\u662F FiberRoot</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>stateNode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token comment">// ====== fiber \u7ED3\u6784\u76F8\u5173 =====</span>
  <span class="token comment">// \u6307\u5411\u7236fiber</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>return <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token comment">// \u6307\u5411\u5B50fiber</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>child <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token comment">// \u6307\u5411\u540E\u4E00\u4E2A\u5144\u5F1Ffiber</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>sibling <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token comment">// fiber \u7684index\uFF0C\u7528\u4E8E diff \u7B97\u6CD5\u5BF9\u6BD4\u662F\u5426\u9700\u8981\u79FB\u52A8</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token comment">// ref</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>ref <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token comment">// ====== \u72B6\u6001\u76F8\u5173 =====</span>
  <span class="token comment">// \u65B0\u7684 props</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>pendingProps <span class="token operator">=</span> pendingProps<span class="token punctuation">;</span>
  <span class="token comment">// \u8001\u7684 props</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>memoizedProps <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token comment">// \u66F4\u65B0\u961F\u5217\uFF0C\u4FDD\u5B58\u7740\u6240\u6709update\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BE5\u961F\u5217\u6765\u6539\u53D8 state \u7B49</span>
  <span class="token comment">// \u6CE8\u610F\uFF1A\u4E0D\u540C\u7C7B\u578B\u7684\u8282\u70B9\uFF0C\u4ED6\u4EEC\u7684\u66F4\u65B0\u961F\u5217\u5B58\u50A8\u7684\u5185\u5BB9\u53EF\u80FD\u4E0D\u4E00\u81F4</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>updateQueue <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token comment">// \u8001 state</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>memoizedState <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token comment">// \u4F7F\u7528\u4E86 React.createContext \u7684 context \u65F6\uFF0C\u4F1A\u5C06 context \u8BB0\u5F55\u4E0B\u6765\u3002</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>dependencies <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token comment">// \u5F53\u524D react \u6A21\u5F0F\uFF0Creact18 \u5C06\u9ED8\u8BA4\u91C7\u7528 ConcurrentMode</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>mode <span class="token operator">=</span> mode<span class="token punctuation">;</span>

  <span class="token comment">// ====== effect \u526F\u4F5C\u7528 =====</span>
  <span class="token comment">// \u5F53\u524D fiber \u5BF9\u5E94\u7684\u64CD\u4F5C</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>flags <span class="token operator">=</span> NoFlags<span class="token punctuation">;</span>
  <span class="token comment">// \u5B50fiber \u5BF9\u5E94\u7684\u64CD\u4F5C</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>subtreeFlags <span class="token operator">=</span> NoFlags<span class="token punctuation">;</span>
  <span class="token comment">// \u5B58\u50A8\u54EA\u4E9B \u8001fiber \u4E0B\u7684 \u5B50fiber \u9700\u8981\u5220\u9664</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>deletions <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token comment">// ====== \u8C03\u5EA6\u76F8\u5173 =====</span>
  <span class="token comment">// \u5F53\u524D fiber \u64CD\u4F5C\u4F18\u5148\u7EA7</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>lanes <span class="token operator">=</span> NoLanes<span class="token punctuation">;</span>
  <span class="token comment">// \u5B50fiber \u64CD\u4F5C\u4F18\u5148\u7EA7</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>childLanes <span class="token operator">=</span> NoLanes<span class="token punctuation">;</span>

  <span class="token comment">// \u6307\u5411\u5BF9\u5E94\u7684\u53E6\u4E00\u4E2Afiber\uFF0C\u6784\u6210\u53CC\u7F13\u5B58\u7ED3\u6784</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>alternate <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="fiber\u6811" tabindex="-1">Fiber\u6811 <a class="header-anchor" href="#fiber\u6811" aria-hidden="true">#</a></h2><p>\u6BCF\u4E00\u4E2A\u8282\u70B9\u5BF9\u5E94\u4E00\u4E2A <code>ReactElement</code>\uFF0C\u6BCF\u4E00\u4E2A<code>ReactElement</code>\u5BF9\u5E94\u4E00\u4E2A <code>Fiber</code>\u3002\u6839\u636E\u8282\u70B9\u6240\u5728\u7684\u5177\u4F53\u4F4D\u7F6E\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>Fiber</code>\u7684<code>return/child/sibling</code>\u4E09\u4E2A\u5C5E\u6027\u5C06\u6240\u6709\u7684<code>Fiber</code>\u6784\u5EFA\u6210\u4E00\u9897<code>Fiber</code>\u6811\u3002</p><p><img src="`+t+`" alt=""></p><h2 id="\u53CC\u7F13\u5B58" tabindex="-1">\u53CC\u7F13\u5B58 <a class="header-anchor" href="#\u53CC\u7F13\u5B58" aria-hidden="true">#</a></h2><p>\u5728<code>React</code>\u4E2D\u6700\u591A\u4F1A\u540C\u65F6\u5B58\u5728\u4E24\u9897<code>Fiber</code>\u6811\uFF0C\u5F53\u524D\u5C4F\u5E55\u4E2D\u5DF2\u7ECF\u663E\u793A\u7684<code>Fiber</code>\u6811\u5728<code>React</code>\u6E90\u7801\u4E2D\u901A\u5E38\u4EE5\u53D8\u91CF<code>current</code>\u8868\u793A\u3002\u5F53\u754C\u9762\u66F4\u65B0\u65F6\uFF0C\u4F1A\u5728\u5185\u5B58\u4E2D\u6784\u5EFA\u53E6\u4E00\u9897<code>Fiber</code>\u6811\uFF0C\u5728\u6E90\u7801\u4E2D\u4EE5<code>workInProgress</code>\u8868\u793A\u3002\u5B83\u4EEC\u4E4B\u95F4\u53EF\u4EE5\u901A\u8FC7<code>alternate</code>\u53D8\u91CF\u6765\u8BBF\u95EE\u3002\u5177\u4F53\u4EE3\u7801\u5728<code>react-reconciler/src/ReactFiber.new.js</code>\u7684<code>createWorkInProgress</code>\u4E2D\uFF1A</p><div class="language-javascript"><pre><code>workInProgress<span class="token punctuation">.</span>alternate <span class="token operator">=</span> current
current<span class="token punctuation">.</span>alternate <span class="token operator">=</span> workInProgress
</code></pre></div><p>\u6784\u5EFA\u5B8C\u6210\u540E\u7684\u53CC\u7F13\u5B58\u7ED3\u6784\u5177\u4F53\u5982\u4E0B\uFF1A</p><p><img src="`+o+'" alt=""></p><p>\u8BE5\u7ED3\u6784\u5728<code>reconcile</code>\u9636\u6BB5\u6709\u7740\u975E\u5E38\u91CD\u8981\u7684\u4F5C\u7528\uFF0C\u540E\u7EED\u4F1A\u5728<code>beginWork</code>\u548C<code>completeWork</code>\u4E2D\u4F1A\u63D0\u5230\u5177\u4F53\u7684\u6267\u884C\u8FC7\u7A0B\u3002</p><h2 id="\u8D44\u6599" tabindex="-1">\u8D44\u6599 <a class="header-anchor" href="#\u8D44\u6599" aria-hidden="true">#</a></h2><ul><li><p><a href="https://www.bilibili.com/video/BV1it411p7v6?from=search&amp;seid=3508901752524570226" target="_blank" rel="noopener noreferrer">fiber \u4ECB\u7ECD\u52A8\u753B\u89C6\u9891</a></p></li><li><p><a href="https://indepth.dev/posts/1008/inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react" target="_blank" rel="noopener noreferrer">inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react</a></p></li><li><p><a href="https://react.iamkasong.com/process/doubleBuffer.html#%E4%BB%80%E4%B9%88%E6%98%AF-%E5%8F%8C%E7%BC%93%E5%AD%98" target="_blank" rel="noopener noreferrer">Fiber \u67B6\u6784\u5DE5\u4F5C\u539F\u7406 - \u5361\u9882</a></p></li></ul>',18),r=[c];function l(i,k,d,u,m,h){return a(),s("div",null,r)}var y=n(p,[["render",l]]);export{f as __pageData,y as default};
