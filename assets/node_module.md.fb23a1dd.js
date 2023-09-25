import{_ as e,o,c as d,Q as c}from"./chunks/framework.c610f10c.js";const h=JSON.parse('{"title":"node:module","description":"","frontmatter":{},"headers":[],"relativePath":"node/module.md","filePath":"node/module.md","lastUpdated":1695632838000}'),a={name:"node/module.md"},t=c('<h1 id="node-module" tabindex="-1">node:module <a class="header-anchor" href="#node-module" aria-label="Permalink to &quot;node:module&quot;">​</a></h1><h2 id="api" tabindex="-1">api <a class="header-anchor" href="#api" aria-label="Permalink to &quot;api&quot;">​</a></h2><ul><li><code>builtinModules</code>：返回 <code>node</code> 所有内置模块的名称，返回值为 <code>string[]</code> 形式。</li><li><code>createRequire</code>：生成 <code>require</code>。</li><li><code>isBuiltin</code>：是否是内置模块</li><li><code>syncBuiltinESMExports</code>：同步 <code>cjs</code> 对内置模块的变更到 <code>esm</code> 上。比如 <code>cjs</code> 删除 <code>fs.readFile</code>，通过同步变更，会使得 <code>import(&#39;node:fs&#39;)</code> 引入的模块中也没有 <code>readFile</code>。</li><li>SourceMap（试验性）</li></ul>',3),i=[t];function l(n,r,s,u,_,m){return o(),d("div",null,i)}const f=e(a,[["render",l]]);export{h as __pageData,f as default};