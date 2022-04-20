# 项目问题记录

## 组件库文档预研 + 建设问题
  - 

## 多个项目应用了组件库，但是组件库存在bug问题
  - 锁死版本号，有需要的时候进行更新

## webpack 打包慢，热更新失效问题
  - 

## 热更新
  - react refresh
    - Dan的介绍 https://github.com/facebook/react/issues/16604


## todo 

### 项目模板
#### 问题：每次想做一个项目都需要先建一堆文件，copy效率太低？
#### 期望：如何快速生成项目模板，比如：
  - ts
  - eslint
  - rollup
  - workflow
  - ...

#### 方案：
方案一：github 自己定义模板 如 ts-template，或者 eslint-config 等
方案二：看有哪些库支持，看能不能直接生成
方案三：基于其他库 DIY

### 快捷命令
#### 问题：每次用命令的时候总是忘了，然后可能就选择不去管了。比如 vim 鼠标移动命令，vscode 鼠标移动命令，bash 命令等

#### 期望：能不能直接用一个快捷键，调出相应的快捷键命令？
 - 有没有记录快捷命令的地方，每次用快捷键的时候一个快捷键就调出来了，方便查看。
 - 每个人可以自定义自己的快捷键集。

 #### 方案：
  - App 是不是可以唤起面板
  - 如何去收集这些命令