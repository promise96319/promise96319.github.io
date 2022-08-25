# Draw.io

## 问题

在写博客时，经常需要用 `Draw.io` 画一些流程图，然后生成图片放到 `vitepress` 文章目录中。下次编辑时需要找到相关的源文件进行编辑，然后重复相同的保存工作，非常麻烦。

## 解决
### `Draw.io Integration` 插件
`vscode` 安装 `Draw.io Integration` 插件。安装成功后，新建以 `.drawio.svg` 结尾的文件，双击可以在 `vscode` 中打开 `Draw.io` 编辑器进行编辑。在 `vitepress markdown` 中通过 `image` 的方式引入 `svg` 文件即可显示编辑后的图片，如 `![babel](./babel.drawio.svg)` 。

### `open` 插件
由于在编辑器里打开 `Draw.io` 在功能上与实际的 `app` 还是有差别，比如一些共用的配置无法保存共享。因此如果能直接在 `vscode` 里打开 `Draw.io App` 体验更好。而 `open` 这个插件满足这一功能。安装后，在文件名称上右键会出现 `open with default application`，点击会用 `mac` 默认的应用打开 `svg` 文件。

这个时候就需要去修改 `mac` 打开 `svg` 文件的方式。
  - 在 `finder` 中右键 `svg` 后缀的文件
  - 点击【显示简介】
  - 修改简介中的【打开方式】，选择 `Draw.io App` 
  - 点击【全部修改】
  - 此时回到 `vscode` 右键 `open with default application` 即可打开 `Draw.io App`。
