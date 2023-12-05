<script setup lang="ts">
defineProps({
  title: String,
  content: String
})
</script>

<template>
  <section>
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
  </section>
</template>
