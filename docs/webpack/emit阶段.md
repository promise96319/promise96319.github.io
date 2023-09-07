# emit阶段

`seal`阶段完成后，对于每一个`chunk`下的每一个`module`都已经生成了相应的代码片段。接下来就需要将这些片段进行拼接，形成可以执行的完整代码，并将代码生成到相应的文件当中。

## createChunkAssets

`createChunkAssets`会在`codeGeneration`回调中调用：

```javascript
asyncLib.forEachLimit(
  this.chunks,
  15,
  (chunk, callback) => {
    manifest = this.getRenderManifest({
      chunk,
      hash: this.hash,
      fullHash: this.fullHash,
      outputOptions,
      codeGenerationResults: this.codeGenerationResults,
      moduleTemplates: this.moduleTemplates,
      dependencyTemplates: this.dependencyTemplates,
      chunkGraph: this.chunkGraph,
      moduleGraph: this.moduleGraph,
      runtimeTemplate: this.runtimeTemplate
    });
    // ...
  })
)
```

首先会对每一个`chunk`创建`manifest`：

```javascript
getRenderManifest(options) {
  return this.hooks.renderManifest.call([], options);
}

compilation.hooks.renderManifest.tap(
  "JavascriptModulesPlugin",
  (result, options) => {
    // ...
    render = () =>
    this.renderMain(
      {
        hash,
        chunk,
        dependencyTemplates,
        runtimeTemplate,
        moduleGraph,
        chunkGraph,
        codeGenerationResults,
        strictMode: runtimeTemplate.isModule()
      },
      hooks,
      compilation
    );
    // ...

    result.push({
      render,
      filenameTemplate,
      pathOptions: {
        hash,
        runtime: chunk.runtime,
        chunk,
        contentHashType: "javascript"
      },
      identifier: hotUpdateChunk
      ? `hotupdatechunk${chunk.id}`
      : `chunk${chunk.id}`,
      hash: chunk.contentHash.javascript
    });

    return result;
  }
);
```

此时会进入到`JavascriptModulesPlugin`插件当中，对`chunk`类型进行检验，并生成带有不同`render`的任务，添加到`result`当中。完后遍历`manifest`，生成文件。精简后的代码如下：

```javascript
asyncLib.forEach(
  manifest,
  (fileManifest, callback) => {
  // 1. 解析 chunk 的文件等信息
    if ("filename" in fileManifest) {
      file = fileManifest.filename;
      assetInfo = fileManifest.info;
    } else {
      filenameTemplate = fileManifest.filenameTemplate;
      const pathAndInfo = this.getPathWithInfo(
        filenameTemplate,
        fileManifest.pathOptions
      );
      file = pathAndInfo.path;
      assetInfo = fileManifest.info
        ? {
        ...pathAndInfo.info,
        ...fileManifest.info
      }
      : pathAndInfo.info;
    }

  // 2. 生成 chunk 代码
    source = fileManifest.render();

    // 3. 输出文件
    this.emitAsset(file, source, assetInfo);
    chunk.files.add(file);
    this.hooks.chunkAsset.call(chunk, file);

  });
)
```

主要流程有三部分：首先解析文件的信息，然后调用`render`生成代码，最后根据文件信息将生成的代码进行输出。`render`函数（`renderMain`和`renderChunk`）均在`webpack/lib/javascript/JavascriptModulesPlugin`插件中定义，其中`renderMain`相较于`renderChunk`更加复杂，因为它是作为入口文件，通常会加入一些`runtime`相关的执行函数等。

## renderMain

最终生成的`chunk`代码由各个部分组成，包括我们自己写的和引用的模块代码，程序执行的一些`runtime`代码、程序启动代码，以及一些其他注释、立即执行等辅助结构代码。

### modules代码

```javascript
const chunkModules = Template.renderChunkModules(
  chunkRenderContext,
  inlinedModules
  ? allModules.filter(m => !inlinedModules.has(m))
  : allModules,
  module => this.renderModule(module, chunkRenderContext, hooks, true),
  prefix
);
```

调用`Template.renderChunkModules`函数遍历`chunk`中的所有`module`，然后将这些`module`形成键值对结构代码（实际上是一行一行代码组成的数组结构，但是执行时是对象结构），存放到`__webpack_modules__`变量当中。例如：

```javascript
/******/  var __webpack_modules__ = ({

/***/ "./src/moduleA.js":
/*!************************!*\
  !*** ./src/moduleA.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"A\": () => (/* binding */ A)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nconsole.log(react__WEBPACK_IMPORTED_MODULE_0__)\n\nfunction A() {\n  console.log('==> module A');\n}\n\n//# sourceURL=webpack://study-webpack/./src/moduleA.js?");

/***/ })
/******/  });
```

键为`module`的引用路径，值为`seal`后的代码。

### runtime代码

```javascript
if (runtimeModules.length > 0) {
  source.add(
    new PrefixSource(
      prefix,
      Template.renderRuntimeModules(runtimeModules, chunkRenderContext)
    )
  );
  source.add(
  );
  // runtimeRuntimeModules calls codeGeneration
  for (const module of runtimeModules) {
    compilation.codeGeneratedModules.add(module);
  }
}
```

在`seal`阶段生成代码构成中，会分析`runtimeRequirements`，也就是模块在转换代码时，依赖了哪些运行时的代码。比如`import`最后会替换成`__webpack_require__`函数，定义`__esModule`时需要`__webpack_require__.r`，这个时候就需要在拼接的代码中添加这些函数的定义。例如：

```javascript
/******/  /* webpack/runtime/make namespace object */
/******/  (() => {
/******/   // define __esModule on exports
/******/   __webpack_require__.r = (exports) => {
/******/    if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/     Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/    }
/******/    Object.defineProperty(exports, '__esModule', { value: true });
/******/   };
/******/  })();
```

通过这两部分就可以组成能够正常运行的完整代码了。完后通过`emitFile`方法记录生成的代码和对应的文件信息。

```javascript
emitAsset(file, source, assetInfo = {}) {
  this.assets[file] = source;
  this._setAssetInfo(file, assetInfo, undefined);
}

_setAssetInfo(file, newInfo) {
  if (newInfo === undefined) {
    this.assetsInfo.delete(file);
  } else {
    this.assetsInfo.set(file, newInfo);
  }
}
```

## emitAssets

回到`Compiler`文件中，`seal`阶段执行接着会执行`emitAssets`方法，此时会调用`hooks.emit`，触发`emitFiles`方法：

```javascript
const emitFiles = err => {
  const assets = compilation.getAssets();
  compilation.assets = { ...compilation.assets };
  asyncLib.forEachLimit(
    assets,
    15,
    ({ name: file, source, info }, callback) => {}
  );
};
```

此时会获取`compilation`中需要生成文件的代码`assets`。然后遍历调用`writeOut`方法将代码写入到对应文件当中。

## 总结

`emit`阶段主要包含两个过程：

一是遍历`chunk`，将`chunk`中`modules`的代码拼接，对于入口文件还会拼接`runtime`相关代码。最后形成`assets`和`assetsInfo`对象表示文件信息和代码信息。

二是通过`assets`和`assetsInfo`对象将代码写入到对应的文件当中。
