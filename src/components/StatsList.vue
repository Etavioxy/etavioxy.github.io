<!--
  StatsList — 自绘 GitHub 统计（antfu 式内联胶囊，无边框）。
  前三个数字每次打开页面实时请求 GitHub API（api.github.com 支持 CORS），
  数据新鲜度 = 本次访问时刻，非构建快照。
  extra 传入的是构建时快照数字（由 src/data/siteStats.ts 数出来），两者不同类，不要合并。
-->
<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface StaticStat {
  label: string
  value: number | string
  icon: string
}

defineProps<{ extra?: StaticStat[] }>()

const stats = ref<{ repos: number, stars: number, followers: number } | null>(null)

onMounted(async () => {
  try {
    // 未认证 GitHub API 限流 60 req/h/IP；此处仅 2 个请求，个人站流量足够。
    const [user, repos] = await Promise.all([
      fetch('https://api.github.com/users/Etavioxy').then(r => r.json()),
      fetch('https://api.github.com/users/Etavioxy/repos?per_page=100&visibility=public')
        .then(r => r.json()),
    ])
    const nonFork = repos.filter((r: any) => !r.fork)
    stats.value = {
      repos: user.public_repos,
      stars: nonFork.reduce((a: number, r: any) => a + r.stargazers_count, 0),
      followers: user.followers,
    }
  }
  catch {
    // 请求失败（离线/限流）时保持空，不显示假数据
  }
})

const items = [
  { label: '公开仓库', key: 'repos', icon: 'i-simple-icons-github' },
  { label: 'Stars', key: 'stars', icon: 'i-carbon-star' },
  { label: '关注者', key: 'followers', icon: 'i-carbon-user-multiple' },
]
</script>

<template>
  <div class="flex flex-wrap justify-start gap-x-2 gap-y-2">
    <span
      v-for="it in items"
      :key="it.key"
      class="pill inline-flex items-center gap-1.5"
    >
      <span class="opacity-70" :class="it.icon" />
      <span class="font-medium">{{ stats?.[it.key as keyof typeof stats] ?? '–' }}</span>
      <span class="opacity-60">{{ it.label }}</span>
    </span>
    <span
      v-for="it in extra"
      :key="it.label"
      class="pill inline-flex items-center gap-1.5"
    >
      <span class="opacity-70" :class="it.icon" />
      <span class="font-medium">{{ it.value }}</span>
      <span class="opacity-60">{{ it.label }}</span>
    </span>
  </div>
</template>

<style scoped>
.pill {
  background: rgba(136, 136, 136, 0.133);
  padding: 4px 6px;
  border-radius: 4px;
  color: #888;
  font-size: 16px;
  line-height: 16px;
}
</style>
