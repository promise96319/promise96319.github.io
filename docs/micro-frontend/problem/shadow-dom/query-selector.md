# 测试使用 `querySelector` 无法获取 `shadowDOM` 内部元素

## 问题描述

测试使用 `querySelector` 无法获取 `shadowDOM` 内部元素，导致测试失败。

## 解决方案

以 `puppeteer` 为例，该库内部有许多关于 `shadowDOM` 的讨论，其中在 `5.4.0` 版本增加了 `aria` / `pierce` 前缀用于穿透 `shadowDOM` 进行选择。

- [https://newreleases.io/project/github/puppeteer/puppeteer/release/v5.4.0](https://newreleases.io/project/github/puppeteer/puppeteer/release/v5.4.0)

>>> `Puppeteer` now ships with two built-in handlers: `aria` and `pierce`:
>>> The `aria` handler (#6307) allows querying elements based on the accessibility tree.
>>> The `pierce` handler (#6509) pierces shadow roots while querying for a CSS selector.

与测试人员沟通，使用的是 `playwrights` 库，该库默认支持 `shadowDOM` 的穿透：[https://medium.com/helpshift-engineering/playwrights-playbook-conquering-shadowdom-elements-with-ease-35b65bfb8008](https://medium.com/helpshift-engineering/playwrights-playbook-conquering-shadowdom-elements-with-ease-35b65bfb8008)
