# VS Code

## 插件

- Auto Close Tag
- Code Spell Checker
- Color Highlight
- Github Copilot
- CSS Navigation
- Error Lens
- Eslint
- File Nesting Updater
- GitLens
- Javascript Debugger
- Markdown Preview Enhanced
- markdownlint
- Paste Image
- Path AutoComplete
- Path Intellisense
- Prettier
- Sass (.sass only)
- SCSS IntelliSense
- Stylelint
- TODO Highlight
- JavaScript and TypeScript Nightly
- TypeScript Importer
- UnoCSS
- Vitest
- Vue Language Features (Volar)
- Where Am I?
- Carbon Product Icons
- Iconify IntelliSense
- Goto definition alias

## 配置

``` json
{
    // 调试栏的位置：浮动
    "debug.toolBarLocation": "floating",
    "debug.onTaskErrors": "debugAnyway",
    // 自动闭合标签
    "auto-close-tag.activationOnLanguage": [
        "xml",
        "php",
        "blade",
        "ejs",
        "jinja",
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact",
        "plaintext",
        "markdown",
        "vue",
        "liquid",
        "erb",
        "lang-cfml",
        "cfml",
        "HTML (EEx)",
        "HTML (Eex)",
        "plist"
    ],
    // ==================分割线==================
    "editor.lineHeight": 24,
    "editor.accessibilitySupport": "off",
    "editor.cursorSmoothCaretAnimation": "on",
    "editor.find.addExtraSpaceOnTop": false,
    // 需要自己下载对应的图标
    "editor.fontFamily": "Input Mono, Fira Code, monospace",
    "editor.fontLigatures": "'ss01', 'ss02', 'ss03', 'ss06', 'zero'",
    "editor.fontSize": 13,
    "editor.glyphMargin": true,
    "editor.guides.bracketPairs": "active",
    "editor.inlineSuggest.enabled": true,
    "editor.lineNumbers": "interval",
    "editor.multiCursorModifier": "ctrlCmd",
    "editor.renderWhitespace": "boundary",
    "editor.suggestSelection": "first",
    "editor.tabSize": 2,
    "editor.unicodeHighlight.invisibleCharacters": false,
    "editor.minimap.enabled": false,
    "editor.codeActionsOnSave": {
        "source.fixAll": false,
        "source.fixAll.eslint": true,
        "source.fixAll.tslint": true,
        "source.fixAll.stylelint": true,
        "source.fixAll.markdownlint": true,
        "source.organizeImports": false
    },
    "explorer.confirmDelete": false,
    "explorer.confirmDragAndDrop": false,
    // workbench
    "window.dialogStyle": "custom",
    "window.nativeTabs": true, // this is great, macOS only
    "window.titleBarStyle": "custom",
    "workbench.fontAliasing": "antialiased",
    "workbench.editor.closeOnFileDelete": true,
    "workbench.editor.highlightModifiedTabs": true,
    "workbench.editor.tabCloseButton": "right",
    "workbench.iconTheme": "file-icons",
    "workbench.list.smoothScrolling": true,
    "workbench.sideBar.location": "right",
    "workbench.startupEditor": "newUntitledFile",
    "workbench.tree.expandMode": "singleClick",
    "workbench.tree.indent": 10,
    //设置用户选中代码段的颜色
    "workbench.colorCustomizations": {
        "editor.selectionBackground": "#569cd670"
    },
    // extensions
    "extensions.autoUpdate": "onlyEnabledExtensions",
    "extensions.ignoreRecommendations": true,
    // files
    "files.eol": "\n",
    "files.insertFinalNewline": true,
    "files.simpleDialog.enable": true,
    // 失去焦点时保存
    "files.autoSave": "onFocusChange",
    "files.exclude": {
        "**/.git": false
    },
    // Git
    "git.autofetch": true,
    "git.confirmSync": false,
    "git.enableSmartCommit": true,
    "git.untrackedChanges": "separate",
    // search
    "search.exclude": {
        "**/.git": true,
        "**/.github": true,
        "**/.nuxt": true,
        "**/.output": true,
        "**/.pnpm": true,
        "**/.vscode": true,
        "**/.yarn": true,
        "**/bower_components": true,
        "**/dist/**": true,
        "**/logs": true,
        "**/node_modules": true,
        "**/out/**": true,
        "**/package-lock.json": true,
        "**/pnpm-lock.yaml": true,
        "**/tmp": true,
        "**/yarn.lock": true,
        "**/.eslintcache": true
    },
    // terminal 配置开始
    "terminal.integrated.fontSize": 12,
    "terminal.integrated.fontFamily": "Monaco",
    "terminal.integrated.lineHeight": 1.2,
    // 默认终端，改为 zsh (默认为 /bin/bash)
    "terminal.integrated.defaultProfile.osx": "zsh",
    "terminal.integrated.cursorBlinking": true,
    "terminal.integrated.cursorStyle": "line",
    "terminal.integrated.fontWeight": "300",
    "terminal.integrated.persistentSessionReviveProcess": "never",
    "terminal.integrated.tabs.enabled": true,
    // 侧边栏文件折叠
    "explorer.fileNesting.enabled": true,
    "explorer.fileNesting.expand": false,
    "explorer.fileNesting.patterns": {
        ".gitignore": ".gitattributes, .gitmodules, .gitmessage, .mailmap, .git-blame*",
        "*.js": "$(capture).js.map, $(capture).min.js, $(capture).d.ts",
        "*.jsx": "$(capture).js",
        "*.ts": "$(capture).js, $(capture).*.ts",
        "*.tsx": "$(capture).ts",
        "*.vue": "$(capture).*.ts, $(capture).*.js",
        "index.d.ts": "*.d.ts",
        "shims.d.ts": "*.d.ts",
        "*.cpp": "$(capture).hpp, $(capture).h, $(capture).hxx",
        "*.cxx": "$(capture).hpp, $(capture).h, $(capture).hxx",
        "*.cc": "$(capture).hpp, $(capture).h, $(capture).hxx",
        "*.c": "$(capture).h",
        "go.mod": ".air*, go.sum",
        "default.nix": "shell.nix",
        "flake.nix": "flake.lock",
        "BUILD.bazel": "*.bzl, *.bazel, *.bazelrc, bazel.rc, .bazelignore, .bazelproject, WORKSPACE",
        "CMakeLists.txt": "*.cmake, *.cmake.in, .cmake-format.yaml, CMakePresets.json",
        ".clang-tidy": ".clang-format",
        ".env": "*.env, .env.*, env.d.ts",
        "dockerfile": ".dockerignore, dockerfile*",
        "package.json": ".browserslist*, .circleci*, .codecov, .commitlint*, .editorconfig, .eslint*, .firebase*, .flowconfig, .github*, .gitlab*, .gitpod*, .huskyrc*, .jslint*, .lintstagedrc*, .markdownlint*, .mocha*, .node-version, .nodemon*, .npm*, .nvmrc, .pm2*, .pnp.*, .pnpm*, .prettier*, .releaserc*, .sentry*, .stackblitz*, .styleci*, .stylelint*, .tazerc*, .textlint*, .tool-versions, .travis*, .vscode*, .watchman*, .xo-config*, .yamllint*, .yarnrc*, api-extractor.json, appveyor*, ava.config.*, azure-pipelines*, bower.json, build.config.*, commitlint*, crowdin*, cypress.json, dangerfile*, dprint.json, firebase.json, grunt*, gulp*, jasmine.*, jenkins*, jest.config.*, jsconfig.*, karma*, lerna*, lint-staged*, nest-cli.*, netlify*, nodemon*, nx.*, package-lock.json, playwright.config.*, pm2.*, pnpm*, prettier*, pullapprove*, puppeteer.config.*, renovate*, rollup.config.*, stylelint*, tsconfig.*, tsdoc.*, tslint*, tsup.config.*, turbo*, typedoc*, vercel*, vetur.config.*, vitest.config.*, webpack.config.*, workspace.json, xo.config.*, yarn*",
        "rush.json": ".browserslist*, .circleci*, .codecov, .commitlint*, .editorconfig, .eslint*, .firebase*, .flowconfig, .github*, .gitlab*, .gitpod*, .huskyrc*, .jslint*, .lintstagedrc*, .markdownlint*, .mocha*, .node-version, .nodemon*, .npm*, .nvmrc, .pm2*, .pnp.*, .pnpm*, .prettier*, .releaserc*, .sentry*, .stackblitz*, .styleci*, .stylelint*, .tazerc*, .textlint*, .tool-versions, .travis*, .vscode*, .watchman*, .xo-config*, .yamllint*, .yarnrc*, api-extractor.json, appveyor*, ava.config.*, azure-pipelines*, bower.json, build.config.*, commitlint*, crowdin*, cypress.json, dangerfile*, dprint.json, firebase.json, grunt*, gulp*, jasmine.*, jenkins*, jest.config.*, jsconfig.*, karma*, lerna*, lint-staged*, nest-cli.*, netlify*, nodemon*, nx.*, package-lock.json, playwright.config.*, pm2.*, pnpm*, prettier*, pullapprove*, puppeteer.config.*, renovate*, rollup.config.*, stylelint*, tsconfig.*, tsdoc.*, tslint*, tsup.config.*, turbo*, typedoc*, vercel*, vetur.config.*, vitest.config.*, webpack.config.*, workspace.json, xo.config.*, yarn*",
        "readme.*": "authors, backers.md, changelog*, citation*, code_of_conduct.md, codeowners, contributing.md, contributors, copying, credits, governance.md, history.md, license*, maintainers, readme*, security.md, sponsors.md",
        "cargo.toml": ".clippy.toml, .rustfmt.toml, cargo.lock, clippy.toml, cross.toml, rust-toolchain.toml, rustfmt.toml",
        "gemfile": ".ruby-version, gemfile.lock",
        "composer.json": "composer.lock, phpunit.xml*, psalm*.xml",
        "vite.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .htmlnanorc*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, cssnano.config.*, cypress.json, env.d.ts, htmlnanorc.*, index.html, jasmine.*, jest.config.*, jsconfig.*, karma*, playwright.config.*, postcss.config.*, puppeteer.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*",
        "vue.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .htmlnanorc*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, cssnano.config.*, cypress.json, env.d.ts, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, playwright.config.*, postcss.config.*, puppeteer.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*",
        "nuxt.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .htmlnanorc*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, cssnano.config.*, cypress.json, env.d.ts, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, playwright.config.*, postcss.config.*, puppeteer.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*",
        "next.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .htmlnanorc*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, cssnano.config.*, cypress.json, env.d.ts, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, next-env.d.ts, playwright.config.*, postcss.config.*, puppeteer.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*",
        "svelte.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .htmlnanorc*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, cssnano.config.*, cypress.json, env.d.ts, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, mdsvex.config.js, playwright.config.*, postcss.config.*, puppeteer.config.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*",
        "remix.config.*": "*.env, .babelrc*, .codecov, .cssnanorc*, .env.*, .htmlnanorc*, .mocha*, .postcssrc*, .terserrc*, api-extractor.json, ava.config.*, babel.config.*, cssnano.config.*, cypress.json, env.d.ts, htmlnanorc.*, jasmine.*, jest.config.*, jsconfig.*, karma*, playwright.config.*, postcss.config.*, puppeteer.config.*, remix.*, svgo.config.*, tailwind.config.*, tsconfig.*, tsdoc.*, unocss.config.*, vitest.config.*, webpack.config.*, windi.config.*"
    },
    // vitesse 主题
    "window.autoDetectColorScheme": true,
    "workbench.preferredLightColorTheme": "Vitesse Light",
    "workbench.preferredDarkColorTheme": "Vitesse Dark",
    "workbench.productIconTheme": "icons-carbon",
    // Extension configs
    "emmet.includeLanguages": {
        "javascript": "javascriptreact",
        "wxml": "html"
    },
    "emmet.showSuggestionsAsSnippets": true,
    "emmet.triggerExpansionOnTab": false,
    // "errorLens.enabledDiagnosticLevels": ["warning", "error"],
    // github.copilot
    "github.copilot.enable": {
        "*": true,
        "plaintext": true,
        "markdown": true,
        "scminput": false,
        "yaml": true,
        "typescript": true,
        "json": true,
        "typescriptreact": true,
        "scss": true
    },
    // cSpell
    "cSpell.allowCompoundWords": true,
    "cSpell.language": "en,en-US",
    "cSpell.userWords": [
        "antd",
        "antfu",
        "Attributify",
        "Backtop",
        "bodify",
        "bumpp",
        "bundleless",
        "Cascader",
        "chatgpt",
        "Childrens",
        "chunkhash",
        "codemirror",
        "corejs",
        "countup",
        "datepicker",
        "davinci",
        "dedupe",
        "dists",
        "drawio",
        "dumi",
        "echarts",
        "Entrypoint",
        "eqeqeq",
        "errcode",
        "esbuild",
        "fastify",
        "fullhash",
        "funcs",
        "guanghui",
        "icomoon",
        "iconfont",
        "iconmoon",
        "imageback",
        "imgs",
        "instanceof",
        "iterm",
        "jiti",
        "josephxia",
        "keyof",
        "KHTML",
        "leetcode",
        "linktype",
        "mfsu",
        "middlewares",
        "mixins",
        "mvvm",
        "nativeshare",
        "noopener",
        "noreferrer",
        "notranslate",
        "nums",
        "openai",
        "paren",
        "picther",
        "pinia",
        "pnpm",
        "postrelease",
        "proto",
        "qingteng",
        "qinguanghui",
        "rwnd",
        "sendmsg",
        "stylelint",
        "svgs",
        "Tapable",
        "tarojs",
        "timepicker",
        "tokenlize",
        "typeof",
        "Uncapitalize",
        "unocss",
        "UUIDV",
        "vant",
        "vite",
        "vitejs",
        "vitepress",
        "vitest",
        "vnode",
        "vuepress",
        "vueuse",
        "Vuex",
        "wechat",
        "weex",
        "xlarge",
        "xmind",
        "zhapi",
        "zhihu",
        "zindex"
    ],
    // github
    "css.lint.hexColorLength": "ignore",
    "githubIssues.workingIssueFormatScm": "#${issueNumberLabel}",
    "githubPullRequests.fileListLayout": "tree",
    "gitlens.codeLens.authors.enabled": false,
    "gitlens.codeLens.enabled": false,
    "gitlens.menus": {
        "editor": {
            "blame": false,
            "clipboard": true,
            "compare": true,
            "history": false,
            "remote": false
        },
        "editorGroup": {
            "blame": true,
            "compare": false
        },
        "editorTab": {
            "clipboard": true,
            "compare": true,
            "history": true,
            "remote": true
        },
        "explorer": {
            "clipboard": true,
            "compare": true,
            "history": true,
            "remote": true
        },
        "scm": {
            "authors": true
        },
        "scmGroup": {
            "compare": true,
            "openClose": true,
            "stash": true
        },
        "scmGroupInline": {
            "stash": true
        },
        "scmItem": {
            "clipboard": true,
            "compare": true,
            "history": true,
            "remote": false,
            "stash": true
        }
    },
    // svg
    "svg.preview.mode": "svg",
    // vue3
    "volar.autoCompleteRefs": false,
    "volar.codeLens.pugTools": false,
    "volar.codeLens.scriptSetupTools": true,
    "volar.completion.preferredTagNameCase": "pascal",
    "volar.showWelcomePage": false,
    "volar.takeOverMode.enabled": true,
    // prettier
    "prettier.jsxSingleQuote": true,
    "prettier.requirePragma": true,
    "prettier.useEditorConfig": false,
    "prettier.vueIndentScriptAndStyle": true,
    "prettier.jsxBracketSameLine": true,
    "prettier.printWidth": 120,
    "prettier.semi": false,
    "prettier.trailingComma": "none",
    "prettier.singleQuote": true,
    "bracketPairColorizer.depreciation-notice": false,
    "npm.packageManager": "pnpm",
    "eslint.validate": [
        "javascript",
        "typescript",
        "javascriptreact",
        "typescriptreact",
        "vue",
        "html",
        "markdown"
        // "json",
        // "jsonc",
        // "json5"
    ],
    "eslint.codeAction.showDocumentation": {
        "enable": true
    },
    // 控制项目中是否使用 prettier
    "editor.formatOnSave": true,
    "prettier.enable": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "[vue]": {
        "editor.formatOnSave": true,
        "editor.defaultFormatter": "Vue.volar"
    },
    "stylelint.packageManager": "yarn",
    "stylelint.snippet": [
        "css",
        "less",
        "postcss",
        "scss",
        "sass"
    ],
    "stylelint.validate": [
        "css",
        "less",
        "postcss",
        "scss",
        "sass"
    ],
    "debug.javascript.autoAttachFilter": "onlyWithFlag",
    "files.associations": {
        "*.cjson": "jsonc",
        "*.wxss": "css",
        "*.wxs": "javascript"
    },
    "minapp-vscode.disableAutoConfig": true,
    "vetur.format.enable": false,
    "workbench.editor.splitInGroupLayout": "vertical",
    "workbench.editor.showTabs": false,
    // markdown snippets 不生效问题
    "[markdown]": {
        "editor.quickSuggestions": {
            "other": true,
            "comments": true,
            "strings": true
        },
        "editor.acceptSuggestionOnEnter": "on"
    },
    "leetcode.defaultLanguage": "typescript",
    "leetcode.workspaceFolder": "/Users/qinguanghui/Desktop/markdown/vuepress/docs/leetcode",
    "leetcode.endpoint": "leetcode-cn",
    "leetcode.hint.configWebviewMarkdown": false,
    "leetcode.hint.commentDescription": false,
    "leetcode.hint.commandShortcut": false,
    "redhat.telemetry.enabled": true,
    "workbench.colorTheme": "Vitesse Dark",
    "merge-conflict.autoNavigateNextConflict.enabled": true,
    "git.mergeEditor": false,
    "[python]": {
        "editor.formatOnType": true
    },
    "eslint.format.enable": true,
    "window.zoomLevel": 1,
    "errorLens.excludeBySource": [
        "ts(2304)",
        "eslint(max-lines)"
    ],
    "Codegeex.Privacy": true,
    "yaml.customTags": [
        "!And",
        "!And sequence",
        "!If",
        "!If sequence",
        "!Not",
        "!Not sequence",
        "!Equals",
        "!Equals sequence",
        "!Or",
        "!Or sequence",
        "!FindInMap",
        "!FindInMap sequence",
        "!Base64",
        "!Join",
        "!Join sequence",
        "!Cidr",
        "!Ref",
        "!Sub",
        "!Sub sequence",
        "!GetAtt",
        "!GetAZs",
        "!ImportValue",
        "!ImportValue sequence",
        "!Select",
        "!Select sequence",
        "!Split",
        "!Split sequence"
    ],
    "Codegeex.EnableExtension": true,
    "pasteImage.defaultName": "Y-MM-DD_HH-mm-ss",
    "pasteImage.namePrefix": "imgs/",
    "markdownTablePrettify.extendedLanguages": []
}
```
