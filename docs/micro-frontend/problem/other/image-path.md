# 背景图片地址错误

## 问题描述

当 `app` 中通过 `css` 设置背景图片时：

``` css
background-image: url(../images/20230919-1841447….jpg);
```

在 `platform` 中加载 `app`，发现此处的相对路径是相对于 `platform`，而非 `app`，导致资源找不到。

## 分析

- [https://developer.mozilla.org/en-US/docs/Web/CSS/url](https://developer.mozilla.org/en-US/docs/Web/CSS/url)
- `url` 的相对路径是根据加载该资源的路径来的：
  - 当用 `link` 加载 `css`，那么 `css` 里的 `url` 是相对于 `link` 的路径的。
  - 当用 `style` 加载 `css`，那么 `css` 里的 `url` 是相对于包含这个 `style` 标签的 `html` 路径的。

`platform` 加载 `app` 时，会将 `app html` 中的 `link` 转换为 `style`，因为不转换的话会 `link` 不在 `head` 中，导致样式晚于 `dom` 加载完成，产生问题。
但是将 `link` 转换为 `style` 后，会发现 `style` 中 `url('../xxx')` 相对路径产生问题，因此，需要解决这个相对路径问题。

## 解决方案

- 对于 `link` 标签
  - 如果是正常是用 `href`，不进行处理
  - 如果是 `fetch` 后改为 `style` 标签，那么需要纠正 `url` 地址，以 `href` 为相对路径。
- 对于 `style` 标签
  - 纠正 `url` 地址，以 `window.location.href` 为相对地址。

## 类似 issue

- [https://github.com/micro-zoe/micro-app/issues/774](https://github.com/micro-zoe/micro-app/issues/774)
