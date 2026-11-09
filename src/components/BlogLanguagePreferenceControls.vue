<script setup lang="ts">
import {
  preferredBlogLanguage,
  showOnlyPreferredBlogLanguagePosts,
} from '../logics'
</script>

<template>
  <div class="mb-2 flex flex-wrap items-center gap-3">
    <div role="radiogroup" aria-label="Preferred blog language" class="flex items-center gap-2">
      <button
        type="button"
        role="radio"
        :aria-checked="preferredBlogLanguage === 'en'"
        class="flex items-center gap-1 text-sm op30"
        @click="preferredBlogLanguage = 'en'"
      >
        <span :class="preferredBlogLanguage === 'en' ? 'i-carbon-radio-button-checked' : 'i-carbon-radio-button'" aria-hidden="true" />
        English
      </button>
      <button
        type="button"
        role="radio"
        :aria-checked="preferredBlogLanguage === 'zh'"
        class="flex items-center gap-1 text-sm op30"
        @click="preferredBlogLanguage = 'zh'"
      >
        <span :class="preferredBlogLanguage === 'zh' ? 'i-carbon-radio-button-checked' : 'i-carbon-radio-button'" aria-hidden="true" />
        中文
      </button>
    </div>
    <button
      type="button"
      role="checkbox"
      :aria-checked="showOnlyPreferredBlogLanguagePosts"
      class="flex items-center gap-1 text-sm op30"
      @click="showOnlyPreferredBlogLanguagePosts = !showOnlyPreferredBlogLanguagePosts"
    >
      <span :class="showOnlyPreferredBlogLanguagePosts ? 'i-carbon-checkbox-checked' : 'i-carbon-checkbox'" aria-hidden="true" />
      {{ preferredBlogLanguage === 'en' ? 'Show English only' : '仅显示中文' }}
    </button>
  </div>
</template>
