<template>
  <div class="empty-state">
    <p>{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ text: string }>()
</script>
