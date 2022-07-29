import{_ as n,c as s,o as a,a as t}from"./app.f27e6278.js";const h='{"title":"\u7EBF\u6BB5\u6811","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4ECB\u7ECD","slug":"\u4ECB\u7ECD"},{"level":2,"title":"\u5B9E\u73B0\u4EE3\u7801","slug":"\u5B9E\u73B0\u4EE3\u7801"},{"level":2,"title":"\u8FD0\u884C\u7ED3\u679C","slug":"\u8FD0\u884C\u7ED3\u679C"}],"relativePath":"data-structures/\u7EBF\u6BB5\u6811.md","lastUpdated":1659052813000}',p={},o=t(`<h1 id="\u7EBF\u6BB5\u6811" tabindex="-1">\u7EBF\u6BB5\u6811 <a class="header-anchor" href="#\u7EBF\u6BB5\u6811" aria-hidden="true">#</a></h1><h2 id="\u4ECB\u7ECD" tabindex="-1">\u4ECB\u7ECD <a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a></h2><p>\u7EBF\u6BB5\u6811\u4E3B\u8981\u7528\u4E8E\u7EF4\u62A4<strong>\u533A\u95F4\u4FE1\u606F</strong>\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u5B83\u53EF\u4EE5\u5728<code>O(logN)</code>\u7684\u590D\u6742\u5EA6\u5185\u5B9E\u73B0\u5355\u70B9\u4FEE\u6539\u3001\u533A\u95F4\u4FEE\u6539\u3001\u533A\u95F4\u67E5\u8BE2\uFF08\u533A\u95F4\u6C42\u548C\uFF0C\u6C42\u533A\u95F4\u6700\u5927\u503C\uFF0C\u6C42\u533A\u95F4\u6700\u5C0F\u503C\uFF09\u7B49\u64CD\u4F5C\u3002</p><h2 id="\u5B9E\u73B0\u4EE3\u7801" tabindex="-1">\u5B9E\u73B0\u4EE3\u7801 <a class="header-anchor" href="#\u5B9E\u73B0\u4EE3\u7801" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token keyword">class</span> <span class="token class-name">SegmentTree</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">inputArray<span class="token punctuation">,</span> operation<span class="token punctuation">,</span> operationFallback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>inputArray <span class="token operator">=</span> inputArray
    <span class="token comment">// opration \u7528\u4E8E\u533A\u95F4\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u4F20\u5165\u4E0D\u540C\u7684\u51FD\u6570\uFF0C\u5982\u6C42\u548C\uFF0C\u6C42\u6700\u5927\u503C\uFF0C\u6C42\u6700\u5C0F\u503C\u7B49\u7B49\u3002</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>operation <span class="token operator">=</span> operation
    <span class="token keyword">this</span><span class="token punctuation">.</span>operationFallback <span class="token operator">=</span> operationFallback

    <span class="token keyword">this</span><span class="token punctuation">.</span>segmentTree <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initSegmentTree</span><span class="token punctuation">(</span>inputArray<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">buildSegmentTree</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token punctuation">}</span>

  <span class="token comment">// \u521D\u59CB\u5316\u7EBF\u6BB5\u6811\u6570\u7EC4</span>
  <span class="token function">initSegmentTree</span><span class="token punctuation">(</span><span class="token parameter">inputArray</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> segmentTreeArrayLength
    <span class="token keyword">const</span> inputArrayLength <span class="token operator">=</span> inputArray<span class="token punctuation">.</span>length
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isPowerOfTwo</span><span class="token punctuation">(</span>inputArrayLength<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      segmentTreeArrayLength <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> inputArrayLength <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> power <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>inputArrayLength<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span>
      segmentTreeArrayLength <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">**</span> power <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>segmentTreeArrayLength<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">buildSegmentTree</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u521D\u59CB\u5316\u6761\u4EF6</span>
    <span class="token keyword">const</span> leftIndex <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">const</span> rightIndex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>inputArray<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token comment">// \u7EBF\u6BB5\u6811\u6570\u7EC4\u7684\u4F4D\u7F6E\uFF0C\u4ECE0\u5F00\u59CB</span>
    <span class="token keyword">const</span> position <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">buildSegmentTreeRecursive</span><span class="token punctuation">(</span>leftIndex<span class="token punctuation">,</span> rightIndex<span class="token punctuation">,</span> position<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">buildSegmentTreeRecursive</span><span class="token punctuation">(</span><span class="token parameter">leftIndex<span class="token punctuation">,</span> rightIndex<span class="token punctuation">,</span> position</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8FB9\u754C\u6761\u4EF6</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>leftIndex <span class="token operator">===</span> rightIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>segmentTree<span class="token punctuation">[</span>position<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>inputArray<span class="token punctuation">[</span>leftIndex<span class="token punctuation">]</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u9012\u5F52\u8FC7\u7A0B</span>
    <span class="token comment">// \u53C2\u6570\uFF1AleftIndex, rightIndex, position</span>
    <span class="token comment">// \u7ED3\u679C\uFF1A\u5DE6\u8FB9\u7684\u503C + \u53F3\u8FB9\u7684\u503C</span>
    <span class="token keyword">const</span> middleIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>leftIndex <span class="token operator">+</span> rightIndex<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> leftChildPosition <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getLeftChildIndex</span><span class="token punctuation">(</span>position<span class="token punctuation">)</span>
    <span class="token keyword">const</span> rightChildPosition <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getRightChildIndex</span><span class="token punctuation">(</span>position<span class="token punctuation">)</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">buildSegmentTreeRecursive</span><span class="token punctuation">(</span>leftIndex<span class="token punctuation">,</span> middleIndex<span class="token punctuation">,</span> leftChildPosition<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">buildSegmentTreeRecursive</span><span class="token punctuation">(</span>middleIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> rightIndex<span class="token punctuation">,</span> rightChildPosition<span class="token punctuation">)</span>

    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">operation</span><span class="token punctuation">(</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>segmentTree<span class="token punctuation">[</span>leftChildPosition<span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>segmentTree<span class="token punctuation">[</span>rightChildPosition<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>

    <span class="token comment">// build \u5B8C\u540E\uFF0C\u5DE6\u53F3\u8282\u70B9\u7684\u503C\u5C31\u6709\u4E86</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>segmentTree<span class="token punctuation">[</span>position<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">operation</span><span class="token punctuation">(</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>segmentTree<span class="token punctuation">[</span>leftChildPosition<span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>segmentTree<span class="token punctuation">[</span>rightChildPosition<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u67E5\u8BE2\u533A\u95F4\u503C</span>
  <span class="token function">queryRange</span><span class="token punctuation">(</span><span class="token parameter">queryLeftIndex<span class="token punctuation">,</span> queryRightIndex</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u521D\u59CB\u6761\u4EF6</span>
    <span class="token keyword">const</span> leftIndex <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">const</span> rightIndex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>inputArray<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token keyword">const</span> position <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">queryRangeRecursive</span><span class="token punctuation">(</span>
      queryLeftIndex<span class="token punctuation">,</span>
      queryRightIndex<span class="token punctuation">,</span>
      leftIndex<span class="token punctuation">,</span>
      rightIndex<span class="token punctuation">,</span>
      position
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u9012\u5F52\u8FC7\u7A0B\u548C\u5EFA\u6811\u65F6\u76F8\u4F3C\uFF0C\u53EA\u4E0D\u8FC7\u9700\u8981\u6BD4\u8F83\u67E5\u8BE2\u533A\u95F4</span>
  <span class="token function">queryRangeRecursive</span><span class="token punctuation">(</span><span class="token parameter">queryLeftIndex<span class="token punctuation">,</span> queryRightIndex<span class="token punctuation">,</span> leftIndex<span class="token punctuation">,</span> rightIndex<span class="token punctuation">,</span> position</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8FB9\u754C\u6761\u4EF61</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>queryLeftIndex <span class="token operator">&lt;=</span> leftIndex <span class="token operator">&amp;&amp;</span> queryRightIndex <span class="token operator">&gt;=</span> rightIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u8BF4\u660E\u8FD9\u4E2A\u5B50\u533A\u95F4\u5305\u542B\u5728\u8981\u67E5\u8BE2\u7684\u533A\u95F4\u5185\u90E8\uFF0C\u8FD4\u56DE\u5B50\u533A\u95F4\u7684\u503C</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>segmentTree<span class="token punctuation">[</span>position<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u8FB9\u754C\u6761\u4EF62</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>queryLeftIndex <span class="token operator">&gt;</span> rightIndex <span class="token operator">||</span> queryRightIndex <span class="token operator">&lt;</span> leftIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">operationFallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> middleIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>leftIndex <span class="token operator">+</span> rightIndex<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> leftChildPosition <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getLeftChildIndex</span><span class="token punctuation">(</span>position<span class="token punctuation">)</span>
    <span class="token keyword">const</span> rightChildPosition <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getRightChildIndex</span><span class="token punctuation">(</span>position<span class="token punctuation">)</span>
    <span class="token keyword">const</span> leftResult <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">queryRangeRecursive</span><span class="token punctuation">(</span>
      queryLeftIndex<span class="token punctuation">,</span>
      queryRightIndex<span class="token punctuation">,</span>
      leftIndex<span class="token punctuation">,</span>
      middleIndex<span class="token punctuation">,</span>
      leftChildPosition
    <span class="token punctuation">)</span>
    <span class="token keyword">const</span> rightResult <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">queryRangeRecursive</span><span class="token punctuation">(</span>
      queryLeftIndex<span class="token punctuation">,</span>
      queryRightIndex<span class="token punctuation">,</span>
      middleIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
      rightIndex<span class="token punctuation">,</span>
      rightChildPosition
    <span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">operation</span><span class="token punctuation">(</span>leftResult<span class="token punctuation">,</span> rightResult<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5DE6\u53F3\u8282\u70B9\u548C\u7236\u8282\u70B9\u7684\u5173\u7CFB\u7C7B\u4F3C\u4E8E \u5806</span>
  <span class="token function">getLeftChildIndex</span><span class="token punctuation">(</span><span class="token parameter">position</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">2</span> <span class="token operator">*</span> position <span class="token operator">+</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
  <span class="token function">getRightChildIndex</span><span class="token punctuation">(</span><span class="token parameter">position</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">2</span> <span class="token operator">*</span> position <span class="token operator">+</span> <span class="token number">2</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">isPowerOfTwo</span><span class="token punctuation">(</span><span class="token parameter">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>number <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> dividedNumber <span class="token operator">=</span> number<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>dividedNumber <span class="token operator">!==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>dividedNumber <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    dividedNumber <span class="token operator">/=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u8FD0\u884C\u7ED3\u679C" tabindex="-1">\u8FD0\u884C\u7ED3\u679C <a class="header-anchor" href="#\u8FD0\u884C\u7ED3\u679C" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token keyword">const</span> seg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SegmentTree</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">+</span> b<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;seg.segmentTree ==&gt; &#39;</span><span class="token punctuation">,</span> seg<span class="token punctuation">.</span>segmentTree<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ 21, 6, 15, 3, 3, 9, 6, 1, 2, &lt;2 empty items&gt;, 4, 5 ]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;seg ==&gt; &#39;</span><span class="token punctuation">,</span> seg<span class="token punctuation">.</span><span class="token function">queryRange</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;seg ==&gt; &#39;</span><span class="token punctuation">,</span> seg<span class="token punctuation">.</span><span class="token function">queryRange</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;seg ==&gt; &#39;</span><span class="token punctuation">,</span> seg<span class="token punctuation">.</span><span class="token function">queryRange</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 11</span>
</code></pre></div>`,7),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var g=n(p,[["render",c]]);export{h as __pageData,g as default};
