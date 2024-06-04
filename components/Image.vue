<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
  },
  figureClass: {
    type: String,
  },
  class: {
    type: String,
  }
})
</script>

<template>
  <figure :class="figureClass">
    <img :src="src" :alt="alt" :class="class" />
    <figcaption v-if="alt">{{ alt }}</figcaption>
  </figure>
</template>
