import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.c610f10c.js";const u=JSON.parse('{"title":"手写简版Vuex","description":"","frontmatter":{},"headers":[],"relativePath":"vue/手写简版Vuex.md","filePath":"vue/手写简版Vuex.md","lastUpdated":1695632838000}'),l={name:"vue/手写简版Vuex.md"},o=p(`<h1 id="手写简版vuex" tabindex="-1">手写简版Vuex <a class="header-anchor" href="#手写简版vuex" aria-label="Permalink to &quot;手写简版Vuex&quot;">​</a></h1><h2 id="简单使用" tabindex="-1">简单使用 <a class="header-anchor" href="#简单使用" aria-label="Permalink to &quot;简单使用&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Vue </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Vuex </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vuex&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Vue.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(Vuex)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">store</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> Vuex.</span><span style="color:#B392F0;">Store</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  modules: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    user,</span></span>
<span class="line"><span style="color:#E1E4E8;">    app,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  getters</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  el: </span><span style="color:#9ECBFF;">&#39;#app&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  store,</span></span>
<span class="line"><span style="color:#E1E4E8;">  components: { App },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">h</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(App)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Vue </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Vuex </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vuex&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Vue.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(Vuex)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">store</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> Vuex.</span><span style="color:#6F42C1;">Store</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  modules: {</span></span>
<span class="line"><span style="color:#24292E;">    user,</span></span>
<span class="line"><span style="color:#24292E;">    app,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  getters</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  el: </span><span style="color:#032F62;">&#39;#app&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  store,</span></span>
<span class="line"><span style="color:#24292E;">  components: { App },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">h</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(App)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h2 id="实现效果" tabindex="-1">实现效果 <a class="header-anchor" href="#实现效果" aria-label="Permalink to &quot;实现效果&quot;">​</a></h2><p><a href="https://codesandbox.io/s/polished-dust-r04fj?file=/src/vuex/index.js" target="_blank" rel="noreferrer">vuex 实现效果预览</a></p><h2 id="实现思路" tabindex="-1">实现思路 <a class="header-anchor" href="#实现思路" aria-label="Permalink to &quot;实现思路&quot;">​</a></h2><ol><li><p><code>vuex</code>是通过<code>Vue.use</code>使用的，所以需要实现<code>install</code>方法：</p><ul><li><code>install</code> 里需要在<code>Vue</code>全局挂载<code>$store</code>方法，因此可以用<code>Vue.mixin</code>全局混入配置。</li></ul></li><li><p>通过<code>$store.state</code>可以访问状态，状态改变时，需要更新视图。所以<code>state</code>需要设置为响应式，这样在视图中使用<code>state</code>的时候会进行依赖收集，绑定<code>state</code>和相应<code>Watcher</code>的关系。之后<code>state</code>改变就会触发<code>Watcher</code>更新。</p><ul><li>一种方法是通过实例化<code>Vue</code>，将<code>state</code>作为<code>data</code>进行响应式处理。</li><li>一种方式是用<code>Vue.observable</code>将<code>state</code>对象设置为响应式。</li></ul></li><li><p>触发更新：</p><ul><li><code>commit</code>处理同步，找到<code>mutations</code>里的对应函数，然后执行函数更新<code>state</code>。</li><li><code>dispatch</code>处理异步，找到<code>actions</code>里的对应函数，然后执行函数更新<code>state</code>。</li></ul></li><li><p><code>getters</code>具备计算属性，可以通过<code>Vue</code>中的<code>computed</code>来进行处理（可能这也是<code>Vuex</code>用实例化方式处理<code>state</code>响应式的原因）。</p></li><li><p><code>modules</code>的实现是根据<code>store</code>配置递归建立相应的<code>module</code>，并且建立<code>module</code>之间的父子关系。再根据<code>namespace</code>来分割各个模块，使得<code>commit/dispatch</code>的时候需要指定模块的<code>namespace</code>。</p></li></ol><h2 id="简化版实现代码" tabindex="-1">简化版实现代码 <a class="header-anchor" href="#简化版实现代码" aria-label="Permalink to &quot;简化版实现代码&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> _Vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Store</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">options</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">state</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">mutations</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">actions</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">getters</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> options</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.mutations </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mutations</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.actions </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> actions</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.getters </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> getters</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> computed </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 通过 computed 来实现 getters</span></span>
<span class="line"><span style="color:#E1E4E8;">    Object.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">(getters).</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(([</span><span style="color:#FFAB70;">getterName</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">getter</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      computed[getterName] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 封装一层，添加 this.state 作为参数</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getter</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.state)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 访问 getters 的 key 就是访问 computed 的 key</span></span>
<span class="line"><span style="color:#E1E4E8;">      Object.</span><span style="color:#B392F0;">defineProperty</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.getters, getterName, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> self._vm[getterName]</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">._vm </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">_Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        $$state: state</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      computed: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">computed</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 同样可以实现响应式，但是 getters 实现又需要单独处理，比较麻烦</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// this.$$state = _Vue.observable(state)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">get</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">state</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">._vm._data.$$state</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">state</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;无法直接修改 state&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">commit</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">type</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">payload</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">handler</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.mutations[type]</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">handler</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.state, payload)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 这里没做太多处理</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">dispatch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">type</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">payload</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">handler</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.actions[type]</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handler</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.state, payload)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">Vue</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 类似于单例模式</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (_Vue </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> Vue) </span><span style="color:#F97583;">return</span></span>
<span class="line"><span style="color:#E1E4E8;">  _Vue </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Vue</span></span>
<span class="line"><span style="color:#E1E4E8;">  Vue.</span><span style="color:#B392F0;">mixin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">beforeCreate</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">options</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$options</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 注入 $store 变量</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (options.store) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$store </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> options.store</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (options.parent </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> options.parent.$store) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$store </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> options.parent.$store</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  Store,</span></span>
<span class="line"><span style="color:#E1E4E8;">  install</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> _Vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Store</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">options</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">state</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">mutations</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">actions</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">getters</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> options</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.mutations </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> mutations</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.actions </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> actions</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.getters </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> getters</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> computed </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">self</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 通过 computed 来实现 getters</span></span>
<span class="line"><span style="color:#24292E;">    Object.</span><span style="color:#6F42C1;">entries</span><span style="color:#24292E;">(getters).</span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">(([</span><span style="color:#E36209;">getterName</span><span style="color:#24292E;">, </span><span style="color:#E36209;">getter</span><span style="color:#24292E;">]) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      computed[getterName] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 封装一层，添加 this.state 作为参数</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getter</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.state)</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 访问 getters 的 key 就是访问 computed 的 key</span></span>
<span class="line"><span style="color:#24292E;">      Object.</span><span style="color:#6F42C1;">defineProperty</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.getters, getterName, {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> self._vm[getterName]</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      })</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">._vm </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">_Vue</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      data: {</span></span>
<span class="line"><span style="color:#24292E;">        $$state: state</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      computed: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">computed</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 同样可以实现响应式，但是 getters 实现又需要单独处理，比较麻烦</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// this.$$state = _Vue.observable(state)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">get</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">state</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">._vm._data.$$state</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">set</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">state</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">val</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">throw</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Error</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;无法直接修改 state&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">commit</span><span style="color:#24292E;">(</span><span style="color:#E36209;">type</span><span style="color:#24292E;">, </span><span style="color:#E36209;">payload</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">handler</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.mutations[type]</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">handler</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.state, payload)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 这里没做太多处理</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">dispatch</span><span style="color:#24292E;">(</span><span style="color:#E36209;">type</span><span style="color:#24292E;">, </span><span style="color:#E36209;">payload</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">handler</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.actions[type]</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handler</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.state, payload)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">install</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">Vue</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 类似于单例模式</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (_Vue </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> Vue) </span><span style="color:#D73A49;">return</span></span>
<span class="line"><span style="color:#24292E;">  _Vue </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Vue</span></span>
<span class="line"><span style="color:#24292E;">  Vue.</span><span style="color:#6F42C1;">mixin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">beforeCreate</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">options</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$options</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 注入 $store 变量</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (options.store) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$store </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> options.store</span></span>
<span class="line"><span style="color:#24292E;">      } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (options.parent </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> options.parent.$store) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$store </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> options.parent.$store</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  Store,</span></span>
<span class="line"><span style="color:#24292E;">  install</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题&quot;">​</a></h2><h4 id="q-为什么要commit-dispatch两种形式来处理-都使用dispatch不行吗" tabindex="-1">Q:为什么要commit/dispatch两种形式来处理，都使用dispatch不行吗？ <a class="header-anchor" href="#q-为什么要commit-dispatch两种形式来处理-都使用dispatch不行吗" aria-label="Permalink to &quot;Q:为什么要commit/dispatch两种形式来处理，都使用dispatch不行吗？&quot;">​</a></h4><ul><li>一种可能的原因是单一职责，<code>commit</code>主要处理同步任务，触发状态更新；<code>dispatch</code>主要处理异步任务</li><li>另一种原因是方便<code>devtools</code>追踪状态变化。参考<a href="https://juejin.cn/post/6844904054108192776" target="_blank" rel="noreferrer">这里的评论</a>。</li></ul>`,12),e=[o];function t(c,r,E,y,i,d){return n(),a("div",null,e)}const h=s(l,[["render",t]]);export{u as __pageData,h as default};
