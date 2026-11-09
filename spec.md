# Etavioxy 个人网站 — 技术规格

## 技术选型

| 选型 | 理由 |
|---|---|
| Vite + Vue 3 + vue-router | 单页站点，路由与构建链路开箱可用 |
| UnoCSS：presetWind3、attributify、icons、web fonts | 原子类与图标按需生成，沿用上游类名 |
| markdown-it | 内容以 .md 编写，构建期渲染成 HTML |
| unplugin-vue-markdown | `.md` 编译成 Vue SFC，内容里可直接用组件 |
| vite-ssg | 构建期为每个路由输出预渲染 HTML |
| @unhead/vue | 按路由注入 title 与 description |
| GitHub Pages + Actions | 在本仓库构建并部署 Pages artifact |
| antfu.me（MIT）作基线 | 布局、主题、页面骨架沿用上游实现 |

## 时效

- `vite-ssg` 28 与 `unplugin-vue-markdown` 32 的支持范围含 Vite 8 与 vue-router 5；上游收紧范围时本条失效。

## 模块结构

```
site/
├── spec.md                本文件：技术选型与结构
├── index.html             应用入口 HTML
├── vite.config.ts         构建配置
├── unocss.config.ts       原子类预设与主题
├── content/               路由与内容的唯一来源
│   ├── index.md           首页
│   ├── projects.md        项目页
│   ├── bookmarks/         学习页：一个领域一篇
│   ├── posts/             博客：一篇一个文件
│   └── [...404].md        未匹配路由
├── docs/                  实现层文档
├── scripts/               构建辅助脚本
├── src/
│   ├── main.ts            应用入口与样式装载
│   ├── components/        页面容器与功能区组件
│   ├── data/              构建期数据
│   ├── styles/            全局样式与共用片段
│   └── logics/            跨组件状态
└── .github/workflows/     CI 部署流水线
```
