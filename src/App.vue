<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <NavBar />
  <main class="px-7 py-10 of-x-hidden">
    <RouterView />
    <Footer />
  </main>
</template>
