#!/usr/bin/env sh

set -e

npm run build

cd docs/.vuepress/dist

git init
git config user.name 'qinguanghui'
git config user.email '1248975357@qq.com'
git add -A
git commit -m 'deploy'

cd -
