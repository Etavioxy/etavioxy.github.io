// 学习内容领域 —— 每个领域对应一个 content/bookmarks/*.md（H1 = 英文分类标题，正文 markdown）
export interface Domain {
  key: string
  nav: string
  title: string
  file: string
}

export const domains: Domain[] = [
  { key: 'agent', nav: 'Agent/AI', title: 'Agent/AI', file: 'agent.md' },
  { key: 'graphics', nav: 'Graphics', title: 'Graphics', file: 'graphics.md' },
  { key: 'games', nav: 'GameDesign', title: 'GameDesign', file: 'games.md' },
  { key: 'programming', nav: 'Programming', title: 'Programming', file: 'programming.md' },
  { key: 'os', nav: 'OS/hardware', title: 'OS/hardware', file: 'os.md' },
  { key: 'other', nav: 'Other', title: 'Other', file: 'other.md' },
]
