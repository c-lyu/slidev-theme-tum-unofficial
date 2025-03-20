<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'
import flagPhoto from './assets/tum-flag.jpg'

const style = computed(() => handleBackground(flagPhoto, true))
</script>

<template>
  <div class="slidev-layout cover" :style="style">
    <div class="main-content w-full flex flex-col justify-center items-justify">
      <div>
        <AuthorInfo class="opacity-65" />
        <slot />
      </div>
    </div>
  </div>
</template>
