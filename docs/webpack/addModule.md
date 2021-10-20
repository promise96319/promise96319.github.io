# addModule

`make`阶段第二步做的事是通过`addModule`将创建好的`module`添加到`moduleGraph`当中。

## _addModule

`_addModule`方法比较简单，主要是将`module`缓存并记录到`compilation.modules`和`_modules`当中。

```javascript
_addModule(module, callback) {
  const identifier = module.identifier();
  const alreadyAddedModule = this._modules.get(identifier);
  // 判断 module 是否已经被添加，如果已经添加了直接跳过
  if (alreadyAddedModule) {
    return callback(null, alreadyAddedModule);
  }

  // 缓存 module
  this._modulesCache.get(identifier, null, (err, cacheModule) => {
    // 记录 module
    this._modules.set(identifier, module);
    this.modules.add(module);
    ModuleGraph.setModuleGraphForModule(module, this.moduleGraph);
    callback(null, module);
  });
}
```

随后执行`callback`回调，遍历`dependencies`，建立`dependency`、`module`和`父module`之间的关系。

```javascript
for (let i = 0;i < dependencies.length;i++) {
  const dependency = dependencies[i];
  moduleGraph.setResolvedModule(
    connectOrigin ? originModule : null,
    dependency,
    module
  );
}
```

这里的`originModule`指代的是引用该`module`的父`module`。

## ModuleGraphConnection

`ModuleGraphConnection`记录了`originModule`、`module`、`dependency`，相当于三者之间的一个连接。

```javascript
class ModuleGraphConnection {
  constructor(
   originModule,
   dependency,
   module,
   explanation,
   weak = false,
   condition = undefined
  ) {
    this.originModule = originModule;
    this.resolvedOriginModule = originModule;
    this.dependency = dependency;
    this.resolvedModule = module;
    this.module = module;
    this.weak = weak;
    this.conditional = !!condition;
    this._active = condition !== false;
    this.condition = condition || undefined;
    this.explanations = undefined;
    if (explanation) {
      this.explanations = new Set();
      this.explanations.add(explanation);
    }

    // ...
  }
```

## ModuleGraphDependency

`ModuleGraphDependency`对应于`dependency`，记录`dependency`的内容。

```javascript
class ModuleGraphDependency {
	constructor() {
		this.connection = undefined;
		this.parentModule = undefined;
		this.parentBlock = undefined;
	}
}
```

## ModuleGraphModule

`ModuleGraphModule`对应于`module`，记录`module`的内容。

```javascript
class ModuleGraphModule {
	constructor() {
		// connections 集合
		this.incomingConnections = new SortableSet();
		// connections 集合
		this.outgoingConnections = undefined;
		// 指向 父module
		this.issuer = undefined;
		this.optimizationBailout = [];
		this.exports = new ExportsInfo();
		this.preOrderIndex = null;
		this.postOrderIndex = null;
		this.depth = null;
		this.profile = undefined;
		this.async = false;
	}
}
```

**其中，通过outgoingConnections可以判断该module引用了哪些外部module。而通过incomingConnectoins可以判断该模块被哪些外部模块引用。**

## ModuleGraph

`ModuleGraph`记录了所有的`dependency/module/connection`。

```javascript
/** @type {Map<Dependency, ModuleGraphDependency>} */
this._dependencyMap = new Map();
/** @type {Map<Module, ModuleGraphModule>} */
this._moduleMap = new Map();
/** @type {Map<Module, Set<ModuleGraphConnection>>} */
this._originMap = new Map();
```

并且通过`setResolvedModule`方法来记录一个关系：

```javascript
setResolvedModule(originModule, dependency, module) {
  // 创建一个 connection，记录关系
  const connection = new ModuleGraphConnection(
    originModule,
    dependency,
    module,
    undefined,
    dependency.weak,
    dependency.getCondition(this)
  );
  
  // 获取/创建 moduleGraphDependency
  const mgd = this._getModuleGraphDependency(dependency);
  // 赋值connnectioin
  mgd.connection = connection;
  
  // 获取当前 module 的 incomingConnections
  const connections = this._getModuleGraphModule(module).incomingConnections;
  // 记录 connnection，这样如果同一个模块被多个模块引用
  // 那么就有多个connection，也就能够找到引用该模块的父模块
  connections.add(connection);
  
  // 获取父模块的 mgm
  const mgm = this._getModuleGraphModule(originModule);
  if (mgm.outgoingConnections === undefined) {
    mgm.outgoingConnections = new Set();
  }
  // 在父模块中记录当前模块，这样父模块就知道引用了哪些子模块了。
  mgm.outgoingConnections.add(connection);
}
```

最后还会通过`setIssuerIfUnset`方法，记录第一个使用了该模块的模块。

```javascript
setIssuerIfUnset(module, issuer) {
  const mgm = this._getModuleGraphModule(module);
  if (mgm.issuer === undefined) mgm.issuer = issuer;
}
```

## 总结

`addModule`阶段比较简单，主要是记录当前的`module`并缓存起来。另外会建立`dependency`、`module`、`父module`三者之间的关系，所有关系均可从`moduleGraph`中取出。