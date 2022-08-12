import{_ as n,c as s,o as a,a as p}from"./app.e6e38190.js";const w='{"title":"leetcode","description":"","frontmatter":{},"headers":[{"level":2,"title":"1.\u4E24\u6570\u4E4B\u548C","slug":"_1-\u4E24\u6570\u4E4B\u548C"},{"level":2,"title":"2.\u4E24\u6570\u76F8\u52A0","slug":"_2-\u4E24\u6570\u76F8\u52A0"}],"relativePath":"leetcode/index.md","lastUpdated":1660271823000}',t={},o=p(`<h1 id="leetcode" tabindex="-1">leetcode <a class="header-anchor" href="#leetcode" aria-hidden="true">#</a></h1><h2 id="_1-\u4E24\u6570\u4E4B\u548C" tabindex="-1">1.\u4E24\u6570\u4E4B\u548C <a class="header-anchor" href="#_1-\u4E24\u6570\u4E4B\u548C" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token comment">/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] \u4E24\u6570\u4E4B\u548C
 */</span>

<span class="token comment">// @lc code=start</span>
<span class="token keyword">function</span> <span class="token function">twoSum</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> target<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> map<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> delta <span class="token operator">=</span> target <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">[</span>delta<span class="token punctuation">]</span> <span class="token operator">||</span> map<span class="token punctuation">[</span>delta<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span>map<span class="token punctuation">[</span>delta<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">]</span>
    map<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> i
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token comment">// @lc code=end</span>
</code></pre></div><h2 id="_2-\u4E24\u6570\u76F8\u52A0" tabindex="-1">2.\u4E24\u6570\u76F8\u52A0 <a class="header-anchor" href="#_2-\u4E24\u6570\u76F8\u52A0" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token comment">/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] \u4E24\u6570\u76F8\u52A0
 */</span>

<span class="token comment">// @lc code=start</span>

<span class="token comment">// class ListNode {</span>
<span class="token comment">//   val: number</span>
<span class="token comment">//   next: ListNode | null</span>
<span class="token comment">//   constructor(val?: number, next?: ListNode | null) {</span>
<span class="token comment">//     this.val = (val === undefined ? 0 : val)</span>
<span class="token comment">//     this.next = (next === undefined ? null : next)</span>
<span class="token comment">//   }</span>
<span class="token comment">// }</span>

<span class="token keyword">function</span> <span class="token function">addTwoNumbers</span><span class="token punctuation">(</span>l1<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> l2<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">let</span> result<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">let</span> needAddOne <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>l1 <span class="token operator">||</span> l2 <span class="token operator">||</span> needAddOne<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> val1 <span class="token operator">=</span> <span class="token punctuation">(</span>l1 <span class="token operator">&amp;&amp;</span> l1<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span>
    <span class="token keyword">const</span> val2 <span class="token operator">=</span> <span class="token punctuation">(</span>l2 <span class="token operator">&amp;&amp;</span> l2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span>
    <span class="token keyword">const</span> val <span class="token operator">=</span> val1 <span class="token operator">+</span> val2 <span class="token operator">+</span> <span class="token punctuation">(</span>needAddOne <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">)</span>
    needAddOne <span class="token operator">=</span> val <span class="token operator">&gt;=</span> <span class="token number">10</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">)</span>
      result <span class="token operator">=</span> result<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>val <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span>
      head <span class="token operator">=</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>val <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span>

    l1 <span class="token operator">=</span> l1 <span class="token operator">&amp;&amp;</span> l1<span class="token punctuation">.</span>next
    l2 <span class="token operator">=</span> l2 <span class="token operator">&amp;&amp;</span> l2<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> head
<span class="token punctuation">}</span>
<span class="token comment">// @lc code=end</span>
</code></pre></div>`,5),e=[o];function c(l,r,k,u,i,d){return a(),s("div",null,e)}var _=n(t,[["render",c]]);export{w as __pageData,_ as default};
