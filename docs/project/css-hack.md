# css 问题

## icon 怎么居中？

```css
span {
  display: inline-block;
  /* 当元素为 块 时，表示最小高度 */
  line-height: 0;
  /* 水平居中 */
  text-align: center;
  /* 垂直居中 */
  vertical-align: -0.125em;
  /* 防止字体转型 */
  text-transform: none;
  svg {
    width: 1em;
    height: 1em;
    fill: currentColor;
  }
}

```
