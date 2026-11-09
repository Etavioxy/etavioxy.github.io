<!--
  ListPosts — 移植自 antfu/antfu.me · src/components/ListPosts.vue（MIT, Copyright (c) Anthony Fu）
  文章列表从路由表读：frontmatter 由 vite.config.ts 的 extendRoute 写进 route.meta，
  按日期倒序，同一年的条目上方压一层淡描边年份。
  演讲/播客类字段（place、recording、platform 等）站内不用，已删。
-->
<script setup lang="ts">
import type { Post } from '../types'
import { useRouter } from 'vue-router'
import {
  formatDate,
  preferredBlogLanguage,
  showOnlyPreferredBlogLanguagePosts,
} from '../logics'

const props = defineProps<{
  type?: string
  posts?: Post[]
  extra?: Post[]
}>()

const router = useRouter()

const routes: Post[] = router.getRoutes()
  .filter((i) => {
    const frontmatter = (i.meta as { frontmatter?: Record<string, any> }).frontmatter
    return i.path.startsWith('/posts') && frontmatter?.date && !frontmatter?.draft
  })
  .filter((i) => {
    const frontmatter = (i.meta as { frontmatter?: Record<string, any> }).frontmatter!
    return !i.path.endsWith('.html') && (frontmatter.type || 'blog').split('+').includes(props.type!)
  })
  .map((i) => {
    const frontmatter = (i.meta as { frontmatter: Record<string, any> }).frontmatter
    return {
      path: frontmatter.redirect || i.path,
      title: frontmatter.title,
      date: frontmatter.date,
      lang: frontmatter.lang,
      duration: frontmatter.duration,
      redirect: frontmatter.redirect,
    }
  })

const posts = computed(() => {
  const allPosts = [...(props.posts || routes), ...props.extra || []]
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))

  if (!showOnlyPreferredBlogLanguagePosts.value)
    return allPosts

  return allPosts.filter(post => !post.lang || post.lang === preferredBlogLanguage.value)
})

function languageLabel(lang?: string) {
  if (lang === 'zh')
    return '中文'
  if (lang === 'en')
    return 'English'
  return lang
}

const getYear = (a: Date | string | number) => new Date(a).getFullYear()
const isFuture = (a?: Date | string | number) => a && new Date(a) > new Date()
const isSameYear = (a?: Date | string | number, b?: Date | string | number) => a && b && getYear(a) === getYear(b)
function isSameGroup(a: Post, b?: Post) {
  return (isFuture(a.date) === isFuture(b?.date)) && isSameYear(a.date, b?.date)
}

function getGroupName(p: Post) {
  if (isFuture(p.date))
    return 'Upcoming'
  return getYear(p.date)
}
</script>

<template>
  <ul>
    <template v-if="!posts.length">
      <div py2 op50>
        { nothing here yet }
      </div>
    </template>

    <template v-for="route, idx in posts" :key="route.path">
      <div
        v-if="!isSameGroup(route, posts[idx - 1])"
        select-none relative h20 pointer-events-none slide-enter
        :style="{
          '--enter-stage': idx - 2,
          '--enter-step': '60ms',
        }"
      >
        <span text-8em color-transparent absolute left--3rem top--2rem font-bold text-stroke-2 text-stroke-hex-aaa op10>{{ getGroupName(route) }}</span>
      </div>
      <div
        class="slide-enter"
        :style="{
          '--enter-stage': idx,
          '--enter-step': '60ms',
        }"
      >
        <component
          :is="route.path.includes('://') ? 'a' : 'RouterLink'"
          v-bind="
            route.path.includes('://') ? {
              href: route.path,
              target: '_blank',
              rel: 'noopener noreferrer',
            } : {
              to: route.path,
            }
          "
          class="item block font-normal mb-6 mt-2 no-underline"
        >
          <li class="no-underline" flex="~ col md:row gap-2 md:items-center">
            <div class="title relative text-lg leading-1.2em" flex="~ gap-2">
              <span
                v-if="route.lang && route.lang !== preferredBlogLanguage"
                class="absolute left-0 top-1/2 -ml-2 -translate-x-full -translate-y-1/2 whitespace-nowrap text-xs bg-zinc:15 text-zinc5 rounded px-1 py-0.5 hidden md:block"
              >{{ languageLabel(route.lang) }}</span>
              <span align-middle>
                {{ route.title }}
                <span
                  v-if="route.redirect"
                  align-middle op50 flex-none text-xs ml-1.5
                  i-carbon-arrow-up-right
                  title="External"
                />
              </span>
            </div>

            <div flex="~ gap-2 items-center">
              <span text-sm op50 ws-nowrap>
                {{ formatDate(route.date, true) }}
              </span>
              <span v-if="route.duration" text-sm op40 ws-nowrap>· {{ route.duration }}</span>
              <span
                v-if="route.lang && route.lang !== preferredBlogLanguage"
                class="text-xs bg-zinc:15 text-zinc5 rounded px-1 py-0.5 my-auto md:hidden"
              >{{ languageLabel(route.lang) }}</span>
            </div>
          </li>
        </component>
      </div>
    </template>
  </ul>
</template>
