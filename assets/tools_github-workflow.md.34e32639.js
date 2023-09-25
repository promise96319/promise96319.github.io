import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.c610f10c.js";const h=JSON.parse('{"title":"Github workflow","description":"","frontmatter":{},"headers":[],"relativePath":"tools/github-workflow.md","filePath":"tools/github-workflow.md","lastUpdated":1695631559000}'),p={name:"tools/github-workflow.md"},o=l(`<h1 id="github-workflow" tabindex="-1">Github workflow <a class="header-anchor" href="#github-workflow" aria-label="Permalink to &quot;Github workflow&quot;">​</a></h1><h2 id="部署-vitepress" tabindex="-1">部署 vitepress <a class="header-anchor" href="#部署-vitepress" aria-label="Permalink to &quot;部署 vitepress&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 任务名称</span></span>
<span class="line"><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Deploy blog</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 任务触发事件</span></span>
<span class="line"><span style="color:#79B8FF;">on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">push</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">branches</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 任务</span></span>
<span class="line"><span style="color:#85E89D;">jobs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 打包和部署任务</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">build-and-deploy</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 运行在 ubuntu 上</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">runs-on</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">steps</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;"># 复制一个新的项目</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Checkout a new repository</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/checkout@v3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;"># 使用 node 环境</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Node environment</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/setup-node@v3</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">node-version</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;16&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;"># 安装依赖</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Install packages</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">npm i</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;"># 打包 vitepress</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Build  site</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">npm run build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;"># 将打包后的静态文件上传到 gp-pages 分支上</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Publish to github pages</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">JamesIves/github-pages-deploy-action@v4.3.3</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">branch</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">gh-pages</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">folder</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">docs/.vitepress/dist</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 任务名称</span></span>
<span class="line"><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Deploy blog</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 任务触发事件</span></span>
<span class="line"><span style="color:#005CC5;">on</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">push</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">branches</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 任务</span></span>
<span class="line"><span style="color:#22863A;">jobs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 打包和部署任务</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">build-and-deploy</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 运行在 ubuntu 上</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">runs-on</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ubuntu-latest</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">steps</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;"># 复制一个新的项目</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Checkout a new repository</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/checkout@v3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;"># 使用 node 环境</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Node environment</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/setup-node@v3</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">node-version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;16&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;"># 安装依赖</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Install packages</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">npm i</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;"># 打包 vitepress</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Build  site</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">npm run build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;"># 将打包后的静态文件上传到 gp-pages 分支上</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Publish to github pages</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">JamesIves/github-pages-deploy-action@v4.3.3</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">branch</span><span style="color:#24292E;">: </span><span style="color:#032F62;">gh-pages</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">folder</span><span style="color:#24292E;">: </span><span style="color:#032F62;">docs/.vitepress/dist</span></span></code></pre></div><h2 id="github-actions" tabindex="-1">Github actions <a class="header-anchor" href="#github-actions" aria-label="Permalink to &quot;Github actions&quot;">​</a></h2><p>可以在 <code>actions</code> 市场里查找一些已有的 actions 来简化部署流程。</p><ul><li><a href="https://github.com/marketplace?category=deployment&amp;query=github+pages+sort%3Apopularity-desc&amp;type=actions&amp;verification=" target="_blank" rel="noreferrer">Github actions 市场</a></li></ul><h2 id="设置-token" tabindex="-1">设置 token <a class="header-anchor" href="#设置-token" aria-label="Permalink to &quot;设置 token&quot;">​</a></h2><p>触发事件时需要设置 <code>github token</code>，并且 <code>token</code> 需要有 <code>workflow</code> 权限。</p><ul><li><a href="https://github.com/settings/tokens/674290866" target="_blank" rel="noreferrer">设置推送的token</a></li></ul><h2 id="设置域名" tabindex="-1">设置域名 <a class="header-anchor" href="#设置域名" aria-label="Permalink to &quot;设置域名&quot;">​</a></h2><p>部署后，默认 <code>xxx.github.io</code> 项目的 <code>gh-pages</code> 分支对应于根项目，其他仓库的 <code>gh-pages</code> 分支部署后为 <code>xxx.github.io/repository_name/</code> 路径。因此只需要设置 <code>xxx.github.io</code> 的域名映射即可。</p><ul><li><a href="https://docs.github.com/cn/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages" target="_blank" rel="noreferrer">域名设置</a></li></ul>`,12),e=[o];function t(c,r,E,i,y,u){return n(),a("div",null,e)}const b=s(p,[["render",t]]);export{h as __pageData,b as default};
