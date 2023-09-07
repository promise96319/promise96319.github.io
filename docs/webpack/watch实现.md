# watch 实现

[webpack watch 配置](https://webpack.docschina.org/configuration/watch/)

## 简单使用

```javascript
// webpack.config.js 中配置
{
  watch: true
}

// 获取直接运行命令
webpack watch
```

## compiler.watch

当`watch`为`true`时，执行的是`compiler`的`watch`方法，而不是`compiler.run`方法：

```javascript
const { compiler, watch, watchOptions } = create();
if (watch) {
  compiler.watch(watchOptions, callback);
} else {
  compiler.run((err, stats) => {
    compiler.close(err2 => {
      callback(err || err2, stats);
    });
  });
}
```

`compiler`的`watch`方法如下：

```javascript
watch(watchOptions, handler) {
  if (this.running) {
    return handler(new ConcurrentCompilationError());
  }

  this.running = true;
  this.watchMode = true;
  // 实例化 Watching
  this.watching = new Watching(this, watchOptions, handler);
  return this.watching;
}
```

其核心代码为`new Watching()`。

## Watching类

`Watching`类实例化时，会执行`_invalidate`方法：

```javascript
class Watching {
  constructor(compiler, watchOptions, handler) {
    process.nextTick(() => {
      if (this._initial) this._invalidate();
    });
  }
}
```

`_invalidate`又会执行`_go`方法，精简代码如下：

```javascript
_go(fileTimeInfoEntries, contextTimeInfoEntries, changedFiles, removedFiles) {
  const run = () => {
    this.compiler.hooks.watchRun.callAsync(this.compiler, err => {
      const onCompiled = (err, compilation) => {
        if (this.compiler.hooks.shouldEmit.call(compilation) === false) {
          return this._done(null, compilation);
        }
        process.nextTick(() => {
          this.compiler.emitAssets(compilation, err => {

            this.compiler.emitRecords(err => {

              return this._done(null, compilation);
            });
          });
        });
      };
      this.compiler.compile(onCompiled);
    });
  };
  run();
}
```

可以看出这里的代码与`compiler.run`执行的过程非常相似，不同的是最后回调执行的是`_done`方法：

```javascript
_done(err, compilation) {
  this.compiler.hooks.done.callAsync(stats, err => {
    this.handler(null, stats);
    this.compiler.cache.storeBuildDependencies(
      compilation.buildDependencies,
      err => {
        process.nextTick(() => {
          if (!this.closed) {
            this.watch(
              compilation.fileDependencies,
              compilation.contextDependencies,
              compilation.missingDependencies
            );
          }
        });
        for (const cb of cbs) cb(null);
        this.compiler.hooks.afterDone.call(stats);
      }
    );
  });
}
```

该方法会在`hooks.done`之后，`hooks.afterDone`之前执行`this.watch`方法，参数为编译过程中收集到的`dependencies`。此时代码已经完成编译，且已经输出成文件，所以可以开始监听这些文件：

```javascript
watch(files, dirs, missing) {
  this.pausedWatcher = null;
  this.watcher = this.compiler.watchFileSystem.watch(
    files,
    dirs,
    missing,
    this.lastWatcherStartTime,
    this.watchOptions,
    (
      err,
      fileTimeInfoEntries,
      contextTimeInfoEntries,
      changedFiles,
      removedFiles
    ) => {},
    (fileName, changeTime) => {}
  )
}
```

通过`watchFileSystem.watch`方法监听`dependencies`文件变化，如果发生变化，会触发回调函数：

```javascript
// 首先执行变动文件的回调函数
(fileName, changeTime) => {}

// 其次执行重新打包的回调函数 this._invalidate
(
err,
 fileTimeInfoEntries,
 contextTimeInfoEntries,
 changedFiles,
 removedFiles
) => {
  this._invalidate(
    fileTimeInfoEntries,
    contextTimeInfoEntries,
    changedFiles,
    removedFiles
  );
  this._onChange();
},
```

这样就完成了当文件改变时，重新进行打包。

## 总结

`watch`的实现的核心是在`hooks.done`之后，也就是编译后的代码生成文件的时候，通过监听收集到的`dependencies`对应的文件。当文件改变时，触发回调，再次进行`build`。
