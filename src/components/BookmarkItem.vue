<!--
  BookmarkItem — 学习页条目，DOM 与迁移前的 transformItems 输出一致：
  <a class="item ..."><li class="lp-li"><span class="title lp-row">badge + 标题 + meta</span></li><div class="lp-extra">tags + 摘要</div></a>
  结构不改，才能保证观感与迁移前一致。
-->
<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  url: string
  year?: string
  type?: string
  tags?: string[]
  desc?: string
}>(), { tags: () => [] })
</script>

<template>
  <a
    class="item lp-item block font-normal mb-6 mt-2 no-underline"
    :href="url"
    target="_blank"
    rel="noopener"
  >
    <li class="no-underline lp-li">
      <span class="title lp-row">
        <span
          v-if="type"
          class="type"
          :style="{ marginLeft: `-${(type.length * 0.75 + 1.5).toFixed(2)}rem` }"
        >{{ type }}</span>
        <span class="lp-title">{{ title }}</span>
        <span class="lp-meta"><span v-if="year" class="lp-date">{{ year }}</span></span>
      </span>
    </li>
    <div v-if="tags.length || desc" class="lp-extra">
      <span v-for="tag in tags" :key="tag" class="lp-tag">{{ tag }}</span>
      <span v-if="desc" class="lp-desc">{{ desc }}</span>
    </div>
  </a>
</template>

<style scoped>
/* 类型 badge：仿 antfu「中文」badge；负 margin 按字符数对齐右缘（2字 -3rem / 3字 -3.75rem / 4字 -4.5rem） */
.type {
  display: inline-block;
  font-size: 0.75rem;
  background: rgba(113, 113, 122, 0.15);
  color: rgb(113, 113, 122);
  border-radius: 4px;
  padding: 0.125rem 0.25rem;
  margin-right: 0.5rem;
  vertical-align: middle;
  white-space: nowrap;
}
</style>
