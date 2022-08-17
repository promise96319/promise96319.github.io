# Rollup

- [源码调试](./源码调试.md)

## 知识点
  - Queue 的实现，最大并发执行 promise，并且有返回值等。
  - Promise 串行
  - 循环依赖时警告⚠️


## Graph
  ### build
  - generateModuleGraph
    - moduleLoader.addEntryModules => modules 和 externalModules
  - sortModules
    - circlePaths => 会使用深度遍历的方式判断是否存在循环依赖，并且提示警告。
    - ast.bind() => ast 中变量作用域 ?
  - includeStatements
    - tree shaking ?
    - module
      - implicitly: export * form './foo.js'
        - https://stackoverflow.com/questions/56277089/how-does-one-implicitly-export-an-entire-module
      - explicitly: export { foo } form './foo.js'

  ### 工具方法
    - pluginDriver
    - moduleLoader
    - acornParser
    - fileOperationQueue
    - getModuleInfo （获取模块信息）

## ModuleLoader
  - addEntryModules => loadEntryModule => resolveId => fetchModule => new Module => addModuleSource => fs.readFile => transform（插件转换）=> module.setSource（ast 解析）=> 获取静态和动态 dependencies，并关联父子关系 => moduleParsed hook => fetchModuleDependencies 加载子模块

## Module
  - astContext：提供 ast 上下文
  - bindReferences： ast.bind()
  - include：ast.include()
  - setSource：解析成 ast，
  - sources：当前模块中使用到的其他模块的路径
    - import * from 'index.js' => 存的是 index.js

## Bundle
  ### generate
  - setOutputBundle ?
  - generateChunk
    - getChunkAssignments => 生成 [{ alias, modules }] 即 chunk 数组和每一个 chunk 对应的 module
    - new Chunk() => chunk => chunks
    - chunk.link() => 关联 module/dependency 和 chunk 关系
    - generateFacades （根据 preserveentrysignatures 来定）


## Chunk
  - 

## rollup
  - graph.build()
  - graph.handleGenerateWrite()
    - getOutputOptionsAndPluginDriver => 生成 outputPluginDriver
    - new Bundle() => generate
      - setOutputBundle => 给 fileEmitter 的处理
      - 
    - graph.fileOperationQueue => writefile
    - 对 generate 内容整理后返回（供命令式调用）

## PluginDriver
  - build 阶段为 inputPluginDriver
  - bundle 阶段为 outputPluginDriver，感觉这块代码职责不是很清晰

## FileEmitter
  - 管理 chunk（对应多个模块） 和 asset（对应单一个模块）
  - 


## 文章
  - https://medium.com/@PepsRyuu/why-i-use-rollup-and-not-webpack-e3ab163f4fd3
    - webpack 配置多，复杂性高，打包后的代码臃肿。功能全面。
    - parcel 零配置，但是对于大型项目想要优化定制比较困难。
    - rollup 配置较少，hoist 打包后代码清晰。仅支持 esm，需要通过扩展来支持其他类型文件，生产环境兼容性不好。

  
