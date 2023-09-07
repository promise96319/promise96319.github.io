# Github workflow

## 部署 vitepress

```yaml
# 任务名称
name: Deploy blog

# 任务触发事件
on:
  push:
    branches:
      - master

# 任务
jobs:
  # 打包和部署任务
  build-and-deploy:
    # 运行在 ubuntu 上
    runs-on: ubuntu-latest
    steps:
      # 复制一个新的项目
      - name: Checkout a new repository
        uses: actions/checkout@v3

      # 使用 node 环境
      - name: Node environment
        uses: actions/setup-node@v3
        with:
          node-version: '16'

      # 安装依赖
      - name: Install packages
        run: npm i

      # 打包 vitepress
      - name: Build  site
        run: npm run build

      # 将打包后的静态文件上传到 gp-pages 分支上
      - name: Publish to github pages
        uses: JamesIves/github-pages-deploy-action@v4.3.3
        with:
          branch: gh-pages
          folder: docs/.vitepress/dist
```

## Github actions

可以在 `actions` 市场里查找一些已有的 actions 来简化部署流程。

- [Github actions 市场](https://github.com/marketplace?category=deployment&query=github+pages+sort%3Apopularity-desc&type=actions&verification=)

## 设置 token

触发事件时需要设置 `github token`，并且 `token` 需要有 `workflow` 权限。

- [设置推送的token](https://github.com/settings/tokens/674290866)

## 设置域名

部署后，默认 `xxx.github.io` 项目的 `gh-pages` 分支对应于根项目，其他仓库的 `gh-pages` 分支部署后为 `xxx.github.io/repository_name/` 路径。因此只需要设置 `xxx.github.io` 的域名映射即可。

- [域名设置](https://docs.github.com/cn/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)
