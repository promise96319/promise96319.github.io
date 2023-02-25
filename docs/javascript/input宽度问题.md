# Input 默认宽度
[flex布局遇到input无法自适应的坑](https://zhuanlan.zhihu.com/p/59471707)
> input 标签 size 属性
控件的初始大小。以像素为单位。但当 type 属性为 text 或 password 时, 它表示输入的字符的长度。从HTML5开始, 此属性仅适用于当 type 属性为 text,search,tel,url,email,或 password；否则会被忽略。 此外，它的值必须大于0。 如果未指定大小，则使用默认值20。

因此，`input` 的默认宽度为 `20` 个字符的宽度，通过 `size` 属性可以更改这个默认宽度。如 `size=1`。再配合 `flex` 等布局让 `input` 宽度自适应。
