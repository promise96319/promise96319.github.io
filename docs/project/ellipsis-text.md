# Ellipsis 组件开发心得

## 目标

多行文本省略，需要支持末尾尾随 `展开` 和 `收起` 按钮，当文本省略时需要触发相应的回调。

## 思路

分为两种情况，一种情况为普通文本省略，可以通过 `css` 属性来设置。另一种情况是需要支持末尾`展开`按钮，需要计算文本宽度是否超出已有宽度。

## 实现

### css 省略

当不需要支持末尾`展开`按钮时，可以通过 `css` 属性来设置文本省略。

```css
// 单行省略
.single-line-ellipsis {
   white-space: no-wrap;
   overflow: hidden;
   text-overflow: ellipsis;
}

// 多行省略
.multiple-line-ellipsis {
   display: --webkit-box;
   overflow: hidden;
   --webkit-line-clamp: 3; // 行数
   --webkit-box-orient: vertical;
}
```

省略时的回调可以通过省略节点来进行计算：

```jsx
// 判断是单行省略还是多行省略
const cssLineClamp = rows > 1
// 判断是否产生了省略（可以通过 rc-resize-observer 监听宽度高度变化）
const isEllipsis = cssLineClamp
  ? textEle.offsetHeight < textEle.scrollHeight
  : textEle.offsetWidth < textEle.scrollWidth
```

### js 省略

- 文本尾随`展开`按钮省略：

   1. 首先，需要计算文本是否超过了宽度 `width`。
      1. 计算文本渲染的高度：通过一个 `隐藏` 的 `span` 标签 **自由换行** 加载文本，加载完成后得到文本高度。
      2. 计算单行文本渲染高度。通过一个 `隐藏` 的 span 标签 **不换行** 加载文本，加载完成后得到文本高度。
      3. 通过用户提供的行数 `rows` 判断 `行数 x 单行高度` 是否大于 `多行高度`，如果大于则说明 **文本超出**。
   2. 文本超出后，切割文本。
      1. 计算文本总长度，如果非字符串和数字，当做一个字符，记录长度为1。
      2. 通过二分法切割文本。
      3. 将切割后的文本通过步骤 1 进行渲染。看是否满足要求。
   3. 响应式处理。
      1. 监听文本变化，当文本或宽度等发生变化时，判断是否需要重新计算省略内容。

**注意点**：

- 获取元素高度时，通过`offsetHeight`获取的高度为`height + padding + border`，并且为整数。因此在行高不为整数时，会出现计算上的一些误差。
