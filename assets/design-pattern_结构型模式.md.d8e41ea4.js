import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.c610f10c.js";const h=JSON.parse('{"title":"结构型模式","description":"","frontmatter":{},"headers":[],"relativePath":"design-pattern/结构型模式.md","filePath":"design-pattern/结构型模式.md","lastUpdated":1695632838000}'),l={name:"design-pattern/结构型模式.md"},o=p(`<h1 id="结构型模式" tabindex="-1">结构型模式 <a class="header-anchor" href="#结构型模式" aria-label="Permalink to &quot;结构型模式&quot;">​</a></h1><h2 id="adapter-适配器" tabindex="-1">Adapter(适配器) <a class="header-anchor" href="#adapter-适配器" aria-label="Permalink to &quot;Adapter(适配器)&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">意图</p><p>将一个类的接口转换为用户希望的另外一个接口。</p></div><p>常用场景：封装有缺陷的接口设计、统一多个类的接口设计、兼容老版本接口、适配不同格式的数据等。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 目标接口</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">target</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">fn1</span><span style="color:#E1E4E8;">() { },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">fn2</span><span style="color:#E1E4E8;">() { },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">fn3</span><span style="color:#E1E4E8;">() { },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 需要适配的接口</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">adaptee</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">fn1</span><span style="color:#E1E4E8;">() { },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">fnb</span><span style="color:#E1E4E8;">() { },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">fnc</span><span style="color:#E1E4E8;">() { }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 完成 fn2, fn3。实现后的 adeptor 具备 target 相关接口</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">adeptor</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">adaptee,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">fn2</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    adaptee.</span><span style="color:#B392F0;">fnb</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">fn3</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    adaptee.</span><span style="color:#B392F0;">fnc</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 目标接口</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">target</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">fn1</span><span style="color:#24292E;">() { },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">fn2</span><span style="color:#24292E;">() { },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">fn3</span><span style="color:#24292E;">() { },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 需要适配的接口</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">adaptee</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">fn1</span><span style="color:#24292E;">() { },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">fnb</span><span style="color:#24292E;">() { },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">fnc</span><span style="color:#24292E;">() { }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 完成 fn2, fn3。实现后的 adeptor 具备 target 相关接口</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">adeptor</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">adaptee,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">fn2</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    adaptee.</span><span style="color:#6F42C1;">fnb</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">fn3</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    adaptee.</span><span style="color:#6F42C1;">fnc</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="bridge-桥接" tabindex="-1">Bridge(桥接) <a class="header-anchor" href="#bridge-桥接" aria-label="Permalink to &quot;Bridge(桥接)&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">意图</p><p>将抽象部分与它的实现部分分离，使它们可以独立地变化。</p></div><p>核心思想：将一些通用方法提取出来，维护一个Implementor类，该类定义更细颗粒度的操作方法，而Abstraction则是基于这些操作方法的较高层次的操作。</p><h3 id="abstraction" tabindex="-1">Abstraction <a class="header-anchor" href="#abstraction" aria-label="Permalink to &quot;Abstraction&quot;">​</a></h3><p>定义抽象类的接口，维护一个指向<code>Implementor</code>的指针</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Window</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;">() { }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">drawText</span><span style="color:#E1E4E8;">() {}</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">drawRect</span><span style="color:#E1E4E8;">() {}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Window</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">() { }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">drawText</span><span style="color:#24292E;">() {}</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">drawRect</span><span style="color:#24292E;">() {}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="refinedabstraction" tabindex="-1">RefinedAbstraction <a class="header-anchor" href="#refinedabstraction" aria-label="Permalink to &quot;RefinedAbstraction&quot;">​</a></h3><p>扩充由<code>Abstraction</code>定义的接口</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">IconWindow</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Window</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">drawBorder</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">drawText</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">drawRect</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">IconWindow</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Window</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">drawBorder</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">drawText</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">drawRect</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="implementor" tabindex="-1">Implementor <a class="header-anchor" href="#implementor" aria-label="Permalink to &quot;Implementor&quot;">​</a></h3><p>定义实现的类的接口，该接口不一定要与<code>Abstraction</code>接口完全一致。一般来讲，<code>Implementor</code>接口仅提供基本操作，而<code>Abstraction</code>则定义了基于这些基本操作对的较高层次的操作。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">WindowImp</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">drawLine</span><span style="color:#E1E4E8;">() { }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">WindowImp</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">drawLine</span><span style="color:#24292E;">() { }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="concreteimplementor" tabindex="-1">ConcreteImplementor <a class="header-anchor" href="#concreteimplementor" aria-label="Permalink to &quot;ConcreteImplementor&quot;">​</a></h3><p>实现<code>Implementor</code>接口</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">XWindowImp</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">WindowImp</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">drawLine</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 画 window 上的线条</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MacWindowImp</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">WindowImp</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">drawLine</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 画 Mac 上的线条</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">XWindowImp</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">WindowImp</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">drawLine</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 画 window 上的线条</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MacWindowImp</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">WindowImp</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">drawLine</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 画 Mac 上的线条</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="composite-组合" tabindex="-1">Composite(组合) <a class="header-anchor" href="#composite-组合" aria-label="Permalink to &quot;Composite(组合)&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">意图</p><p>将对象组合成树形接口以表示“部分 - 整体”的层次结构。<code>Composite</code>使得用户对单个对象和组合对象的使用具有一致性。</p></div><p>如创建节点时，分为很多种情况。遇到数组时（<code>Composite</code>），又会递归去创建节点。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">node</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (Array.</span><span style="color:#B392F0;">isArray</span><span style="color:#E1E4E8;">(node)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    node.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">child</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(child)</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (node.type </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;text&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">createText</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">createNode</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(</span><span style="color:#E36209;">node</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (Array.</span><span style="color:#6F42C1;">isArray</span><span style="color:#24292E;">(node)) {</span></span>
<span class="line"><span style="color:#24292E;">    node.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">child</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(child)</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (node.type </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;text&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">createText</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">createNode</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="decorator-装饰" tabindex="-1">Decorator(装饰) <a class="header-anchor" href="#decorator-装饰" aria-label="Permalink to &quot;Decorator(装饰)&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">意图</p><p>动态地给一个对象添加一些额外职责。就增加功能来讲，Decorator模式相比于生成子类更加灵活。</p></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">border</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">fn</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;add border&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">fn</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">args)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">shape</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">color</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;shape:&#39;</span><span style="color:#E1E4E8;">, color)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">border</span><span style="color:#E1E4E8;">(shape)(</span><span style="color:#9ECBFF;">&#39;red&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">border</span><span style="color:#24292E;">(</span><span style="color:#E36209;">fn</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;add border&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">...</span><span style="color:#E36209;">args</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">fn</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">args)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">shape</span><span style="color:#24292E;">(</span><span style="color:#E36209;">color</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;shape:&#39;</span><span style="color:#24292E;">, color)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">border</span><span style="color:#24292E;">(shape)(</span><span style="color:#032F62;">&#39;red&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><h2 id="facade-外观" tabindex="-1">Facade(外观) <a class="header-anchor" href="#facade-外观" aria-label="Permalink to &quot;Facade(外观)&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">意图</p><p>为子系统中的一组接口提供一个一致的界面，Facade 定义了一个高层接口，这个接口使得这一系统更容易使用</p></div><p>侧重于通过颗粒比较小的接口合成一个高层的接口，使得外部更容易调用。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">systemA</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">fn1</span><span style="color:#E1E4E8;">() { },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">fn2</span><span style="color:#E1E4E8;">() { },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">fn3</span><span style="color:#E1E4E8;">() { }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">systemB</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">fn1</span><span style="color:#E1E4E8;">() { },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">fn2</span><span style="color:#E1E4E8;">() { },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">fn3</span><span style="color:#E1E4E8;">() { }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 高层接口</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">facadeMethod</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  systemA.</span><span style="color:#B392F0;">fn1</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  systemB.</span><span style="color:#B392F0;">fn2</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  systemB.</span><span style="color:#B392F0;">fn3</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  systemA.</span><span style="color:#B392F0;">fn3</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">systemA</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">fn1</span><span style="color:#24292E;">() { },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">fn2</span><span style="color:#24292E;">() { },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">fn3</span><span style="color:#24292E;">() { }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">systemB</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">fn1</span><span style="color:#24292E;">() { },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">fn2</span><span style="color:#24292E;">() { },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">fn3</span><span style="color:#24292E;">() { }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 高层接口</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">facadeMethod</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  systemA.</span><span style="color:#6F42C1;">fn1</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  systemB.</span><span style="color:#6F42C1;">fn2</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  systemB.</span><span style="color:#6F42C1;">fn3</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  systemA.</span><span style="color:#6F42C1;">fn3</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="flyweight-享元" tabindex="-1">Flyweight(享元) <a class="header-anchor" href="#flyweight-享元" aria-label="Permalink to &quot;Flyweight(享元)&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">意图</p><p>运用共享技术有效地支持大量细粒度的对象。</p></div><p>进行划分细颗粒度的对象，使得这些对象能够共享，达到减少内存占用的目的。</p><h2 id="proxy-代理" tabindex="-1">Proxy(代理) <a class="header-anchor" href="#proxy-代理" aria-label="Permalink to &quot;Proxy(代理)&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">意图</p><p>为其他对象提供一种代理以控制这个对象的访问。</p></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">user</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;模式&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">validate</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;校验 user&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">proxyUser</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Proxy</span><span style="color:#E1E4E8;">(user, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">target</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">propKey</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">validate</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`代理_\${</span><span style="color:#E1E4E8;">target</span><span style="color:#9ECBFF;">[</span><span style="color:#E1E4E8;">propKey</span><span style="color:#9ECBFF;">]</span><span style="color:#9ECBFF;">}\`</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;proxyUser.name ==&gt; &#39;</span><span style="color:#E1E4E8;">, proxyUser.name);</span></span>
<span class="line"><span style="color:#6A737D;">// 校验 user</span></span>
<span class="line"><span style="color:#6A737D;">// proxyUser.name ==&gt; 代理_模式</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">user</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;模式&#39;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">validate</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;校验 user&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">proxyUser</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Proxy</span><span style="color:#24292E;">(user, {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#E36209;">target</span><span style="color:#24292E;">, </span><span style="color:#E36209;">propKey</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">validate</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`代理_\${</span><span style="color:#24292E;">target</span><span style="color:#032F62;">[</span><span style="color:#24292E;">propKey</span><span style="color:#032F62;">]</span><span style="color:#032F62;">}\`</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;proxyUser.name ==&gt; &#39;</span><span style="color:#24292E;">, proxyUser.name);</span></span>
<span class="line"><span style="color:#6A737D;">// 校验 user</span></span>
<span class="line"><span style="color:#6A737D;">// proxyUser.name ==&gt; 代理_模式</span></span></code></pre></div>`,37),e=[o];function c(t,r,E,y,i,d){return n(),a("div",null,e)}const C=s(l,[["render",c]]);export{h as __pageData,C as default};
