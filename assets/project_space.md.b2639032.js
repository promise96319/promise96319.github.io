import{_ as n,c as s,o as a,a as t}from"./app.d5a482e8.js";const m='{"title":"Space / Row \u5E03\u5C40\u95F4\u9699\u95EE\u9898","description":"","frontmatter":{},"headers":[],"relativePath":"project/space.md","lastUpdated":1657366488000}',p={},o=t(`<h1 id="space-row-\u5E03\u5C40\u95F4\u9699\u95EE\u9898" tabindex="-1">Space / Row \u5E03\u5C40\u95F4\u9699\u95EE\u9898 <a class="header-anchor" href="#space-row-\u5E03\u5C40\u95F4\u9699\u95EE\u9898" aria-hidden="true">#</a></h1><ul><li>\u65B9\u6848\u4E00\uFF1A<code>flex-gap</code> \u517C\u5BB9\u6027\u6709\u95EE\u9898</li><li>\u65B9\u6848\u4E8C\uFF1A<code>padding + margin</code> \u65B9\u5F0F</li></ul><div class="language-typescript"><pre><code><span class="token keyword">import</span> classNames <span class="token keyword">from</span> <span class="token string">&#39;classnames&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">&#39;prop-types&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> SizeMap<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  none<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  mini<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  small<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
  medium<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
  large<span class="token operator">:</span> <span class="token number">24</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">SpaceAlignType</span> <span class="token operator">=</span> <span class="token string">&#39;top&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;middle&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;bottom&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">SpaceJustifyType</span> <span class="token operator">=</span> <span class="token string">&#39;start&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;center&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;end&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;around&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;between&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">SpaceDirectionType</span> <span class="token operator">=</span> <span class="token string">&#39;horizontal&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;vertical&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">SpaceSizeType</span> <span class="token operator">=</span> <span class="token keyword">keyof</span> <span class="token keyword">typeof</span> SizeMap <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">SpaceProps</span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   * @description \u81EA\u5B9A\u4E49\u7C7B\u540D
   */</span>
  className<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token comment">/**
   * @description \u5BF9\u9F50\u65B9\u5F0F
   * @type &#39;top&#39; | &#39;middle&#39; | &#39;bottom&#39;
   */</span>
  align<span class="token operator">?</span><span class="token operator">:</span> SpaceAlignType<span class="token punctuation">;</span>
  <span class="token comment">/**
   * @description \u6392\u5217\u65B9\u5F0F
   * @type &#39;start&#39; | &#39;center&#39; | &#39;end&#39; | &#39;around&#39; | &#39;between&#39;
   */</span>
  justify<span class="token operator">?</span><span class="token operator">:</span> SpaceJustifyType<span class="token punctuation">;</span>
  <span class="token comment">/**
   * @description \u65B9\u5411
   * @type &#39;horizontal&#39; | &#39;vertical&#39;
   */</span>
  direction<span class="token operator">?</span><span class="token operator">:</span> SpaceDirectionType<span class="token punctuation">;</span>
  <span class="token comment">/**
   * @description \u95F4\u8DDD\u5927\u5C0F
   * @type SpaceSizeType | [SpaceSizeType, SpaceSizeType]
   */</span>
  size<span class="token operator">?</span><span class="token operator">:</span> SpaceSizeType <span class="token operator">|</span> SpaceSizeType<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment">/**
   * @description \u662F\u5426\u6362\u884C
   */</span>
  wrap<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Space</span> <span class="token keyword">extends</span> <span class="token class-name">React</span><span class="token punctuation">.</span>Component<span class="token operator">&lt;</span>SpaceProps<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
    className<span class="token operator">:</span> PropTypes<span class="token punctuation">.</span><span class="token builtin">string</span><span class="token punctuation">,</span>
    align<span class="token operator">:</span> PropTypes<span class="token punctuation">.</span><span class="token function">oneOf</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;top&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;middle&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bottom&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    justify<span class="token operator">:</span> PropTypes<span class="token punctuation">.</span><span class="token function">oneOf</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;start&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;end&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;around&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;between&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    direction<span class="token operator">:</span> PropTypes<span class="token punctuation">.</span><span class="token function">oneOf</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;horizontal&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;vertical&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    size<span class="token operator">:</span> PropTypes<span class="token punctuation">.</span><span class="token function">oneOfType</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      PropTypes<span class="token punctuation">.</span><span class="token function">oneOf</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>SizeMap<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      PropTypes<span class="token punctuation">.</span><span class="token function">arrayOf</span><span class="token punctuation">(</span>PropTypes<span class="token punctuation">.</span><span class="token function">oneOf</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>SizeMap<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    wrap<span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>bool
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">static</span> defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span>
    align<span class="token operator">:</span> <span class="token string">&#39;middle&#39;</span><span class="token punctuation">,</span>
    justify<span class="token operator">:</span> <span class="token string">&#39;start&#39;</span><span class="token punctuation">,</span>
    size<span class="token operator">:</span> <span class="token string">&#39;small&#39;</span><span class="token punctuation">,</span>
    wrap<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    direction<span class="token operator">:</span> <span class="token string">&#39;horizontal&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">private</span> styleName <span class="token operator">=</span> <span class="token string">&#39;qtc-space&#39;</span><span class="token punctuation">;</span>

  <span class="token comment">// size =&gt; [horizontalGap, verticalGap]</span>
  <span class="token function">getGutters</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> size <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>
    <span class="token keyword">const</span> gutters <span class="token operator">=</span> <span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>size<span class="token punctuation">)</span> <span class="token operator">?</span> size <span class="token operator">:</span> <span class="token punctuation">[</span>size<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> gutters<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>gap<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> SizeMap<span class="token punctuation">[</span>gap<span class="token punctuation">]</span> <span class="token operator">||</span> gap <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">getSizeStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>gutterH<span class="token punctuation">,</span> gutterV<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getGutters</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> horizontalGutter <span class="token operator">=</span> gutterH <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span> gutterH <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> verticalGutter <span class="token operator">=</span> gutterV <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span> gutterV <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> containerStyle<span class="token operator">:</span> React<span class="token punctuation">.</span>CSSProperties <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> itemStyle<span class="token operator">:</span> React<span class="token punctuation">.</span>CSSProperties <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// \u5185\u5C42 item padding \u4E3A\u95F4\u9699\uFF0C\u5916\u5C42\u5BB9\u5668 margin \u4E3A\u8D1F\uFF0C\u62B5\u6D88\u5916\u5C42\u591A\u4F59 padding</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>horizontalGutter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      containerStyle<span class="token punctuation">.</span>marginLeft <span class="token operator">=</span> <span class="token operator">-</span>horizontalGutter<span class="token punctuation">;</span>
      containerStyle<span class="token punctuation">.</span>marginRight <span class="token operator">=</span> <span class="token operator">-</span>horizontalGutter<span class="token punctuation">;</span>
      itemStyle<span class="token punctuation">.</span>paddingLeft <span class="token operator">=</span> horizontalGutter<span class="token punctuation">;</span>
      itemStyle<span class="token punctuation">.</span>paddingRight <span class="token operator">=</span> horizontalGutter<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>verticalGutter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      containerStyle<span class="token punctuation">.</span>marginTop <span class="token operator">=</span> <span class="token operator">-</span>verticalGutter<span class="token punctuation">;</span>
      containerStyle<span class="token punctuation">.</span>marginBottom <span class="token operator">=</span> <span class="token operator">-</span>verticalGutter<span class="token punctuation">;</span>
      itemStyle<span class="token punctuation">.</span>paddingTop <span class="token operator">=</span> verticalGutter<span class="token punctuation">;</span>
      itemStyle<span class="token punctuation">.</span>paddingBottom <span class="token operator">=</span> verticalGutter<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span> containerStyle<span class="token punctuation">,</span> itemStyle <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> styleName<span class="token punctuation">,</span> props <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> className<span class="token punctuation">,</span> align<span class="token punctuation">,</span> justify<span class="token punctuation">,</span> direction<span class="token punctuation">,</span> wrap<span class="token punctuation">,</span> children <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> containerStyle<span class="token punctuation">,</span> itemStyle <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getSizeStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> rootClass <span class="token operator">=</span> <span class="token function">classNames</span><span class="token punctuation">(</span>styleName<span class="token punctuation">,</span> className<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>styleName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>align<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span><span class="token operator">:</span> align<span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>styleName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>justify<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span><span class="token operator">:</span> justify<span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>styleName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>direction<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span><span class="token operator">:</span> direction<span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>styleName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-wrap</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span><span class="token operator">:</span> direction <span class="token operator">===</span> <span class="token string">&#39;horizontal&#39;</span> <span class="token operator">&amp;&amp;</span> wrap
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span>rootClass<span class="token punctuation">}</span> style<span class="token operator">=</span><span class="token punctuation">{</span>containerStyle<span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token punctuation">{</span>children <span class="token operator">&amp;&amp;</span>
          React<span class="token punctuation">.</span>Children<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>children<span class="token punctuation">,</span> <span class="token punctuation">(</span>child<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactElement<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>styleName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-item</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span> style<span class="token operator">=</span><span class="token punctuation">{</span>itemStyle<span class="token punctuation">}</span><span class="token operator">&gt;</span>
              <span class="token punctuation">{</span>child<span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
          <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3),e=[o];function c(l,u,i,k,r,d){return a(),s("div",null,e)}var g=n(p,[["render",c]]);export{m as __pageData,g as default};
