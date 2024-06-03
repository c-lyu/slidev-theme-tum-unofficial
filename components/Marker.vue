<script setup lang="ts">
const props = defineProps({
  text: {
    type: String
  },
})
</script>

<template>
  <span class="px-2 py-1 border-rounded-lg bg-sky-100 text-sky-700 font-600">
    {{ props.text || '' }}<slot/>
  </span>
</template>
