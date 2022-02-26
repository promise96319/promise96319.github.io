# 图床 Github + PicGo

## 思路
`PicGo` 软件用于上传图片到 `github` 仓库，通过 `gh-pages` 部署图片，配合域名映射访问图片。

## 1. 下载 PicGo 软件
- [PicGo 下载说明](https://picgo.github.io/PicGo-Doc/zh/guide/#%E4%B8%8B%E8%BD%BD%E5%AE%89%E8%A3%85)

安装完成后打开 `PicGo` 软件，出现以下界面：

![PicGo](https://imgs.qinguanghui.com/tools/picgo.png)

## 2. 新建并关联 github 仓库
- [github 关联说明](https://picgo.github.io/PicGo-Doc/zh/guide/config.html#github%E5%9B%BE%E5%BA%8A)

## 3. 使用 gh-pages 部署仓库
- [gh-pages 部署](https://cloud.tencent.com/developer/article/1391619)

相当于新建 `gh-pages` 分支。

## 4. 配置图片访问域名
先在 `github` 仓库中设置对应的域名：

![PicGo gh pages](https://imgs.qinguanghui.com/tools/picgo-gh-pages.png)

然后在阿里云或其他平台设置域名解析路径：

![PicGo domain](https://imgs.qinguanghui.com/tools/picgo-domain.png)
