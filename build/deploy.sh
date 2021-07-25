#!/usr/bin/env sh

# npm run build

cp -rf ./docs/.vuepress/dist/* ../promise.github.io/

cd ../promise.github.io

git status
git add .
git commit -m "deploy"
git push

