# Rollup

- [源码调试](./源码调试.md)

- graph.generateModuleGraph()：转换为 modules。 
- graph.sortModules()：
  - 会使用深度遍历的方式判断是否存在循环依赖，并且提示警告。
  - ast.bind() ? 作用是什么？
- graph.includeStatements()
  - tree shaking 等？


  - module
    - implicitly: export * form './foo.js'
      - https://stackoverflow.com/questions/56277089/how-does-one-implicitly-export-an-entire-module
    - explicitly: export { foo } form './foo.js'

- 知识点
  - Queue 的实现，最大并发执行 promise，并且有返回值等。
  - 循环依赖时警告⚠️
