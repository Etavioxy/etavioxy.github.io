<!--
  WrapperBookmarks — 学习页的 md 外壳：领域子导航 + prose 容器。
  由 unplugin-vue-markdown 的 wrapperComponent 按路径挂到 content/bookmarks/*.md 上。
-->
<template>
  <BookmarkNav />
  <div class="prose m-auto bookmarks-prose">
    <slot />
  </div>
</template>
