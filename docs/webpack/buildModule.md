# buildModule

## _buildModule

`_buildModule`最终调用的是`module.build`方法，这里以`NormalModule`为例，找到`webpack/lib/NormalModule.js`文件中的`build`方法：

```javascript
// 源码
this._source = null;
// 源码的 ast
this._ast = null;
// 打包信息
this.buildInfo = {
  cacheable: false,
  parsed: true,
  // 依赖文件
  fileDependencies: undefined,
  contextDependencies: undefined,
  // 未找到的依赖
  missingDependencies: undefined,
  // loader 依赖
  buildDependencies: undefined,
  // 变量依赖
  valueDependencies: undefined,
  // hash 值
  hash: undefined,
  assets: undefined,
  // 文件信息
  assetsInfo: undefined
};
```

首先会定义一些参数，最后调用`doBuild`方法开始正式打包。

## loaderContext

`doBuild`方法首先会创建一个`loader`上下文`loaderContext`：

```javascript
const loaderContext = this.createLoaderContext(
  resolver,
  options,
  compilation,
  fs
);
```

`loaderContext`的用于在执行`loader`时传入作为上下文，这样我们在编写`loader`的时候就可以通过`this`访问这个上下文里的一些方法属性了。

## runLoaders

`doBuild`第二个任务是执行`runLoaders`函数，精简后的代码如下：

```javascript
runLoaders(
  {
    resource: this.resource,
    loaders: this.loaders,
    context: loaderContext,
    processResource: (loaderContext, resource, callback) => {
      loaderContext.addDependency(resource);
      fs.readFile(resource, callback);
    }
  },
  (err, result) => {
  }
);
```

该过程会通过`readFile`读取文件源码，并执行匹配到的`loader`对读取到的代码进行处理。`runLoaders`函数是在`node_modules/loader-runner/lib/LoaderRunner.js`文件中定义：

```javascript
exports.runLoaders = function runLoaders(options, callback) {
  var loaders = options.loaders || [];
  loaders = loaders.map(createLoaderObject);

  // loaderContext 的一些属性添加...

  iteratePitchingLoaders(processOptions, loaderContext, function (err, result) {});
}
```

首先会在`loaderContext`上添加一系列的属性方法，其中也包括`loaders`，通过`createLoaderObject`方法将`路径形式`的`loader`装换为`对象形式`。最后调用`iteratePitchingLoaders`执行`loaders`。

## iteratePitchingLoaders

`iteratePitchingLoaders`代码如下：

```javascript
function iteratePitchingLoaders(options, loaderContext, callback) {
	// 1. loaders 执行完了开始处理资源
	if (loaderContext.loaderIndex >= loaderContext.loaders.length)
		return processResource(options, loaderContext, callback);

  // 2. 获取 loader
	var currentLoaderObject = loaderContext.loaders[loaderContext.loaderIndex];

	// 3. 判断 loader 是否 pitch，如果 pitch 执行过，那么执行下一个 loader 的 pitch
	if (currentLoaderObject.pitchExecuted) {
		loaderContext.loaderIndex++;
		return iteratePitchingLoaders(options, loaderContext, callback);
	}

	// 4. 加载 loader
	loadLoader(currentLoaderObject, function (err) {});
}
```

`loader`的执行过程与事件冒泡有点类似，它包括`pitch阶段`，`代码读取`，`loader执行`三个阶段（具体可以参考[这篇文章](https://zhuanlan.zhihu.com/p/375626250)）。`pitch阶段`会通过`iteratePitchingLoaders`方法遍历`loaders`，执行`loader`的`pitch`函数。待执行完成后会读取文件代码，然后通过`iterateNormalLoaders`方法反向遍历`loaders`执行`loader`。

`iteratePitchingLoaders`中通过`pitchExecuted`属性标识`loader`是否被`pitch`。如果为`true`，那么会执行下一个`loader`的`pitch`函数。否则的话会通过`loadLoader`函数加载`loader`。

## loadLoader

`loader-runner/lib/loadLoader.js`文件中`loadLoader`代码精简如下：

```javascript
module.exports = function loadLoader(loader, callback) {
  var module = require(loader.path);
  return handleResult(loader, module, callback);
};

function handleResult(loader, module, callback) {
  loader.normal = typeof module === "function" ? module : module.default;
  loader.pitch = module.pitch;
  loader.raw = module.raw;
  callback();
}
```

加载`loader`模块后将加载的`loader`模块、`pitch`函数等赋值到`loader`对象上。最后执行`loadLoader`回调，这里讨论的是`iteratePitchingLoaders`中`loadLoader`的回调：

```javascript
var fn = currentLoaderObject.pitch;
// 标识 pitch
currentLoaderObject.pitchExecuted = true;
// 如果 pitch 函数不存在，那么开始执行下一个 loader 的 pitch
if (!fn) return iteratePitchingLoaders(options, loaderContext, callback);

runSyncOrAsync(
  fn,
  loaderContext, [loaderContext.remainingRequest, loaderContext.previousRequest, currentLoaderObject.data = {}],
  function (err) {
    var args = Array.prototype.slice.call(arguments, 1);
    var hasArg = args.some(function (value) {
      return value !== undefined;
    });
    if (hasArg) {
      loaderContext.loaderIndex--;
      iterateNormalLoaders(options, loaderContext, args, callback);
    } else {
      iteratePitchingLoaders(options, loaderContext, callback);
    }
  }
);
```

如果`pitch`函数存在，那么会通过`runSyncOrAsync`执行`pitch`函数：

```javascript
function runSyncOrAsync(fn, context, args, callback) {
  var result = (function LOADER_EXECUTION() {
    return fn.apply(context, args);
  }());

  if (isSync) {
    if (result === undefined)
      return callback();
    if (result && typeof result === "object" && typeof result.then === "function") {
      return result.then(function (r) {
        callback(null, r);
      }, callback);
    }
    return callback(null, result);
  }
}
```

最后会将结果`result`传入给回调函数`callback`。再来看下`callback`：

```javascript
var args = Array.prototype.slice.call(arguments, 1);
var hasArg = args.some(function (value) {
  return value !== undefined;
});
```

首先会用`hasArg`判断`pitch`函数返回的结果是否存在:

```javascript
if (hasArg) {
  loaderContext.loaderIndex--;
  iterateNormalLoaders(options, loaderContext, args, callback);
} else {
  iteratePitchingLoaders(options, loaderContext, callback);
}
```

如果存在，那么就会开始调用`iterateNormalLoaders`函数，终止了`pitch过程`，此时没有`processResource`过程。否则会调用`iteratePitchingLoaders`继续下一个`loader`的`pitch`。

## processResource

如果是`pitch`函数全部正常执行且没有返回值，那么最终会执行`processResource`方法，也就是`runLoaders`调用的参数：

```javascript
processResource: (loaderContext, resource, callback) => {
  loaderContext.addDependency(resource);
  fs.readFile(resource, callback);
}
```

首先会将文件路径作为`loaderContext`的`dependency`添加。其次会读取资源，最终执行回调中的`iterateNormalLoaders`：

```javascript
options.resourceBuffer = buffer;
iterateNormalLoaders(options, loaderContext, [buffer], callback);
```

## iterateNormalLoaders

`iterateNormalLoaders`的执行过程与`iteratePitchingLoaders`类似。唯一需要注意的是它传入的参数是文件资源读取的内容，每一次`loader`后都会将结果返回作为上一个`loader`的参数传入。

```javascript
iterateNormalLoaders(options, loaderContext, [buffer], callback);
```

`pitch`打断过程实际上相当于提前返回了文件资源内容。

等所有的`loader`执行完成后，开始执行`runLoaders`的回调：

```javascript
(err, result) => {
  this.buildInfo.fileDependencies.addAll(result.fileDependencies);
  this.buildInfo.contextDependencies.addAll(result.contextDependencies);
  this.buildInfo.missingDependencies.addAll(result.missingDependencies);
  for (const loader of this.loaders) {
    this.buildInfo.buildDependencies.add(loader.loader);
  }
  this.buildInfo.cacheable = this.buildInfo.cacheable && result.cacheable;
  processResult(err, result.result);
}
```

返回的结果`result`包含了文件加载后并通过了`loader`处理的代码。并且用到的`loader`都会添加到`buildInfo.buildDependencies`当中。最后再通过`processResult`处理源码。

## processResult

`processResult`主要作用是将源码内容封装成`RawSource`对象。

```javascript
this._source = this.createSource(
  options.context,
  this.binary ? asBuffer(source) : asString(source),
  sourceMap,
  compilation.compiler.root
);
this._ast =
  typeof extraInfo === "object" &&
  extraInfo !== null &&
  extraInfo.webpackAST !== undefined
  ? extraInfo.webpackAST
: null;
callback()
```

随后会执行`callback`，也就是`_doBuild`方法的回调函数，其核心代码如下：

```javascript
// 1. 获取源码
const source = this._source.source();
// 2. 解析源码
result = this.parser.parse(this._ast || source, {
  source,
  current: this,
  module: this,
  compilation: compilation,
  options: options
});
} catch (e) {
  handleParseError(e);
  return;
}
// 3. 处理解析后的源码
handleParseResult(result);
```

## parse

解析代码的`parse`方法在`webpack/lib/javascript/JavascriptParser.js`文件中定义：

```javascript
parse(source, state) {
  let ast;

  // 1. 解析成 ast 树
  ast = JavascriptParser._parse(source, {
    sourceType: this.sourceType,
    onComment: comments,
    onInsertedSemicolon: pos => semicolons.add(pos)
  });

  // ...
	
  // 2. 转换
  if (this.hooks.program.call(ast, comments) === undefined) {
    this.detectMode(ast.body);
    this.preWalkStatements(ast.body);
    this.prevStatement = undefined;
    this.blockPreWalkStatements(ast.body);
    this.prevStatement = undefined;
    this.walkStatements(ast.body);
  }
  return state;
}
```

其中`JavascriptParser._parse`方法使用的是[acorn](https://github.com/acornjs/acorn)库，解析过程可以在[这里](https://astexplorer.net/)进行在线调试。

## hooks.program

`hooks.program`的调用触发了四个回调函数。

### CompatibilityPlugin

处理第一行开头为`#!`开头的注释，创建一个`ConstDependency`添加到`module.presentationalDependencies`中:

```javascript
const dep = new ConstDependency("//", 0);
dep.loc = c.loc;
parser.state.module.addPresentationalDependency(dep);
```

### HarmonyDetectionParserPlugin

处理`import`和`export`语法。如果存在`import/export`语法，那么会创建一个`HarmonyCompatibilityDependency`添加到`module.presentationalDependencies`中：

```javascript
statement.type === "ImportDeclaration" ||
  statement.type === "ExportDefaultDeclaration" ||
  statement.type === "ExportNamedDeclaration" ||
  statement.type === "ExportAllDeclaration"

const compatDep = new HarmonyCompatibilityDependency();
module.addPresentationalDependency(compatDep);
```

### UseStrictPlugin

如果第一句以`'use strict'`开头，会创建一个空字符串的`ConstDependency`。因为后续`webpack`会自动添加`use strict`，所以这里需要移除：

```javascript
const dep = new ConstDependency("", firstNode.range);
parser.state.module.addPresentationalDependency(dep);
```

### DefinePlugin

定义全局变量：

```javascript
buildInfo.valueDependencies.set(VALUE_DEP_MAIN, mainValue);
```

## walkStatements

`walkStatements`的过程是将`ast`树进行解析转换，这里主要以`import/export`为例。

### ImportDeclaration

`ImportDeclaration`语句(如`import A from './a.js'`)会触发`hooks.import`，执行`HarmonyImportDependencyParserPlugin`的回调：

```javascript
parser.hooks.import.tap(
  "HarmonyImportDependencyParserPlugin",
  (statement, source) => {
    // 1. import 的序号
    parser.state.lastHarmonyImportOrder =
      (parser.state.lastHarmonyImportOrder || 0) + 1;
    const clearDep = new ConstDependency(
      parser.isAsiPosition(statement.range[0]) ? ";" : "",
      statement.range
    );
    clearDep.loc = statement.loc;

    // 2. 替换成一个 clearDep
    parser.state.module.addPresentationalDependency(clearDep);
    parser.unsetAsiPosition(statement.range[1]);
    const assertions = getAssertions(statement);

    // 3. 添加一个 dependency
    const sideEffectDep = new HarmonyImportSideEffectDependency(
      source,
      parser.state.lastHarmonyImportOrder,
      assertions
    );
    sideEffectDep.loc = statement.loc;
    parser.state.module.addDependency(sideEffectDep);
    return true;
  }
)
```

添加完`dependency`后，开始定义变量：

```javascript
for (const specifier of statement.specifiers) {
  const name = specifier.local.name;
  switch (specifier.type) {
    case "ImportDefaultSpecifier":
      if (
        !this.hooks.importSpecifier.call(statement, source, "default", name)
      ) {
        this.defineVariable(name);
      }
      break;
    case "ImportSpecifier":
      if (
        !this.hooks.importSpecifier.call(
          statement,
          source,
          specifier.imported.name,
          name
        )
      ) {
        this.defineVariable(name);
      }
      break;
    case "ImportNamespaceSpecifier":
      if (!this.hooks.importSpecifier.call(statement, source, null, name)) {
        this.defineVariable(name);
      }
      break;
    default:
      this.defineVariable(name);
  }
}
```

### ExportNamedDeclaration

如`export const a = 0`，会触发`hooks.export`：

```javascript
parser.hooks.export.tap(
  "HarmonyExportDependencyParserPlugin",
  statement => {
    const dep = new HarmonyExportHeaderDependency(
      statement.declaration && statement.declaration.range,
      statement.range
    );
    dep.loc = Object.create(statement.loc);
    dep.loc.index = -1;
    // 添加 dependency
    parser.state.module.addPresentationalDependency(dep);
    return true;
  }
);
```

## hooks.finish

解析源码结束后调用`hooks.finish`。该`hook`除清除一些遍历引用之外，还会将解析过程中定义的变量添加到`topLevelDeclarations`中：

```javascript
parser.hooks.finish.tap("JavascriptMetaInfoPlugin", () => {
  let topLevelDeclarations =
      parser.state.module.buildInfo.topLevelDeclarations;
  if (topLevelDeclarations === undefined) {
    topLevelDeclarations =
      parser.state.module.buildInfo.topLevelDeclarations = new Set();
  }
  for (const name of parser.scope.definitions.asSet()) {
    const freeInfo = parser.getFreeInfoFromVariable(name);
    if (freeInfo === undefined) {
      // 添加变量名称
      topLevelDeclarations.add(name);
    }
  }
});
```

## handleParseResult

`handleParseResult`会为`module`创建`hash`:

```javascript
_initBuildHash(compilation) {
  const hash = createHash(compilation.outputOptions.hashFunction);
  if (this._source) {
    hash.update("source");
    this._source.updateHash(hash);
  }
  hash.update("meta");
  hash.update(JSON.stringify(this.buildMeta));
  this.buildInfo.hash = /** @type {string} */ (hash.digest("hex"));
}
```

随后会将依赖生成`snapshot`，记录在`buildInfo`上：

```javascript
compilation.fileSystemInfo.createSnapshot(
  startTime,
  this.buildInfo.fileDependencies,
  this.buildInfo.contextDependencies,
  this.buildInfo.missingDependencies,
  snapshotOptions,
  (err, snapshot) => {
    this.buildInfo.fileDependencies = undefined;
    this.buildInfo.contextDependencies = undefined;
    this.buildInfo.missingDependencies = undefined;
    this.buildInfo.snapshot = snapshot;
    return callback();
  }
);
```

最终执行`callback`，回到了`compilation.buildModule`的回调函数当中：

```javascript
this.buildModule(module, err => {
  this.processModuleDependencies(module, err => {
    callback(null, module);
  });
});
```

## processModuleDependencies

`processModuleDependencies`对应于`_processModuleDependencies`方法：

```javascript
if (block.dependencies) {
  currentBlock = block;
  let i = 0;
  for (const dep of block.dependencies) processDependency(dep, i++);
}
```

该方法遍历打包后的`module`的`dependencies`，执行`processDependency`:

```javascript
const processDependency = (dep, index) => {
  this.moduleGraph.setParents(dep, currentBlock, module, index);
  // ...
  processDependencyForResolving(dep);
};

const processDependencyForResolving = dep => {
  const resourceIdent = dep.getResourceIdentifier();
  if (resourceIdent !== undefined && resourceIdent !== null) {
    const category = dep.category;
    const factory = this.dependencyFactories.get(constructor);
    sortedDependencies.push({
      factory: factoryCacheKey2,
      dependencies: list,
      originModule: module
    });
  }
};
```

首先通过`moduleGraph.setParents`建立`dependency`和当前`module`的联系。其次根据`dependency`获取创建`module`的工厂函数，并添加到`sortedDependencies`中，最后会执行`onDependenciesSorted`方法：

```javascript
for (const item of sortedDependencies) {
  this.handleModuleCreation(item, err => {
    // ...
  });
}
```

对于每个依赖的`dependency`，递归调用`handleModuleCreation`创建`module`。至此，整个打包过程就完成了。

## 总结

`buildModule`阶段主要任务是将生成的`module`进行打包，这个过程包含：

首先，创建`loaderContext`，形成`loader`的执行上下文。通过`runLoaders`执行该文件匹配到的`loaders`。

`loader`的执行过程又包含`pitch`阶段，源码读取阶段，`loader`执行阶段。

  - `pitch`阶段会调用`loadLoader`加载`loader`模块，然后调用`pitch`函数。可以通过`pitch`函数提前返回源码内容中断后续`loader`的调用。
  
  - 源码读取阶段会直接读取对应文件的源码内容。
  
  - `loader`执行阶段会依次从后向前执行`loader`函数，每次都会将执行结果作为下一个`loader`函数的参数传入。

其次，`loaders`执行完成后拿到加载后的源码内容，通过`acorn`库对源码内容进行解析，形成`ast`。

然后通过`hooks.program`和`walkStatements`对`ast`树进行分析，如变量定义、语法分析替换、模块依赖等等。

最后，根据模块的依赖（`import xxx from xxx`）进行遍历，递归创建子模块。