// 构建时快照的站点数字（与 StatsList 的实时 GitHub 数字不同类，见 site/AGENTS.md）。
// 只从本仓内容数出来，不手填、不估算：书签条目 / 项目条目 / 文章篇数。
import { projects } from './projects'

const bookmarkFiles = import.meta.glob('../../content/bookmarks/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

const postFiles = import.meta.glob('../../content/posts/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

// 书签条目 = 以 "- [标题](链接)" 开头的行（content/bookmarks/*.md 的唯一格式，见 AGENTS.md）
let bookmarks = 0
for (const raw of Object.values(bookmarkFiles)) {
  for (const line of raw.split('\n')) {
    if (/^-\s+\[[^\]]+\]\(/.test(line))
      bookmarks++
  }
}

// 文章篇数 = 列表会收录的篇数：列表页 index、下划线开头、draft: true 都不算
let posts = 0
for (const [path, raw] of Object.entries(postFiles)) {
  const file = path.split('/').pop()!
  if (file === 'index.md' || file.startsWith('_'))
    continue
  const frontmatter = raw.split('---')[1] || ''
  if (/^draft:\s*true$/m.test(frontmatter))
    continue
  posts++
}

export const siteStats = {
  bookmarks,
  posts,
  projects: Object.values(projects).flat().length,
}
