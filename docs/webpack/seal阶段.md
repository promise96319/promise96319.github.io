# seal 阶段

在模块源码编译解析后，进入到`seal`阶段，执行`compilation.seal`方法。该阶段的主要目的是建立`module`和`chunk`的关系，并且将`chunk`内的代码进行拼接整合，形成可以执行的代码块。

## chunk

[参考文章](https://www.zhihu.com/people/tec-van/posts)

webpack 会根据模块依赖图的内容组织分包 —— Chunk 对象，默认的分包规则有：

- 同一个 entry 下触达到的模块组织成一个 chunk。
- 异步模块单独组织为一个 chunk。
- entry.runtime 单独组织成一个 chunk。

形成的`chunk`和`module`之间的关系会记录在`ChunkGraph`当中：

- `ChunkGraphModule`用于记录`module`与外界的关系，其中`chunks`参数记录了`module`关联的`chunk`。
- `ChunkGraphChunk`用于记录`chunk`与外界的关系，其中`modules`参数记录了`chunk`关联的`modules`。
- `Entrypoint`继承自`ChunkGroup`，用于组织`chunks`。记录了`chunks`以及`chunkGroup`的父子关系。

在`seal`函数的前半段，主要集中于建立入口`module`的`chunk`关系。

## buildChunkGraph

`buildChunkGraph`的主要执行者是`visitModules`函数：

```javascript
for (const [chunkGroup, modules] of inputEntrypointsAndModules) {
  /** @type {ChunkGroupInfo} */
  const chunkGroupInfo = {
    // ...	
  };

  const chunk = chunkGroup.getEntrypointChunk();
  for (const module of modules) {
    queue.push({
      action: ADD_AND_ENTER_MODULE,
      block: module,
      module,
      chunk,
      chunkGroup,
      chunkGroupInfo
    });

  }
```

该函数会遍历`modules`（这个`modules`为入口`module`），并将其加入到`queue`中。接着会循环执行`queue`：

```javascript
while (queue.length || queueConnect.size) {
  processQueue();

  // ...

  if (queue.length === 0) {
    const tempQueue = queue;
    queue = queueDelayed.reverse();
    queueDelayed = tempQueue;
  }
}
```

`processQueue`方法是`queue`的具体执行内容，精简后的内容如下：

```javascript
switch (queueItem.action) {
  case ADD_AND_ENTER_ENTRY_MODULE:
    chunkGraph.connectChunkAndEntryModule(
      chunk,
      module,
    );
  case ADD_AND_ENTER_MODULE: {
    chunkGraph.connectChunkAndModule(chunk, module);
  }
  case ENTER_MODULE: {
    queueItem.action = LEAVE_MODULE;
    queue.push(queueItem);
  }
  case PROCESS_BLOCK: {
    processBlock(block);
    break;
  }
}
```

可以看出这里其实是通过`connectChunkAndModule`建立`chunk`和`module`之间的关系。`processBlock`又会遍历当前`module`下引用到的其他`module`，并添加到`queue`中：

```javascript
queueBuffer.push({
  action: activeState === true ? ADD_AND_ENTER_MODULE : PROCESS_BLOCK,
  block: refModule,
  module: refModule,
  chunk,
  chunkGroup,
  chunkGroupInfo
});
```

因此，最终通过递归的方式遍历所有相关的`module`，建立了`modules`和`chunks`之间的关系。

## hooks.optimizeChunks

- RemoveEmptyChunksPlugin：移除非入口的空`chunks`。
- MergeDuplicateChunksPlugin：合并重复的`chunks`。
- SplitChunksPlugin：分包。

## 开始生成代码

在得到`chunks`与`modules`后，经过一系列优化，最终会对模块进行遍历，为`chunk`生成最终的代码。

```javascript
// 开始生成代码
this.codeGeneration()

codeGeneration(callback) {
  // ...
  for (const module of this.modules) {
    const runtimes = chunkGraph.getModuleRuntimes(module);
    for (const runtime of runtimes) {
      const hash = chunkGraph.getModuleHash(module, runtime);
      jobs.push({ module, hash, runtime, runtimes: [runtime] });
    }
  }

  this._runCodeGenerationJobs(jobs, callback);
}
```

`codeGeneration`会遍历每一个`module`，然后生成一个任务，添加到`jobs`当中，关于`runtime`的作用，可以参考[这篇文章](https://zhuanlan.zhihu.com/p/373946949)。完后会调用`_runCodeGenerationJobs`方法执行每个任务：

```javascript
asyncLib.eachLimit(
  jobs,
  this.options.parallelism,
  ({ module, hash, runtime, runtimes }, callback) => {
    this._codeGenerationModule(
      module,
      runtime,
      runtimes,
      hash,
      dependencyTemplates,
      chunkGraph,
      moduleGraph,
      runtimeTemplate,
      errors,
      results,
      (err, codeGenerated) => {
        if (codeGenerated) statModulesGenerated++;
        else statModulesFromCache++;
        callback(err);
      }
    );
  },
);

_codeGenerationModule() {
	// 其他代码省略
  result = module.codeGeneration({
    chunkGraph,
    moduleGraph,
    dependencyTemplates,
    runtimeTemplate,
    runtime
  });
}
```

可以看出最终调用的是`module.codeGeneration`方法进行代码的生成。`codeGeneration`的核心又是`generator.generate`方法的调用：

```javascript
codeGeneration(
  // 其他代码省略
  this.generator.generate(this, {
    dependencyTemplates,
    runtimeTemplate,
    moduleGraph,
    chunkGraph,
    runtimeRequirements,
    runtime,
    concatenationScope,
    getData,
    type
  });
)
```

## JavascriptGenerator

在`webpack/lib/javascript/JavascriptGenerator.js`文件中找到`generate`函数：

```javascript
generate(module, generateContext) {
  // 1. 获取 module.build 后解析出来的代码
  const originalSource = module.originalSource();
  // 2. 复制一份代码
  const source = new ReplaceSource(originalSource);
  const initFragments = [];
	// 3. 处理代码
  this.sourceModule(module, initFragments, source, generateContext);
	// 4. 返回拼接代码
  return InitFragment.addToSource(source, initFragments, generateContext);
}
```

### sourceModule

这里的核心是`sourceModule`方法：

```javascript
sourceModule(module, initFragments, source, generateContext) {
  for (const dependency of module.dependencies) {
    this.sourceDependency(
      // ...
    );
  }

  if (module.presentationalDependencies !== undefined) {
    for (const dependency of module.presentationalDependencies) {
      this.sourceDependency(
        // ...
      );
    }
  }

  for (const childBlock of module.blocks) {
    this.sourceBlock(
      // ...
    );
  }
}
```

该方法会通过`sourceDependency`来处理`module.build`过程中分析出来的`dependencies`、`presentationalDependencies`以及`blocks`。`sourceBlock`最终也是调用`sourceDependency`方法：

```javascript
sourceDependency(module, dependency, initFragments, source, generateContext) {
  const constructor = /** @type {new (...args: any[]) => Dependency} */ (
    dependency.constructor
  );
  const template = generateContext.dependencyTemplates.get(constructor);
}
```

### 获取template

第一步根据`dependency`获取相应的`template`。这里的`dependencyTemplates`定义在`compilation`对象上，对于不同的`dependency`，他们会有不同的`template`。这些`templates`是在实例化`compilation`，触发`hooks.compilation`时添加到`dependencyTemplates`当中的，例如：

```javascript
compiler.hooks.compilation.tap(
  "HarmonyModulesPlugin",
  (compilation, { normalModuleFactory }) => {
    compilation.dependencyTemplates.set(
      HarmonyCompatibilityDependency,
      new HarmonyCompatibilityDependency.Template()
    );

    compilation.dependencyFactories.set(
      HarmonyImportSideEffectDependency,
      normalModuleFactory
    );
    compilation.dependencyTemplates.set(
      HarmonyImportSideEffectDependency,
      new HarmonyImportSideEffectDependency.Template()
    );
    // ...
  })
)
```

### sourceDependency

第二步执行`template.apply`方法开始处理`dependency`：

```javascript
template.apply(dependency, source, templateContext);
```

这里以`HarmonyImportSideEffectDependency`为例，如使用`import a from './moduleA.js'`时，会解析为`HarmonyImportSideEffectDependency`：

```javascript
HarmonyImportSideEffectDependency.Template = class HarmonyImportSideEffectDependencyTemplate extends (
	HarmonyImportDependency.Template
) {
	apply(dependency, source, templateContext) {
		const { moduleGraph, concatenationScope } = templateContext;
		super.apply(dependency, source, templateContext);
	}
};
```

最终调用`HarmonyImportDependency.Template`的`apply`方法：

```javascript
const { module, chunkGraph, moduleGraph, runtime } = templateContext;

const connection = moduleGraph.getConnection(dep);

const referencedModule = connection && connection.module;

const moduleKey = referencedModule
? referencedModule.identifier()
: dep.request;
const key = `harmony import ${moduleKey}`;
```

首先会获取`referencedModule`，它是`dep`对应的`module`，而传入的`module`则是`referencedModule`的父级`module`。然后根据`moduleKey`生成一个`key`值。随后调用`getImportState`：

```javascript
const importStatement = dep.getImportStatement(false, templateContext);

getImportStatement(
  update,
  { runtimeTemplate, module, moduleGraph, chunkGraph, runtimeRequirements }
) {
  return runtimeTemplate.importStatement({
    update,
    module: moduleGraph.getModule(this),
    chunkGraph,
    importVar: this.getImportVar(moduleGraph),
    request: this.request,
    originModule: module,
    runtimeRequirements
  });
}
```

传入的参数`module`代表当前`dependency`对应的`module`，`originModule`代表父`module`，`request`代表`import from`的路径，`importVar`使用`getImportVar`产生：

```javascript
getImportVar(moduleGraph) {
  const module = moduleGraph.getParentModule(this);
  const meta = moduleGraph.getMeta(module);
  let importVarMap = meta.importVarMap;
  if (!importVarMap) meta.importVarMap = importVarMap = new Map();
  let importVar = importVarMap.get(moduleGraph.getModule(this));
  if (importVar) return importVar;
  importVar = `${Template.toIdentifier(
    `${this.userRequest}`
  )}__WEBPACK_IMPORTED_MODULE_${importVarMap.size}__`;
  importVarMap.set(moduleGraph.getModule(this), importVar);
  return importVar;
}
```

`importVarMap`的键为`module`，值为`module 名称`。`importVar`为拼接而成，通过`Template`对路径符号替换，另外还通过`importVarMap.size`保证了名称的唯一性，如：

```javascript
// 生成前
'./moduleA.js'
// 生成后
'_moduleA__WEBPACK_IMPORTED_MODULE_0__'
```

接下来就是调用`importStatement`方法了，首先获取`moduleId`（同时也是模块路径），还会通过`comment`方法在`id`前面添加相关注释：

```javascript
const moduleId = this.moduleId({
  module,
  chunkGraph,
  request,
  weak
});

moduleId({ module, chunkGraph, request, weak }) {
  return `${this.comment({ request })}${JSON.stringify(moduleId)}`;
}
```

然后拼接成新的`import`内容：

```javascript
const importContent = `/* harmony import */ ${optDeclaration}${importVar} = __webpack_require__(${moduleId});\n`;

return [importContent, ""];
```

（其中`optDeclaration`由`update`来定，如果是重新赋值的话那么就为`''`空字符串：

```javascript
const optDeclaration = update ? "" : "var ";
```

由于使用了`__webpack_require__`这个方法，因此需要添加该方法到`runtimeRequirements`中：

```javascript
runtimeRequirements.add(RuntimeGlobals.require);
```

生成完`importStatement`内容后，最后会执行：

```javascript
templateContext.initFragments.push(
  new ConditionalInitFragment(
    importStatement[0] + importStatement[1],
    InitFragment.STAGE_HARMONY_IMPORTS,
    dep.sourceOrder,
    key,
    runtimeCondition
  )
);
```

将这行新的`import`代码形成对象添加到`initFragments`当中。至此`sourceDependency`方法也基本执行完成了，经过这一系列的`sourceDependency`后，所有的`dependency`都将转变为新的语句，存放到`initFragments`当中。

### addToSource

获取完所有的代码片段后，开始执行`InitFragment.addToSource`方法拼接代码:

```javascript
const keyedFragments = new Map();
for (const [fragment] of sortedFragments) {
  keyedFragments.set(fragment.key || Symbol(), fragment);
}

for (let fragment of keyedFragments.values()) {
  concatSource.add(fragment.getContent(context));
  const endContent = fragment.getEndContent(context);
  if (endContent) {
    endContents.push(endContent);
  }
}
concatSource.add(source);
return concatSource;
```

`addToSource`处理完后，会将新的代码以数组的形式返回，并且`source`是数组的最后一个元素。生成代码后会回到`codeGeneration`函数：

```javascript
if (source) {
  sources.set(type, new CachedSource(source));
}
const resultEntry = {
  sources,
  runtimeRequirements,
  data
};
return resultEntry;
```

将所有生成的代码`sources`和使用到的`runtimeRequirements`返回。

## 总结

`seal`阶段大概可以分为三个阶段：

第一个阶段为`chunk`关系建立，此时会遍历所有的`module`，并形成`module`和`chunk`之间的关系。

第二个阶段为`chunk`的优化阶段，该阶段会对生成的`chunk`进行处理优化，如清除空的`chunk`、重复的`chunk`、对`chunk`进行分包等等。

第三个阶段为生成代码阶段，该阶段会对`chunks`以及`chunk`下的`modules`进行遍历，根据`module.build`解析的代码生成新的代码片段。

其中生成代码的过程主要是通过`sourceDependency`对`module.build`中解析出来的`module.dependencies`和`module.blocks`进行代码生成。首先会根据`dependency`获取相应的生成模板`template`。其次调用`template.apply`方法将`dependency`替换成新的代码块。最后使用`addToSource`方法将所有`dependency`替换后的代码以及源码形成数组形式。
