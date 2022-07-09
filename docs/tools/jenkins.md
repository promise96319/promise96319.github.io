# jenkins
自动化部署流程

## 部署网页
- `源码管理`：连接代码仓库
- `构建触发器`：什么时候触发构建部署流程
- `构建环境`：构建需要的环境
- `构建`：可以添加构建命令等
- `构建后操作`：构建完成后的操作

## 连接 gitlab
1. 使用 `ssh-keygen` 命令生成秘钥对：
  - 将公钥设置到 `gitlab` 中。
  - 将私钥设置到 `jenkins` 的 `系统管理 > Manage credentials`中。
2. 在 `源码管理` 阶段设置对应的仓库、`credentials`、以及分支等。
![](https://imgs.qinguanghui.com/jinkins/gitlab.png)

## 构建环境
1. `系统管理 > 插件管理` 下载 `nodejs` 插件。
2. `系统管理 > 全局工具配置` 下载对应版本的 `nodejs`。
3. `构建环境`中选择 `Provide Node & npm bin/ folder to PATH`
![](https://imgs.qinguanghui.com/jinkins/node-use.png)

## 构建命令
```bash
echo $PATH
node -v
npm -v
npm i --registry=https://registry.npm.taobao.org
npm run build
```
