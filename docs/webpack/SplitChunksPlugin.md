# SplitChunksPlugin 原理

## 配置文档

- [webpack SplitChunksPlugin 配置文档](https://webpack.docschina.org/plugins/split-chunks-plugin/)

## 默认cacheGroups

在`webpack/lib/webpack.js`文件中，`createCompiler`时调用了`applyWebpackOptionsDefaults`函数，该函数会为`cacheGroups`设置两个默认值，这两个默认值就是`webpack`的默认分包原则，其中`defaultVendors`是应用于`node_modules`：

```javascript
F(cacheGroups, "default", () => ({
  idHint: "",
  reuseExistingChunk: true,
  minChunks: 2,
  priority: -20
}));
F(cacheGroups, "defaultVendors", () => ({
  idHint: "vendors",
  reuseExistingChunk: true,
  test: NODE_MODULES_REGEXP,
  priority: -10
}));
```

## 触发时机

在`Compilation.js`文件中，调用`seal`方法时，当调用`buildChunkGraph`之后，就建立起了`modules`和`chunks`的关系，此时会开始触发`hooks.optimizeChunks`钩子：

```javascript
while (this.hooks.optimizeChunks.call(this.chunks, this.chunkGroups)) {
  /* empty */
}
```

此时会触发几个插件：

- `RemoveEmptyChunksPlugin`：

```javascript
for (const chunk of chunks) {
  // 移除不包含 runtime 的空 chunk
  if (
    chunkGraph.getNumberOfChunkModules(chunk) === 0 &&
    !chunk.hasRuntime() &&
    chunkGraph.getNumberOfEntryModules(chunk) === 0
  ) {
    compilation.chunkGraph.disconnectChunk(chunk);
    compilation.chunks.delete(chunk);
  }
}
```

- `MergeDuplicateChunksPlugin`：

```javascript
// 合并”重复“的chunk。
if (chunkGraph.canChunksBeIntegrated(chunk, otherChunk)) {
  chunkGraph.integrateChunks(chunk, otherChunk);
  compilation.chunks.delete(otherChunk);
}
```

- `SplitChunksPlugin`：进行分包。

## SplitChunksPlugin

`SplitChunksPlugin`主要有以下几个作用：

- 提取公共代码：比如不同`entry`中引入了相同的模块，此时可以提取出来。
- 拆分过大的`js`文件：比如从主模块中将`node_modules`中的代码单独拎出来。
- 合并零散的`js`文件。

这几个功能主要都是由`cacheGroups`实现，在初始化阶段，已经定义好了两个默认的`cacheGroups`。

在`webpack/lib/optimize`中找到`SplitChunksPlugin`插件：

```javascript
compilation.hooks.optimizeChunks.tap(
  {
    name: "SplitChunksPlugin",
    stage: STAGE_ADVANCED
  },
  chunks => {}
)
```

该插件回到函数会在`hooks.optimizeChunks`钩子触发时执行：

```javascript
// Compilation.js 文件中触发
while (this.hooks.optimizeChunks.call(this.chunks, this.chunkGroups)) {
  /* empty */
}
```

此时已经构建好了`modules`和`chunks`之间的关系，但是还没有为`chunks`生成代码。

## 举例

假设有两个入口文件`index1.js`和`index2.js`，他们同时引入了`moduleA.js`文件，`webpack`的配置如下：

```javascript
// webpack.config.json
{
  splitChunks: {
    chunks: 'all',
    cacheGroups: {
      common: {
        minSize: 1,
        priority: 20,
        minChunks: 2,
      }
    }
  }
}
```

## 匹配cacheGroups

`SplitChunksPlugin`首先会遍历所有`modules`，然后根据定义好`cacheGroups`的规则进行匹配：

```javascript
for (const module of compilation.modules) {
  let cacheGroups = this.options.getCacheGroups(module, context);
  if (!Array.isArray(cacheGroups) || cacheGroups.length === 0) {
    continue;
  }
  for (const cacheGroupSource of cacheGroups) {
    const cacheGroup = this._getCacheGroup(cacheGroupSource);

  	// ...
  }
}
```

随后遍历所有的`cacheGroups`，进行下一步处理：

```javascript
// 1. 获取 module 关联的 chunks
// 对于只有一个 chunk 使用该 module 时，通常只返回 [chunk]
// 对于多个chunk 使用该 module 时，通常返回 [new Set(chunk1, chunk2), chunk1, chunk2]
const combs = cacheGroup.usedExports
? getCombsByUsedExports()
: getCombs();
for (const chunkCombination of combs) {
  // 如果是 Chunk，说明只有一个 chunk
  const count =
        chunkCombination instanceof Chunk ? 1 : chunkCombination.size;
  // 2. 如果chunk的使用数小于minChunks，那么不符合要求，直接退出
  if (count < cacheGroup.minChunks) continue;
  const { chunks: selectedChunks, key: selectedChunksKey } =
        getSelectedChunks(chunkCombination, cacheGroup.chunksFilter);
	// 3. 将结果记录到chunksInfoMap中
  addModuleToChunksInfoMap(
    cacheGroup,
    cacheGroupIndex,
    selectedChunks,
    selectedChunksKey,
    module
  );
}
```

`chunksInfoMap`结构如下

```javascript
chunksInfoMap.set(
  // 使用到的 chunks 形成的 key
  key,
  (info = {
    // 同一 cacheGroup 匹配到的 module 且在同样的 chunks 中使用时
    // 将这些 module 存于此处
    modules: new SortableSet(
      undefined,
      compareModulesByIdentifier
    ),
    cacheGroup,
    cacheGroupIndex,
    name,
    // 对象形式，记录各种不同的资源的大小，比如：{ javascript: 200 }
    sizes: {},
    // 包含的 chunks
    chunks: new Set(),
    reuseableChunks: new Set(),
    chunksKeys: new Set()
  })
);
```

这样所有`modules`经过与`cacheGroup`匹配后，形成的`chunksInfoMap`就能表示每个`cacheGroup`涉及到了哪些`module`，而这些`module`又在哪些`chunks`里被用到。

## 过滤chunksInfoMap

得到`chunksInfoMap`后，会先对其进行过滤：

```javascript
for (const [key, info] of chunksInfoMap) {
  if (removeMinSizeViolatingModules(info)) {
    chunksInfoMap.delete(key);
  } else if (
    !checkMinSizeReduction(
      info.sizes,
      info.cacheGroup.minSizeReduction,
      info.chunks.size
    )
  ) {
    chunksInfoMap.delete(key);
  }
}
```

`chunksInfoMap`实际上对应于待分包的`chunk`。通过`removeMinSizeViolatingModules`方法将`chunks.size`和`minSize`对比，如果小于`minSize`，那么将不符合分包的规定，因此将其剔除掉。

## 生成新chunk

随后遍历`chunksInfoMap`，生成新的`chunk`：

```javascript
while (chunksInfoMap.size > 0) {
  let bestEntryKey;
  let bestEntry;
  for (const pair of chunksInfoMap) {
    const key = pair[0];
    const info = pair[1];
    if (
      bestEntry === undefined ||
      compareEntries(bestEntry, info) < 0
    ) {
      bestEntry = info;
      bestEntryKey = key;
    }
  }

  const item = bestEntry;
  chunksInfoMap.delete(bestEntryKey);
  // ...
}
```

首先会通过`compareEntries`方法对比优先级，看哪个`cacheGroup`对应的`chunk`先生成。经过一系列的处理后，最后会生成一个空`chunk`：

```javascript
if (newChunk === undefined) {
  newChunk = compilation.addChunk(chunkName);
}
```

然后对于`cacheGroups`的`module`涉及到的其他`chunks`(也就是`usedChunks`)，调用`split`方法进行分包：

```javascript
for (const chunk of usedChunks) {
  chunk.split(newChunk);
}

// Chunk 的 split 方法
split(newChunk) {
  // 对于每个使用到 chunk 的地方，newChunk 也应该被使用
  for (const chunkGroup of this._groups) {
    chunkGroup.insertChunk(newChunk, this);
    newChunk.addGroup(chunkGroup);
  }
  for (const idHint of this.idNameHints) {
    newChunk.idNameHints.add(idHint);
  }
  newChunk.runtime = mergeRuntime(newChunk.runtime, this.runtime);
}
```

随后开始对`newChunk`进行处理，其中比较重要的是`modules`和`usedChunks`的处理：

```javascript
// usedChunks 里面需要移除所有已经分包出去的 modules
for (const module of item.modules) {
  for (const chunk of usedChunks) {
    chunkGraph.disconnectChunkAndModule(chunk, module);
  }
}

for (const [key, info] of chunksInfoMap) {
  // 如果与后续处理的 chunks 存在相同 chunk
  if (isOverlap(info.chunks, usedChunks)) {
    let updated = false;
    for (const module of item.modules) {
      // 如果后续处理的 modules 包含此 module，那么需要删除掉，后续不再对该module分包
      if (info.modules.has(module)) {
        info.modules.delete(module);
        for (const key of module.getSourceTypes()) {
          info.sizes[key] -= module.size(key);
        }
        updated = true;
      }
    }
    if (updated) {
      if (info.modules.size === 0) {
        chunksInfoMap.delete(key);
        continue;
      }
      if (
        removeMinSizeViolatingModules(info) ||
        !checkMinSizeReduction(
          info.sizes,
          info.cacheGroup.minSizeReduction,
          info.chunks.size
        )
      ) {
        chunksInfoMap.delete(key);
        continue;
      }
    }
  }
}
```

至此，对于每个`cacheGroup`就已经生成了相应的`chunk`。

## 处理size

得到`chunks`后还会进一步对`chunk`处理，如`chunk`过大时，会再次进行分包。

```javascript
// 将 chunk 再次细分
const results = deterministicGroupingForModules({
	// ...
})
```

## 总结

`SplitChunksPlugin`在`hooks.optimizeChunks`钩子触发时执行，此时`modules`和`chunks`的关系已建立，但还未进行`code generate`。

`SplitChunksPlugin`主要用于提取公共代码，拆分或合并代码等，其核心原理如下：

1. 通过`cacheGroups`匹配`modules`，然后又通过`module`获取在哪些`chunk`里被使用，生成`chunksInfoMap`。
2. 遍历`chunksInfoMap`，生成新的`chunk`，并断开`module`和原有的`chunks`的关系，将新`chunk`加入到原有`chunks`的`chunkGroups`当中。
3. 对生成的`chunks`进行处理，例如过大就会进行再次分包。