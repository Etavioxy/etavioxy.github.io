<script setup lang="ts">
import LanguageList from '../components/LanguageList.vue'
import StatsList from '../components/StatsList.vue'
import { siteStats } from '../data/siteStats'

const email = 'Etavioxy@foxmail.com'

// 构建时数字（从本仓内容数出来，见 src/data/siteStats.ts）；与 StatsList 的实时 GitHub 数字并列。
// 值为 0 的不显示 —— 空栏目不用 0 占位。
const extraStats = [
  { label: '项目', value: siteStats.projects, icon: 'i-carbon-cube' },
  { label: '书签', value: siteStats.bookmarks, icon: 'i-carbon-bookmark' },
  { label: '文章', value: siteStats.posts, icon: 'i-carbon-document' },
].filter(stat => stat.value !== 0)

// 项目 magic-link（antfu.me 新版首页样式：段落内嵌胶囊链接）
// Works: 只放代表项目；ambery 用自己的 Tauri 应用图标（透明背景 PNG）
const projectLinks = [
  {
    name: 'ambery',
    link: 'https://github.com/ambery-ai/ambery',
    image: 'https://raw.githubusercontent.com/ambery-ai/ambery/master/app/src-tauri/icons/128x128.png',
  },
  {
    name: 'friction-skills',
    link: 'https://github.com/Etavioxy/friction-skills',
    icon: 'i-carbon-chart-relationship',
  },
  {
    name: 'structual-solver',
    link: 'https://github.com/Etavioxy/structual-solver',
    icon: 'i-carbon-diagram',
  },
  {
    name: 'fast_reader',
    link: 'https://github.com/Etavioxy/fast_reader',
    icon: 'i-carbon-data-base',
  },
  {
    name: 'proc-mw',
    link: 'https://github.com/Etavioxy/proc-mw',
    icon: 'i-carbon-code',
  },
]
</script>

<template>
  <div class="prose m-auto">
    <p>
      Hi, I'm Etavioxy 👋 Building the good games and real-time engines, tinkering with playground projects. Mostly Rust and TypeScript.
    </p>

    <p>
      Reach me at
      <a
        class="font-mono text-sm opacity-70 hover:opacity-100"
        :href="`mailto:${email}`"
      >{{ email }}</a>
    </p>

    <!-- 项目栏（antfu 新版首页样式：段落内嵌 magic-link 项目链接） -->
    <p class="leading-loose">
      Works:
      <a
        v-for="p in projectLinks" :key="p.name"
        class="magic-link"
        :href="p.link"
        target="_blank"
        rel="noopener"
      >
        <span
          v-if="p.image"
          class="magic-link-image"
          :style="{ backgroundImage: `url(${p.image})` }"
        />
        <span v-else-if="p.icon" class="magic-link-image" :class="p.icon" />
        {{ p.name }}
      </a>
    </p>

    <!-- 统计胶囊：实时 GitHub 数字 + 构建时内容数字 -->
    <div class="mt-8">
      <StatsList :extra="extraStats" />
    </div>

    <!-- GitHub Activity -->
    <div class="mt-10">
      <h2 class="text-sm opacity-40 mb-3">GitHub Activity</h2>
      <img
        src="https://gitlyy.vercel.app/api/contribution?username=Etavioxy&hide_border=true"
        alt="GitHub contribution graph"
        loading="lazy"
      >
    </div>

    <!-- 语言分布 -->
    <div class="mt-10">
      <h2 class="text-sm opacity-40 mb-3">语言分布</h2>
      <LanguageList />
    </div>
  </div>
</template>

<style scoped>
/* antfu.me 新版首页 magic-link 样式（从 antfu.me 线上 CSS 提取） */
.magic-link {
  background: #8882;
  border-radius: .25rem;
  align-items: center;
  gap: .25rem;
  padding: .25rem .375rem;
  font-family: 'Roboto Condensed', sans-serif;
  line-height: 100%;
  display: inline-flex;
  transform: translateY(3px);
  color: currentColor;
  transition: background-color .15s ease, color .15s ease;
  margin: 0 .125rem;
}

.magic-link:hover {
  background: #8883;
}

.magic-link-image {
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 2px;
  width: 1.1em;
  height: 1.1em;
  display: inline-block;
  flex-shrink: 0;
}
</style>
