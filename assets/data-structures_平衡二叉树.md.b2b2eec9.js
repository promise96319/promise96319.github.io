import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.c610f10c.js";const h=JSON.parse('{"title":"平衡二叉树（AVL）","description":"","frontmatter":{},"headers":[],"relativePath":"data-structures/平衡二叉树.md","filePath":"data-structures/平衡二叉树.md","lastUpdated":1695631559000}'),p={name:"data-structures/平衡二叉树.md"},o=l(`<h1 id="平衡二叉树-avl" tabindex="-1">平衡二叉树（AVL） <a class="header-anchor" href="#平衡二叉树-avl" aria-label="Permalink to &quot;平衡二叉树（AVL）&quot;">​</a></h1><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>二叉查找树虽然能够进行快速查找，但是查找速度是不稳定的，在最坏情况下，二叉树的查找相当于单向链表查找。</p><p>那么如何解决这个问题呢？此时就需要保证二叉树的层数尽可能的少，叶子结点与根结点之间的距离尽可能平均，这就涉及一个概念 -- <strong>平衡因子</strong>（左子树和右子树的高度差值）。平衡二叉树在插入结点时，会判断平衡因子是否符合要求，如果不符合，则会进行相应处理（旋转），保证左右子树高度平衡。下面将介绍一下四种旋转平衡的方法。</p><h2 id="结点为左左" tabindex="-1">结点为左左 <a class="header-anchor" href="#结点为左左" aria-label="Permalink to &quot;结点为左左&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">rotateLeftLeft</span><span style="color:#E1E4E8;">(rootNode) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 1. 断开左结点与父结点的联系</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">leftNode</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> rootNode.left;</span></span>
<span class="line"><span style="color:#E1E4E8;">    rootNode.</span><span style="color:#B392F0;">setLeft</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 2. 将左结点作为接下来的父结点</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (rootNode.parent) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      rootNode.parent.</span><span style="color:#B392F0;">setLeft</span><span style="color:#E1E4E8;">(leftNode);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (rootNode </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.root) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// If root node is root then make left node to be a new root.</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.root </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> leftNode;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 3. 如果左结点有右结点，那么将右结点设置为父结点的左结点（因为右结点比父结点小）</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (leftNode.right) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      rootNode.</span><span style="color:#B392F0;">setLeft</span><span style="color:#E1E4E8;">(leftNode.right);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 4. 将父结点设置为左结点的右结点</span></span>
<span class="line"><span style="color:#E1E4E8;">    leftNode.</span><span style="color:#B392F0;">setRight</span><span style="color:#E1E4E8;">(rootNode);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">rotateLeftLeft</span><span style="color:#24292E;">(rootNode) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 1. 断开左结点与父结点的联系</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">leftNode</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> rootNode.left;</span></span>
<span class="line"><span style="color:#24292E;">    rootNode.</span><span style="color:#6F42C1;">setLeft</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 2. 将左结点作为接下来的父结点</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (rootNode.parent) {</span></span>
<span class="line"><span style="color:#24292E;">      rootNode.parent.</span><span style="color:#6F42C1;">setLeft</span><span style="color:#24292E;">(leftNode);</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (rootNode </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.root) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// If root node is root then make left node to be a new root.</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.root </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> leftNode;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 3. 如果左结点有右结点，那么将右结点设置为父结点的左结点（因为右结点比父结点小）</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (leftNode.right) {</span></span>
<span class="line"><span style="color:#24292E;">      rootNode.</span><span style="color:#6F42C1;">setLeft</span><span style="color:#24292E;">(leftNode.right);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 4. 将父结点设置为左结点的右结点</span></span>
<span class="line"><span style="color:#24292E;">    leftNode.</span><span style="color:#6F42C1;">setRight</span><span style="color:#24292E;">(rootNode);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span></code></pre></div><h2 id="结点为左右" tabindex="-1">结点为左右 <a class="header-anchor" href="#结点为左右" aria-label="Permalink to &quot;结点为左右&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">rotateLeftRight</span><span style="color:#E1E4E8;">(rootNode) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 1. 父结点和子结点断开联系</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">leftNode</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> rootNode.left;</span></span>
<span class="line"><span style="color:#E1E4E8;">    rootNode.</span><span style="color:#B392F0;">setLeft</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 2. 将左结点与其右结点断开联系</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">leftRightNode</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> leftNode.right;</span></span>
<span class="line"><span style="color:#E1E4E8;">    leftNode.</span><span style="color:#B392F0;">setRight</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 3. 如果左右结点有左结点，将其添加到左结点的右结点上</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (leftRightNode.left) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      leftNode.</span><span style="color:#B392F0;">setRight</span><span style="color:#E1E4E8;">(leftRightNode.left);</span></span>
<span class="line"><span style="color:#E1E4E8;">      leftRightNode.</span><span style="color:#B392F0;">setLeft</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 4. 将左右结点设为父结点的左结点</span></span>
<span class="line"><span style="color:#E1E4E8;">    rootNode.</span><span style="color:#B392F0;">setLeft</span><span style="color:#E1E4E8;">(leftRightNode);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 5. 将左结点设置为左右结点的左结点</span></span>
<span class="line"><span style="color:#E1E4E8;">    leftRightNode.</span><span style="color:#B392F0;">setLeft</span><span style="color:#E1E4E8;">(leftNode);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 6. 以上步骤实质上将结点转换成了左左的情况</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">rotateLeftLeft</span><span style="color:#E1E4E8;">(rootNode);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">rotateLeftRight</span><span style="color:#24292E;">(rootNode) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 1. 父结点和子结点断开联系</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">leftNode</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> rootNode.left;</span></span>
<span class="line"><span style="color:#24292E;">    rootNode.</span><span style="color:#6F42C1;">setLeft</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 2. 将左结点与其右结点断开联系</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">leftRightNode</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> leftNode.right;</span></span>
<span class="line"><span style="color:#24292E;">    leftNode.</span><span style="color:#6F42C1;">setRight</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 3. 如果左右结点有左结点，将其添加到左结点的右结点上</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (leftRightNode.left) {</span></span>
<span class="line"><span style="color:#24292E;">      leftNode.</span><span style="color:#6F42C1;">setRight</span><span style="color:#24292E;">(leftRightNode.left);</span></span>
<span class="line"><span style="color:#24292E;">      leftRightNode.</span><span style="color:#6F42C1;">setLeft</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 4. 将左右结点设为父结点的左结点</span></span>
<span class="line"><span style="color:#24292E;">    rootNode.</span><span style="color:#6F42C1;">setLeft</span><span style="color:#24292E;">(leftRightNode);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 5. 将左结点设置为左右结点的左结点</span></span>
<span class="line"><span style="color:#24292E;">    leftRightNode.</span><span style="color:#6F42C1;">setLeft</span><span style="color:#24292E;">(leftNode);</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 6. 以上步骤实质上将结点转换成了左左的情况</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">rotateLeftLeft</span><span style="color:#24292E;">(rootNode);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span></code></pre></div><h2 id="结点为右左" tabindex="-1">结点为右左 <a class="header-anchor" href="#结点为右左" aria-label="Permalink to &quot;结点为右左&quot;">​</a></h2><p>与节点为左右的时候，情况对称。</p><h2 id="结点为右右" tabindex="-1">结点为右右 <a class="header-anchor" href="#结点为右右" aria-label="Permalink to &quot;结点为右右&quot;">​</a></h2><p>与节点为左左的时候，情况对称。</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://mp.weixin.qq.com/s/qa7OjMzGN0-Nd-ftZ977rA" target="_blank" rel="noreferrer">什么是AVL树？</a></li><li><a href="https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree/avl-tree" target="_blank" rel="noreferrer">avl tree</a></li></ul>`,14),e=[o];function t(c,r,E,y,i,d){return a(),n("div",null,e)}const N=s(p,[["render",t]]);export{h as __pageData,N as default};
