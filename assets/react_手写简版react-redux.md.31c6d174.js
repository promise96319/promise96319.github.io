import{_ as n,c as s,o as a,a as t}from"./app.943409a9.js";const m='{"title":"\u624B\u5199\u7B80\u7248react-redux","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7B80\u5355\u4F7F\u7528","slug":"\u7B80\u5355\u4F7F\u7528"},{"level":2,"title":"\u5B9E\u73B0\u601D\u8DEF","slug":"\u5B9E\u73B0\u601D\u8DEF"},{"level":2,"title":"Provider","slug":"provider"},{"level":2,"title":"connect","slug":"connect"},{"level":2,"title":"bindActionCreators","slug":"bindactioncreators"},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003"}],"relativePath":"react/\u624B\u5199\u7B80\u7248react-redux.md","lastUpdated":1654651027000}',p={},o=t(`<h1 id="\u624B\u5199\u7B80\u7248react-redux" tabindex="-1">\u624B\u5199\u7B80\u7248react-redux <a class="header-anchor" href="#\u624B\u5199\u7B80\u7248react-redux" aria-hidden="true">#</a></h1><h2 id="\u7B80\u5355\u4F7F\u7528" tabindex="-1">\u7B80\u5355\u4F7F\u7528 <a class="header-anchor" href="#\u7B80\u5355\u4F7F\u7528" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token keyword">function</span> <span class="token function">Child</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>child<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 1. \u901A\u8FC7 connect \u5C06\u5C5E\u6027\u6DFB\u52A0\u5230\u5B50\u7EC4\u4EF6\u4E0A</span>
<span class="token keyword">const</span> WrappedChild <span class="token operator">=</span> <span class="token function">connect</span><span class="token punctuation">(</span>
  <span class="token comment">// mapToStateProps</span>
  <span class="token comment">// mapToDispatchProps</span>
<span class="token punctuation">)</span><span class="token punctuation">(</span>Child<span class="token punctuation">)</span>

<span class="token comment">// 2. \u901A\u8FC7 Provider \u5C06\u5C5E\u6027\u4F20\u9012\u7ED9\u540E\u4EE3</span>
<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;App&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Provider store<span class="token operator">=</span><span class="token punctuation">{</span>store<span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>WrappedChild<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>WrappedChild<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Provider<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5B9E\u73B0\u601D\u8DEF" tabindex="-1">\u5B9E\u73B0\u601D\u8DEF <a class="header-anchor" href="#\u5B9E\u73B0\u601D\u8DEF" aria-hidden="true">#</a></h2><ol><li>\u501F\u7528<code>redux</code>\u6765\u5171\u4EAB\u6570\u636E\uFF0C\u6B64\u5904\u547D\u540D\u4E3A<code>store</code>\u3002</li><li>\u4F7F\u7528<code>React.createContext</code>\u6765\u521B\u5EFA<code>Context</code>\uFF0C\u4F7F\u7528<code>Context.Provider</code>\u7ED9\u540E\u4EE3\u63D0\u4F9B<code>store</code>\uFF0C<code>Context.Consumer</code>\u63A5\u6536<code>store</code>\u3002</li><li>\u63A5\u6536\u5B8C<code>store</code>\uFF0C\u6839\u636E<code>mapStateToProps/mapDispatchToProps</code>\u8FDB\u884C\u5904\u7406\uFF0C\u5C06\u5904\u7406\u540E\u7684\u5C5E\u6027\u6DFB\u52A0\u5230\u5B50\u7EC4\u4EF6\u4E0A\u3002</li></ol><h2 id="provider" tabindex="-1">Provider <a class="header-anchor" href="#provider" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span>

<span class="token keyword">const</span> Context <span class="token operator">=</span> <span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Provider</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> store<span class="token punctuation">,</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Context<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span>store<span class="token punctuation">}</span><span class="token operator">&gt;</span>
    <span class="token punctuation">{</span>children<span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Context<span class="token punctuation">.</span>Provider<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="connect" tabindex="-1">connect <a class="header-anchor" href="#connect" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">connect</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token parameter">mapStateToProps<span class="token punctuation">,</span>
  mapDispatchToProps</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token parameter">Comp</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

  <span class="token comment">// \u63A5\u6536 store</span>
  <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>Context<span class="token punctuation">)</span>
  <span class="token comment">// \u7ED9\u5B50\u7EC4\u4EF6\u6DFB\u52A0\u5904\u7406\u540E\u7684\u5C5E\u6027</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>actualChildProps<span class="token punctuation">,</span> setActualChildProps<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">update</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token function-variable function">initMapStateToProps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">store</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> state <span class="token operator">=</span> store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment">// mapStateToProps \u4E3A\u51FD\u6570\u5F62\u5F0F</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">mapStateToProps</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>state <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">const</span> <span class="token function-variable function">initMapDispatchToProps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">store</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>store<span class="token punctuation">)</span> <span class="token keyword">return</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> dispatch <span class="token punctuation">}</span> <span class="token operator">=</span> store
        <span class="token comment">// mapDispatchToProps \u4E3A\u5BF9\u8C61\u5F62\u5F0F</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>mapDispatchToProps <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> mapDispatchToProps <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">bindActionCreators</span><span class="token punctuation">(</span>mapDispatchToProps<span class="token punctuation">,</span> dispatch<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// mapDispatchToProps \u4E3A\u51FD\u6570\u5F62\u5F0F</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> mapDispatchToProps <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">mapDispatchToProps</span><span class="token punctuation">(</span>dispatch<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u9ED8\u8BA4</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          dispatch
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// \u5904\u7406\u540E\u7684 state,dispatch \u4F20\u7ED9\u5B50\u7EC4\u4EF6</span>
      <span class="token function">setActualChildProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token operator">...</span><span class="token function">initMapStateToProps</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token operator">...</span><span class="token function">initMapDispatchToProps</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u76D1\u542C\u66F4\u65B0</span>
    <span class="token keyword">const</span> unSubscribe <span class="token operator">=</span> store<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> unSubscribe
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>store<span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Context<span class="token punctuation">.</span>Consumer<span class="token operator">&gt;</span>
    <span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token operator">&lt;</span>Comp <span class="token punctuation">{</span><span class="token operator">...</span>actualChildProps<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>Comp<span class="token operator">&gt;</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Context<span class="token punctuation">.</span>Consumer <span class="token operator">&gt;</span>

<span class="token punctuation">}</span>
</code></pre></div><h2 id="bindactioncreators" tabindex="-1">bindActionCreators <a class="header-anchor" href="#bindactioncreators" aria-hidden="true">#</a></h2><p>\u8F6C\u6362<code>mapDispatchToProps</code>\u4E3A\u5BF9\u8C61\u7684\u60C5\u51B5\uFF1A</p><div class="language-javascript"><pre><code><span class="token comment">// \u539F\u59CB</span>
<span class="token punctuation">{</span>
	<span class="token function-variable function">add</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;add&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">payload</span><span class="token operator">:</span> id <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
  
<span class="token comment">// \u8F6C\u6362\u540E</span>
<span class="token punctuation">{</span>
	<span class="token function-variable function">add</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;add&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">payload</span><span class="token operator">:</span> id <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5177\u4F53\u5B9E\u73B0\u4EE3\u7801\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">bindActionCreators</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">actionCreators<span class="token punctuation">,</span> dispatch</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> boundActionCreators <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>actionCreators<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>key<span class="token punctuation">,</span> actionCreator<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    boundActionCreators<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">actionCreator</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> boundActionCreators
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><ul><li><a href="https://github.com/reduxjs/react-redux/blob/master/src/connect/connect.ts" target="_blank" rel="noopener noreferrer">github</a></li></ul>`,16),e=[o];function c(r,l,u,k,i,d){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{m as __pageData,f as default};
