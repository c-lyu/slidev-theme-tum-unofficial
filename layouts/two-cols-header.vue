<script setup lang="ts">
defineProps({
  leftClass: {
    type: String,
  },
  rightClass: {
    type: String,
  },
  bottomClass: {
    type: String,
  },
  layoutClass: {
    type: String,
  },
})
</script>

<template>
  <TumLogo />
  <div class="slidev-layout two-cols-header w-full h-full" :class="layoutClass">
    <div class="col-header">
      <slot />
    </div>
    <div class="col-left" :class="leftClass">
      <slot name="left" />
    </div>
    <div class="col-right" :class="rightClass">
      <slot name="right" />
    </div>
    <div class="col-bottom" :class="bottomClass">
      <slot name="bottom" />
    </div>
  </div>
  <Footer v-if="$slidev.configs.footer ?? true" />
</template>
