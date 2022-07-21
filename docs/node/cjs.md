# CJS 模块

## 循环引用

``` javascript
// a.js
console.log('a starting');
exports.done = false;
const b = require('./b.js'); // 开始加载 b 模块
console.log('in a, b.done = %j', b.done);
exports.done = true;
console.log('a done');
```

``` javascript
// b.js
console.log('b starting');
exports.done = false;
const a = require('./a.js'); // 将未完成的 a 模块复制给 b 模块
console.log('in b, a.done = %j', a.done);
exports.done = true;
console.log('b done');
```

``` javascript
console.log('main starting');
const a = require('./a.js');
const b = require('./b.js');
console.log('in main, a.done = %j, b.done = %j', a.done, b.done);
```

执行顺序：
``` javascript
main starting
a starting
b starting
in b, a.done = false
b done
in a, b.done = true
a done
in main, a.done = true, b.done = true
```

## 模块变量

在模块代码执行前，`nodejs` 会包裹一层：
```javascript
(function(exports, require, module, __filename, __dirname) {
  // Module code actually lives in here
});
```
  - `__dirname`：当前文件所在文件夹路径。
  - `__filename`：包含文件名称的文件路径。
  - `exports`：`exports = module.exports`。
  - `module`
    - `children`
    - `parent` 使用 `require.main/module.children` 代替
    - `exports`
    - `path`：相当于 `__dirname`
    - `filename`：包含文件名的完整路径
    - `id`：一般为 `filename`
    - `isPreloading`
    - `loaded`
    - `require`：

  - `require`：
    - `cache`：模块缓存
    - `main`：指向入口模块。`require.main === module ?`
    - `resolve`：利用内部机制解析并返回模块路径


