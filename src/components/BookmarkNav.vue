<!--
  BookmarkNav — 学习页的领域子导航（antfu SubNav 结构：大号链接，选中下划线）。
  永不折行：flex-nowrap + whitespace-nowrap；链接间距固定，空间不足只缩字号。
-->
<script setup lang="ts">
import { useRoute } from 'vue-router'
import { domains } from '../data/domains'

const route = useRoute()

// /bookmarks 渲染的是第一个领域的内容，也算它选中
function isActive(key: string) {
  return route.path === `/bookmarks/${key}`
    || (route.path === '/bookmarks' && key === domains[0].key)
}
</script>

<template>
  <div class="prose m-auto mb-8 select-none max-w-[78ch]">
    <div
      class="mb-0 flex flex-nowrap items-baseline gap-[0.5rem] text-[clamp(0.625rem,2.5vw,1.5rem)] sm:gap-3"
      style="margin-left: calc((min(100%, 786px) - min(100%, 655px)) / 2); margin-right: calc((min(100%, 786px) - min(100%, 655px)) / 2); min-width: min(655px, 100%)"
    >
      <RouterLink
        v-for="d in domains"
        :key="d.key"
        :to="`/bookmarks/${d.key}`"
        class="!border-none whitespace-nowrap flex-none"
        :class="isActive(d.key) ? 'opacity-100 underline' : 'opacity-20 hover:opacity-50'"
      >
        {{ d.nav }}
      </RouterLink>
    </div>
  </div>
</template>
