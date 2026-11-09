// 学习页的编译期渲染规则，只在 content/bookmarks/ 下生效：
//   # 分类名      → 分区包裹（slide-enter）+ 该分区第一个列表内的 HeadingOutline
//   - [标题](URL) → BookmarkItem
// 结构与迁移前的 parseSections + transformItems 输出保持一致。
import type MarkdownIt from 'markdown-it'
import type Token from 'markdown-it/lib/token.mjs'

interface Bookmark {
  title: string
  url: string
  year?: string
  type?: string
  tags: string[]
  desc?: string
}

function escapeAttr(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function escapeSingle(value: string) {
  return escapeAttr(value).replace(/'/g, '&#39;')
}

function isBookmarksFile(env: unknown) {
  const id = String((env as { id?: string } | undefined)?.id ?? '').replace(/\\/g, '/')
  return id.includes('/content/bookmarks/')
}

// inline 子 token：link_open / text(标题) / link_close / text(" · 2022 · 博客") / softbreak / text("#tag 摘要")
function parseBookmark(inline: Token): Bookmark | null {
  const children = inline.children ?? []
  const open = children.findIndex(t => t.type === 'link_open')
  if (open < 0)
    return null

  const url = children[open].attrGet('href') ?? ''
  const titleParts: string[] = []
  let i = open + 1
  for (; i < children.length; i++) {
    if (children[i].type === 'link_close')
      break
    if (children[i].type === 'text' || children[i].type === 'code_inline')
      titleParts.push(children[i].content)
  }
  const title = titleParts.join('').trim()
  if (!title || !url)
    return null

  const tail = children.slice(i + 1)
  const metaIndex = tail.findIndex(t => t.type === 'text')
  const metaText = metaIndex >= 0 ? tail[metaIndex].content.trim() : ''
  const bodyText = tail
    .slice(metaIndex + 1)
    .filter(t => t.type === 'text' || t.type === 'code_inline')
    .map(t => t.content)
    .join(' ')
    .trim()

  let year: string | undefined
  let type: string | undefined
  for (const part of metaText.split('·').map(s => s.trim()).filter(Boolean)) {
    if (/^\d{4}$/.test(part))
      year = part
    else if (!part.startsWith('#'))
      type = part
  }

  const tags = [...bodyText.matchAll(/#[^\s#]+/g)].map(m => m[0])
  const desc = bodyText.replace(/#[^\s#]+/g, '').replace(/\s+/g, ' ').trim()

  return { title, url, year, type, tags, desc: desc || undefined }
}

function renderBookmark(item: Bookmark) {
  const attrs = [
    `title="${escapeAttr(item.title)}"`,
    `url="${escapeAttr(item.url)}"`,
    item.year ? `year="${escapeAttr(item.year)}"` : '',
    item.type ? `type="${escapeAttr(item.type)}"` : '',
    item.tags.length ? `:tags='[${item.tags.map(t => `"${escapeSingle(t)}"`).join(',')}]'` : '',
    item.desc ? `desc="${escapeAttr(item.desc)}"` : '',
  ].filter(Boolean).join(' ')

  return `<BookmarkItem ${attrs} />`
}

export function bookmarksPlugin(md: MarkdownIt) {
  md.core.ruler.push('bookmarks', (state) => {
    if (!isBookmarksFile(state.env))
      return

    const tokens = state.tokens
    const output: Token[] = []
    let depth = 0
    let sectionIndex = 0
    let sectionOpen = false
    let pendingHeading: string | null = null
    let headingPlaced = false

    const raw = (content: string, block = true) => {
      const token = new state.Token(block ? 'html_block' : 'html_inline', '', 0)
      token.content = content
      return token
    }

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i]

      // 一级标题：切出一个新分区，标题本身挂到该分区第一个列表内
      if (token.type === 'heading_open' && token.tag === 'h1') {
        const inline = tokens[i + 1]
        const text = inline?.type === 'inline' ? inline.content.trim() : ''
        if (sectionOpen)
          output.push(raw('</div>'))
        sectionIndex += 1
        output.push(raw(`<div class="slide-enter" style="--enter-stage:${sectionIndex};--enter-step:60ms">`))
        sectionOpen = true
        headingPlaced = false
        pendingHeading = text || null
        i += 2
        continue
      }

      if (token.type === 'bullet_list_open' || token.type === 'ordered_list_open')
        depth++
      if (token.type === 'bullet_list_close' || token.type === 'ordered_list_close')
        depth--

      // 迁移前的行为：每节只把标题插进第一个列表
      if (token.type === 'bullet_list_open' && pendingHeading && !headingPlaced) {
        output.push(token)
        output.push(raw(`<HeadingOutline text="${escapeAttr(pendingHeading)}" />`, false))
        pendingHeading = null
        headingPlaced = true
        continue
      }

      // 只处理顶层条目；含子列表的条目原样保留
      if (token.type === 'list_item_open' && depth === 1) {
        let level = 0
        let end = i
        for (; end < tokens.length; end++) {
          if (tokens[end].type === 'list_item_open')
            level++
          else if (tokens[end].type === 'list_item_close' && --level === 0)
            break
        }

        const block = tokens.slice(i, end + 1)
        const hasNestedList = block.some(t => t.type === 'bullet_list_open' || t.type === 'ordered_list_open')
        const inline = block.find(t => t.type === 'inline')
        const item = !hasNestedList && inline ? parseBookmark(inline) : null

        if (item) {
          output.push(raw(renderBookmark(item), false))
          i = end
          continue
        }
      }

      output.push(token)
    }

    if (sectionOpen)
      output.push(raw('</div>'))

    // 顶层列表换成紧凑样式
    for (const token of output) {
      if (token.type === 'bullet_list_open' && !token.attrGet('class'))
        token.attrSet('class', 'lp-list')
    }

    state.tokens = output
  })
}
