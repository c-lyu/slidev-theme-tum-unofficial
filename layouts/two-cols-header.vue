<script setup lang="ts">
const props = defineProps({
  class: {
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
    <div class="col-left" :class="class">
      <slot name="left" />
    </div>
    <div class="col-right" :class="class">
      <slot name="right" />
    </div>
    <div class="col-bottom" :class="class">
      <slot name="bottom" />
    </div>
  </div>
  <Footer v-if="$slidev.configs.footer ?? true" />
</template>

<style scoped>
.two-cols-header {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 4em 1fr 1fr;
}

.col-header {
  grid-area: 1 / 1 / 2 / 3;
}
.col-left {
  grid-area: 2 / 1 / 2 / 2;
}
.col-right {
  grid-area: 2 / 2 / 2 / 2;
}
.col-bottom {
  align-self: end;
  grid-area: 3 / 1 / 3 / 3;
}
</style>