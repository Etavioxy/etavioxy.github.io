---
title: _template
date: 2026-10-21
duration: 3min
repositories: https://github.com/Etavioxy/friction-skills
draft: true
---

[[toc]]

:::warning
This is a draft post, the content may be incomplete. Please check back later.
:::

## 约定

- 文件名即 URL：`content/posts/<slug>.md` → `/posts/<slug>`
- frontmatter 必填 `title`、`date`；`date` 决定列表排序，同年条目上方压一层淡描边年份
- `duration` 是手填的阅读时长，`repositories` 是文章对应的仓库（可写一个 URL 或 URL 数组），两者都渲染在标题下的日期行，列表页不显示
- `draft: true` 不进列表；`lang: zh` 在标题前加「中文」标记
- 下划线开头的文件只能通过路由直接打开，不出现在列表、没有任何链接指向它
- 正文里 `[[toc]]` 展开成左侧浮动目录，标题自动带锚点；可以直接写组件标签与内嵌 HTML
- `:::warning` 是提示块；`$…$` 与 `$$…$$` 渲染成公式；` ```mermaid ` 代码块画成图

## 渲染基线

这一段往下是基线样例，用来比对排版：标题层级、列表、引用、代码块、表格、中英混排。

### 三级标题

正文段落，含 `行内代码`、**加粗**、*斜体*，以及一个[外链](https://github.com/Etavioxy)。

- 无序列表第一项
- 无序列表第二项，比较长的一行，看看换行后的行高和缩进是否正常，中文与 English 混排时字距会不会松。

1. 有序列表第一项
2. 有序列表第二项

> 引用块：看看左侧的边线与灰度。

```ts
// 代码块：检查等宽字体、背景、横向滚动
export function noop(): void {
  // nothing
}
```

| 层级 | 含义 |
|---|---|
| S | 从 0 独立交付 |
| A | 生产环境用过 |

---

分隔线之后的收尾段落。
