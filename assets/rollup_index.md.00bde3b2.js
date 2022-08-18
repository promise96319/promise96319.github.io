import{_ as e,c as l,o as i,a}from"./app.19e07002.js";const m=JSON.parse('{"title":"Rollup","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u77E5\u8BC6\u70B9","slug":"\u77E5\u8BC6\u70B9"},{"level":2,"title":"Graph","slug":"graph"},{"level":3,"title":"build","slug":"build"},{"level":3,"title":"\u5DE5\u5177\u65B9\u6CD5","slug":"\u5DE5\u5177\u65B9\u6CD5"},{"level":2,"title":"ModuleLoader","slug":"moduleloader"},{"level":2,"title":"Module","slug":"module"},{"level":2,"title":"Bundle","slug":"bundle"},{"level":3,"title":"generate","slug":"generate"},{"level":2,"title":"Chunk","slug":"chunk"},{"level":2,"title":"rollup","slug":"rollup-1"},{"level":2,"title":"PluginDriver","slug":"plugindriver"},{"level":2,"title":"FileEmitter","slug":"fileemitter"},{"level":2,"title":"\u6587\u7AE0","slug":"\u6587\u7AE0"}],"relativePath":"rollup/index.md","lastUpdated":1660794428000}'),r={name:"rollup/index.md"},t=a(`<h1 id="rollup" tabindex="-1">Rollup <a class="header-anchor" href="#rollup" aria-hidden="true">#</a></h1><ul><li><a href="./\u6E90\u7801\u8C03\u8BD5.html">\u6E90\u7801\u8C03\u8BD5</a></li></ul><h2 id="\u77E5\u8BC6\u70B9" tabindex="-1">\u77E5\u8BC6\u70B9 <a class="header-anchor" href="#\u77E5\u8BC6\u70B9" aria-hidden="true">#</a></h2><ul><li>Queue \u7684\u5B9E\u73B0\uFF0C\u6700\u5927\u5E76\u53D1\u6267\u884C promise\uFF0C\u5E76\u4E14\u6709\u8FD4\u56DE\u503C\u7B49\u3002</li><li>Promise \u4E32\u884C</li><li>\u5FAA\u73AF\u4F9D\u8D56\u65F6\u8B66\u544A\u26A0\uFE0F</li></ul><h2 id="graph" tabindex="-1">Graph <a class="header-anchor" href="#graph" aria-hidden="true">#</a></h2><h3 id="build" tabindex="-1">build <a class="header-anchor" href="#build" aria-hidden="true">#</a></h3><ul><li>generateModuleGraph <ul><li>moduleLoader.addEntryModules =&gt; modules \u548C externalModules</li></ul></li><li>sortModules <ul><li>circlePaths =&gt; \u4F1A\u4F7F\u7528\u6DF1\u5EA6\u904D\u5386\u7684\u65B9\u5F0F\u5224\u65AD\u662F\u5426\u5B58\u5728\u5FAA\u73AF\u4F9D\u8D56\uFF0C\u5E76\u4E14\u63D0\u793A\u8B66\u544A\u3002</li><li>ast.bind() =&gt; ast \u4E2D\u53D8\u91CF\u4F5C\u7528\u57DF ?</li></ul></li><li>includeStatements <ul><li>tree shaking ?</li><li>module <ul><li>implicitly: export * form &#39;./foo.js&#39; <ul><li><a href="https://stackoverflow.com/questions/56277089/how-does-one-implicitly-export-an-entire-module" target="_blank" rel="noopener noreferrer">https://stackoverflow.com/questions/56277089/how-does-one-implicitly-export-an-entire-module</a></li></ul></li><li>explicitly: export { foo } form &#39;./foo.js&#39;</li></ul></li></ul></li></ul><h3 id="\u5DE5\u5177\u65B9\u6CD5" tabindex="-1">\u5DE5\u5177\u65B9\u6CD5 <a class="header-anchor" href="#\u5DE5\u5177\u65B9\u6CD5" aria-hidden="true">#</a></h3><pre><code>- pluginDriver
- moduleLoader
- acornParser
- fileOperationQueue
- getModuleInfo \uFF08\u83B7\u53D6\u6A21\u5757\u4FE1\u606F\uFF09
</code></pre><h2 id="moduleloader" tabindex="-1">ModuleLoader <a class="header-anchor" href="#moduleloader" aria-hidden="true">#</a></h2><ul><li>addEntryModules =&gt; loadEntryModule =&gt; resolveId =&gt; fetchModule =&gt; new Module =&gt; addModuleSource =&gt; fs.readFile =&gt; transform\uFF08\u63D2\u4EF6\u8F6C\u6362\uFF09=&gt; module.setSource\uFF08ast \u89E3\u6790\uFF09=&gt; \u83B7\u53D6\u9759\u6001\u548C\u52A8\u6001 dependencies\uFF0C\u5E76\u5173\u8054\u7236\u5B50\u5173\u7CFB =&gt; moduleParsed hook =&gt; fetchModuleDependencies \u52A0\u8F7D\u5B50\u6A21\u5757</li></ul><h2 id="module" tabindex="-1">Module <a class="header-anchor" href="#module" aria-hidden="true">#</a></h2><ul><li>astContext\uFF1A\u63D0\u4F9B ast \u4E0A\u4E0B\u6587</li><li>bindReferences\uFF1A ast.bind()</li><li>include\uFF1Aast.include()</li><li>setSource\uFF1A\u89E3\u6790\u6210 ast\uFF0C</li><li>sources\uFF1A\u5F53\u524D\u6A21\u5757\u4E2D\u4F7F\u7528\u5230\u7684\u5176\u4ED6\u6A21\u5757\u7684\u8DEF\u5F84 <ul><li>import * from &#39;index.js&#39; =&gt; \u5B58\u7684\u662F index.js</li></ul></li></ul><h2 id="bundle" tabindex="-1">Bundle <a class="header-anchor" href="#bundle" aria-hidden="true">#</a></h2><h3 id="generate" tabindex="-1">generate <a class="header-anchor" href="#generate" aria-hidden="true">#</a></h3><ul><li>setOutputBundle ?</li><li>generateChunk <ul><li>getChunkAssignments =&gt; \u751F\u6210 [{ alias, modules }] \u5373 chunk \u6570\u7EC4\u548C\u6BCF\u4E00\u4E2A chunk \u5BF9\u5E94\u7684 module</li><li>new Chunk() =&gt; chunk =&gt; chunks</li><li>chunk.link() =&gt; \u5173\u8054 module/dependency \u548C chunk \u5173\u7CFB</li><li>generateFacades \uFF08\u6839\u636E preserveentrysignatures \u6765\u5B9A\uFF09</li></ul></li></ul><h2 id="chunk" tabindex="-1">Chunk <a class="header-anchor" href="#chunk" aria-hidden="true">#</a></h2><ul><li></li></ul><h2 id="rollup-1" tabindex="-1">rollup <a class="header-anchor" href="#rollup-1" aria-hidden="true">#</a></h2><ul><li>graph.build()</li><li>graph.handleGenerateWrite() <ul><li>getOutputOptionsAndPluginDriver =&gt; \u751F\u6210 outputPluginDriver</li><li>new Bundle() =&gt; generate <ul><li>setOutputBundle =&gt; \u7ED9 fileEmitter \u7684\u5904\u7406</li><li></li></ul></li><li>graph.fileOperationQueue =&gt; writefile</li><li>\u5BF9 generate \u5185\u5BB9\u6574\u7406\u540E\u8FD4\u56DE\uFF08\u4F9B\u547D\u4EE4\u5F0F\u8C03\u7528\uFF09</li></ul></li></ul><h2 id="plugindriver" tabindex="-1">PluginDriver <a class="header-anchor" href="#plugindriver" aria-hidden="true">#</a></h2><ul><li>build \u9636\u6BB5\u4E3A inputPluginDriver</li><li>bundle \u9636\u6BB5\u4E3A outputPluginDriver\uFF0C\u611F\u89C9\u8FD9\u5757\u4EE3\u7801\u804C\u8D23\u4E0D\u662F\u5F88\u6E05\u6670</li></ul><h2 id="fileemitter" tabindex="-1">FileEmitter <a class="header-anchor" href="#fileemitter" aria-hidden="true">#</a></h2><ul><li>\u7BA1\u7406 chunk\uFF08\u5BF9\u5E94\u591A\u4E2A\u6A21\u5757\uFF09 \u548C asset\uFF08\u5BF9\u5E94\u5355\u4E00\u4E2A\u6A21\u5757\uFF09</li><li></li></ul><h2 id="\u6587\u7AE0" tabindex="-1">\u6587\u7AE0 <a class="header-anchor" href="#\u6587\u7AE0" aria-hidden="true">#</a></h2><ul><li><a href="https://medium.com/@PepsRyuu/why-i-use-rollup-and-not-webpack-e3ab163f4fd3" target="_blank" rel="noopener noreferrer">https://medium.com/@PepsRyuu/why-i-use-rollup-and-not-webpack-e3ab163f4fd3</a><ul><li>webpack \u914D\u7F6E\u591A\uFF0C\u590D\u6742\u6027\u9AD8\uFF0C\u6253\u5305\u540E\u7684\u4EE3\u7801\u81C3\u80BF\u3002\u529F\u80FD\u5168\u9762\u3002</li><li>parcel \u96F6\u914D\u7F6E\uFF0C\u4F46\u662F\u5BF9\u4E8E\u5927\u578B\u9879\u76EE\u60F3\u8981\u4F18\u5316\u5B9A\u5236\u6BD4\u8F83\u56F0\u96BE\u3002</li><li>rollup \u914D\u7F6E\u8F83\u5C11\uFF0Choist \u6253\u5305\u540E\u4EE3\u7801\u6E05\u6670\u3002\u4EC5\u652F\u6301 esm\uFF0C\u9700\u8981\u901A\u8FC7\u6269\u5C55\u6765\u652F\u6301\u5176\u4ED6\u7C7B\u578B\u6587\u4EF6\uFF0C\u751F\u4EA7\u73AF\u5883\u517C\u5BB9\u6027\u4E0D\u597D\u3002</li></ul></li></ul>`,26),u=[t];function d(n,o,h,s,c,p){return i(),l("div",null,u)}var f=e(r,[["render",d]]);export{m as __pageData,f as default};