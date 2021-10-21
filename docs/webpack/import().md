# import()分包原理

## 使用方式

例如：

```javascript
import('./A.js').then((res) => { console.log(res) })
```

## ast解析

使用`acorn`解析时会转换为`ExpressionStatement`，进一步分析为`MemberExpression`下的`ImportExpression`：

![img](./imgs/splitChunks/async-import.png)

## hooks.importCall

解析完成后进行`walkStatement`，此时会触发`hooks.importCall`钩子。在`webpack/lib/dependencies/ImportParserPlugin.js`文件中：

```javascript
parser.hooks.importCall.tap("ImportParserPlugin", expr => {

  let chunkName = null;

  // ...省略
  const depBlock = new AsyncDependenciesBlock(
    {
      ...groupOptions,
      name: chunkName
    },
    expr.loc,
    param.string
  );
  const dep = new ImportDependency(param.string, expr.range, exports);
  dep.loc = expr.loc;
  depBlock.addDependency(dep);
  parser.state.current.addBlock(depBlock);

  return true;

});
```

最终会创建一个`AsyncDependenciesBlock`，并通过`addBlock`添加，最终添加到`module.blocks`属性上。异步组件`module`的`parentBlock`指向的是`AsyncDependenciesBlock`。

## seal 阶段

在`seal`阶段中解析下一层引用`modules`时，调用`webpack/buildChunkGraph.js`文件中的`extractBlockModules`方法：

```javascript
const queue = [module];
while (queue.length > 0) {
  const block = queue.pop();
  const arr = [];
  arrays.push(arr);
  blockModulesMap.set(block, arr);
  for (const b of block.blocks) {
    queue.push(b);
  }
}
```

此时会遍历`blocks`形成如下结构数组结构：不同的`block`对应于不同的`module`。

![img](./imgs/splitChunks/async-import-block.png)

接着在`processBlock`结尾处，会对`module.block`进行遍历：

```javascript
for (const b of block.blocks) {
  iteratorBlock(b);
}

if (block.blocks.length > 0 && module !== block) {
  blocksWithNestedBlocks.add(block);
}
```

此时如果没有对应的`chunkGroup`，则会进行创建：

```javascript
cgi = namedChunkGroups.get(chunkName);
if (!cgi) {
  c = compilation.addChunkInGroup(
    b.groupOptions || b.chunkName,
    module,
    b.loc,
    b.request
  );
}
```

因此最终`compilation.chunks`和`compilation.chunkGroups`的值中将不止一个`chunk/chunkGroup`。最终也会根据`chunk`生成单独的文件。