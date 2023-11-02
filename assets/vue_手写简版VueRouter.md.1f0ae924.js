import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.b96c6c14.js";const h=JSON.parse('{"title":"手写简版VueRouter","description":"","frontmatter":{},"headers":[],"relativePath":"vue/手写简版VueRouter.md","filePath":"vue/手写简版VueRouter.md","lastUpdated":1698927986000}'),l={name:"vue/手写简版VueRouter.md"},o=p(`<h1 id="手写简版vuerouter" tabindex="-1">手写简版VueRouter <a class="header-anchor" href="#手写简版vuerouter" aria-label="Permalink to &quot;手写简版VueRouter&quot;">​</a></h1><h2 id="简单使用" tabindex="-1">简单使用 <a class="header-anchor" href="#简单使用" aria-label="Permalink to &quot;简单使用&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Router </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue-router&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">routes</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    path: </span><span style="color:#9ECBFF;">&#39;/home&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;Home&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    component: Home</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">router</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Router</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  routes: routes,</span></span>
<span class="line"><span style="color:#E1E4E8;">  mode: </span><span style="color:#9ECBFF;">&#39;history&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  base: </span><span style="color:#9ECBFF;">&#39;/dashboard&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  el: </span><span style="color:#9ECBFF;">&#39;#app&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  router,</span></span>
<span class="line"><span style="color:#E1E4E8;">  components: { App },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">h</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(App)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 模板</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">router-view</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#79B8FF;">router-view</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Router </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue-router&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    path: </span><span style="color:#032F62;">&#39;/home&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;Home&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    component: Home</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">router</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Router</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  routes: routes,</span></span>
<span class="line"><span style="color:#24292E;">  mode: </span><span style="color:#032F62;">&#39;history&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  base: </span><span style="color:#032F62;">&#39;/dashboard&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  el: </span><span style="color:#032F62;">&#39;#app&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  router,</span></span>
<span class="line"><span style="color:#24292E;">  components: { App },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">h</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(App)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 模板</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">router-view</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#005CC5;">router-view</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="实现效果" tabindex="-1">实现效果 <a class="header-anchor" href="#实现效果" aria-label="Permalink to &quot;实现效果&quot;">​</a></h2><p><a href="https://codesandbox.io/s/shouxiejianbanvuerouter-7mmxc?file=/src/main.js" target="_blank" rel="noreferrer">简版VueRouter效果</a></p><h2 id="实现思路" tabindex="-1">实现思路 <a class="header-anchor" href="#实现思路" aria-label="Permalink to &quot;实现思路&quot;">​</a></h2><ol><li>当<code>push</code>的时候使用<code>h5</code>新特性<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/History/pushState" target="_blank" rel="noreferrer">pushState</a>更改当前浏览器地址，并在<code>history</code>中添加一条记录。</li><li>解析当前浏览器地址，并与我们写的路由配置<code>routes</code>进行匹配，得到匹配到的<code>route</code>，这个<code>route</code>里就包含我们要展示的<code>component</code>。</li><li>注册一个<code>router-view</code>组件，该组件可以根据当前匹配到的<code>route</code>去显示相应的<code>component</code>。所以这里可以将当前<code>route</code>设置为响应式，这样在<code>route</code>变化时就会触发相应的渲染逻辑。</li><li>监听<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/popstate_event" target="_blank" rel="noreferrer">popState</a>事件，处理回退等操作，重复<code>url</code>匹配及组件更新步骤。</li></ol><h2 id="简化版实现代码" tabindex="-1">简化版实现代码 <a class="header-anchor" href="#简化版实现代码" aria-label="Permalink to &quot;简化版实现代码&quot;">​</a></h2><h4 id="router-view-js" tabindex="-1">router-view.js <a class="header-anchor" href="#router-view-js" aria-label="Permalink to &quot;router-view.js&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&quot;RouterView&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  props: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">      default: </span><span style="color:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">h</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// _route 改变时，触发更新</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 匹配到的 route</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">route</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">._route;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">props</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$options.propsData;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> component;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (route </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> route.component) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 如果有name，需要与当前路由匹配才显示</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (props </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> props.name) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (route.name </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> props.name) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          component </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> route.component;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 否则就直接当前匹配路由下的组件</span></span>
<span class="line"><span style="color:#E1E4E8;">        component </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> route.component;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 渲染匹配到的 component</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(component);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&quot;RouterView&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  props: {</span></span>
<span class="line"><span style="color:#24292E;">    name: {</span></span>
<span class="line"><span style="color:#24292E;">      type: String,</span></span>
<span class="line"><span style="color:#24292E;">      default: </span><span style="color:#032F62;">&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">(</span><span style="color:#E36209;">h</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// _route 改变时，触发更新</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 匹配到的 route</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">route</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">._route;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">props</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$options.propsData;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> component;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (route </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> route.component) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 如果有name，需要与当前路由匹配才显示</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (props </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> props.name) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (route.name </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> props.name) {</span></span>
<span class="line"><span style="color:#24292E;">          component </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> route.component;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 否则就直接当前匹配路由下的组件</span></span>
<span class="line"><span style="color:#24292E;">        component </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> route.component;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 渲染匹配到的 component</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(component);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h4 id="index-js" tabindex="-1">index.js <a class="header-anchor" href="#index-js" aria-label="Permalink to &quot;index.js&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> RouterView </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./router-view&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> _Vue;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">Vue</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  _Vue </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Vue;</span></span>
<span class="line"><span style="color:#E1E4E8;">  Vue.</span><span style="color:#B392F0;">mixin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">beforeCreate</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 全局注入 $router 变量</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">options</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$options;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (options.router) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$router </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> options.router;</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$router </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$parent.$router;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$router.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 将 _route 设置为响应式，以便当前route改变时触发视图更新</span></span>
<span class="line"><span style="color:#E1E4E8;">      Vue.util.</span><span style="color:#B392F0;">defineReactive</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;_route&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$router.currentRoute);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 全局注册 router-view 组件</span></span>
<span class="line"><span style="color:#E1E4E8;">  Vue.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;RouterView&quot;</span><span style="color:#E1E4E8;">, RouterView);</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Route</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;">({ </span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">path</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">component</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> name;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.path </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> path;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.component </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> component;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">History</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">router</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.router </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> router;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// path or name</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">location</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">cb</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 路径改变，去用户定义的 routes 中匹配对应的 route</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">route</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.router.</span><span style="color:#B392F0;">match</span><span style="color:#E1E4E8;">(location);</span></span>
<span class="line"><span style="color:#E1E4E8;">    history.</span><span style="color:#B392F0;">pushState</span><span style="color:#E1E4E8;">({ time: Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">() }, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, route.path);</span></span>
<span class="line"><span style="color:#E1E4E8;">    cb </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">cb</span><span style="color:#E1E4E8;">(route);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VueRouter</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">options</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.routes </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> options.routes;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.app </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.apps </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.history </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">History</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">match</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">location</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">matched</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.routes.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">route</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> route.path </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> location </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> route.name </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> location.name;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }) </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> { path: </span><span style="color:#9ECBFF;">&quot;/&quot;</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Route</span><span style="color:#E1E4E8;">(matched);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 记录所有的 Vue 实例</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">app</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.app </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> app;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.apps.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(app);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">location</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.history.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(location, (</span><span style="color:#FFAB70;">route</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 当前route</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.currentRoute </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> route;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 更新所有实例当前的 _route 变量</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.apps.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">app</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        app._route </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> route;</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">VueRouter.install </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> install;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> VueRouter;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> RouterView </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./router-view&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> _Vue;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">install</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">Vue</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  _Vue </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Vue;</span></span>
<span class="line"><span style="color:#24292E;">  Vue.</span><span style="color:#6F42C1;">mixin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">beforeCreate</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 全局注入 $router 变量</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">options</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$options;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (options.router) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$router </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> options.router;</span></span>
<span class="line"><span style="color:#24292E;">      } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$router </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$parent.$router;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$router.</span><span style="color:#6F42C1;">init</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 将 _route 设置为响应式，以便当前route改变时触发视图更新</span></span>
<span class="line"><span style="color:#24292E;">      Vue.util.</span><span style="color:#6F42C1;">defineReactive</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;_route&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$router.currentRoute);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 全局注册 router-view 组件</span></span>
<span class="line"><span style="color:#24292E;">  Vue.</span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;RouterView&quot;</span><span style="color:#24292E;">, RouterView);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Route</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">({ </span><span style="color:#E36209;">name</span><span style="color:#24292E;">, </span><span style="color:#E36209;">path</span><span style="color:#24292E;">, </span><span style="color:#E36209;">component</span><span style="color:#24292E;"> }) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> name;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.path </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> path;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.component </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> component;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">History</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">router</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.router </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> router;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// path or name</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(</span><span style="color:#E36209;">location</span><span style="color:#24292E;">, </span><span style="color:#E36209;">cb</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 路径改变，去用户定义的 routes 中匹配对应的 route</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">route</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.router.</span><span style="color:#6F42C1;">match</span><span style="color:#24292E;">(location);</span></span>
<span class="line"><span style="color:#24292E;">    history.</span><span style="color:#6F42C1;">pushState</span><span style="color:#24292E;">({ time: Date.</span><span style="color:#6F42C1;">now</span><span style="color:#24292E;">() }, </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">, route.path);</span></span>
<span class="line"><span style="color:#24292E;">    cb </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">cb</span><span style="color:#24292E;">(route);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VueRouter</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">options</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.routes </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> options.routes;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.app </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.apps </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.history </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">History</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">match</span><span style="color:#24292E;">(</span><span style="color:#E36209;">location</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">matched</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.routes.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">((</span><span style="color:#E36209;">route</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> route.path </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> location </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> route.name </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> location.name;</span></span>
<span class="line"><span style="color:#24292E;">    }) </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> { path: </span><span style="color:#032F62;">&quot;/&quot;</span><span style="color:#24292E;"> };</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Route</span><span style="color:#24292E;">(matched);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 记录所有的 Vue 实例</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">init</span><span style="color:#24292E;">(</span><span style="color:#E36209;">app</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.app </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> app;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.apps.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(app);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(</span><span style="color:#E36209;">location</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.history.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(location, (</span><span style="color:#E36209;">route</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 当前route</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.currentRoute </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> route;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 更新所有实例当前的 _route 变量</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.apps.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">app</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        app._route </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> route;</span></span>
<span class="line"><span style="color:#24292E;">      });</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">VueRouter.install </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> install;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> VueRouter;</span></span></code></pre></div><h2 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题&quot;">​</a></h2><h4 id="q-单页面为什么能有像多页面跳转的效果" tabindex="-1">Q:单页面为什么能有像多页面跳转的效果？ <a class="header-anchor" href="#q-单页面为什么能有像多页面跳转的效果" aria-label="Permalink to &quot;Q:单页面为什么能有像多页面跳转的效果？&quot;">​</a></h4><p>就如同实现思路中所提到的一样，实际上Vue是通过判断当前的路径，然后匹配到当前的路由，最后通过router-view组件呈现当前匹配到的路由对应的组件。跳转的本质是匹配到不同的组件而已。当然，这里实现得比较简单，具体的逻辑可以看看源码是如何实现的。</p><h4 id="q-vue-router大致是如何实现的" tabindex="-1">Q:vue-router大致是如何实现的？ <a class="header-anchor" href="#q-vue-router大致是如何实现的" aria-label="Permalink to &quot;Q:vue-router大致是如何实现的？&quot;">​</a></h4><ol><li>当push的时候，通过history.pushState api向浏览器添加一条历史记录，此时没有任何跳转。</li><li>然后对新push的值进行解析，并且与用户自定义的routes配置进行匹配，最终会得到相应的路径和匹配到的component。</li><li>匹配完后，将每个Vue实例的_route属性更改为匹配到的route。</li><li>在router-view组件内部监听_route属性，当发生变化时，看自身配置是否与route匹配。如果匹配，直接渲染匹配到的component。</li></ol><h4 id="q-hash和history的区别" tabindex="-1">Q:hash和history的区别？ <a class="header-anchor" href="#q-hash和history的区别" aria-label="Permalink to &quot;Q:hash和history的区别？&quot;">​</a></h4><ol><li>调用 push 时，首先会改变当前的 url <ol><li>如果 history api 可以使用，那么就使用 pushState/replaceState 改变。</li><li>如果是 hash 模式，且 history 不可使用，那么使用 location.hash 改变。</li></ol></li><li>解析 url，匹配路由，更改当前的匹配组件，router-view监听路由变化重新渲染。</li><li>对于浏览器的前进/后退按钮，会监听 hashchange/popState 事件。</li></ol>`,19),e=[o];function t(c,r,E,y,i,u){return n(),a("div",null,e)}const d=s(l,[["render",t]]);export{h as __pageData,d as default};
