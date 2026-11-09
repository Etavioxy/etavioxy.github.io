import type { PluginSimple as MarkdownItPlugin } from 'markdown-exit'
import fs from 'node:fs'
import { katex } from '@mdit/plugin-katex'
import Shiki from '@shikijs/markdown-exit'
import { transformerNotationDiff, transformerNotationHighlight, transformerNotationWordHighlight } from '@shikijs/transformers'
import vue from '@vitejs/plugin-vue'
import matter from 'gray-matter'
import anchor from 'markdown-it-anchor'
import container from 'markdown-it-container'
import LinkAttributes from 'markdown-it-link-attributes'
import TOC from 'markdown-it-table-of-contents'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Markdown from 'unplugin-vue-markdown/vite'
import { defineConfig } from 'vite'
import VueRouter from 'vue-router/vite'
import { slugify } from './scripts/slugify'
import { bookmarksPlugin } from './src/markdown/bookmarks'
import { mermaidPlugin } from './src/markdown/mermaid'

// Deployed at GitHub Pages root: https://etavioxy.github.io/
export default defineConfig({
  base: '/',
  // 局域网与 NetBird overlay 上访问时，Host 头是 FQDN 或 overlay IP，需显式放行
  server: {
    host: true,
    allowedHosts: ['.netbird.cloud', 'peonyhill.local', '100.108.167.250'],
  },
  preview: {
    host: true,
    allowedHosts: ['.netbird.cloud', 'peonyhill.local', '100.108.167.250'],
  },
  plugins: [
    VueRouter({
      routesFolder: 'content',
      extensions: ['.vue', '.md'],
      // 文章列表从路由表读元信息，不另建数据模块：把 frontmatter 写进 route.meta
      extendRoute(route) {
        const path = route.components.get('default')
        if (!path || !path.endsWith('.md'))
          return

        // 写到一半的 frontmatter 是常态，解析失败只报警告，不让 dev server 与构建挂掉
        let data: Record<string, unknown> = {}
        try {
          data = matter(fs.readFileSync(path, 'utf-8')).data
        }
        catch (error) {
          console.warn(`[frontmatter] ${path}: ${(error as Error).message.split('\n')[0]}`)
        }

        // YAML 把 date 解析成 Date，路由表里会被序列化成空对象，先转成 ISO 字符串
        const frontmatter = {
          ...data,
          ...(data.date instanceof Date ? { date: data.date.toISOString() } : {}),
        }
        route.addToMeta({ frontmatter })
      },
    }),
    UnoCSS(),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      wrapperComponent: id => id.includes('/content/bookmarks/') ? 'WrapperBookmarks' : 'WrapperPost',
      // 学习页与项目页自己控制宽度
      wrapperClasses: (id) => {
        const path = id.replace(/\\/g, '/')
        if (path.includes('/content/bookmarks/'))
          return ''
        if (path.endsWith('/content/projects.md'))
          return 'page-wide'
        return 'prose m-auto slide-enter-content'
      },
      headEnabled: true,
      frontmatter: true,
      exportFrontmatter: false,
      exposeFrontmatter: false,
      exposeExcerpt: false,
      // 内容里要用组件标签，必须放开 md 内联 HTML
      markdownItOptions: { html: true, quotes: '""\'\'' },
      async markdownSetup(md) {
        md.use((await Shiki({
          themes: {
            dark: 'vitesse-dark',
            light: 'vitesse-light',
          },
          defaultColor: false,
          cssVariablePrefix: '--s-',
          transformers: [
            transformerNotationDiff(),
            transformerNotationHighlight(),
            transformerNotationWordHighlight(),
          ],
        })) as unknown as MarkdownItPlugin)

        md.use(anchor as unknown as MarkdownItPlugin, {
          slugify,
          permalink: anchor.permalink.linkInsideHeader({
            symbol: '#',
            renderAttrs: () => ({ 'aria-hidden': 'true' }),
          }),
        })

        md.use(LinkAttributes as unknown as MarkdownItPlugin, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })

        md.use(TOC as unknown as MarkdownItPlugin, {
          includeLevel: [1, 2, 3, 4],
          slugify,
          containerHeaderHtml: '<div class="table-of-contents-anchor"><div class="i-ri-menu-2-fill" /></div>',
        })

        // 提示块：:::warning … :::
        md.use(container as unknown as MarkdownItPlugin, 'warning', {
          render(tokens, idx) {
            return tokens[idx].nesting === 1
              ? '<div class="custom-block warning">\n'
              : '</div>\n'
          },
        })

        // 公式：$inline$ 与 $$block$$
        md.use(katex as unknown as MarkdownItPlugin, { throwOnError: false })

        // 图：```mermaid → <MermaidDiagram />
        md.use(mermaidPlugin)

        md.use(bookmarksPlugin)
      },
    }),
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
      ],
      dts: false,
    }),
    Components({
      dirs: ['src/components'],
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: false,
    }),
  ],
})
