<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'
import flagPhoto from './assets/tum-flag.jpg'

const style = computed(() => handleBackground(flagPhoto, true))
</script>

<template>
  <div class="slidev-layout cover" :style="style">
    <div class="my-auto w-full">
      <div class="text-event text-white opacity-65">{{ $slidev.configs.event }}</div>
      <h1 class="opacity-75">{{ $slidev.configs.title }}</h1>
      <AuthorInfo class="opacity-65" />
      <slot />
    </div>
  </div>
</template>
