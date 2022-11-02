# Module Federation 联邦模块

## 使用

## 原理

## 问题

## 优化

## 实战
- 4.0 OS 平台
  - 原理
    - `platform` 作为平台，加载其他所有的 app，并显示。
    - 其他每个项目单独作为一个 `app`，并暴露自身。
  - 如何开发？
    - 平台开发的时候，直接抓取线上 app 即可。
    - 单个 app 开发的时候，需要导向平台。然后在 `devServer` 中劫持当前 app 的请求，改为本地 App。
  - 功能如何共享？
    - git submodule => shared
    - shared => node_modules { singleton, eager }



## 参考
