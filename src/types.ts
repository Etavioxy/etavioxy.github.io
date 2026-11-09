// 站点内容类型 —— 移植自 antfu/antfu.me · src/types.ts（MIT, Copyright (c) Anthony Fu）
// 字段与 frontmatter 同名：文章与列表都从这里取元信息。
export interface Post {
  path: string
  title: string
  date: string
  place?: string
  lang?: string
  desc?: string
  platform?: string
  duration?: string
  recording?: string
  radio?: boolean
  video?: boolean
  inperson?: boolean
  redirect?: string
}
