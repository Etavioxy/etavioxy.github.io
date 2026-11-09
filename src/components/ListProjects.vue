<!--
  ListProjects — verbatim port of antfu/antfu.me · src/components/ListProjects.vue
  MIT License, Copyright (c) 2020-2021 Anthony Fu · https://github.com/antfu/antfu.me
  Changes: intro copy/buttons/footer link removed (no invented content);
  SponsorButtons removed (needs sponsor data we don't have). Code otherwise unchanged.
-->
<script setup lang="ts">
defineProps<{ projects: Record<string, any[]> }>()

function slug(name: string) {
  return name.toLowerCase().replace(/[\s\\/]+/g, '-')
}
</script>

<template>
  <div class="max-w-300 mx-auto">
    <p text-center mt--6 mb5 op50 text-lg italic>
      Projects that I created or maintaining.
    </p>
    <div class="prose pb5 mx-auto mt10 text-center">
      <div flex="~ gap-2 justify-center">
        <a
          href="https://github.com/Etavioxy"
          target="_blank"
          class="group btn-blue inline-block"
        >
          GitHub
        </a>
      </div>
      <hr>
    </div>
    <div
      v-for="key, cidx in Object.keys(projects)" :key="key" slide-enter
      :style="{ '--enter-stage': cidx + 1 }"
    >
      <div
        :id="slug(key)"
        select-none relative h18 mt5 pointer-events-none slide-enter
        :style="{
          '--enter-stage': cidx - 2,
          '--enter-step': '60ms',
        }"
      >
        <span text-5em color-transparent absolute left--1rem top-0rem font-bold leading-1em text-stroke-1.5 text-stroke-hex-aaa op35 dark:op20>{{ key }}</span>
      </div>
      <div
        class="project-grid py-2 max-w-500 w-max mx-auto"
        grid="~ cols-1 md:cols-2 gap-4 lg:cols-3"
      >
        <a
          v-for="item, idx in projects[key]"
          :key="idx"
          class="item relative flex items-center"
          :href="item.link"
          target="_blank"
          :title="item.name"
        >
          <div v-if="item.icon" class="pt-2 pr-5">
            <Slidev v-if="item.icon === 'slidev'" class="text-4xl opacity-50" />
            <VueUse v-else-if="item.icon === 'vueuse'" class="text-4xl opacity-50" />
            <VueReactivity v-else-if="item.icon === 'vue-reactivity'" class="text-4xl opacity-50" />
            <VueDemi v-else-if="item.icon === 'vue-demi'" class="text-4xl opacity-50" />
            <Unocss v-else-if="item.icon === 'unocss'" class="text-4xl opacity-50" />
            <Vitest v-else-if="item.icon === 'vitest'" class="text-4xl opacity-50" />
            <Elk v-else-if="item.icon === 'elk'" class="text-4xl opacity-50" />
            <AnthonyFu v-else-if="item.icon === 'af'" class="text-4xl opacity-50" />
            <div v-else class="text-3xl opacity-50" :class="item.icon || 'i-carbon-unknown'" />
          </div>
          <div class="flex-auto">
            <div class="text-normal">{{ item.name }}</div>
            <div class="desc text-sm opacity-50 font-normal" v-html="item.desc" />
            <div v-if="item.links?.length" class="mt-1.5 flex gap-1.5 flex-wrap">
              <a
                v-for="l in item.links" :key="l.label"
                :href="l.href" target="_blank" rel="noopener"
                class="tag-pill"
              >{{ l.label }}</a>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
  <div>
    <div class="table-of-contents">
      <div class="table-of-contents-anchor">
        <div class="i-ri-menu-2-fill" />
      </div>
      <ul>
        <li v-for="key of Object.keys(projects)" :key="key">
          <a :href="`#${slug(key)}`">{{ key }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.project-grid a.item {
  background: transparent;
  font-size: 1.1rem;
  width: 350px;
  max-width: 100%;
  padding: 0.5rem 0.875rem 0.875rem;
  border-radius: 6px;
}

.project-grid a.item:hover {
  background: #88888811;
}

.tag-pill {
  display: inline-block;
  padding: 0.1rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.7rem;
  line-height: 1.2;
  opacity: 0.55;
  border: 1px solid #88888844;
  transition: opacity 0.2s ease;
}

.tag-pill:hover {
  opacity: 1;
}
</style>
