import { ViteSSG } from 'vite-ssg'
import { routes } from 'vue-router/auto-routes'
import '@unocss/reset/tailwind.css'
import 'katex/dist/katex.min.css'

import './styles/main.css'
import './styles/prose.css'
import './styles/markdown.css'
import './styles/list-posts.css'
import 'uno.css'

import App from './App.vue'
import { domains } from './data/domains'

// 学习页根路径是有效页面：渲染第一个领域的内容，URL 保持 /bookmarks
const defaultDomain = domains[0].key
// @ts-expect-error .md 由 unplugin-vue-markdown 编译成 SFC
import BookmarksDefault from '../content/bookmarks/agent.md'

routes.push({ path: '/bookmarks', component: BookmarksDefault })

export const createApp = ViteSSG(
  App,
  { routes },
  () => {},
)
