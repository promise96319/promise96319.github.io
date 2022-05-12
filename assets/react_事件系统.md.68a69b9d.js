import{_ as n,c as s,o as a,a as t}from"./app.943409a9.js";const g='{"title":"\u865A\u62DF\u4E8B\u4EF6\u7CFB\u7EDF\u5B9E\u73B0","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5F00\u59CB","slug":"\u5F00\u59CB"},{"level":2,"title":"EventRegistry.js","slug":"eventregistry-js"},{"level":3,"title":"registerDirectEvent","slug":"registerdirectevent"},{"level":3,"title":"registerTwoPhaseEvent","slug":"registertwophaseevent"},{"level":2,"title":"registerEvents","slug":"registerevents"},{"level":3,"title":"SimpleEventPlugin","slug":"simpleeventplugin"},{"level":3,"title":"EnterLeaveEventPlugin","slug":"enterleaveeventplugin"},{"level":3,"title":"ChangeEventPlugin","slug":"changeeventplugin"},{"level":3,"title":"SelectEventPlugin","slug":"selecteventplugin"},{"level":3,"title":"BeforeInputEventPlugin","slug":"beforeinputeventplugin"},{"level":3,"title":"\u6700\u540E","slug":"\u6700\u540E"},{"level":2,"title":"listenToAllSupportedEvents","slug":"listentoallsupportedevents"},{"level":2,"title":"dispatchEvent","slug":"dispatchevent"},{"level":2,"title":"dispatchEventForPluginEventSystem","slug":"dispatcheventforplugineventsystem"},{"level":3,"title":"extractEvents","slug":"extractevents"},{"level":3,"title":"createSyntheticEvent","slug":"createsyntheticevent"},{"level":3,"title":"processDispatchQueue","slug":"processdispatchqueue"},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3"},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003"}],"relativePath":"react/\u4E8B\u4EF6\u7CFB\u7EDF.md","lastUpdated":1652364123000}',p={},e=t(`<h1 id="\u865A\u62DF\u4E8B\u4EF6\u7CFB\u7EDF\u5B9E\u73B0" tabindex="-1">\u865A\u62DF\u4E8B\u4EF6\u7CFB\u7EDF\u5B9E\u73B0 <a class="header-anchor" href="#\u865A\u62DF\u4E8B\u4EF6\u7CFB\u7EDF\u5B9E\u73B0" aria-hidden="true">#</a></h1><h2 id="\u5F00\u59CB" tabindex="-1">\u5F00\u59CB <a class="header-anchor" href="#\u5F00\u59CB" aria-hidden="true">#</a></h2><p>\u5728<code>React\u6E90\u7801\u5F00\u7BC7</code>\u7AE0\u8282\u4E2D\u63D0\u5230\uFF0C\u5F53\u4F7F\u7528<code>createRoot</code>\u7684\u65F6\u5019\uFF0C\u5185\u90E8\u4F1A\u8C03\u7528<code>listenToAllSupportedEvents</code>\u65B9\u6CD5\u3002\u8BE5\u65B9\u6CD5\u5728<code>React-Dom/src/events/DOMPluginEventSystem.js</code>\u6587\u4EF6\u4E2D\u5B9A\u4E49\u3002\u6240\u6709<code>React</code>\u865A\u62DF\u4E8B\u4EF6\u5B9A\u4E49\u7684\u5185\u5BB9\u90FD\u662F\u5728<code>events</code>\u8FD9\u4E2A\u6587\u4EF6\u5939\u4E0B\u7684\u3002\u9996\u5148\u770B\u4E00\u4E0B<code>DOMPluginEventSystem.js</code>\u6587\u4EF6\uFF0C\u5F53\u9996\u6B21\u5F15\u5165\u8BE5\u6587\u4EF6\u7684\u65F6\u5019\uFF0C\u4F1A\u6267\u884C\u4EE5\u4E0B\u65B9\u6CD5\uFF1A</p><div class="language-javascript"><pre><code>SimpleEventPlugin<span class="token punctuation">.</span><span class="token function">registerEvents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
EnterLeaveEventPlugin<span class="token punctuation">.</span><span class="token function">registerEvents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ChangeEventPlugin<span class="token punctuation">.</span><span class="token function">registerEvents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
SelectEventPlugin<span class="token punctuation">.</span><span class="token function">registerEvents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
BeforeInputEventPlugin<span class="token punctuation">.</span><span class="token function">registerEvents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u8FD9\u4E9B\u65B9\u6CD5\u5747\u5728<code>events/plugins</code>\u6587\u4EF6\u5939\u4E0B\u5B9A\u4E49\u3002</p><h2 id="eventregistry-js" tabindex="-1">EventRegistry.js <a class="header-anchor" href="#eventregistry-js" aria-hidden="true">#</a></h2><p>\u5728\u8BA8\u8BBA\u4E0A\u8FF05\u4E2A<code>registerEvents</code>\u4E4B\u524D\uFF0C\u5148\u770B\u4E00\u4E0B<code>EventRegistry.js</code>\u6587\u4EF6\u3002\u91CC\u9762\u4E3B\u8981\u5B9A\u4E49\u4E86\u4E24\u4E2A\u51FD\u6570\uFF1A</p><h3 id="registerdirectevent" tabindex="-1">registerDirectEvent <a class="header-anchor" href="#registerdirectevent" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">registerDirectEvent</span><span class="token punctuation">(</span>
  <span class="token comment">// react \u91CC\u9762\u7684\u4E8B\u4EF6\u540D\u79F0 </span>
  <span class="token literal-property property">registrationName</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token comment">// \u771F\u5B9E\u8282\u70B9\u7684\u539F\u751F\u4E8B\u4EF6\u540D\u79F0[\u6570\u7EC4]</span>
  <span class="token literal-property property">dependencies</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>DOMEventName<span class="token operator">&gt;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  registrationNameDependencies<span class="token punctuation">[</span>registrationName<span class="token punctuation">]</span> <span class="token operator">=</span> dependencies<span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> dependencies<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    allNativeEvents<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>dependencies<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8BE5\u51FD\u6570\u4E3B\u8981\u505A\u4E86\u4E24\u4EF6\u4E8B\uFF1A</p><ul><li>\u5EFA\u7ACB<code>registrationName</code>\u548C<code>dependencies</code>\u7684\u6620\u5C04\u5173\u7CFB\uFF0C\u5E76\u5B58\u653E\u5230<code>registrationNameDependencies</code>\u4E2D\u3002</li><li>\u5C06\u6240\u6709\u6620\u5C04\u8FC7\u7684<code>dependencies</code>\u6328\u4E2A\u6DFB\u52A0\u5230<code>allNativeEvents</code>\u4E2D</li></ul><h3 id="registertwophaseevent" tabindex="-1">registerTwoPhaseEvent <a class="header-anchor" href="#registertwophaseevent" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">registerTwoPhaseEvent</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">registrationName</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token literal-property property">dependencies</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>DOMEventName<span class="token operator">&gt;</span><span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token function">registerDirectEvent</span><span class="token punctuation">(</span>registrationName<span class="token punctuation">,</span> dependencies<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">registerDirectEvent</span><span class="token punctuation">(</span>registrationName <span class="token operator">+</span> <span class="token string">&#39;Capture&#39;</span><span class="token punctuation">,</span> dependencies<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8BE5\u51FD\u6570\u8C03\u7528\u4E24\u6B21<code>registerDirectEvent</code>\u51FD\u6570\uFF0C\u7B2C\u4E8C\u6B21\u8C03\u7528\u4E3A\u6CE8\u518C\u7684\u4E8B\u4EF6\u589E\u52A0\u4E86<code>Capture</code>\u540E\u7F00\u3002</p><h2 id="registerevents" tabindex="-1">registerEvents <a class="header-anchor" href="#registerevents" aria-hidden="true">#</a></h2><p>\u518D\u6765\u770B\u4E0B5\u4E2A<code>registerEvenets</code>\u7684\u5B9E\u73B0\u3002</p><h3 id="simpleeventplugin" tabindex="-1">SimpleEventPlugin <a class="header-anchor" href="#simpleeventplugin" aria-hidden="true">#</a></h3><p><code>SimpleEventPlugin.registerEvents</code>\u8C03\u7528\u7684\u662F<code>registerSimpleEvents</code>\u65B9\u6CD5\uFF0C\u5728<code>DomEventsProperties.js</code>\u6587\u4EF6\u4E2D\u5B9A\u4E49\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">registerSimpleEvents</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> simpleEventPluginEvents<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> eventName <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>simpleEventPluginEvents<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> domEventName <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>eventName<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token operator">:</span> DOMEventName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> capitalizedEvent <span class="token operator">=</span> eventName<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> eventName<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">registerSimpleEvent</span><span class="token punctuation">(</span>domEventName<span class="token punctuation">,</span> <span class="token string">&#39;on&#39;</span> <span class="token operator">+</span> capitalizedEvent<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// Special cases where event names don&#39;t match.</span>
  <span class="token function">registerSimpleEvent</span><span class="token punctuation">(</span><span class="token constant">ANIMATION_END</span><span class="token punctuation">,</span> <span class="token string">&#39;onAnimationEnd&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">registerSimpleEvent</span><span class="token punctuation">(</span><span class="token constant">ANIMATION_ITERATION</span><span class="token punctuation">,</span> <span class="token string">&#39;onAnimationIteration&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">registerSimpleEvent</span><span class="token punctuation">(</span><span class="token constant">ANIMATION_START</span><span class="token punctuation">,</span> <span class="token string">&#39;onAnimationStart&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">registerSimpleEvent</span><span class="token punctuation">(</span><span class="token string">&#39;dblclick&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;onDoubleClick&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">registerSimpleEvent</span><span class="token punctuation">(</span><span class="token string">&#39;focusin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;onFocus&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">registerSimpleEvent</span><span class="token punctuation">(</span><span class="token string">&#39;focusout&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;onBlur&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">registerSimpleEvent</span><span class="token punctuation">(</span><span class="token constant">TRANSITION_END</span><span class="token punctuation">,</span> <span class="token string">&#39;onTransitionEnd&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>simpleEventPluginEvents</code>\u662F\u539F\u751F\u4E8B\u4EF6\u7EC4\u6210\u7684\u4E00\u4E2A\u6570\u7EC4\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">const</span> simpleEventPluginEvents <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">&#39;close&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;copy&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;cut&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;drag&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;mouseDown&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// ... \u7B49\u7B49\u4E00\u7CFB\u5217\u7684\u539F\u751F\u4E8B\u4EF6</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div><p><code>capitalizedEvent</code>\u5C31\u662F\u5C06\u539F\u751F\u4E8B\u4EF6\u540D\u79F0\u7684\u7B2C\u4E00\u4E2A\u5B57\u6BCD\u5927\u5199\uFF0C\u7136\u540E\u8C03\u7528<code>registerSimpleEvent</code>\u65B9\u6CD5\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">function</span> <span class="token function">registerSimpleEvent</span><span class="token punctuation">(</span><span class="token parameter">domEventName<span class="token punctuation">,</span> reactName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  topLevelEventsToReactNames<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>domEventName<span class="token punctuation">,</span> reactName<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">registerTwoPhaseEvent</span><span class="token punctuation">(</span>reactName<span class="token punctuation">,</span> <span class="token punctuation">[</span>domEventName<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u9996\u5148\u4F1A\u5C06\u539F\u751F\u4E8B\u4EF6\u540D\u79F0<code>domEventName</code>\u548C<code>React</code>\u5408\u6210\u4E8B\u4EF6\u540D\u79F0<code>reactName</code>\u5B58\u653E\u5230<code>topLevelEventsToReactNames</code>\u4E2D\u3002\u968F\u540E\u901A\u8FC7<code>registerTwoPhaseEvent</code>\u5EFA\u7ACB\u4E24\u8005\u4E4B\u95F4\u7684\u5173\u7CFB\u3002\u62FF<code>click</code>\u6765\u4E3E\u4F8B\uFF0C\u6CE8\u518C\u540E\u6709\uFF1A</p><div class="language-javascript"><pre><code><span class="token comment">// \u539F\u751F\u4E8B\u4EF6 click</span>
domEventName <span class="token operator">=</span> <span class="token string">&#39;click&#39;</span>
<span class="token comment">// \u5F97\u5230 react \u7684\u4E8B\u4EF6\u540D\u79F0</span>
reactName <span class="token operator">=</span> <span class="token string">&#39;onClick&#39;</span>
<span class="token comment">// \u7ECF\u8FC7registerTwoPhaseEvent\u7ED1\u5B9A\u5173\u7CFB\u540E</span>
registrationNameDependencies <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;onClick&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;onClickCapture&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
allNativeEvents <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="enterleaveeventplugin" tabindex="-1">EnterLeaveEventPlugin <a class="header-anchor" href="#enterleaveeventplugin" aria-hidden="true">#</a></h3><p>\u6CE8\u518C<code>mouseout/mouseover</code>\u7B49\u4E8B\u4EF6\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">function</span> <span class="token function">registerEvents</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">registerDirectEvent</span><span class="token punctuation">(</span><span class="token string">&#39;onMouseEnter&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;mouseout&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;mouseover&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">registerDirectEvent</span><span class="token punctuation">(</span><span class="token string">&#39;onMouseLeave&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;mouseout&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;mouseover&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">registerDirectEvent</span><span class="token punctuation">(</span><span class="token string">&#39;onPointerEnter&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;pointerout&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;pointerover&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">registerDirectEvent</span><span class="token punctuation">(</span><span class="token string">&#39;onPointerLeave&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;pointerout&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;pointerover&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="changeeventplugin" tabindex="-1">ChangeEventPlugin <a class="header-anchor" href="#changeeventplugin" aria-hidden="true">#</a></h3><p>\u6CE8\u518C<code>onChange</code>\u4E8B\u4EF6\uFF0C\u8FD9\u4E2A\u4E8B\u4EF6\u5BF9\u5E94\u4E86\u591A\u4E2A\u539F\u751F\u4E8B\u4EF6\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">function</span> <span class="token function">registerEvents</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">registerTwoPhaseEvent</span><span class="token punctuation">(</span><span class="token string">&#39;onChange&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;change&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;focusin&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;focusout&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;keydown&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;keyup&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;selectionchange&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="selecteventplugin" tabindex="-1">SelectEventPlugin <a class="header-anchor" href="#selecteventplugin" aria-hidden="true">#</a></h3><p>\u6CE8\u518C<code>onSelect</code>\u4E8B\u4EF6\uFF0C\u8FD9\u4E2A\u4E8B\u4EF6\u5BF9\u5E94\u4E86\u591A\u4E2A\u539F\u751F\u4E8B\u4EF6\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">function</span> <span class="token function">registerEvents</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">registerTwoPhaseEvent</span><span class="token punctuation">(</span><span class="token string">&#39;onSelect&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;focusout&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;contextmenu&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;dragend&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;focusin&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;keydown&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;keyup&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;mousedown&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;mouseup&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;selectionchange&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="beforeinputeventplugin" tabindex="-1">BeforeInputEventPlugin <a class="header-anchor" href="#beforeinputeventplugin" aria-hidden="true">#</a></h3><p>\u6CE8\u518C\u4E86\u591A\u4E2A\u5408\u6210\u4E8B\u4EF6\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">function</span> <span class="token function">registerEvents</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">registerTwoPhaseEvent</span><span class="token punctuation">(</span><span class="token string">&#39;onBeforeInput&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;compositionend&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;keypress&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;textInput&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;paste&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">registerTwoPhaseEvent</span><span class="token punctuation">(</span><span class="token string">&#39;onCompositionEnd&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;compositionend&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;focusout&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;keydown&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;keypress&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;keyup&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;mousedown&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">registerTwoPhaseEvent</span><span class="token punctuation">(</span><span class="token string">&#39;onCompositionStart&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;compositionstart&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;focusout&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;keydown&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;keypress&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;keyup&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;mousedown&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">registerTwoPhaseEvent</span><span class="token punctuation">(</span><span class="token string">&#39;onCompositionUpdate&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;compositionupdate&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;focusout&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;keydown&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;keypress&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;keyup&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;mousedown&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u6700\u540E" tabindex="-1">\u6700\u540E <a class="header-anchor" href="#\u6700\u540E" aria-hidden="true">#</a></h3><p>\u6267\u884C\u5B8C\u4EE5\u4E0A5\u4E2A\u6CE8\u518C\u51FD\u6570\u540E\uFF0C<code>allNativeEvents</code>\u4F1A\u8BB0\u5F55\u6240\u6709\u5DF2\u6CE8\u518C\u7684\u539F\u751F\u4E8B\u4EF6\u3002<code>registrationNameDependencies</code>\u5219\u8BB0\u5F55\u6240\u6709\u539F\u751F\u4E8B\u4EF6\u548C<code>React</code>\u5408\u6210\u4E8B\u4EF6\u4E4B\u95F4\u7684\u5173\u7CFB\u3002</p><h2 id="listentoallsupportedevents" tabindex="-1">listenToAllSupportedEvents <a class="header-anchor" href="#listentoallsupportedevents" aria-hidden="true">#</a></h2><p><code>listenToAllSupportedEvents</code>\u5F00\u59CB\u771F\u6B63\u76D1\u542C\u539F\u751F\u4E8B\u4EF6\u3002\u9996\u5148\u4F1A\u5224\u65AD\u6709\u6CA1\u6709\u6CE8\u518C\u8FC7\uFF0C\u4FDD\u8BC1\u539F\u751F\u4E8B\u4EF6\u53EA\u4F1A\u6CE8\u518C\u4E00\u6B21\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>rootContainerElement<span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token punctuation">[</span>listeningMarker<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>rootContainerElement<span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token punctuation">[</span>listeningMarker<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u7136\u540E\u5F00\u59CB\u904D\u5386\u539F\u751F\u4E8B\u4EF6\uFF0C\u8FDB\u884C\u76D1\u542C\uFF1A</p><div class="language-javascript"><pre><code>allNativeEvents<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">domEventName</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>nonDelegatedEvents<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>domEventName<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">listenToNativeEvent</span><span class="token punctuation">(</span>domEventName<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> rootContainerElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">listenToNativeEvent</span><span class="token punctuation">(</span>domEventName<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> rootContainerElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>selectionchange</code>\u4E8B\u4EF6\u4E0D\u4F1A\u8FDB\u884C\u4E8B\u4EF6\u5192\u6CE1\uFF0C\u9700\u8981\u5355\u72EC\u5728<code>document</code>\u4E0A\u6CE8\u518C\u3002\u800C\u5176\u4ED6\u4E8B\u4EF6\u5219\u901A\u8FC7<code>listenToNativeEvent</code>\u51FD\u6570\u6CE8\u518C\u3002</p><div class="language-javascript"><pre><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">listenToNativeEvent</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">domEventName</span><span class="token operator">:</span> DOMEventName<span class="token punctuation">,</span>
  <span class="token literal-property property">isCapturePhaseListener</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>
  <span class="token literal-property property">target</span><span class="token operator">:</span> EventTarget<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> eventSystemFlags <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token comment">// \u662F\u5426\u662F\u6355\u6349\u4E8B\u4EF6\u9636\u6BB5</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isCapturePhaseListener<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    eventSystemFlags <span class="token operator">|=</span> <span class="token constant">IS_CAPTURE_PHASE</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">addTrappedEventListener</span><span class="token punctuation">(</span>
    target<span class="token punctuation">,</span>
    domEventName<span class="token punctuation">,</span>
    eventSystemFlags<span class="token punctuation">,</span>
    isCapturePhaseListener<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>addTrappedEventListener</code>\u51FD\u6570\u9996\u5148\u4F1A\u6839\u636E\u4E8B\u4EF6\u7684\u540D\u79F0\u83B7\u53D6\u76F8\u5E94\u7684\u4F18\u5148\u7EA7\uFF0C\u7136\u540E\u5C06<code>listener</code>\u5305\u88C5\u6210\u6309\u4F18\u5148\u7EA7\u6267\u884C\u7684<code>listener</code>\u3002</p><div class="language-javascript"><pre><code><span class="token comment">// \u901A\u8FC7\u4E8B\u4EF6\u540D\u79F0\uFF0C\u8BBE\u7F6E\u4E0D\u540C\u7684\u4F18\u5148\u7EA7  </span>
<span class="token keyword">let</span> listener <span class="token operator">=</span> <span class="token function">createEventListenerWrapperWithPriority</span><span class="token punctuation">(</span>
  targetContainer<span class="token punctuation">,</span>
  domEventName<span class="token punctuation">,</span>
  eventSystemFlags<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><code>createEventListenerWrapperWithPriority</code>\u51FD\u6570\u7684\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createEventListenerWrapperWithPriority</span><span class="token punctuation">(</span>
<span class="token parameter"><span class="token literal-property property">targetContainer</span><span class="token operator">:</span> EventTarget<span class="token punctuation">,</span>
 <span class="token literal-property property">domEventName</span><span class="token operator">:</span> DOMEventName<span class="token punctuation">,</span>
 <span class="token literal-property property">eventSystemFlags</span><span class="token operator">:</span> EventSystemFlags<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> Function <span class="token punctuation">{</span>
  <span class="token comment">// \u83B7\u53D6\u4E8B\u4EF6\u4F18\u5148\u7EA7</span>
  <span class="token keyword">const</span> eventPriority <span class="token operator">=</span> <span class="token function">getEventPriority</span><span class="token punctuation">(</span>domEventName<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> listenerWrapper<span class="token punctuation">;</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>eventPriority<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token literal-property property">DiscreteEventPriority</span><span class="token operator">:</span>
      listenerWrapper <span class="token operator">=</span> dispatchDiscreteEvent<span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token literal-property property">ContinuousEventPriority</span><span class="token operator">:</span>
      listenerWrapper <span class="token operator">=</span> dispatchContinuousEvent<span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token literal-property property">DefaultEventPriority</span><span class="token operator">:</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      listenerWrapper <span class="token operator">=</span> dispatchEvent<span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u8FD4\u56DE\u5305\u88C5\u4E86\u4F18\u5148\u7EA7\u7684listener</span>
  <span class="token keyword">return</span> <span class="token function">listenerWrapper</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>
    <span class="token keyword">null</span><span class="token punctuation">,</span>
    domEventName<span class="token punctuation">,</span>
    eventSystemFlags<span class="token punctuation">,</span>
    targetContainer<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>getEventPriority</code>\u5B9A\u4E49\u5982\u4E0B\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getEventPriority</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">domEventName</span><span class="token operator">:</span> DOMEventName</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token operator">*</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>domEventName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&#39;click&#39;</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token string">&#39;keydown&#39;</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token string">&#39;mouseup&#39;</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token string">&#39;paste&#39;</span><span class="token operator">:</span>
    <span class="token comment">// ... \u7B49\u7B49\u4E00\u7CFB\u5217\u4E8B\u4EF6</span>
    <span class="token comment">// \u5747\u4E3A\u540C\u6B65\u4F18\u5148\u7EA7</span>
    <span class="token keyword">return</span> DiscreteEventPriority<span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&#39;drag&#39;</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token string">&#39;mousemove&#39;</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token string">&#39;pointermove&#39;</span><span class="token operator">:</span>
    <span class="token comment">// ... \u7B49\u7B49\u4E00\u7CFB\u5217\u4E8B\u4EF6</span>
    <span class="token comment">// \u5747\u4E3A\u8FDE\u7EED\u4E8B\u4EF6\u4F18\u5148\u7EA7</span>
    <span class="token keyword">return</span> ContinuousEventPriority<span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&#39;message&#39;</span><span class="token operator">:</span> 
    <span class="token comment">//  ... \u83B7\u53D6 scheduler callback \u7684\u4F18\u5148\u7EA7</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
    <span class="token keyword">return</span> DefaultEventPriority<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8BE5\u51FD\u6570\u4E3B\u8981\u5C06\u539F\u751F\u4E8B\u4EF6\u5206\u4E3A\u4E86<code>DiscreteEventPriority</code>\u548C<code>ContinuousEventPriority</code>\u4E24\u5927\u7C7B\u3002</p><p>\u5305\u88C5\u540E\u7684<code>dispatchDiscreteEvent</code>\u548C<code>dispatchContinuousEvent</code>\u5219\u662F\u5728\u6267\u884C\u4EE3\u7801\u524D\u4F1A\u8BBE\u7F6E\u5168\u5C40\u7684\u4F18\u5148\u7EA7\uFF0C\u8FD9\u6837\u5728\u66F4\u65B0\u7684\u65F6\u5019\u901A\u8FC7<code>requestUpdateLane</code>\u53EF\u4EE5\u83B7\u53D6\u5230\u66F4\u65B0\u5BF9\u5E94\u7684\u4F18\u5148\u7EA7\u3002\u4F8B\u5982\uFF1A</p><div class="language-javascript"><pre><code>ReactCurrentBatchConfig<span class="token punctuation">.</span>transition <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token function">setCurrentUpdatePriority</span><span class="token punctuation">(</span>DiscreteEventPriority<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">dispatchEvent</span><span class="token punctuation">(</span>domEventName<span class="token punctuation">,</span> eventSystemFlags<span class="token punctuation">,</span> container<span class="token punctuation">,</span> nativeEvent<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u8FD9\u91CC\u7684<code>dispatchEvent</code>\u5C31\u662F\u4E8B\u4EF6\u56DE\u8C03\u6267\u884C\u7684\u5185\u5BB9\uFF0C\u540E\u9762\u4F1A\u63D0\u5230\u3002</p><p>\u5305\u88C5\u5B8C<code>listener</code>\u540E\u5C31\u9700\u8981\u7ED9<code>DOM</code>\u8282\u70B9\u6DFB\u52A0\u539F\u751F\u4E8B\u4EF6\u4E86\uFF0C\u8FD9\u4E2A<code>DOM</code>\u8282\u70B9\u5C31\u662F<code>container</code>\uFF0C\u5373<code>React</code>\u6E32\u67D3\u5185\u5BB9\u7684\u5BB9\u5668\u3002</p><div class="language-javascript"><pre><code><span class="token keyword">if</span> <span class="token punctuation">(</span>isCapturePhaseListener<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u6355\u6349\u4E8B\u4EF6\u9636\u6BB5</span>
  unsubscribeListener <span class="token operator">=</span> <span class="token function">addEventCaptureListener</span><span class="token punctuation">(</span>
    targetContainer<span class="token punctuation">,</span>
    domEventName<span class="token punctuation">,</span>
    listener<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5192\u6CE1\u9636\u6BB5\u9636\u6BB5</span>
  unsubscribeListener <span class="token operator">=</span> <span class="token function">addEventBubbleListener</span><span class="token punctuation">(</span>
    targetContainer<span class="token punctuation">,</span>
    domEventName<span class="token punctuation">,</span>
    listener<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5206\u522B\u8C03\u7528<code>DOM</code>\u7684\u539F\u751F\u65B9\u6CD5\u76D1\u542C\u539F\u751F\u6355\u83B7\u4E8B\u4EF6\u548C\u5192\u6CE1\u4E8B\u4EF6\uFF1A</p><div class="language-javascript"><pre><code><span class="token comment">// \u5192\u6CE1\u4E8B\u4EF6 </span>
target<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>eventType<span class="token punctuation">,</span> listener<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u6355\u83B7\u4E8B\u4EF6</span>
target<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>eventType<span class="token punctuation">,</span> listener<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="dispatchevent" tabindex="-1">dispatchEvent <a class="header-anchor" href="#dispatchevent" aria-hidden="true">#</a></h2><p>\u5F53\u771F\u5B9E\u70B9\u51FB\u4E8B\u4EF6\u89E6\u53D1\u65F6\uFF0C\u4F1A\u8C03\u7528\u76D1\u542C\u51FD\u6570<code>dispatchEvent</code>\uFF0C\u8BE5\u51FD\u6570\u8C03\u7528<code>attemptToDispatchEvent</code>\u51FD\u6570\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">attemptToDispatchEvent</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">domEventName</span><span class="token operator">:</span> DOMEventName<span class="token punctuation">,</span>
  <span class="token literal-property property">eventSystemFlags</span><span class="token operator">:</span> EventSystemFlags<span class="token punctuation">,</span>
  <span class="token literal-property property">targetContainer</span><span class="token operator">:</span> EventTarget<span class="token punctuation">,</span>
  <span class="token literal-property property">nativeEvent</span><span class="token operator">:</span> AnyNativeEvent<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> Container <span class="token operator">|</span> SuspenseInstance <span class="token punctuation">{</span>
  <span class="token comment">// TODO: Warn if _enabled is false.</span>

  <span class="token comment">// 1. \u6839\u636E\u4E8B\u4EF6\u83B7\u53D6\u5230\u89E6\u53D1\u8BE5\u4E8B\u4EF6\u7684 \u76EE\u6807\u8282\u70B9</span>
  <span class="token keyword">const</span> nativeEventTarget <span class="token operator">=</span> <span class="token function">getEventTarget</span><span class="token punctuation">(</span>nativeEvent<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 2. \u901A\u8FC7\u771F\u5B9E\u8282\u70B9\u627E\u5230\u6700\u8FD1\u7684 fiber</span>
  <span class="token keyword">let</span> targetInst <span class="token operator">=</span> <span class="token function">getClosestInstanceFromNode</span><span class="token punctuation">(</span>nativeEventTarget<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>targetInst <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 3. \u5982\u679C fiber \u5B58\u5728\uFF0C\u770B\u662F\u5426\u5DF2\u7ECF\u6302\u8F7D\u4E14\u5728 HostRoot \u5185\u90E8\uFF0C\u786E\u4FDDfiber\u5408\u9002\u3002</span>
    <span class="token keyword">const</span> nearestMounted <span class="token operator">=</span> <span class="token function">getNearestMountedFiber</span><span class="token punctuation">(</span>targetInst<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nearestMounted <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      targetInst <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// ...\u5176\u4ED6\u5904\u7406</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 4. \u89E6\u53D1\u56DE\u8C03</span>
  <span class="token function">dispatchEventForPluginEventSystem</span><span class="token punctuation">(</span>
    domEventName<span class="token punctuation">,</span>
    eventSystemFlags<span class="token punctuation">,</span>
    nativeEvent<span class="token punctuation">,</span>
    targetInst<span class="token punctuation">,</span>
    targetContainer<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u9996\u5148\u4F1A\u6839\u636E\u539F\u751F\u4E8B\u4EF6\u89E6\u53D1\u65F6\u7684<code>event</code>\u83B7\u53D6\u5230\u76F8\u5E94\u7684\u89E6\u53D1\u65F6\u7684\u76EE\u6807\u5143\u7D20\u3002\u968F\u540E\u6839\u636E\u771F\u5B9E\u8282\u70B9\u627E\u5230\u5BF9\u5E94\u7684<code>fiber</code>\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getClosestInstanceFromNode</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">targetNode</span><span class="token operator">:</span> Node</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> Fiber <span class="token punctuation">{</span>
  <span class="token keyword">let</span> targetInst <span class="token operator">=</span> <span class="token punctuation">(</span>targetNode<span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token punctuation">[</span>internalInstanceKey<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>targetInst<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> targetInst<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
	<span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5728<code>completeWork</code>\u9636\u6BB5\u521B\u5EFA\u771F\u5B9E\u8282\u70B9\u65F6\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createInstance</span><span class="token punctuation">(</span>
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
  <span class="token comment">// node . &#39;__reactFiber$&#39; + randomKey = fiber</span>
  <span class="token function">precacheFiberNode</span><span class="token punctuation">(</span>internalInstanceHandle<span class="token punctuation">,</span> domElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// node . &#39;__reactProps$&#39; + randomKey = props</span>
  <span class="token function">updateFiberProps</span><span class="token punctuation">(</span>domElement<span class="token punctuation">,</span> props<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> domElement<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4F1A\u6267\u884C<code>precacheFiberNode</code>\u65B9\u6CD5\u548C<code>updateFiberProps</code>\u65B9\u6CD5\uFF0C\u5728\u771F\u5B9E<code>DOM</code>\u8282\u70B9\u4E0A\u5B58\u653E<code>fiber</code>\u548C<code>props</code>\uFF0C\u56E0\u6B64\u4E8B\u4EF6\u89E6\u53D1\u65F6\u53EF\u4EE5\u83B7\u53D6\u5230\u5BF9\u5E94\u7684<code>fiber</code>\u3002\u62FF\u5230\u5408\u9002\u7684<code>fiber</code>\u540E\u5C31\u53EF\u4EE5\u5F00\u59CB\u89E6\u53D1<code>fiber</code>\u4E0A<code>props</code>\u91CC\u7684\u4E8B\u4EF6\u4E86\u3002</p><h2 id="dispatcheventforplugineventsystem" tabindex="-1">dispatchEventForPluginEventSystem <a class="header-anchor" href="#dispatcheventforplugineventsystem" aria-hidden="true">#</a></h2><p>\u5BF9\u4E8E\u80FD\u591F\u8FDB\u884C\u4E8B\u4EF6\u5192\u6CE1\u7684\u4E8B\u4EF6\uFF0C\u901A\u5E38\u4F1A\u6267\u884C\u4E0B\u5217\u5206\u652F\u4EE3\u7801\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">if</span> <span class="token punctuation">(</span>
  <span class="token punctuation">(</span>eventSystemFlags <span class="token operator">&amp;</span> <span class="token constant">IS_EVENT_HANDLE_NON_MANAGED_NODE</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>
  <span class="token punctuation">(</span>eventSystemFlags <span class="token operator">&amp;</span> <span class="token constant">IS_NON_DELEGATED</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><p>\u8BE5\u5206\u652F\u4F1A\u5411\u4E0A\u904D\u5386<code>fiber</code>\uFF0C\u5982\u679C\u9047\u5230\u4E86<code>HostRoot</code>\u6216\u8005<code>HostPortal</code>\uFF0C\u5E76\u4E14<code>container</code>\u662F\u4E00\u81F4\u7684\uFF1A</p><div class="language-javascript"><pre><code><span class="token function">isMatchingRootContainer</span><span class="token punctuation">(</span>container<span class="token punctuation">,</span> targetContainerNode<span class="token punctuation">)</span>
</code></pre></div><p>\u90A3\u4E48\u8BF4\u660E\u8BE5\u4E8B\u4EF6\u662F\u5728<code>container</code>\u5185\u90E8\u89E6\u53D1\u7684\uFF0C\u53EF\u4EE5\u76F4\u63A5\u89E6\u53D1\u56DE\u8C03\u3002\u8FD9\u91CC\u4E3A\u4EC0\u4E48<code>container</code>\u4E3A<code>HostPortal</code>\u4E5F\u80FD\u76D1\u542C\u4E8B\u4EF6\u5462\uFF1F\u56E0\u4E3A\u5728<code>completeWork</code>\u9636\u6BB5\u6709\u8FD9\u6837\u4E00\u884C\u4EE3\u7801-<code>preparePortalMount</code>:</p><div class="language-javascript"><pre><code><span class="token keyword">case</span> <span class="token literal-property property">HostPortal</span><span class="token operator">:</span>
<span class="token function">popHostContainer</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">updateHostContainer</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">preparePortalMount</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>stateNode<span class="token punctuation">.</span>containerInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">bubbleProperties</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre></div><p>\u5728<code>current</code>\u4E3A<code>null</code>\u7684\u65F6\u5019\uFF0C\u4F1A\u5728<code>portal</code>\u7684<code>container</code>\u4E0A\u76D1\u542C\u539F\u751F\u4E8B\u4EF6\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">preparePortalMount</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">portalInstance</span><span class="token operator">:</span> Instance</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token function">listenToAllSupportedEvents</span><span class="token punctuation">(</span>portalInstance<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u9664\u6B64\u4E4B\u5916\uFF0C\u5982\u679C\u627E\u4E0D\u5230\u6B63\u786E\u7684<code>container</code>\uFF0C\u90A3\u4E48\u5C06\u4E0D\u4F1A\u6267\u884C\u4E8B\u4EF6\u56DE\u8C03\u3002</p><p>\u76D1\u6D4B\u5B8C<code>container</code>\u540E\uFF0C\u5C06\u6267\u884C<code>dispatchEventsForPlugins</code>\u51FD\u6570\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">const</span> nativeEventTarget <span class="token operator">=</span> <span class="token function">getEventTarget</span><span class="token punctuation">(</span>nativeEvent<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token literal-property property">dispatchQueue</span><span class="token operator">:</span> DispatchQueue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">extractEvents</span><span class="token punctuation">(</span>
  dispatchQueue<span class="token punctuation">,</span>
  domEventName<span class="token punctuation">,</span>
  targetInst<span class="token punctuation">,</span>
  nativeEvent<span class="token punctuation">,</span>
  nativeEventTarget<span class="token punctuation">,</span>
  eventSystemFlags<span class="token punctuation">,</span>
  targetContainer<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="extractevents" tabindex="-1">extractEvents <a class="header-anchor" href="#extractevents" aria-hidden="true">#</a></h3><p><code>extractEvents</code>\u65B9\u6CD5\u4F1A\u8C03\u7528<code>SimpleEvents.extractEvents</code>\u3002\u9996\u5148\u83B7\u53D6\u539F\u751F\u4E8B\u4EF6\u5BF9\u5E94\u7684<code>reactName</code>\uFF1A</p><div class="language-javascript"><pre><code><span class="token comment">// 1. \u6839\u636E\u4E8B\u4EF6\u540D\u79F0\uFF0C\u83B7\u53D6 react \u4E2D\u5BF9\u5E94\u7684\u4E8B\u4EF6\u540D\u79F0</span>
<span class="token keyword">const</span> reactName <span class="token operator">=</span> topLevelEventsToReactNames<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>domEventName<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>reactName <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u7136\u540E\u6839\u636E\u539F\u751F\u4E8B\u4EF6\u540D\u79F0\u83B7\u53D6<code>react</code>\u4E2D\u8981\u8FD4\u56DE\u7684\u4E8B\u4EF6\u7684\u53C2\u6570\u7684\u7ED3\u6784\uFF1A</p><div class="language-javascript"><pre><code><span class="token comment">// 2. \u6839\u636E\u4E8B\u4EF6\u540D\u79F0\uFF0C\u83B7\u53D6\u9700\u8981\u8FD4\u56DE\u7684\u5185\u5BB9\u7684\u7ED3\u6784</span>
<span class="token keyword">let</span> SyntheticEventCtor <span class="token operator">=</span> SyntheticEvent<span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token literal-property property">reactEventType</span><span class="token operator">:</span> string <span class="token operator">=</span> domEventName<span class="token punctuation">;</span>
<span class="token keyword">switch</span> <span class="token punctuation">(</span>domEventName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token string">&#39;keydown&#39;</span><span class="token operator">:</span>
  <span class="token keyword">case</span> <span class="token string">&#39;keyup&#39;</span><span class="token operator">:</span>
    SyntheticEventCtor <span class="token operator">=</span> SyntheticKeyboardEvent<span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token string">&#39;focusin&#39;</span><span class="token operator">:</span>
    reactEventType <span class="token operator">=</span> <span class="token string">&#39;focus&#39;</span><span class="token punctuation">;</span>
    SyntheticEventCtor <span class="token operator">=</span> SyntheticFocusEvent<span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token string">&#39;touchcancel&#39;</span><span class="token operator">:</span>
  <span class="token keyword">case</span> <span class="token string">&#39;touchend&#39;</span><span class="token operator">:</span>
  <span class="token keyword">case</span> <span class="token string">&#39;touchmove&#39;</span><span class="token operator">:</span>
  <span class="token keyword">case</span> <span class="token string">&#39;touchstart&#39;</span><span class="token operator">:</span>
    SyntheticEventCtor <span class="token operator">=</span> SyntheticTouchEvent<span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token comment">// ...\u7B49\u7B49\u4E00\u4E9B\u5217\u5408\u6210\u4E8B\u4EF6\u7ED3\u6784</span>
    <span class="token comment">// ...\u7B49\u7B49\u4E00\u4E9B\u5217\u5408\u6210\u4E8B\u4EF6\u7ED3\u6784</span>
    <span class="token comment">// ...\u7B49\u7B49\u4E00\u4E9B\u5217\u5408\u6210\u4E8B\u4EF6\u7ED3\u6784</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="createsyntheticevent" tabindex="-1">createSyntheticEvent <a class="header-anchor" href="#createsyntheticevent" aria-hidden="true">#</a></h3><p>\u5408\u6210\u4E8B\u4EF6\u8FD4\u56DE\u7684\u7ED3\u6784\uFF08\u5373\u81EA\u5B9A\u4E49\u7684\u4E00\u4E2A<code>event</code>\u5BF9\u8C61\uFF09\u901A\u8FC7<code>createSyntheticEvent</code>\u5B9A\u4E49\uFF0C\u5B83\u63A5\u6536\u4E00\u4E2A\u5B9A\u4E49\u597D\u7684\u53C2\u6570\u7ED3\u6784\uFF0C\u7B80\u5316\u540E\u7684\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">function</span> <span class="token function">createSyntheticEvent</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">Interface</span><span class="token operator">:</span> EventInterfaceType</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">SyntheticBaseEvent</span><span class="token punctuation">(</span>
   <span class="token parameter"><span class="token literal-property property">reactName</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
   <span class="token literal-property property">reactEventType</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
   <span class="token literal-property property">targetInst</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
   <span class="token literal-property property">nativeEvent</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">[</span>propName<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> mixed<span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token literal-property property">nativeEventTarget</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> EventTarget<span class="token punctuation">,</span></span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token class-name">SyntheticBaseEvent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A</span>
    <span class="token function-variable function">preventDefault</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>defaultPrevented <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> event <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>nativeEvent<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>preventDefault<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> event<span class="token punctuation">.</span>returnValue <span class="token operator">!==</span> <span class="token string">&#39;unknown&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        event<span class="token punctuation">.</span>returnValue <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>isDefaultPrevented <span class="token operator">=</span> functionThatReturnsTrue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1</span>
    <span class="token function-variable function">stopPropagation</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> event <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>nativeEvent<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>stopPropagation<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        event<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> event<span class="token punctuation">.</span>cancelBubble <span class="token operator">!==</span> <span class="token string">&#39;unknown&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        event<span class="token punctuation">.</span>cancelBubble <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">this</span><span class="token punctuation">.</span>isPropagationStopped <span class="token operator">=</span> functionThatReturnsTrue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> SyntheticBaseEvent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8BE5\u65B9\u6CD5\u5B9A\u4E49\u4E86\u4E00\u4E2A<code>SyntheticBaseEvent</code>\u5BF9\u8C61\uFF0C\u5E76\u5728\u8BE5\u5BF9\u8C61\u4E0A\u6DFB\u52A0\u4E86<code>preventDefault</code>\u65B9\u6CD5\u548C<code>stopPropagation</code>\u65B9\u6CD5\u3002</p><div class="language-javascript"><pre><code><span class="token keyword">function</span> <span class="token function">SyntheticBaseEvent</span><span class="token punctuation">(</span>
  <span class="token comment">// react \u4E2D\u76D1\u542C\u4E8B\u4EF6\u7684\u540D\u79F0</span>
  reactName<span class="token punctuation">,</span>
  <span class="token comment">// \u539F\u751F\u4E8B\u4EF6\u540D\u79F0</span>
  reactEventType<span class="token punctuation">,</span>
  <span class="token comment">// \u89E6\u53D1\u4E8B\u4EF6\u7684\u8282\u70B9\u5BF9\u5E94\u7684 fiber</span>
  targetInst<span class="token punctuation">,</span>
  <span class="token comment">// \u539F\u751F\u4E8B\u4EF6\u89E6\u53D1\u65F6\u8FD4\u56DE\u7684 event \u53C2\u6570</span>
  nativeEvent<span class="token punctuation">,</span>
  <span class="token comment">// \u539F\u751F\u4E8B\u4EF6\u8282\u70B9</span>
  nativeEventTarget<span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>_reactName <span class="token operator">=</span> reactName<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>_targetInst <span class="token operator">=</span> targetInst<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> reactEventType<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>nativeEvent <span class="token operator">=</span> nativeEvent<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>target <span class="token operator">=</span> nativeEventTarget<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>currentTarget <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> propName <span class="token keyword">in</span> Interface<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Interface<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>propName<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">continue</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u5982\u679Cnormalize\u5B58\u5728\uFF0C\u8BF4\u660E\u4ED6\u6709\u81EA\u5B9A\u4E49\u7684\u683C\u5F0F\u5316\u65B9\u6CD5</span>
    <span class="token keyword">const</span> normalize <span class="token operator">=</span> Interface<span class="token punctuation">[</span>propName<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>normalize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">[</span>propName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">normalize</span><span class="token punctuation">(</span>nativeEvent<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5426\u5219\uFF0C\u76F4\u63A5\u4F7F\u7528\u539F\u751F\u7684\u503C</span>
      <span class="token keyword">this</span><span class="token punctuation">[</span>propName<span class="token punctuation">]</span> <span class="token operator">=</span> nativeEvent<span class="token punctuation">[</span>propName<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> defaultPrevented <span class="token operator">=</span>
        nativeEvent<span class="token punctuation">.</span>defaultPrevented <span class="token operator">!=</span> <span class="token keyword">null</span>
  <span class="token operator">?</span> nativeEvent<span class="token punctuation">.</span>defaultPrevented
  <span class="token operator">:</span> nativeEvent<span class="token punctuation">.</span>returnValue <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>defaultPrevented<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>isDefaultPrevented <span class="token operator">=</span> functionThatReturnsTrue<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>isDefaultPrevented <span class="token operator">=</span> functionThatReturnsFalse<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>isPropagationStopped <span class="token operator">=</span> functionThatReturnsFalse<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8BE5\u5BF9\u8C61\u4F1A\u901A\u8FC7\u4E0D\u540C\u7684<code>Interface</code>\u4E3A<code>event</code>\u5BF9\u8C61\u8BBE\u7F6E\u4E0D\u540C\u7684\u5C5E\u6027\uFF0C\u5E76\u4E14\u8FD8\u53EF\u4EE5\u81EA\u5B9A\u4E49\u4E00\u4E9B\u201D\u683C\u5F0F\u5316\u201C\u7684\u51FD\u6570\uFF0C\u65B9\u4FBF\u53D6\u503C\u3002</p><p>\u7D27\u63A5\u7740\u8C03\u7528<code>accumulateSinglePhaseListeners</code>\u8BA1\u7B97\u6240\u6709\u9700\u8981\u89E6\u53D1\u4E8B\u4EF6\u7684<code>listener</code>\uFF0C\u5927\u81F4\u601D\u8DEF\u662F\u4ECE\u4E0B\u5411\u4E0A\u904D\u5386\u627E\u5230\u5408\u9002\u7684\u8282\u70B9\uFF0C\u901A\u8FC7\u8282\u70B9\u521B\u5EFA\u4E00\u4E2A<code>listener</code>\uFF0C\u6700\u540E\u63A8\u5165\u5230\u6570\u7EC4\u5F53\u4E2D\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">if</span> <span class="token punctuation">(</span>tag <span class="token operator">===</span> HostComponent <span class="token operator">&amp;&amp;</span> stateNode <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1. \u5F53\u524D\u904D\u5386\u7684\u771F\u5B9E\u8282\u70B9</span>
  lastHostComponent <span class="token operator">=</span> stateNode<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>reactEventName <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 2. \u62FF\u5230\u5728 react \u4E2D\u5B9A\u4E49\u7684\u4E8B\u4EF6\u56DE\u8C03</span>
    <span class="token keyword">const</span> listener <span class="token operator">=</span> <span class="token function">getListener</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> reactEventName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>listener <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 3. \u521B\u5EFA\u4E00\u4E2A listener\uFF0C\u5E76\u6DFB\u52A0\u5230 listeners \u4E2D</span>
      listeners<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
        <span class="token function">createDispatchListener</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> listener<span class="token punctuation">,</span> lastHostComponent<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5176\u4E2D<code>getListener</code>\u5B9A\u4E49\u5982\u4E0B\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">getFiberCurrentPropsFromNode</span><span class="token punctuation">(</span>stateNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> listener <span class="token operator">=</span> props<span class="token punctuation">[</span>registrationName<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div><p>\u9996\u5148\u4ECE<code>node</code>\u8282\u70B9\u4E0A\u83B7\u53D6\u5BF9\u5E94\u7684<code>props</code>\uFF0C\u7136\u540E\u6839\u636E<code>registrationName</code>\u83B7\u53D6\u5728<code>react</code>\u4E2D\u6CE8\u518C\u7684\u4E8B\u4EF6\u56DE\u8C03\u3002\u6700\u540E\u521B\u5EFA\u4E00\u4E2A<code>listener</code>\uFF1A</p><div class="language-javascript"><pre><code><span class="token punctuation">{</span>
  instance<span class="token punctuation">,</span> <span class="token comment">// \u5F53\u524D\u7684 fiber</span>
  listener<span class="token punctuation">,</span> <span class="token comment">// \u5F53\u524D\u7684\u4E8B\u4EF6\u56DE\u8C03</span>
  currentTarget<span class="token punctuation">,</span> <span class="token comment">// \u5F53\u524D\u7684\u771F\u5B9E\u8282\u70B9</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>\u6700\u540E\u4F1A\u5F62\u6210\u4E00\u4E2A\u4ECE\u5F53\u524D\u8282\u70B9\u5230\u6839\u8282\u70B9\u4E4B\u95F4\u7684\u4E00\u4E2Alisteners\u6570\u7EC4</strong>\u3002</p><p>\u5982\u679C\u8FD9\u4E2A\u6570\u7EC4\u957F\u5EA6\u5927\u4E8E0\uFF0C\u90A3\u4E48\u4F1A\u6839\u636E\u5F53\u524D\u4E8B\u4EF6\u7C7B\u578B\u521B\u5EFA\u4E00\u4E2A<code>event</code>\u5BF9\u8C61\uFF0C\u5C06\u4E8B\u4EF6\u56DE\u8C03\u548C\u4E8B\u4EF6\u5BF9\u8C61\u52A0\u5165\u5230<code>dispatchQueue</code>\u4E2D\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">if</span> <span class="token punctuation">(</span>listeners<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> event <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SyntheticEventCtor</span><span class="token punctuation">(</span>
    reactName<span class="token punctuation">,</span>
    reactEventType<span class="token punctuation">,</span>
    <span class="token keyword">null</span><span class="token punctuation">,</span>
    nativeEvent<span class="token punctuation">,</span>
    nativeEventTarget<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  dispatchQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> event<span class="token punctuation">,</span> listeners <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="processdispatchqueue" tabindex="-1">processDispatchQueue <a class="header-anchor" href="#processdispatchqueue" aria-hidden="true">#</a></h3><p>\u6700\u540E\u6267\u884C<code>processDispatchQueue</code>\u65B9\u6CD5\uFF0C\u89E6\u53D1\u4E8B\u4EF6\u56DE\u8C03\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">processDispatchQueue</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">dispatchQueue</span><span class="token operator">:</span> DispatchQueue<span class="token punctuation">,</span>
  <span class="token literal-property property">eventSystemFlags</span><span class="token operator">:</span> EventSystemFlags<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> inCapturePhase <span class="token operator">=</span> <span class="token punctuation">(</span>eventSystemFlags <span class="token operator">&amp;</span> <span class="token constant">IS_CAPTURE_PHASE</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> dispatchQueue<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> event<span class="token punctuation">,</span> listeners <span class="token punctuation">}</span> <span class="token operator">=</span> dispatchQueue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">processDispatchQueueItemsInOrder</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> listeners<span class="token punctuation">,</span> inCapturePhase<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>processDispatchQueueItemsInOrder</code>\u5728\u89E6\u53D1\u7684\u65F6\u5019\u4F1A\u6839\u636E<code>inCapturePhase</code>\u5224\u65AD\u5F53\u524D\u662F\u4E8B\u4EF6\u6355\u6349\u8FD8\u662F\u4E8B\u4EF6\u5192\u6CE1\u9636\u6BB5\uFF0C\u4ECE\u800C\u51B3\u5B9A<code>listeners</code>\u7684\u89E6\u53D1\u987A\u5E8F\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> dispatchListeners<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> instance<span class="token punctuation">,</span> currentTarget<span class="token punctuation">,</span> listener <span class="token punctuation">}</span> <span class="token operator">=</span> dispatchListeners<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment">// \u662F\u5426\u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>instance <span class="token operator">!==</span> previousInstance <span class="token operator">&amp;&amp;</span> event<span class="token punctuation">.</span><span class="token function">isPropagationStopped</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">executeDispatch</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> listener<span class="token punctuation">,</span> currentTarget<span class="token punctuation">)</span><span class="token punctuation">;</span>
  previousInstance <span class="token operator">=</span> instance<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>executeDispatch</code>\u6267\u884C<code>react</code>\u4E8B\u4EF6\u56DE\u8C03\uFF0C\u5E76\u4E14\u6267\u884C\u7684\u65F6\u5019\u4F1A\u5C06\u65B0\u6784\u5EFA\u7684<code>event</code>\u5BF9\u8C61\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u6574\u4E2A\u865A\u62DF\u4E8B\u4EF6\u7CFB\u7EDF\u7684\u8FC7\u7A0B\u5927\u81F4\u4E3A\uFF1A</p><ol><li>\u5B9A\u4E49<code>react</code>\u5408\u6210\u4E8B\u4EF6\u540D\u79F0\uFF0C\u5EFA\u7ACB\u8D77\u5408\u6210\u4E8B\u4EF6\u540D\u79F0\u548C\u539F\u751F\u4E8B\u4EF6\u540D\u79F0\u7684\u5173\u7CFB\u3002</li><li>\u76D1\u542C\u4E8B\u4EF6\uFF1A</li></ol><ul><li>\u5982\u679C\u662F<code>HostRoot</code>\uFF0C\u521B\u5EFA\u65F6\u5C31\u76D1\u542C\u6240\u6709\u539F\u751F\u4E8B\u4EF6\u3002(\u5305\u62EC\u6355\u83B7\u4E8B\u4EF6\u548C\u5192\u6CE1\u4E8B\u4EF6)</li><li>\u5982\u679C\u662F<code>HostPortal</code>\uFF0C\u5728<code>completeWork</code>\u9636\u6BB5\u5224\u65AD<code>current === null</code>\u4E3A<code>true</code>\u65F6\u76D1\u542C\u6240\u6709\u4E8B\u4EF6\u3002</li><li>\u5982\u679C\u662F\u4E0D\u53EF\u4EE3\u7406\u7684\u4E8B\u4EF6\uFF0C\u9700\u8981\u5728<code>completeWork</code>\u521B\u5EFA\u771F\u5B9E\u8282\u70B9\u65F6\uFF0C\u201D\u624B\u52A8\u201C\u6DFB\u52A0\u539F\u751F\u4E8B\u4EF6\u3002</li></ul><ol start="3"><li>\u89E6\u53D1\u4E8B\u4EF6\uFF1A</li></ol><ul><li>\u89E6\u53D1\u539F\u751F\u4E8B\u4EF6\u65F6\uFF0C<code>root</code>\u63A5\u6536\u5230\u8BE5\u4E8B\u4EF6\uFF0C\u6B64\u65F6\u80FD\u62FF\u5230\u5177\u4F53\u89E6\u53D1\u4E8B\u4EF6\u7684\u771F\u5B9E<code>DOM</code>\u5143\u7D20\u3002</li><li>\u901A\u8FC7\u771F\u5B9E<code>DOM</code>\u83B7\u53D6\u5230\u76F8\u5E94\u7684<code>fiber</code>\uFF0C\u5E76\u8FDB\u884C\u4E00\u7CFB\u5217\u7684\u6821\u9A8C\u8FC7\u7A0B\u3002</li><li>\u6839\u636E\u539F\u751F\u4E8B\u4EF6\u540D\u79F0\u83B7\u53D6\u5BF9\u5E94\u7684<code>react</code>\u4E8B\u4EF6\u540D\u79F0\u3002\u4ECE\u5F53\u524D<code>fiber</code>\u5411\u4E0A\u67E5\u627E\u5230\u6839\u8282\u70B9\uFF0C\u5C06\u6240\u6709\u76D1\u542C\u4E86\u8BE5\u4E8B\u4EF6\u7684\u56DE\u8C03\u4FDD\u5B58\u8D77\u6765\u5F62\u6210<code>listeners</code>\u3002</li><li>\u6839\u636E\u539F\u751F\u7684<code>event</code>\u5BF9\u8C61\u521B\u5EFA\u4E00\u4E2A\u5408\u6210\u7684<code>event</code>\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u90E8\u5206\u5C5E\u6027\u3002</li><li>\u6700\u540E\u6839\u636E\u662F\u6355\u6349\u9636\u6BB5\u8FD8\u662F\u5192\u6CE1\u9636\u6BB5\uFF0C\u51B3\u5B9A\u8981\u6267\u884C\u76D1\u542C\u4E8B\u4EF6\u548C<code>listeners</code>\u7684\u6267\u884C\u987A\u5E8F\u3002</li></ul><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><ul><li><a href="https://segmentfault.com/a/1190000038600899" target="_blank" rel="noopener noreferrer">React \u4E8B\u4EF6\u7CFB\u7EDF</a></li></ul>`,114),o=[e];function c(l,u,i,r,k,d){return a(),s("div",null,o)}var y=n(p,[["render",c]]);export{g as __pageData,y as default};
