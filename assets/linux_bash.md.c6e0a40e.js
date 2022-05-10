import{_ as s,c as a,o as n,a as t}from"./app.d322b2e6.js";const m='{"title":"bash","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u5FEB\u6377\u547D\u4EE4","slug":"\u5FEB\u6377\u547D\u4EE4"},{"level":3,"title":"\u522B\u540D","slug":"\u522B\u540D"},{"level":3,"title":".bash_profile","slug":"bash-profile"}],"relativePath":"linux/bash.md","lastUpdated":1652195166000}',e={},p=t(`<h1 id="bash" tabindex="-1">bash <a class="header-anchor" href="#bash" aria-hidden="true">#</a></h1><p><a href="https://wangdoc.com/bash/index.html" target="_blank" rel="noopener noreferrer">bash\u6559\u7A0B</a></p><h3 id="\u5FEB\u6377\u547D\u4EE4" tabindex="-1">\u5FEB\u6377\u547D\u4EE4 <a class="header-anchor" href="#\u5FEB\u6377\u547D\u4EE4" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5FEB\u6377\u547D\u4EE4</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>ctrl + a</td><td>\u79FB\u52A8\u5230\u884C\u9996</td></tr><tr><td>ctrl + e</td><td>\u79FB\u52A8\u5230\u884C\u5C3E</td></tr><tr><td>ctrl + f</td><td>\u5149\u6807\u5411\u524D\u79FB\u52A8\u4E00\u4E2A\u5B57\u6BCD</td></tr><tr><td>ctrl + b</td><td>\u5149\u6807\u5411\u540E\u79FB\u52A8\u4E00\u4E2A\u5B57\u6BCD</td></tr><tr><td>option + f (\u9700\u8BBE\u7F6Eoption \u4E3A meta key)</td><td>\u5149\u6807\u5411\u524D\u79FB\u52A8\u4E00\u4E2A\u5355\u8BCD</td></tr><tr><td>option + b</td><td>\u5149\u6807\u5411\u540E\u79FB\u52A8\u4E00\u4E2A\u5355\u8BCD</td></tr><tr><td>\\</td><td>\\</td></tr><tr><td>ctrl + p</td><td>\u4E0A\u4E00\u6761\u547D\u4EE4</td></tr><tr><td>ctrl + n</td><td>\u4E0B\u4E00\u6761\u547D\u4EE4</td></tr><tr><td>\\</td><td>\\</td></tr><tr><td>ctrl + u</td><td>\u4ECE\u5149\u6807\u5411\u524D\u5220\u9664\u5230\u884C\u9996</td></tr><tr><td>ctrl + k</td><td>\u4ECE\u5149\u6807\u5411\u540E\u5220\u9664\u5230\u884C\u5C3E</td></tr><tr><td>ctrl + w</td><td>\u4ECE\u5149\u6807\u5411\u524D\u5220\u9664\u4E00\u4E2A\u5355\u8BCD</td></tr><tr><td>option + d</td><td>\u4ECE\u5149\u6807\u5411\u540E\u5220\u9664\u4E00\u4E2A\u5355\u8BCD</td></tr><tr><td>ctrl + h</td><td>\u5220\u9664\u5149\u6807\u524D\u4E00\u4E2A\u5B57\u6BCD</td></tr><tr><td>ctrl + d</td><td>\u5220\u9664\u5149\u6807\u540E\u4E00\u4E2A\u5B57\u6BCD</td></tr><tr><td>\\</td><td>\\</td></tr><tr><td>ctrl + t</td><td>\u4EA4\u6362\u5F53\u524D\u5B57\u6BCD\u548C\u4E0A\u4E00\u4E2A\u5B57\u6BCD</td></tr><tr><td>option + t</td><td>\u4EA4\u6362\u5F53\u524D\u5355\u8BCD\u548C\u4E0A\u4E00\u4E2A\u5355\u8BCD</td></tr></tbody></table><h3 id="\u522B\u540D" tabindex="-1">\u522B\u540D <a class="header-anchor" href="#\u522B\u540D" aria-hidden="true">#</a></h3><div class="language-bash"><pre><code><span class="token comment"># \u6781\u7B80\u547D\u4EE4</span>
<span class="token comment"># \u57FA\u4E8E @antfu/ni \u5E93\uFF0Cnpm/yarn/pnpm </span>
<span class="token comment"># npm run dev</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token string">&quot;nr build&quot;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">d</span><span class="token operator">=</span><span class="token string">&quot;nr dev&quot;</span>
<span class="token comment"># npm install</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token string">&quot;ni&quot;</span>
<span class="token comment"># npm install -D</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">id</span><span class="token operator">=</span><span class="token string">&quot;ni -D&quot;</span>
<span class="token comment"># http-server \u8D77\u670D\u52A1</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">s</span><span class="token operator">=</span><span class="token string">&quot;serve&quot;</span>
<span class="token comment"># npm run test</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">t</span><span class="token operator">=</span><span class="token string">&quot;nr test&quot;</span>
<span class="token comment"># npm uninstall</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">u</span><span class="token operator">=</span><span class="token string">&quot;nun&quot;</span>
<span class="token comment"># \u6253\u5F00 vscode</span>
<span class="token builtin class-name">alias</span> .<span class="token operator">=</span><span class="token string">&quot;code .&quot;</span>
</code></pre></div><h3 id="bash-profile" tabindex="-1">.bash_profile <a class="header-anchor" href="#bash-profile" aria-hidden="true">#</a></h3><div class="language-bash"><pre><code><span class="token comment"># \u57FA\u4E8E @antfu/ni \u5E93\uFF0Cnpm/yarn/pnpm </span>
<span class="token comment"># npm run build</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token string">&quot;nr build&quot;</span>
<span class="token comment"># npm run dev</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">d</span><span class="token operator">=</span><span class="token string">&quot;nr dev&quot;</span>
<span class="token comment"># npm install</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token string">&quot;ni&quot;</span>
<span class="token comment"># npm install -D</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">id</span><span class="token operator">=</span><span class="token string">&quot;ni -D&quot;</span>
<span class="token comment"># http-server \u8D77\u672C\u5730 web \u670D\u52A1</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">s</span><span class="token operator">=</span><span class="token string">&quot;http-server -c-1&quot;</span>
<span class="token comment"># npm run test</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">t</span><span class="token operator">=</span><span class="token string">&quot;nr test&quot;</span>
<span class="token comment"># npm uninstall</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">u</span><span class="token operator">=</span><span class="token string">&quot;nun&quot;</span>
<span class="token comment"># vscode</span>
<span class="token builtin class-name">alias</span> .<span class="token operator">=</span><span class="token string">&quot;code .&quot;</span>

<span class="token comment"># git</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">ga</span><span class="token operator">=</span><span class="token string">&quot;git add .&quot;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">gcm</span><span class="token operator">=</span><span class="token string">&quot;git commit -m&quot;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">gs</span><span class="token operator">=</span><span class="token string">&quot;git status&quot;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">gb</span><span class="token operator">=</span><span class="token string">&quot;git branch -a&quot;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">gt</span><span class="token operator">=</span><span class="token string">&quot;git log --graph --oneline --all&quot;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">gcb</span><span class="token operator">=</span><span class="token string">&quot;git checkout -b&quot;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">gf</span><span class="token operator">=</span><span class="token string">&quot;git fetch&quot;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">gm</span><span class="token operator">=</span><span class="token string">&quot;git merge&quot;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">gp</span><span class="token operator">=</span><span class="token string">&quot;git push&quot;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">gpl</span><span class="token operator">=</span><span class="token string">&quot;git pull&quot;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">gitu</span><span class="token operator">=</span><span class="token string">&quot;git config user.name promise96319&quot;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">gite</span><span class="token operator">=</span><span class="token string">&quot;git config user.email 1248975357@qq.com&quot;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">gcz</span><span class="token operator">=</span><span class="token string">&quot;git add . &amp;&amp; git status &amp;&amp; git cz&quot;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">gl</span><span class="token operator">=</span><span class="token string">&quot;git log&quot;</span>

<span class="token comment"># npm </span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">npmqt</span><span class="token operator">=</span><span class="token string">&quot;npm config set registry http://ued.qingteng.cn:81&quot;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">npmtb</span><span class="token operator">=</span><span class="token string">&quot;npm config set registry https://registry.npm.taobao.org&quot;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">npmjs</span><span class="token operator">=</span><span class="token string">&quot;npm config set registry https://registry.npmjs.org/&quot;</span>
</code></pre></div>`,8),l=[p];function o(i,r,c,k,d,u){return n(),a("div",null,l)}var b=s(e,[["render",o]]);export{m as __pageData,b as default};
