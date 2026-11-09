# 站点特性

> - **本文档范围**——本站相对 antfu.me 基线的特性取舍：沿用什么、取消什么、加了什么。渲染链路与目录归 `docs/markdown-pipeline.md`，技术选型归 `spec.md`。
> - **基线即上游**——「基线」指 antfu.me 的页面与实现；本站以它为准，偏离的每一处都要能在这里查到归属。
> - **取消是设计**——取消项是本站有意不做，不是没做完；新增项是本站独有，不进基线。

## 沿用特性

基线有、本站保留的特性。

| 特性 | 基线落点 | 本站落点 |
|---|---|---|
| 首页 hero、联系方式 | `pages/index.md` | `content/index.md` |
| Works 胶囊链接 | magic-link 插件 | 同基线 |
| 博客列表与文章 | `pages/posts/*.md` | `content/posts/*.md` |
| 项目页 | `pages/projects.md` | `content/projects.md` |
| 书签页 | `pages/bookmarks.md` | `content/bookmarks/*.md` |
| 主题切换 | `.dark` 类 | 同基线 |
| 导航与页脚 | `NavBar`、`Footer` | 同基线 |
| 分类子导航 | `SubNav.vue` | 同基线 |
| 页面容器 | `WrapperPost.vue` | `PageWrapper.vue` |
| 复制邮箱 | `TextCopy.vue` | `Home.vue` |
| 站点 logo | `Logo.vue` | `NavBar.vue` 头像 |
| 页面 title 与 description | frontmatter | 同基线 |
| Web 字体 | `presetWebFonts` | 同基线 |
| 入场动画 | `slide-enter` 类 | 同基线 |
| 标题锚点与 TOC | `markdown-it-anchor`、TOC | 同基线 |
| 代码高亮 | Shiki 明暗双主题 | 同基线 |
| 404 页 | `pages/[...404].md` | `content/[...404].md` |

## 取消特性

基线有、本站有意不做。

| 特性 | 基线形态 | 取消理由 |
|---|---|---|
| 装饰背景 | `art: random` 的 dots/plum 图案 | 纯色背景，不用装饰图案与动画 |
| 相册 | `photos.md` + 物理动画 | 不产出照片内容 |
| 演讲、播客、直播、媒体 | `talks.md`、`podcasts.md`、`streams.md`、`media.md` | 不维护这几类内容 |
| 赞助 | `SponsorButtons`、赞助名单 | 没有赞助体系 |
| 站内对话 | `chat.md`、`chat-zh.md` | 依赖外部模型服务 |
| 说明类栏目 | `notes.md`、`demos.md`、`use.md` | 不做这几类栏目 |
| 社交卡图 | 构建期用 `sharp` 生成 OG 图 | 不做分享卡图 |
| 订阅源 | `scripts/rss.ts` 生成 feed | 不做订阅 |
| 代码类型悬浮 | Twoslash | 不写需类型推导的示例 |
| 提示块 | `markdown-it-github-alerts` | 不用提示块语法 |
| 顶部进度条 | `nprogress` | 不做路由级进度条 |
| URL 迁移表 | `_redirects` + 生成脚本 | 无历史 URL 需保留 |
| 会议预约 | `CalCom.vue` | 不用预约入口 |
| 跨站发布 | `CrossPost.vue` | 不做跨站分发 |
| 引用推文 | `Tweet.vue` | 不嵌社交媒体内容 |
| 视频嵌入 | `YouTubeEmbed.vue` | 文章不嵌视频 |
| 关系图 | `AsyncSyncQuantum.vue` | 不做 d3 关系图 |
| 描边 logo 动画 | `LogoStroke.vue` | 用静态头像 |
| 文章内演示组件 | `slides/`、`qrcode/`、`quansync/`、`shiki/`、`devframe/` | 文章不嵌演示 |

## 扩展特性

基线没有、本站新增。

| 特性 | 落点 | 说明 |
|---|---|---|
| 实时 GitHub 数字 | `StatsList.vue` | repos/stars/followers，加载时请求 |
| 内容数字 | `siteStats.ts` | 项目、书签、文章计数 |
| 贡献图 | `content/index.md` | 第三方服务图片 |
| 语言分布 | `LanguageList.vue` | 构建期快照 |
| 领域路由 | `/bookmarks/:domain` | 每个领域可单独分享 |
| 巨型描边标题 | `HeadingOutline.vue` | 逐字符 SVG 描边 |
| 条目结构 | `BookmarkItem.vue` | 类型 badge、年份、tags、摘要 |
| 中文排印 | `prose` 样式 | 正文中文，分类标题英文 |
| 本地品牌图标 | `components/icons/` | 自绘 SVG，不依赖远端图标 |
| 部署 | GitHub Actions | 同仓构建并发布 Pages artifact |
