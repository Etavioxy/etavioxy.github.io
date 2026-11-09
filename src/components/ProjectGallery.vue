<script setup lang="ts">
import ListProjects from '../components/ListProjects.vue'
import { projects } from '../data/projects'
</script>

<template>
  <ListProjects :projects="projects" />
</template>
