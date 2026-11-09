<script setup lang="ts">
// ToggleTheme — adapted from antfu/antfu.me (MIT, Copyright (c) 2020-2021 Anthony Fu)
import { toggleDark } from '../logics'
</script>

<template>
  <a class="select-none" title="Toggle Color Scheme" @click="toggleDark">
    <div i-ri-sun-line dark:i-ri-moon-line />
  </a>
</template>
