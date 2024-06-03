<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'

const props = defineProps({
  footer: {
    default: false,
  },
})

// const style = computed(() => handleBackground(props.background, true))
</script>

<style scoped>

.section-back {
  background-color: #005cb1;
}
</style>

<template>
  <div class="slidev-layout w-full h-full grid section-back">
    <div class="my-auto text-white">
      <slot />
    </div>
  </div>
</template>
