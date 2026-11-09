# Bookmarks 巨型标题渲染记录（SVG 方案）

记录 Bookmarks 学习页巨型描边标题的渲染问题与最终方案（2026-08-16）。

## 背景

- Bookmarks 页：每个领域 = `content/<领域>.md`，`#` 一级标题（英文，≤10 字符）渲染成巨型描边标题（antfu ListPosts 年份标题同款：8em、2px 描边、透明填充、opacity 0.1、`-3rem/-2rem` 偏移、嵌入 `<ul>` 内部）。
- 站点字体：Inter，本地子集化（presetWebFonts + createLocalFontProcessor），**只有 400 字面**。标题 `font-weight: 700` → 浏览器合成伪粗体（faux bold）。

## 问题

`-webkit-text-stroke` 沿字形轮廓描边，细字形（`I`、`/`）的笔画宽度与描边同量级，内外描边塌陷 → 边缘断裂变细。

另发现：该缺陷的可见性**随视窗大小变化**（Chrome 光栅化/缩放行为），导致复现不稳定、站点表现时好时坏——这是放弃 text-stroke 改用 SVG 的直接原因。

## 排查过程（结论）

| 方案 | 结果 |
|---|---|
| `paint-order: stroke`（HTML 文本） | **无效**——paint-order 仅对 SVG 元素生效，HTML 文本浏览器不解析 |
| `text-shadow` 模拟描边 | 需要实心填充，**丢失透明中空描边**效果 |
| 加粗 `-webkit-text-stroke`（3/4/6px） | 影响**所有字形**（数字也变粗），不符合"保持原效果只修 I /" |
| SVG `<text>` + 逐字符 `tspan` | ✅ 可行：细字形单独加粗，其余保持 2px |

## 最终方案

- **SVG 逐字符描边**（内联 `<svg>`，非 .svg 文件——标题文字动态，按内容生成）：
  - 普通字形：`stroke-width: 2px`
  - 细字形：**仅 `I`、`/`**（用户调参确认），`stroke-width: 5px`
  - `fill: transparent` + `stroke: #aaa` + `paint-order: stroke` + `opacity: 0.1`
  - 其余任何字符一律 2px（不得擅自扩大名单）
- **宽度实测**：渲染后 `getComputedTextLength()` 量实际文本宽度，写回 svg `width`（+40px 余量），不依赖估算。
- 位置保持 antfu 参数：`left: -3rem; top: -2rem`，嵌入 `<ul>` 内部，与条目平级。

## 参数调试产物（/tmp，可追溯）

- `repro-textstroke.html` / `repro2-inter.html`：text-stroke 复现尝试（未复现 → 视窗相关）
- `repro4-original.html`：原版（仅 400 + 伪粗体）复现，确认缺陷
- `repro8-research.html`：text-shadow / SVG 方案对比
- `repro10-svg-inputs.html`：SVG 双参数实时调试（普通/细字形滑块）→ 定值 2px / 5px
- `repro12-svg-chars.html`：SVG 稳定版全字符检查表（供扩名单时用）

## 规则落点

- 实现：`src/utils/markdown.ts`（`headingSvg` / `THIN_CHARS`）、`src/views/Bookmarks.vue`（`.bkm-heading-svg` 样式 + `measureHeadings`）
- 约定：`AGENTS.md`「巨型标题 = SVG 逐字符描边…」条目
