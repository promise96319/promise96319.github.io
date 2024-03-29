# bash

[bash教程](https://wangdoc.com/bash/index.html)

## 快捷命令

| 快捷命令                              | 描述                     |
| :------------------------------------ | :----------------------- |
| ctrl + a                              | 移动到行首               |
| ctrl + e                              | 移动到行尾               |
| ctrl + f                              | 光标向前移动一个字母     |
| ctrl + b                              | 光标向后移动一个字母     |
| option + f (需设置option 为 meta key) | 光标向前移动一个单词     |
| option + b                            | 光标向后移动一个单词     |
| \                                     | \                        |
| ctrl + p                              | 上一条命令               |
| ctrl + n                              | 下一条命令               |
| \                                     | \                        |
| ctrl + u                              | 从光标向前删除到行首     |
| ctrl + k                              | 从光标向后删除到行尾     |
| ctrl + w                              | 从光标向前删除一个单词   |
| option + d                            | 从光标向后删除一个单词   |
| ctrl + h                              | 删除光标前一个字母       |
| ctrl + d                              | 删除光标后一个字母       |
| \                                     | \                        |
| ctrl + t                              | 交换当前字母和上一个字母 |
| option + t                            | 交换当前单词和上一个单词 |

## 别名配置 .bash_profile

```bash
# git
alias ga="git add ."
alias gcm="git commit -m"
alias gc="git checkout"
alias gcb="git checkout -b"
alias gs="git status"
alias gb="git branch -a"
alias gt="git log --graph --oneline --all"
alias gcb="git checkout -b"
alias gd="git diff"
alias gf="git fetch"
alias gm="git merge"
alias gp="git push"
alias gpl="git pull"
alias gpt="git push --tags"
alias gitu="git config user.name promise96319"
alias gite="git config user.email 1248975357@qq.com"
alias gcz="git add . && git status && git cz"
alias clone="git clone"
alias gm="git merge"
alias gl="git log --graph --pretty=format:'%C(bold red)%h%Creset -%C(bold yellow)%d%Creset %s %C(bold green)(%cr) %C(bold blue)<%an>%Creset %C(yellow)%ad%Creset' --abbrev-commit --date=short"
alias glr="git log --reverse --pretty=format:'%C(bold red)%h%Creset -%C(bold yellow)%d%Creset %s %C(bold green)(%cr) %C(bold blue)<%an>%Creset %C(yellow)%ad%Creset' --abbrev-commit --date=short"
alias gcp="git cherry-pick"
alias gcpc="git cherry-pick --continue"
alias gcpa="git cherry-pick --abort"
alias gbg="git bisect good"
alias gbb="git bisect bad"


# 基于 @antfu/ni 库，npm/yarn/pnpm 
# npm run dev
alias b="nr build"
alias d="nr dev"
# npm install
alias i="ni"
# npm install -D
alias id="ni -D"
# http-server 起本地 web 服务
alias s="http-server -c-1"
# npm run test
alias t="nr test"
# npm uninstall
alias u="nun"
# vscode
alias c="code ."
# git
alias g="git"

# directory navigation
alias ..="cd .."
alias ...="cd ../.."
alias ....="cd ../../.."
alias .....="cd ../../../.."
```
