# make阶段

## hooks.make

在《整体流程》篇中提到，`make`阶段是正式的编译过程，此时会调用`hooks.make`钩子：

```javascript
this.hooks.make.callAsync(compilation, err => {})
```

此时会触发`EntryPlugin`（该插件是在`entryOptions`钩子触发时监听`make`钩子的）：

```javascript
compiler.hooks.make.tapAsync("EntryPlugin", (compilation, callback) => {
  const { entry, options, context } = this;
	// 创建 EntryDepnendency
  const dep = EntryPlugin.createDependency(entry, options);
  // 添加 entry 入口
  compilation.addEntry(context, dep, options, err => {
    callback(err);
  });
});
```

可以看出，最终会调用`compilation.addEntry`方法开始从入口进行编译。在`webpack/lib/Compilation.js`文件中找到`addEntry`方法，会用一连串调用，调用栈如下：

```javascript
addEntry => _addEntryItem => addModuleTree => handleModuleCreation => factorizeModule => ...
```

最终主要的执行函数为`factorizeModule`。

```javascript
factorizeModule(options, callback) {
  this.factorizeQueue.add(options, callback);
}

// 在 constructor 初始化时定义
this.factorizeQueue = new AsyncQueue({
  name: "factorize",
  parent: this.addModuleQueue,
  processor: this._factorizeModule.bind(this)
});
```

在看具体的执行内容之前，先看一下`AsyncQueue`。

## AsyncQueue

### constructor

```javascript
constructor({ name, parallelism, parent, processor, getKey }) {
  this._processor = processor;
  this._root = parent ? parent._root : this;
  if (parent) {
    if (this._root._children === undefined) {
      this._root._children = [this];
    } else {
      this._root._children.push(this);
    }
  }
}
```

`constructor`函数要注意的有两点：一是`_processor`，用于指向真正的执行函数；二是`_root`，用于表示该队列的根`parent`。在`Compilation`的`constructor`中有如下定义：

```javascript
this.processDependenciesQueue = new AsyncQueue({
  name: "processDependencies",
  parallelism: options.parallelism || 100,
  processor: this._processModuleDependencies.bind(this)
});
this.addModuleQueue = new AsyncQueue({
  name: "addModule",
  parent: this.processDependenciesQueue,
  getKey: module => module.identifier(),
  processor: this._addModule.bind(this)
});
this.factorizeQueue = new AsyncQueue({
  name: "factorize",
  parent: this.addModuleQueue,
  processor: this._factorizeModule.bind(this)
});
this.buildQueue = new AsyncQueue({
  name: "build",
  parent: this.factorizeQueue,
  processor: this._buildModule.bind(this)
});
```

因此`processDependenciesQueue`的`_children`为`addModuleQueue`、`factorizeQueue`、`buildQueue`，反之是它们三者的`_root`。

### add方法

`add`方法会执行`root`的`_ensureProcessing`方法：

```javascript
add(item, callback) {
  const newEntry = new AsyncQueueEntry(item, callback);
  this._queued.enqueue(newEntry);
  const root = this._root;
  setImmediate(root._ensureProcessing);
}
```

### _ensureProcessing方法

`_ensureProcessing`精简代码如下：

```javascript
_ensureProcessing() {
  // 1. 执行当前的 _queue
  while (this._activeTasks < this._parallelism) {
    const entry = this._queued.dequeue();
    this._startProcessing(entry);
  }
  // 2. 遍历执行 children 的 _queue
  for (const child of this._children) {
    while (this._activeTasks < this._parallelism) {
      const entry = child._queued.dequeue();
      child._startProcessing(entry);
    }
  }
}
```

该方法主要由两个任务，一是执行当前的`_queue`，其次是遍历`_children`执行`child`的`queue`。

### _startProcessing方法

该方法主要执行`_processor`方法，也就是在定义`AsyncQueue`的时候传入的执行函数：

```javascript
_startProcessing(entry) {
  this.hooks.beforeStart.callAsync(entry.item, err => {
    this._processor(entry.item, (e, r) => {
      this._handleResult(entry, e, r);
    });
  });
}
```

### 总结

`AsyncQueue`在调用`add`方法时，最终会执行传入的`_processor`方法，一些执行细节都封装在`AsyncQueue`当中。因此我们主要关注`_processor`方法的执行即可。

## make流程

清楚了`AsyncQueue`的作用后，回到`compilation`中的流程。`factorizeModule`方法最终调用的是`_factorizeModule`方法。执行完成后执行回调，会遇到`addModule`，最终调用的是`_addModule`方法。再次执行回调，然后执行`buildModule`方法，也就是调用`_buildModule`方法。打包完成后执行`processModuleDependencies`方法，又对应于`_processModuleDependencies`方法。

```javascript
factorizeModule => _factorizeModule => 执行回调函数 
=> addModule => _addModule => 执行回调函数 
=> buildModule => _buildModule => 执行回调函数 
=> processModuleDependencies => _processModuleDependencies => 执行回调函数 
=> ...
```

接下来会分别讲解这些方法做了哪些事。