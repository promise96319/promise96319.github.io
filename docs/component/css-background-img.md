# rc-calendar 定制前进后退 icon 问题

## 需求背景

在公司内部组件库当中需要使用到 `rc-calendar` 组件，并且需要定制日期前进后退按钮，当 `hover` 的时候 `icon` 会高亮。

![rc-calendar](https://imgs.qinguanghui.com/rc-calendar-icon.png)

## 问题

`rc-calendar` 并未提供相应的参数用于直接更改`icon`，而只是提供了两个`a`标签。
目前使用 `::after` 伪元素，配合 `background-image` 来显示 `base64` 格式的图标，代码如下：

``` scss
@mixin arrow-left {
  background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5tZHBpL+WNleeureWktC3lt6Y8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0i5Y2V566t5aS0LeW3piIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgtMiIgZmlsbD0iIzY2NjY2NiIgZmlsbC1ydWxlPSJub256ZXJvIiBwb2ludHM9IjguODk3MjMzMTcgOS45OTk3OTUwNiAxMi40OTk5OCA2LjIzMDkzMjggMTEuODAxNDIzMyA1LjUgNy41IDkuOTk5NzUzMyAxMS44MDE0MDM0IDE0LjUgMTIuNSAxMy43NjkxMDkiPjwvcG9seWdvbj4KICAgIDwvZz4KPC9zdmc+');
  background-repeat: no-repeat;
}

.#{$datepicker} {
  &-next-month-btn::after {
    @include arrow-left();
  }
}
```

但是这种实现方式无法满足新的需求：`hover`时图标如何高亮？（切换颜色）

## 方案1: mask 属性

[参考链接](https://www.zhangxinxu.com/wordpress/2022/01/css-background-image-color/)

`mask` 属性允许使用者通过遮罩或者裁切特定区域的图片的方式来隐藏一个元素的部分或者全部可见区域。可以将 `图标` 作为遮罩，然后隐藏图标外的其他内容，只显示图标内部的内容。这样的话，我们只需要切换元素的背景颜色就能达到`视觉`上切换`图标颜色`的目的了，代码如下：

```scss
$img-arrow-left: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAqCAYAAADBNhlmAAAAAXNSR0IArs4c6QAAAjNJREFUWEft1U1rE1EUBuD3BNvaTgwl0NakViPGKK3UhaBLxVooBcGFZOfCTRKTGGiaZlIitIM1Xw1WKbiYn+HGTdFM0YWCggsX/gRBxI+2djI3c2XanQsXuTcwyMz+HR7ec+YMweUPudwHDyg6Ia9Br0HRBkTz3g56DYo2IJrv2Q6mCo8u2ED2xuWzmXg83ukW2hNgYrlynrftFsDHiHxFvVledw0wXapGmdXZ5uAhELX84aH5jXz+tyuA2cLD0yawDY4TBHodoIG5ZnNpt1uck5M24oRaOwnGDA4eIcLbYV//bKOh/hLBSQOmymvjtgmDc34GwHs60jej10s/RHFSgOmlxnHLbhsAjxHwUfEr1ze0/DcZOGHg/eXKiGnZLc75JIBPdGzwmr5a+CoLJwRcWHkc3NndewXOp4nwebDfd/VppfxFJk4ImC3Ww2bHckYbJaIPQ4oy80Rb+O4aoANJl9cm2D6cmxcB6N1Rf2B2U8v9lIkUPjOpUjViHx7mCRDe9CnBuWdaZkcWUhh40GSpGrUYM8ARJoIB/+i8vprck4GUAnQg94r1c+xwJ8eIaCukjN/UtLv7okhpQAeSUWtT7Q5zvuwRInoRUmK3NC3eFkFKBTqQpFq7aDPrJYAgAc8RG72tJ5NWt0jpwINxL1YvMbAtAMPkI1Vff9BwFdDBJAqVK+D24sCpwJ3NXM50HbBb0N+5noxYFk7oVycT8a93eQ2KNu016DUo2oBo3tvB/77BP2I2rStBEHoeAAAAAElFTkSuQmCC' !default;

@mixin arrow-left {
  display: inline-block;
  -webkit-mask: url($img-arrow-left) no-repeat;
  mask: url($img-arrow-left) no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}

.#{$datepicker} {
  &-next-month-btn::after {
    position: absolute;
    top: 9px;
    width: 20px;
    height: 20px;
    // 最终会呈现出 icon 形状
    background-color: $qtd-color-text-secondary;
    background-size: contain;
    transition: all 0.2s;
    @include arrow-left();
  }
}
```

但是 `mask` 的[兼容性](https://caniuse.com/?search=mask)似乎不太好，因此只好再寻找其他方案。

## 方案2：字体图标

[自定义字体图标](https://www.zhihu.com/question/22022905)

通过自定义字体图标，在伪元素`::after`的`content`属性中设置字体图标对应的字符来显示图标。

### 生成字体库图标

首先生成字体图标，可以通过 [icomoon](https://icomoon.io/app/#/select/font)等网站进行生成。

### 引入字体库图标

将生成的 `fonts` 文件导入到项目当中，并引用对应的`css`文件，这里是 `icomoon.css` 文件。

``` css
@font-face {
  font-family: 'icomoon';
  src: url('icomoon.eot?dyw1q8');
  src: url('icomoon.eot?dyw1q8#iefix') format('embedded-opentype'), url('icomoon.ttf?dyw1q8') format('truetype'),
    url('icomoon.woff?dyw1q8') format('woff'), url('icomoon.svg?dyw1q8#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

[class^='icon-'],
[class*=' icon-'] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* 图标对应的字符 */
.icon-arrow-down:before {
  content: '\e900';
}
.icon-double-arrow-down:before {
  content: '\e901';
}
```

如果发现无法正常使用，需要在 `webpack.config.js` 中配置相应的 `loader` 对字体进行解析，配置如下：

``` javascript
{
  test: /\.(png|svg|eot|woff|woff2|ttf)$/,
  use: {
    loader: 'url-loader',
    options: {
      limit: 10000
    }
  }
}
```

### 使用图标

代码如下：

``` scss
$icomoon-font-family: 'icomoon' !default;
// icomoon.css 中定义的图标字符
$icomoon-arrow-down: '\e900' !default;

.#{$datepicker} {
  &-next-month-btn {
    &::after {
      position: absolute;
      top: 9px;
      width: 20px;
      height: 20px;
      color: $qtd-color-text-secondary;
      // 设置字体
      font-family: $icomoon-font-family;
      text-align: center;
      // 设置图标
      content: $icomoon-arrow-down;
    }
    &:hover::after {
      // hover 时变色
      color: $qtd-color-primary;
    }
  }
}
```

## 方案3：背景图片

字体图标虽然能完成效果，但是在组件库中都是使用 `svg` 来渲染图标，并且引入 `font` 后还需要处理 `font` 引入相关的逻辑。因此采用第三种方案，背景图片的方式。[参考地址](https://www.zhangxinxu.com/wordpress/2018/08/css-svg-background-image-base64-encode/)

回到问题：可以使用背景图片来设置图片，但是无法切换颜色，那么我们需要寻找方案来解决切换颜色。既然是 `svg` 图片，那么可以通过 `fill` 属性动态设置颜色。如下所示:

```scss
$color: red;
$arrow-down: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='#{$color}' viewBox='0 0 32 32'%3E%3Cpath d='M7.75 11.522a1 1 0 0 1 1.312-.089l.102.089 6.833 6.835 6.837-6.835a1 1 0 0 1 1.312-.089l.102.089a1 1 0 0 1 .09 1.312l-.09.102-7.542 7.542a1 1 0 0 1-1.312.09l-.102-.09-7.542-7.542a.999.999 0 0 1 0-1.414z'/%3E%3C/svg%3E") !default;
```

这里将 `$color` 插入到 `svg` 当中，从而能达到控制图片颜色的效果。[查看兼容性](https://caniuse.com/?search=CSS%20property%3A%20background%3A%20SVG%20image%20as%20background)

但是这里又存在一个问题，部分浏览器上无法识别 `#000` 等 `#` 号开头的颜色，需要经过转移后才能识别，但是在我们的色板中都是 `hex` 类型的颜色。这个时候就需要将其进行转义，最好是能将 `#` 号去除掉。

查看 `sass` 文档，我们发现它有 `string` 相关的方法，如下：

```scss
@use 'sass:string';
@debug string.slice('xxx', 1);
```

但是在 `scss` 中却没有这个方法，无法将 `#` 号去除掉，因此我们需要另想他法。

既然浏览器无法识别 背景图片 `svg` 中的 `#` 号，那么它能否识别 `rgb` 呢？测试发现是可行的。那么我们需要将 `hex` 转换为 `rgb` 形式。第一想法是直接使用 `rgb` 函数，但是测试后发现没用，使用 `rgba` 函数，发现在 `a` 为 `1` 时同样不适用，如：

```scss
// 最终在 svg 里还是 hex 形式
$color: rgba($qtd-color-primary, 1);

// 最终在 svg 里是 rgb 形式
$color: rgba($qtd-color-primary, 0.99);
```

虽然将 `a` 设为 `0.99` 能基本上达到效果，但是还是不够完美。继续查看文档发现，颜色函数除了 `rgb` 还有 `red/green/blue` 函数，分别能取到 `hex` 的红绿蓝的 `rgb` 值。[查看文档](https://www.sass.hk/skill/sass25.html)

那么我们可以根据这三个函数封装一个 `hex` 到 `rgb` 的函数，因此最终的代码如下：

``` scss
// hex 转换为 rgb
@function hexToRgb($hex) {
  $red: red($hex);
  $green: green($hex);
  $blue: blue($hex);
  @return 'rgb(' + $red + ',' + $green + ',' + $blue + ')'
};

// 根据颜色生成 svg 图片
@function arrow-down($color) {
  @return url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='#{hexToRgb($color)}' viewBox='0 0 32 32'%3E%3Cpath d='M7.75 11.522a1 1 0 0 1 1.312-.089l.102.089 6.833 6.835 6.837-6.835a1 1 0 0 1 1.312-.089l.102.089a1 1 0 0 1 .09 1.312l-.09.102-7.542 7.542a1 1 0 0 1-1.312.09l-.102-.09-7.542-7.542a.999.999 0 0 1 0-1.414z'/%3E%3C/svg%3E")
};

@function double-arrow-down($color) {
  @return url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='#{hexToRgb($color)}' viewBox='0 0 32 32'%3E%3Cpath d='M24.147 16.537l.102.09a1 1 0 0 1 .09 1.312l-.09.102-7.542 7.542a1 1 0 0 1-1.312.09l-.102-.09-7.542-7.542a1 1 0 1 1 1.312-1.504l.102.09L16 23.462l6.835-6.835a1 1 0 0 1 1.312-.09zm0-8l.102.089a1 1 0 0 1 .09 1.312l-.09.102-7.542 7.542a1 1 0 0 1-1.312.09l-.102-.09-7.542-7.542a.999.999 0 0 1 1.312-1.503l.102.089L16 15.461l6.835-6.835a1 1 0 0 1 1.312-.089z'/%3E%3C/svg%3E")
};

// svg 图片
$svg-arrow-down: arrow-down($qtc-color-text-secondary) !default;
$svg-arrow-down-hover: arrow-down($qtc-color-primary) !default;
$svg-double-arrow-down: double-arrow-down($qtc-color-text-secondary) !default;
$svg-double-arrow-down-hover: double-arrow-down($qtc-color-primary) !default;

// 图片的样式
@mixin BackgroundImage($image) {
  background-image: $image;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.#{$datepicker} {
  &-prev-month-btn {
    &::after {
      transform: rotate(90deg);
      @include BackgroundImage($svg-arrow-down);
    }
    // hover 时切换图片
    &:hover::after {
      @include BackgroundImage($svg-arrow-down-hover);
    }
  }
}
```
