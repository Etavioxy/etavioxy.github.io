# 站点功能与渲染管线

> - **本文档范围**——站点的内容目录与 markdown 渲染链路；特性取舍归 `docs/site-features.md`，技术选型与模块结构归 `spec.md`，单个组件的版式细节归对应组件文档。
> - **版式与内容分离**——md 只写内容与组件引用，结构与样式由 Vue 组件承担，不用正则改写渲染结果。
> - **一篇 markdown 一个路由**——文件名即 URL，路由表由目录结构推出，不手写。

## 渲染链路

```
content/**/*.md
    │  unplugin-vue-markdown：gray-matter 读 frontmatter，正文编译成 SFC 模板
    ▼
Vue SFC ── wrapper: WrapperPost（prose 容器 + 入场动画）──▶ 页面
    │  vite-ssg build
    ▼
预渲染 HTML：每个路由一份
```

路由由 `vue-router/vite` 生成：`routesFolder: 'content'`，`extensions: ['.vue', '.md']`。路径即 URL，`content/posts/<slug>.md` → `/posts/<slug>`。

## 内容组织

| 路径 | 内容 |
|---|---|
| `content/index.md` | 首页 |
| `content/projects.md` | 项目页 |
| `content/bookmarks/<领域>.md` | 学习页，一个领域一篇 |
| `content/posts/index.md` | 博客列表 |
| `content/posts/<slug>.md` | 博客文章，一个文件一篇 |
| `content/[...404].md` | 未匹配路由 |

## 学习页渲染

学习页的写法与观感保持原状，变的是渲染发生在编译期，不再由页面脚本用正则改写 HTML。

| 内容侧 | 写法 | 渲染结果 |
|---|---|---|
| 领域页首行 | `# 分类名` | `HeadingOutline.vue`，逐字符 SVG 描边 |
| 条目 | `- [标题](URL)` + 一行说明 | `BookmarkItem.vue`，类型 badge、年份、tags、摘要 |
| 领域清单 | `src/data/domains.ts` | 子导航顺序与文件名 |

markdown-it 规则在编译期完成上述替换，产物是组件调用而非字符串拼接。
