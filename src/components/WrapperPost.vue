<!--
  WrapperPost — 移植自 antfu/antfu.me · src/components/WrapperPost.vue（MIT, Copyright (c) Anthony Fu）
  文章的页面骨架：frontmatter 的标题与日期、正文容器，以及底部的「cd ..」。
  装饰背景（frontmatter.art 的 plum/dots）与跨站分享链接站内不做，已删。
-->
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { formatDate } from '../logics'

const { frontmatter } = defineProps<{
  frontmatter: Record<string, any>
}>()

// frontmatter.repositories：文章对应的仓库，渲染在日期后面；只认 http(s) 链接，列表页不显示
const repositories = computed(() => {
  const value = frontmatter.repositories
  const list = Array.isArray(value) ? value : [value]
  return list.filter((url): url is string => typeof url === 'string' && /^https?:\/\//.test(url))
})

function repositoryLabel(url: string) {
  const { hostname, pathname } = new URL(url)
  const path = pathname.replace(/^\/|\/$/g, '')
  return hostname === 'github.com' && path ? path : `${hostname}/${path}`.replace(/\/$/, '')
}

const router = useRouter()
const route = useRoute()
const content = ref<HTMLDivElement>()

onMounted(() => {
  const navigate = () => {
    if (location.hash) {
      const el = document.querySelector(decodeURIComponent(location.hash))
      if (el) {
        const rect = el.getBoundingClientRect()
        const y = window.scrollY + rect.top - 40
        window.scrollTo({
          top: y,
          behavior: 'smooth',
        })
        return true
      }
    }
  }

  const handleAnchors = (
    event: MouseEvent & { target: HTMLElement },
  ) => {
    const link = event.target.closest('a')

    if (
      !event.defaultPrevented
      && link
      && event.button === 0
      && link.target !== '_blank'
      && link.rel !== 'external'
      && !link.download
      && !event.metaKey
      && !event.ctrlKey
      && !event.shiftKey
      && !event.altKey
    ) {
      const url = new URL(link.href)
      if (url.origin !== window.location.origin)
        return

      event.preventDefault()
      const { pathname, hash } = url
      if (hash && (!pathname || pathname === location.pathname)) {
        window.history.replaceState({}, '', hash)
        navigate()
      }
      else {
        router.push({ path: pathname, hash })
      }
    }
  }

  useEventListener(window, 'hashchange', navigate)
  useEventListener(content.value!, 'click', handleAnchors, { passive: false })

  setTimeout(() => {
    if (!navigate())
      setTimeout(navigate, 1000)
  }, 1)
})
</script>

<template>
  <div
    v-if="frontmatter.display ?? frontmatter.title"
    class="prose m-auto mb-8"
    :lang="frontmatter.lang"
    :class="[frontmatter.wrapperClass]"
  >
    <BlogLanguagePreferenceControls v-if="route.path === '/posts'" />
    <h1 class="mb-0 slide-enter-50">
      {{ frontmatter.display ?? frontmatter.title }}
    </h1>
    <p
      v-if="frontmatter.date || repositories.length"
      class="opacity-50 !-mt-6 slide-enter-50"
    >
      <template v-if="frontmatter.date">
        {{ formatDate(frontmatter.date, false) }}<span v-if="frontmatter.duration"> · {{ frontmatter.duration }}</span>
      </template>
      <template v-for="repo in repositories" :key="repo">
        · <a :href="repo" target="_blank" rel="noopener" class="hover:op100"><span class="mr-1 inline-block align-middle text-sm" i-uil-github-alt aria-hidden="true" />{{ repositoryLabel(repo) }}</a>
      </template>
    </p>
    <p
      v-if="frontmatter.subtitle"
      class="opacity-50 !-mt-6 italic slide-enter"
    >
      {{ frontmatter.subtitle }}
    </p>
  </div>
  <article
    ref="content"
    :lang="frontmatter.lang"
    :class="[frontmatter.tocAlwaysOn ? 'toc-always-on' : '', frontmatter.class]"
  >
    <slot />
  </article>
  <div v-if="route.path !== '/'" class="prose m-auto mt-8 mb-8 slide-enter animate-delay-500 print:hidden">
    <span font-mono op50>> </span>
    <RouterLink
      :to="route.path.split('/').slice(0, -1).join('/') || '/'"
      class="font-mono op50 hover:op75"
      v-text="'cd ..'"
    />
  </div>
</template>
