#!/usr/bin/env sh

echo 开始打包...
npm run build

echo 复制文件...
cp -rf ./docs/.vuepress/dist/* ../promise.github.io/

cd ../promise.github.io

echo 提交代码...
git status
git add .
git commit -m "deploy"
git push

echo 部署完毕！

