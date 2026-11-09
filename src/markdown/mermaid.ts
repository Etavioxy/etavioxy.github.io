// ```mermaid 代码块 → <MermaidDiagram code="…" />
// 图形在浏览器里生成（mermaid 需要 DOM），因此这里只做编译期替换，产物是组件调用。
import type { PluginSimple } from 'markdown-exit'

export const mermaidPlugin: PluginSimple = (md) => {
  const defaultFence = md.renderer.rules.fence!

  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    if (token.info.trim() === 'mermaid') {
      const code = md.utils.escapeHtml(token.content.trim()).replace(/\r?\n/g, '&#10;')
      return `<MermaidDiagram code="${code}" />\n`
    }
    return defaultFence(tokens, idx, options, env, self)
  }
}
