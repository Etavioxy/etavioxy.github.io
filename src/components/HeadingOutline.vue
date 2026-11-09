<!--
  HeadingOutline — 学习页的巨型描边标题。
  迁移前是 SVG 逐字符描边：font-size 128、viewBox 高 224，宽度先按 len*72+40 估算，
  挂载后用 getComputedTextLength 写回实际宽度 —— 于是字形被放大约 2.7 倍再描边。
  这里用文字描边复现同一视觉比例：150px 字号 ≈ 128 × 2.7 后按 cap-height 折算，
  描边 3px / 细字形 8px 与放大后的 SVG 用户单位描边等宽。细字形只含 I 与 /。
-->
<script setup lang="ts">
defineProps<{ text: string }>()

const THIN_CHARS = new Set(['I', '/'])
</script>

<template>
  <div class="heading" aria-hidden="true">
    <span class="heading-text">
      <span
        v-for="(ch, i) in [...text]"
        :key="i"
        :class="THIN_CHARS.has(ch) ? 'thin' : 'normal'"
      >{{ ch }}</span>
    </span>
  </div>
</template>

<style scoped>
.heading {
  position: relative;
  height: 5rem;
  margin-top: 1.25rem;
  pointer-events: none;
  user-select: none;
}

.heading-text {
  position: absolute;
  left: -3rem;
  top: 2rem;
  font-family: Inter, sans-serif;
  font-size: 96px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.02em;
  white-space: nowrap;
  color: transparent;
  -webkit-text-stroke: 2px #aaa;
  opacity: 0.1;
}

.thin {
  -webkit-text-stroke-width: 5px;
}
</style>
