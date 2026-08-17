<template>
  <header class="topbar">
    <button v-if="back" class="icon-button" type="button" @click="$router.back()">
      <ChevronLeft :size="22" />
    </button>
    <span v-else class="topbar-spacer" aria-hidden="true"></span>
    <div class="topbar-title">
      <strong>{{ title }}</strong>
      <span v-if="subtitle">{{ subtitle }}</span>
    </div>
    <slot name="right" />
  </header>
</template>

<script setup lang="ts">
import { ChevronLeft } from 'lucide-vue-next'

defineProps<{
  title: string
  subtitle?: string
  back?: boolean
}>()
</script>
