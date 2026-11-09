<!--
  MermaidDiagram — 把 md 里的 ```mermaid 代码块画成图。
  mermaid 只在浏览器里跑（依赖 DOM），所以 SSG 产物是空的 div，进页面后再画；
  换主题时按当前明暗重画。
-->
<script setup lang="ts">
import { isDark } from '../logics'

const props = defineProps<{ code: string }>()
const container = ref<HTMLDivElement>()

let seq = 0

async function render() {
  if (import.meta.env.SSR || !props.code || !container.value)
    return

  const mermaid = (await import('mermaid')).default
  mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'loose',
    theme: isDark.value ? 'dark' : 'default',
  })

  const { svg } = await mermaid.render(`mermaid-${++seq}`, props.code)
  container.value.innerHTML = svg
}

onMounted(render)
watch(isDark, render)
</script>

<template>
  <div ref="container" class="mermaid-diagram" />
</template>
