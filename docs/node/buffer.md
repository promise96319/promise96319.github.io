# Buffer

- `Buffer` 表示一个固定长度的字节序列。
- `Blob`  封装了可以在多个工作线程之间安全共享的不可变原始数据。

## 参考
- [聊聊JS的二进制家族：Blob、ArrayBuffer和Buffer](https://www.cnblogs.com/penghuwan/p/12053775.html)
  - `Blob` 用来支持文件操作，`File` 继承了所有 `Blob` 属性。
  - `ArrayBuffer`：`FileReader` 读取文件并转化为其他数据结构。
    - `FileReader.readAsText(Blob)`：将 `Blob` 转化为文本字符串
    - `FileReader.readAsArrayBuffer(Blob)`： 将 `Blob` 转为 `ArrayBuffer` 格式数据
    - `FileReader.readAsDataURL()`: 将 `Blob` 转化为`Base64` 格式的 `Data URL`
  - `Buffer`：`node.js` 提供的对象，一般用于 `I/O` 操作。
