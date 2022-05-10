import{_ as n,c as s,o as a,a as t}from"./app.d322b2e6.js";const w='{"title":"\u56DE\u6EAF\u6CD5","description":"","frontmatter":{},"headers":[],"relativePath":"algorithms/\u56DE\u6EAF\u6CD5.md","lastUpdated":1652199210000}',p={},o=t(`<h1 id="\u56DE\u6EAF\u6CD5" tabindex="-1">\u56DE\u6EAF\u6CD5 <a class="header-anchor" href="#\u56DE\u6EAF\u6CD5" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u516B\u7687\u540E\u95EE\u9898</p><p>\u73B0\u5728\u6709\u4E00\u4E2A n x n \u7684\u8DF3\u68CB\u68CB\u76D8\uFF0C\u6709n\u4E2A\u68CB\u5B50\u88AB\u653E\u7F6E\u5728\u68CB\u76D8\u4E0A\uFF0C\u4F7F\u5F97\u6BCF\u884C\uFF0C\u6BCF\u5217\uFF0C\u6BCF\u6761\u5BF9\u89D2\u7EBF\uFF08\u5305\u62EC\u4E24\u6761\u4E3B\u5BF9\u89D2\u7EBF\u7684\u6240\u6709\u5BF9\u89D2\u7EBF\uFF09\u4E0A\u90FD\u81F3\u591A\u6709\u4E00\u4E2A\u68CB\u5B50\u3002</p></div><div class="language-javascript"><pre><code><span class="token keyword">class</span> <span class="token class-name">QueenPosition</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">rowIndex<span class="token punctuation">,</span> columnIndex</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>rowIndex <span class="token operator">=</span> rowIndex
    <span class="token keyword">this</span><span class="token punctuation">.</span>columnIndex <span class="token operator">=</span> columnIndex
  <span class="token punctuation">}</span>
  <span class="token keyword">get</span> <span class="token function">leftDiagonal</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>rowIndex <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>columnIndex
  <span class="token punctuation">}</span>
  <span class="token keyword">get</span> <span class="token function">rightDiagonal</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>rowIndex <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>columnIndex
  <span class="token punctuation">}</span>
  <span class="token keyword">get</span> <span class="token function">description</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>rowIndex<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>columnIndex<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">isSafe</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">queensPositions<span class="token punctuation">,</span> currentPosition</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u904D\u5386\u5DF2\u6709\u7684queue</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> queenIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> queenIndex <span class="token operator">&lt;</span> queensPositions<span class="token punctuation">.</span>length<span class="token punctuation">;</span> queenIndex<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> prevPosition <span class="token operator">=</span> queensPositions<span class="token punctuation">[</span>queenIndex<span class="token punctuation">]</span>
    <span class="token comment">// \u662F\u5426\u662F\u6A2A\u5217/\u7EB5\u5217/\u659C\u5217</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>prevPosition <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>prevPosition<span class="token punctuation">.</span>rowIndex <span class="token operator">===</span> currentPosition<span class="token punctuation">.</span>rowIndex 
      <span class="token operator">||</span> prevPosition<span class="token punctuation">.</span>columnIndex  <span class="token operator">===</span> currentPosition<span class="token punctuation">.</span>columnIndex 
      <span class="token operator">||</span> prevPosition<span class="token punctuation">.</span>leftDiagonal <span class="token operator">===</span> currentPosition<span class="token punctuation">.</span>leftDiagonal 
      <span class="token operator">||</span> prevPosition<span class="token punctuation">.</span>rightDiagonal <span class="token operator">===</span> currentPosition<span class="token punctuation">.</span>rightDiagonal<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// console.log(prevPosition, currentPosition);</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">nQueensRecursive</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">solutions<span class="token punctuation">,</span> previousQueensPositions<span class="token punctuation">,</span> queensCount<span class="token punctuation">,</span> rowIndex</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// clone position \u6570\u7EC4\uFF0C\u5426\u5219\u5B58\u5728\u5F15\u7528\u5173\u7CFB</span>
  <span class="token keyword">const</span> queensPositions <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>previousQueensPositions<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">queenPosition</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">!</span>queenPosition <span class="token operator">?</span> queenPosition <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">QueenPosition</span><span class="token punctuation">(</span>
      queenPosition<span class="token punctuation">.</span>rowIndex<span class="token punctuation">,</span>
      queenPosition<span class="token punctuation">.</span>columnIndex<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u5224\u65ADposition\u662F\u5426\u5DF2\u7ECF\u6EE1\u8DB3\u9898\u610F\u8981\u6C42</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rowIndex <span class="token operator">===</span> queensCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8BF4\u660E queensPositions \u5DF2\u7ECF\u6709\u4E86 queensCount \u4E2A\uFF0C\u7B26\u5408\u8981\u6C42</span>
    solutions<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>queensPositions<span class="token punctuation">)</span>
    <span class="token keyword">return</span> 
  <span class="token punctuation">}</span>
  
  <span class="token comment">// \u904D\u5386\u6BCF\u4E00\u5217</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> columnIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> columnIndex <span class="token operator">&lt;</span> queensCount<span class="token punctuation">;</span> columnIndex<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> currentPosition <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueenPosition</span><span class="token punctuation">(</span>rowIndex<span class="token punctuation">,</span> columnIndex<span class="token punctuation">)</span>
    <span class="token comment">// \u5224\u65AD\u5F53\u524D\u70B9\u662F\u5426\u7B26\u5408\u8981\u6C42</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isSafe</span><span class="token punctuation">(</span>queensPositions<span class="token punctuation">,</span> currentPosition<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u52A0\u5165\u5230\u884C\u4E2D</span>
      queensPositions<span class="token punctuation">[</span>rowIndex<span class="token punctuation">]</span> <span class="token operator">=</span> currentPosition
      <span class="token comment">// \u904D\u5386\u4E0B\u4E00\u5217</span>
      <span class="token function">nQueensRecursive</span><span class="token punctuation">(</span>solutions<span class="token punctuation">,</span> queensPositions<span class="token punctuation">,</span> queensCount<span class="token punctuation">,</span> rowIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token comment">// \u904D\u5386\u5B8C\u540E\u5C06\u8FD9\u4E2A\u6570\u636E\u79FB\u9664\uFF0C\u56DE\u5230\u672C\u884C\u4E0B\u4E00\u6761\u6570\u636E</span>
      queensPositions<span class="token punctuation">[</span>rowIndex<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">nQueens</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">queensCount</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> queensPositions <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span>queensCount<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> solutions <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token comment">// \u4ECE\u7B2C 0 \u884C\u5F00\u59CB</span>
  <span class="token function">nQueensRecursive</span><span class="token punctuation">(</span>solutions<span class="token punctuation">,</span> queensPositions<span class="token punctuation">,</span> queensCount<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> solutions
<span class="token punctuation">}</span>
</code></pre></div><div class="language-javascript"><pre><code><span class="token keyword">const</span> solutions <span class="token operator">=</span> <span class="token function">nQueens</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
solutions<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">queuePositions<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">==== result </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>index<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> ====</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  queuePositions<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">position</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>position<span class="token punctuation">.</span>description<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// ==== result 0 ====</span>
<span class="token comment">// 0,1</span>
<span class="token comment">// 1,3</span>
<span class="token comment">// 2,0</span>
<span class="token comment">// 3,2</span>
<span class="token comment">// ==== result 1 ====</span>
<span class="token comment">// 0,2</span>
<span class="token comment">// 1,0</span>
<span class="token comment">// 2,3</span>
<span class="token comment">// 3,1</span>
</code></pre></div>`,4),e=[o];function c(u,l,i,k,r,d){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{w as __pageData,f as default};
