<script setup lang="ts">
defineProps({
  title: String,
})
</script>

<template>
  <section mt="16" mb="12">
    <h2 class="mt-8 mb-6 font-size-5 font-600">
      {{ title }}
    </h2>
    <slot />
  </section>
</template>
