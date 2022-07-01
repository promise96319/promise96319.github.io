import{_ as n,c as s,o as a,a as p}from"./app.943409a9.js";const m='{"title":"\u4E8C\u53C9\u6811","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7B2Ck\u5C0F\u5143\u7D20","slug":"\u7B2Ck\u5C0F\u5143\u7D20"},{"level":2,"title":"\u4E8C\u53C9\u6811\u7684\u6700\u5927\u6DF1\u5EA6","slug":"\u4E8C\u53C9\u6811\u7684\u6700\u5927\u6DF1\u5EA6"},{"level":2,"title":"\u4E8C\u53C9\u6811\u5C42\u5E8F\u904D\u5386","slug":"\u4E8C\u53C9\u6811\u5C42\u5E8F\u904D\u5386"},{"level":2,"title":"\u524D\u5E8F\u4E2D\u5E8F\u6784\u5EFA\u4E8C\u53C9\u6811","slug":"\u524D\u5E8F\u4E2D\u5E8F\u6784\u5EFA\u4E8C\u53C9\u6811"},{"level":2,"title":"\u8FED\u4EE3\u7684\u65B9\u5F0F\u8FDB\u884C\u524D\u5E8F\u904D\u5386","slug":"\u8FED\u4EE3\u7684\u65B9\u5F0F\u8FDB\u884C\u524D\u5E8F\u904D\u5386"},{"level":2,"title":"\u5224\u65AD\u4E8C\u53C9\u6811\u662F\u5426\u5408\u6CD5","slug":"\u5224\u65AD\u4E8C\u53C9\u6811\u662F\u5426\u5408\u6CD5"}],"relativePath":"algorithms/\u4E8C\u53C9\u6811.md","lastUpdated":1656658380000}',t={},o=p(`<h1 id="\u4E8C\u53C9\u6811" tabindex="-1">\u4E8C\u53C9\u6811 <a class="header-anchor" href="#\u4E8C\u53C9\u6811" aria-hidden="true">#</a></h1><h2 id="\u7B2Ck\u5C0F\u5143\u7D20" tabindex="-1">\u7B2Ck\u5C0F\u5143\u7D20 <a class="header-anchor" href="#\u7B2Ck\u5C0F\u5143\u7D20" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u9898\u76EE</p><p>\u7ED9\u5B9A\u4E00\u68F5\u4E8C\u53C9\u641C\u7D22\u6811\uFF0C\u8BF7\u627E\u51FA\u5176\u4E2D\u7684\u7B2Ck\u5C0F\u7684\u7ED3\u70B9\u3002 \u4F8B\u5982\uFF0C\uFF085\uFF0C3\uFF0C7\uFF0C2\uFF0C4\uFF0C6\uFF0C8\uFF09 \u4E2D\uFF0C\u6309\u7ED3\u70B9\u6570\u503C\u5927\u5C0F\u987A\u5E8F\u7B2C\u4E09\u5C0F\u7ED3\u70B9\u7684\u503C\u4E3A4\u3002</p></div><div class="language-javascript"><pre><code><span class="token keyword">const</span> tree <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token number">4</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token number">6</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token number">8</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">min</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">traverse</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5982\u679C\u62FF\u5230\u4E86\u7ED3\u679C\u5C31 return</span>
      <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">traverse</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token keyword">return</span> result
    <span class="token punctuation">}</span>

    <span class="token comment">// \u5B9E\u9645\u7684\u64CD\u4F5C\u70B9</span>
    k <span class="token operator">=</span> k <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> node<span class="token punctuation">.</span>val
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5982\u679C\u62FF\u5230\u4E86\u7ED3\u679C\u5C31 return</span>
      <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">traverse</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token keyword">return</span> result
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> k<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">min</span><span class="token punctuation">(</span>tree<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 3</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">min</span><span class="token punctuation">(</span>tree<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 4</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">min</span><span class="token punctuation">(</span>tree<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 5</span>
</code></pre></div><h2 id="\u4E8C\u53C9\u6811\u7684\u6700\u5927\u6DF1\u5EA6" tabindex="-1">\u4E8C\u53C9\u6811\u7684\u6700\u5927\u6DF1\u5EA6 <a class="header-anchor" href="#\u4E8C\u53C9\u6811\u7684\u6700\u5927\u6DF1\u5EA6" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token keyword">const</span> tree <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token number">6</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
      <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token number">9</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">maxDepth</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token function">maxDepth</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">maxDepth</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">maxDepth</span><span class="token punctuation">(</span>tree<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 4</span>
</code></pre></div><h2 id="\u4E8C\u53C9\u6811\u5C42\u5E8F\u904D\u5386" tabindex="-1">\u4E8C\u53C9\u6811\u5C42\u5E8F\u904D\u5386 <a class="header-anchor" href="#\u4E8C\u53C9\u6811\u5C42\u5E8F\u904D\u5386" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u9898\u76EE</p><p>const tree = { val: 5, left: { val: 3, left: { val: 2 }, right: { val: 4 } }, right: { val: 8, left: { val: 6, right: { val: 7 } }, right: { val: 9 } } }</p></div><div class="language-javascript"><pre><code><span class="token comment">// \u5E7F\u5EA6\u4F18\u5148\u904D\u5386</span>
<span class="token keyword">const</span> <span class="token function-variable function">traverse</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span>

  <span class="token keyword">let</span> isReversed <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    isReversed <span class="token operator">=</span> <span class="token operator">!</span>isReversed
    <span class="token keyword">let</span> count <span class="token operator">=</span> queue<span class="token punctuation">.</span>length
    <span class="token keyword">let</span> tempList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>count <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token comment">// tempList.push(node.val)</span>
      isReversed <span class="token operator">?</span> tempList<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token operator">:</span> tempList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      count <span class="token operator">-=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>tempList<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre></div><div class="language-javascript"><pre><code><span class="token comment">// \u6DF1\u5EA6\u4F18\u5148\u904D\u5386</span>
<span class="token keyword">const</span> <span class="token function-variable function">levelOrder</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token keyword">const</span> <span class="token function-variable function">traverse</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> level</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">)</span> <span class="token keyword">return</span>
    <span class="token keyword">const</span> arr <span class="token operator">=</span> result<span class="token punctuation">[</span>level<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>level <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      arr<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    result<span class="token punctuation">[</span>level<span class="token punctuation">]</span> <span class="token operator">=</span> arr
    <span class="token function">traverse</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> level <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token function">traverse</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> level <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u524D\u5E8F\u4E2D\u5E8F\u6784\u5EFA\u4E8C\u53C9\u6811" tabindex="-1">\u524D\u5E8F\u4E2D\u5E8F\u6784\u5EFA\u4E8C\u53C9\u6811 <a class="header-anchor" href="#\u524D\u5E8F\u4E2D\u5E8F\u6784\u5EFA\u4E8C\u53C9\u6811" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u9898\u76EE</p><p>\u4E00\u4E2A\u524D\u5E8F\u6570\u7EC4\u548C\u4E00\u4E2A\u4E2D\u5E8F\u6570\u7EC4\uFF0C\u6784\u5EFA\u6210\u4E00\u4E2A\u4E8C\u53C9\u6811</p></div><div class="language-javascript"><pre><code><span class="token keyword">function</span> <span class="token function">TreeNode</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> <span class="token punctuation">(</span>val <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> val<span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token punctuation">(</span>left <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> left<span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token punctuation">(</span>right <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> right<span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token keyword">const</span> <span class="token function-variable function">buildTree</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">preorder<span class="token punctuation">,</span> inorder</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>preorder<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u53D6\u51FA\u7B2C\u4E00\u4E2A</span>
  <span class="token keyword">const</span> cur <span class="token operator">=</span> preorder<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span>

  <span class="token keyword">const</span> index <span class="token operator">=</span> inorder<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> item <span class="token operator">===</span> node<span class="token punctuation">.</span>val
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// \u5DE6\u5B50\u6811</span>
  node<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>preorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">,</span> inorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token comment">// \u53F3\u5B50\u6811</span>
  node<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>preorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">,</span> inorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> node
<span class="token punctuation">}</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39; ==&gt; &#39;</span><span class="token punctuation">,</span> <span class="token function">buildTree</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u8FED\u4EE3\u7684\u65B9\u5F0F\u8FDB\u884C\u524D\u5E8F\u904D\u5386" tabindex="-1">\u8FED\u4EE3\u7684\u65B9\u5F0F\u8FDB\u884C\u524D\u5E8F\u904D\u5386 <a class="header-anchor" href="#\u8FED\u4EE3\u7684\u65B9\u5F0F\u8FDB\u884C\u524D\u5E8F\u904D\u5386" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u9898\u76EE</p><p>\u8FED\u4EE3\u7684\u65B9\u5F0F\u8FDB\u884C\u524D\u5E8F\u904D\u5386</p></div><div class="language-javascript"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">traverse</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> cur <span class="token operator">=</span> root
  <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">||</span> stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u904D\u5386\u5B8C\u5DE6\u4FA7\u5185\u5BB9\u4E86</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span>
      cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>left
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> node <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    cur <span class="token operator">=</span> node<span class="token punctuation">.</span>right
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">traverse</span><span class="token punctuation">(</span>tree<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u5224\u65AD\u4E8C\u53C9\u6811\u662F\u5426\u5408\u6CD5" tabindex="-1">\u5224\u65AD\u4E8C\u53C9\u6811\u662F\u5426\u5408\u6CD5 <a class="header-anchor" href="#\u5224\u65AD\u4E8C\u53C9\u6811\u662F\u5426\u5408\u6CD5" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u9898\u76EE</p><p>\u5224\u65AD\u4E8C\u53C9\u6811\u662F\u5426\u5408\u6CD5</p></div><div class="language-javascript"><pre><code><span class="token keyword">const</span> tree <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token number">6</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">isValidBST</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">isValid</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> min<span class="token punctuation">,</span> max</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> node <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u5F53\u524D\u8282\u70B9 \u4E0E \u5DE6\u53F3\u8282\u70B9\u5173\u7CFB</span>
    <span class="token keyword">const</span> is <span class="token operator">=</span> node<span class="token punctuation">.</span>val <span class="token operator">&gt;</span> min
      <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> max
      <span class="token operator">&amp;&amp;</span> <span class="token function">isValid</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> min<span class="token punctuation">,</span> node<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
      <span class="token operator">&amp;&amp;</span> <span class="token function">isValid</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> node<span class="token punctuation">.</span>val<span class="token punctuation">,</span> max<span class="token punctuation">)</span>

    <span class="token keyword">return</span> is
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token function">isValid</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">,</span> <span class="token number">Infinity</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;isValidBST&#39;</span><span class="token punctuation">,</span> <span class="token function">isValidBST</span><span class="token punctuation">(</span>tree<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div>`,19),e=[o];function c(l,u,k,r,i,d){return a(),s("div",null,e)}var f=n(t,[["render",c]]);export{m as __pageData,f as default};
