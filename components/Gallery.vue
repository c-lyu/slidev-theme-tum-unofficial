<script setup>
import { computed, useSlots } from 'vue';

const slots = useSlots();

const wrappedChildren = computed(() => {
  return slots.default ? slots.default().filter(node => node.type !== Comment && node.children !== ' ') : [];
});
</script>

<template>
  <div class="flex flex-row gap-4 w-full">
    <template v-for="(child, index) in wrappedChildren" :key="index">
      <div class="flex items-end w-full">
        <component :is="child"></component>
      </div>
    </template>
  </div>
</template>
