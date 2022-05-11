import{_ as n,c as s,o as a,a as p}from"./app.4aa27e6c.js";const m='{"title":"\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217","description":"","frontmatter":{},"headers":[],"relativePath":"vue/\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217.md","lastUpdated":1652274431000}',t={},o=p(`<h1 id="\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217" tabindex="-1">\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217 <a class="header-anchor" href="#\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217" aria-hidden="true">#</a></h1><div class="language-javascript"><pre><code><span class="token keyword">function</span> <span class="token function">getSequence</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">arr</span><span class="token operator">:</span> number<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span><span class="token operator">:</span> number<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5B58\u653E\u4EE5\u5F53\u524D index \u4E0B\u6700\u5927\u957F\u5EA6</span>
  <span class="token keyword">const</span> p <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// \u8BB0\u5F55\u5B50\u5E8F\u5217index</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> u<span class="token punctuation">,</span> v<span class="token punctuation">,</span> c
  <span class="token keyword">const</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
  <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> arrI <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arrI <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      j <span class="token operator">=</span> result<span class="token punctuation">[</span>result<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
      <span class="token comment">// \u5982\u679C\u5F53\u524D\u503C\u7B26\u5408\u8981\u6C42\uFF0C\u76F4\u63A5\u6DFB\u52A0</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arrI<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        p<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> j
        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
        <span class="token keyword">continue</span>
      <span class="token punctuation">}</span>
      u <span class="token operator">=</span> <span class="token number">0</span>
      v <span class="token operator">=</span> result<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
      <span class="token comment">// \u4E8C\u5206\u67E5\u627E\uFF1A\u5728 result \u4E2D\u627E\u5230\u6700\u63A5\u8FD1\u5F53\u524D\u503C\u7684 index</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>u <span class="token operator">&lt;</span> v<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        c <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>u <span class="token operator">+</span> v<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>result<span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> arrI<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          u <span class="token operator">=</span> c <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          v <span class="token operator">=</span> c
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    
      <span class="token comment">// \u5982\u679C\u8FD9\u4E2A\u503C\u662F\u6BD4\u5F53\u524D\u503C\u5C0F\u7684\u3002\u8FD9\u79CD</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>arrI <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>result<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>u <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          p<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> result<span class="token punctuation">[</span>u <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
        result<span class="token punctuation">[</span>u<span class="token punctuation">]</span> <span class="token operator">=</span> i
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  u <span class="token operator">=</span> result<span class="token punctuation">.</span>length
  v <span class="token operator">=</span> result<span class="token punctuation">[</span>u <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>u<span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result<span class="token punctuation">[</span>u<span class="token punctuation">]</span> <span class="token operator">=</span> v
    v <span class="token operator">=</span> p<span class="token punctuation">[</span>v<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre></div>`,2),e=[o];function c(u,l,k,r,i,d){return a(),s("div",null,e)}var w=n(t,[["render",c]]);export{m as __pageData,w as default};
