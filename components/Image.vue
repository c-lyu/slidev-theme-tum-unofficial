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
  },
  caption: {
    type: String,
  }
})
</script>

<template>
  <figure :class="figureClass">
    <img :src="src" :alt="alt" :class="class" />
    <figcaption v-html="caption || alt"></figcaption>
  </figure>
</template>
