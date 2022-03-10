# Mac终端：iterm2 + oh my zsh

## 下载 iterm2

[官网地址](https://iterm2.com/)

`iterm2` 包含许多设置项，可以自定义终端界面样式功能等。

## 下载 oh my zsh

[官网地址](https://ohmyz.sh/)

`Mac`下载命令：
```bash
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

## 配置 oh my zsh

### 打开配置文件
```bash
# 打开配置文件
vim ~/.zshrc
```

### 配置以下内容
```bash
# 配置 ZSH 路径
export ZSH="/Users/(这里需要替换成用户名)/.oh-my-zsh"

# ====== 以下在结尾处配置 ====
# 使默认的 .bash_profile 生效
export PATH=$HOME/bin:/usr/local/bin:$PATH
source ~/.bash_profile
# 使 .zshrc 生效
source $ZSH/oh-my-zsh.sh
```
### 使配置生效
```bash
# 先保存 .zshrc 文件，在运行
source ~/.zshrc
```

## 配置主题
[主题列表](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes)
```bash
# 例如
ZSH_THEME=robbyrussell
```

## 配置插件
[插件列表](https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins)
```bash
# 例如
plugins=(nvm git yarn z zsh-syntax-highlighting zsh-autosuggestions)
```