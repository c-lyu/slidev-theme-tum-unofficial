<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
    default: 'Card Title',
  },
  color: {
    type: String,
    default: 'tumblue',
  },
})

interface ColorPresets {
  [key: string]: string;
}

const colorPresets: ColorPresets = {
  tumblue: 'text-tumblue-700',
  red: 'text-red-700',
  green: 'text-green-700',
  sky: 'text-sky-700',
  blue: 'text-blue-700',
  yellow: 'text-yellow-700',
  purple: 'text-purple-700',
  pink: 'text-pink-700',
  orange: 'text-orange-700',
};

const titleColor = computed(() => {
  return colorPresets[props.color];
});
</script>

<template>
  <div class="card-container">
    <div class="card-container-inner">
      <h2 :class="titleColor">{{ props.title }}</h2>
    </div>
    <div class="card-content">
      <slot />
    </div>
  </div>
</template>