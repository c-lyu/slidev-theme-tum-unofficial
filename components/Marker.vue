<script setup lang="ts">
import { computed } from 'vue'
import { validColors } from '../utils/colors';

const props = defineProps({
  color: {
    type: String,
    default: "tumblue"
  },
})

const getColorClass = (colorName: string, type: string, intensity: string) => {
  // Use default color if provided color is not valid
  const color = validColors.includes(colorName) ? colorName : 'tumblue';
  return `${type}-${color}-${intensity}`;
};

const bgPreset = computed(() => {
  return getColorClass(props.color, 'bg', '50');
});

const textPreset = computed(() => {
  return getColorClass(props.color, 'text', '700');
});
</script>

<template>
  <span :class="[bgPreset, textPreset, 'marker-base']">
    <slot />
  </span>
</template>
