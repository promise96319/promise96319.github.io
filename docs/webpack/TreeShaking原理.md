# Tree Shaking 原理

## 使用

在 Webpack 中，启动 Tree Shaking 功能必须同时满足三个条件：

- 使用 ESM 规范编写模块代码。
- 配置 optimization.usedExports 为 true，启动标记功能。（默认为true）
- 启动代码优化功能，可以通过如下方式实现：
  - 配置 mode = production
  - 配置 optimization.minimize = true（默认为true）
  - 提供 optimization.minimizer 数组

## 初始化

`applyWebpackOptionsDefaults`中调用`applyOptimizationDefaults`方法，设置两个变量：

```javascript
D(optimization, "providedExports", true);
D(optimization, "usedExports", production);
```

紧接着`WebpackOptionsApply`中根据这两个变量应用两个插件：

```javascript
if (options.optimization.providedExports) {
  const FlagDependencyExportsPlugin = require("./FlagDependencyExportsPlugin");
  new FlagDependencyExportsPlugin().apply(compiler);
}
if (options.optimization.usedExports) {
  const FlagDependencyUsagePlugin = require("./FlagDependencyUsagePlugin");
  new FlagDependencyUsagePlugin(
    options.optimization.usedExports === "global"
  ).apply(compiler);
}
```

## export解析为Dependency

通常来讲导出分为三种情况：

- 具名导出`export const a = 1`
- 默认导出`export default const b = 2`
- 全部导出`export * from './xxx.js'`

在`make`阶段对源码进行编译得到`ast`时，会对以上三种情况进行分析：

```javascript
blockPreWalkStatement(statement) {
  // ...
  switch (statement.type) {
    case "ExportAllDeclaration":
      this.blockPreWalkExportAllDeclaration(statement);
      break;
    case "ExportDefaultDeclaration":
      this.blockPreWalkExportDefaultDeclaration(statement);
      break;
    case "ExportNamedDeclaration":
      this.blockPreWalkExportNamedDeclaration(statement);
      break;
  }
}
```

最终触发`HarmonyExportDependencyParserPlugin`插件对应的钩子形成三种不同的`dependency`，精简代码如下：

```javascript
parser.hooks.exportExpression.tap(
  "HarmonyExportDependencyParserPlugin",
  (statement, expr) => {
    const dep = new HarmonyExportExpressionDependency(）
    parser.state.current.addDependency(dep);
    return true;
  }
);
parser.hooks.exportSpecifier.tap(
  "HarmonyExportDependencyParserPlugin",
  (statement, id, name, idx) => {
    if (settings) {
      dep = new HarmonyExportImportedSpecifierDependency();
    } else {
      dep = new HarmonyExportSpecifierDependency(id, name);
    }
    parser.state.current.addDependency(dep);
    return true;
  }
);
parser.hooks.exportImportSpecifier.tap(
  "HarmonyExportDependencyParserPlugin",
  (statement, source, id, name, idx) => {
    const dep = new HarmonyExportImportedSpecifierDependency();
    parser.state.current.addDependency(dep);
    return true;
  }
);
```

## FlagDependencyExportsPlugin分析exportsInfo

`FlagDependencyExportsPlugin`插件在`compilation`实例化时监听了`hooks.finishModules`钩子：

```javascript
compiler.hooks.compilation.tap(
  "FlagDependencyExportsPlugin",
  compilation => {
    compilation.hooks.finishModules.tapAsync(
      "FlagDependencyExportsPlugin",
      (modules, callback) => {}
    )
  }
)
```

也就是说在`make`阶段当所有`modules`都`build`完毕后会触发该插件的回调函数。此时会遍历所有`module`，并分析他们有哪些导出项，其核心代码如下：

```javascript
while (queue.length > 0) {
  module = queue.dequeue();

  exportsInfo = moduleGraph.getExportsInfo(module);

  processDependenciesBlock(module);

  for (const [
    dep,
    exportsSpec
  ] of exportsSpecsFromDependencies) {
    processExportsSpec(dep, exportsSpec);
  }
}
```

首先会获取`module`的`exportsInfo`，该变量会记录该模块所有的导出信息。

其次会调用`processDependenciesBlock`，该方法会遍历`dependencies`并调用`processDependency`方法：

```javascript
const processDependency = dep => {
  const exportDesc = dep.getExports(moduleGraph);
  if (!exportDesc) return;
  exportsSpecsFromDependencies.set(dep, exportDesc);
};
```

通常来讲`export`相关的`dependency`，它们的`exportDesc`是存在的，如：

```javascript
getExports(moduleGraph) {
  return {
    exports: [this.name],
    priority: 1,
    terminalBinding: true,
    dependencies: undefined
  };
}

getExports(moduleGraph) {
  return {
    exports: ["default"],
    priority: 1,
    terminalBinding: true,
    dependencies: undefined
  };
}
```

最终会遍历这些具有`export`内容的`dependency`，并执行`processExportsSpec`，精简后的代码如下：

```javascript
const processExportsSpec = (dep, exportDesc) => {
  const exports = exportDesc.exports;

  const mergeExports = (exportsInfo, exports) => {
    for (const exportNameOrSpec of exports) {

      name = exportNameOrSpec;

      const exportInfo = exportsInfo.getExportInfo(name);
    }
  };
  mergeExports(exportsInfo, exports);
}
```

首先会获取所有导出的变量`exports`，然后遍历`exports`，对于每个`export`变量的`name`都会调用`exportsInfo.getExportInfo(name)`建立一个`exportInfo`：

```javascript
getExportInfo(name) {
  const newInfo = new ExportInfo(name, this._otherExportsInfo);
  this._exports.set(name, newInfo);
  return newInfo;
}
```

这样就在`exportsInfo`里可以通过`_exports`属性访问所有的导出变量信息。这里省略了`exportInfo`信息的一些要素。

## FlagDependencyUsagePlugin标记使用

在`seal`阶段时，已经创建好了所有`module`，在生成`chunk`之前会先触发`hooks.optimizeDependencies`钩子：

```javascript
while (this.hooks.optimizeDependencies.call(this.modules)) {
  /* empty */
}
```

此时会调用`FlagDependencyUsagePlugin`插件的回调，核心代码如下：

```javascript
// 遍历 entry dependency
for (const dep of deps) {
  processEntryDependency(dep, runtime);
}

// 处理完入口后，将遇到的 module 又加入到 queue 中进行处理
while (queue.length) {
  const [module, runtime] = queue.dequeue();
  processModule(module, runtime, false);
}
```

从入口开始遍历`module`，真正的执行者为`processModule`方法：

```javascript
const processModule = (module, runtime, forceSideEffects) => {
  const map = new Map();
  const queue = new ArrayQueue();
  queue.enqueue(module);
  for (;;) {
    const block = queue.dequeue();

    for (const dep of block.dependencies) {
      const connection = moduleGraph.getConnection(dep);
      // 1. 获取 dependency 对应的 module
      const { module } = connection;

      // 2. 根据当前 dependency 分析引用了哪些变量
      const referencedExports =
            compilation.getDependencyReferencedExports(dep, runtime);
      if (
        oldReferencedExports === undefined ||
        oldReferencedExports === NO_EXPORTS_REFERENCED ||
        referencedExports === EXPORTS_OBJECT_REFERENCED
      ) {
        // 3. 形成 map 结构
        map.set(module, referencedExports);
      }
    }
  }

  // ...
};
```

`processModule`前半部分代码是遍历`module.dependencies`。在遇到`import`相关的`dependency`时，通过`getDependencyReferencedExports`方法解析该`dependency`，获取所有引用到的变量，记做`referencedExports`，并添加到`map`中。

后半段代码则是遍历`map`，处理`import`与`export`之间的联系：

```javascript
for (const [module, referencedExports] of map) {
  if (Array.isArray(referencedExports)) {
    processReferencedModule(
      module,
      referencedExports,
      runtime,
      forceSideEffects
    );
  } else {
    processReferencedModule(
      module,
      Array.from(referencedExports.values()),
      runtime,
      forceSideEffects
    );
  }
}
```

`processReferencedModule`传入参数中，`module`表示`dep`对应的模块（这里其实指被导入的模块），`referencedExports`表示当前模块`import`了哪些变量，为数组形式。`processReferencedModule`精简代码如下：

```javascript
const processReferencedModule = (
  module,
  usedExports,
  runtime,
  forceSideEffects
) => {
  // 1. 获取导入模块 的导出信息
  const exportsInfo = moduleGraph.getExportsInfo(module);
  if (usedExports.length > 0) {
    // 2. 遍历这个模块被使用到的变量
    for (const usedExportInfo of usedExports) {
      usedExport = usedExportInfo;
      let currentExportsInfo = exportsInfo;
      // 3. 遍历这个模块被使用到的变量

      for (let i = 0; i < usedExport.length; i++) {
        // 4. 根据引用到的变量，获取到该变量在模块中导出的信息
        const exportInfo = currentExportsInfo.getExportInfo(
          usedExport[i]
        );

        // 5.在该变量的exportInfo里标记被使用
        if (
          exportInfo.setUsedConditionally(
            v => v !== UsageState.Used,
            UsageState.Used,
            runtime
          )
        ) {
          const currentModule =
                currentExportsInfo === exportsInfo
          ? module
          : exportInfoToModuleMap.get(currentExportsInfo);
          if (currentModule) {
            // 6. 递归处理遇到的 module
            queue.enqueue(currentModule, runtime);
          }
        }
      }
    }
  }
};
```

其中标记发生在`setUsedConditionally`函数中：

```javascript
setUsedConditionally(condition, newValue, runtime) {
  // ...
  if (newValue !== UsageState.Unused && condition(UsageState.Unused)) {
    this._usedInRuntime = new Map();
    forEachRuntime(
      runtime,
      runtime => this._usedInRuntime.set(runtime, newValue)
    );
    return true;
  }
}
```

此时会在`_usedInRuntime`属性中标记`UsageState.Used`，为已被使用。

## 导入了但是未被使用怎么办？

举一个简单例子如下：

```javascript
import a from './a.js'
// 如果不调用 a
// a()
```

正常情况下，`walkStatement`处理解析后的`ast`，会为`import`语法创建`HarmonyImportSideEffectDependency`，而当使用`a()`时，会创建`HarmonyImportSpecifierDependency`。前面提到回编译`dependencies`进行标记，但是在遍历之前会做一层处理：

```javascript
const connection = moduleGraph.getConnection(dep);
if (!connection || !connection.module) {
  continue;
}
const activeState = connection.getActiveState(runtime);
if (activeState === false) continue;
```

获取`dep`的`connection`，然后调用`getActiveState`方法：

```javascript
// ModuleGraphConnection 类方法
getActiveState(runtime) {
  if (!this.conditional) return this._active;
  return this.condition(this, runtime);
}
```

这个`conditional`实际上是在建立`connection`时被赋值的：

```javascript
// ModuleGraph 类方法
setResolvedModule(originModule, dependency, module) {
  const connection = new ModuleGraphConnection(
    originModule,
    dependency,
    module,
    undefined,
    dependency.weak,
    dependency.getCondition(this)
  );
}
```

这里又通过`dependency.getCondition`来确认最终`conditional`是否为为`true`。对于`HarmonyImportSideEffectDependency`，`getCondition`最终返回的是一个函数，因此为`true`。但是`HarmonyImportSpecifierDependency`不一样，最终会返回`false`。因此，实际上标记时是根据`HarmonyImportSpecifierDependency`来进行标记的。所以，当只导入了变量，但是没有使用时，标记同样为未使用。

（但是在递归创建`module`的时候，使用的是`HarmonyImportSideEffectDependency`，而不是`HarmonyImportSpecifierDependency`）。

## 去除没有使用的export

在`seal`阶段进行`code generate`的时候，此时需要遍历模块的`dependencies`，然后将其生成最终的代码。而`export`的处理也正是在这个时候，这里以`export const a = 1`为例，对应于`HarmonyExportSpecifierDependency`。当生成代码时，需要执行`HarmonyExportSpecifierDependency.Template.apply`方法：

```javascript
HarmonyExportSpecifierDependency.Template = class HarmonyExportSpecifierDependencyTemplate extends (
	NullDependency.Template
) {
	apply(
		dependency,
		source,
		{ module, moduleGraph, initFragments, runtime, concatenationScope }
	) {
		const dep = /** @type {HarmonyExportSpecifierDependency} */ (dependency);

		const used = moduleGraph
			.getExportsInfo(module)
			.getUsedName(dep.name, runtime);
		if (!used) {
			const set = new Set();
			set.add(dep.name || "namespace");
			initFragments.push(
				new HarmonyExportInitFragment(module.exportsArgument, undefined, set)
			);
			return;
		}

		const map = new Map();
		map.set(used, `/* binding */ ${dep.id}`);
		initFragments.push(
			new HarmonyExportInitFragment(module.exportsArgument, map, undefined)
		);
	}
};
```

它会根据`getExportsInfo`和`dep.name`获取导出的变量的使用情况，如果没有使用，那么传入的`map`为`undefined`，这样在`HarmonyExportInitFragment`获取内容时就不会生成相应的`export`代码了：

```javascript
// HarmonyExportInitFragment 类 getContent 方法
getContent({ runtimeTemplate, runtimeRequirements }) {
  const definitions = [];
  for (const [key, value] of this.exportMap) {
    definitions.push(
      `\n/* harmony export */   ${JSON.stringify(
        key
      )}: ${runtimeTemplate.returningFunction(value)}`
    );
  }
  const definePart =
        this.exportMap.size > 0
  ? `/* harmony export */ ${RuntimeGlobals.definePropertyGetters}(${
  this.exportsArgument
  }, {${definitions.join(",")}\n/* harmony export */ });\n`
  : "";
  return `${definePart}${unusedPart}`;
}
```

从而达到去除那些没有使用到的`export`等变量的目的。

## terser-webpack-plugin

[github 地址](https://github.com/webpack-contrib/terser-webpack-plugin)

最后会通过`terser-webpack-plugin`删除无用代码，实现完整的`tree shaking`效果。

## 总结

`tree shaking`的原理大致包括以下几个步骤：

1. `buildModule`阶段：当源码解析成`ast`树后，分析`export`语法，转变为对应的`dependency`。
2. `hooks.finishModules`钩子：通过`FlagDependencyExportsPlugin`插件遍历所有`module`的`dependencies`，找到`export`相关的`dependencies`，然后分析出导出的变量名称。最后根据每个导出的变量名称创建一个`exportInfo`，最后将`exportInfo`与当前的`module`建立联系：通过`getExportsInfo`可以访问当前`module`所有的`exportInfo`。
3. `hooks.optimizeDependencies`钩子：通过`FlagDependencyUsagePlugin`插件，也是遍历`dependencies`。
   - 查找使用了模块变量的`dependency`，解析出具体使用了哪些变量。
   - 根据该`dependency`和`moduleGraph`，获取该`dependency`对应的`module`。
   - 获取`module`的`exportsInfo`，根据`name`获取对应的`exportInfo`。
   - 将`exportInfo`，标记为已使用。（可通过`_usedInRuntime`属性访问是否使用过）。
4. `seal`阶段：在生成代码时，分析`export`相关的`dependency`，如果没有被使用，那么不生成相应的导出代码。
5. `assets`阶段：生成的代码通过`terser-webpack-plugin`插件删除无用代码。